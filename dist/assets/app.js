(() => {
  "use strict";

  const data = window.VOLTMIZE_BROWSE_DATA;
  if (!data) throw new Error("Browsing dataset was not loaded.");
  const { FlatModel, GuidedModel, HypertextModel } = window.BrowsingModels || {};
  if (!FlatModel || !GuidedModel || !HypertextModel) {
    throw new Error("One or more browsing model implementations were not loaded.");
  }

  const byId = new Map(data.documents.map(document => [document.id, document]));
  const categoryById = new Map(data.categories.map(category => [category.id, category]));
  const childrenByParent = new Map();
  data.categories.forEach(category => {
    const key = category.parent_id || "__none__";
    if (!childrenByParent.has(key)) childrenByParent.set(key, []);
    childrenByParent.get(key).push(category);
  });
  childrenByParent.forEach(children => children.sort((a, b) => a.sort_order - b.sort_order));

  const state = {
    view: "guided",
    categoryId: "root",
    query: "",
    type: "all",
    severity: "all",
    currentDocument: null,
    focusDocument: "incident-02-compressed-air-leak-growth",
    history: [],
    historyIndex: -1,
    recent: readRecent(),
    expanded: new Set(data.categories.filter(category => category.kind !== "zone").map(category => category.id)),
  };

  const el = id => document.getElementById(id);
  const ui = {
    tree: el("category-tree"), hero: el("home-hero"), shelf: el("factory-shelf"),
    title: el("collection-title"), description: el("collection-description"),
    kicker: el("view-kicker"), count: el("result-count"), content: el("content-area"),
    breadcrumbs: el("breadcrumbs"), route: el("route-map"), recent: el("recent-list"),
    recentCount: el("recent-count"), search: el("search-input"), type: el("type-filter"),
    severity: el("severity-filter"), dialog: el("document-dialog"), preview: el("document-preview"),
    back: el("history-back"), forward: el("history-forward"), sidebar: el("sidebar"),
    scrim: el("sidebar-scrim"), toast: el("toast"),
  };

  const TYPE_COLORS = {
    "Anomaly incident": "#d4573f",
    "Meter profile": "#2f75a5",
    "Zone summary": "#0f7a68",
    "Factory brief": "#8c6226",
    "Diagnostic playbook": "#6b55a2",
  };
  const TYPE_CODES = {
    "Anomaly incident": "AN", "Meter profile": "MT", "Zone summary": "ZN",
    "Factory brief": "FY", "Diagnostic playbook": "PB",
  };

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, character => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
    })[character]);
  }

  function readRecent() {
    try { return JSON.parse(localStorage.getItem("voltmize-atlas-recent") || "[]").filter(id => byId.has(id)).slice(0, 6); }
    catch { return []; }
  }

  function saveRecent() {
    localStorage.setItem("voltmize-atlas-recent", JSON.stringify(state.recent));
  }

  function descendants(categoryId) {
    return GuidedModel.descendants(categoryId, childrenByParent);
  }

  function categoryPath(categoryId) {
    return GuidedModel.categoryPath(categoryId, categoryById);
  }

  function categoryDocumentCount(categoryId) {
    const scope = descendants(categoryId);
    return data.documents.filter(document => scope.has(document.category_id)).length;
  }

  function documentLocation(document) {
    return categoryById.get(document.category_id)?.name || "Knowledge collection";
  }

  function renderTree() {
    function branch(category, depth = 0) {
      const children = childrenByParent.get(category.id) || [];
      const open = state.expanded.has(category.id);
      return `
        <div class="tree-group ${open ? "is-open" : ""}" data-tree-group="${escapeHtml(category.id)}">
          <div class="tree-row ${open ? "is-open" : ""}" style="padding-left:${depth * 7}px">
            ${children.length ? `<button class="tree-toggle" data-toggle-category="${escapeHtml(category.id)}" aria-label="Toggle ${escapeHtml(category.name)}"><svg viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg></button>` : `<span style="width:24px"></span>`}
            <button class="tree-link ${state.categoryId === category.id ? "is-active" : ""}" data-category="${escapeHtml(category.id)}">
              <span class="tree-icon"></span><span class="tree-label">${escapeHtml(category.name)}</span><span class="tree-count">${categoryDocumentCount(category.id)}</span>
            </button>
          </div>
          ${children.length ? `<div class="tree-children">${children.map(child => branch(child, depth + 1)).join("")}</div>` : ""}
        </div>`;
    }
    ui.tree.innerHTML = branch(categoryById.get("root"));
  }

  function renderFactoryShelf() {
    const factories = childrenByParent.get("root") || [];
    ui.shelf.innerHTML = factories.map((factory, index) => `
      <button class="factory-card" data-category="${escapeHtml(factory.id)}">
        <span class="factory-index">0${index + 1}</span>
        <strong>${escapeHtml(factory.name)}</strong>
        <span>${escapeHtml(factory.description)} · ${categoryDocumentCount(factory.id)} docs</span>
      </button>`).join("");
  }

  function populateTypes() {
    [...new Set(data.documents.map(document => document.document_type))].sort().forEach(type => {
      const option = document.createElement("option");
      option.value = type; option.textContent = type;
      ui.type.append(option);
    });
  }

  function matchesQuery(document, query) {
    if (!query.trim()) return 0;
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const title = document.title.toLowerCase();
    const summary = document.summary.toLowerCase();
    const content = document.content.toLowerCase();
    const tags = document.tags.join(" ").toLowerCase();
    let score = 0;
    for (const term of terms) {
      let termScore = 0;
      if (title.includes(term)) termScore += 6;
      if (tags.includes(term)) termScore += 4;
      if (summary.includes(term)) termScore += 2;
      if (content.includes(term)) termScore += 1;
      if (!termScore) return -1;
      score += termScore;
    }
    return score;
  }

  function filteredDocuments() {
    const commonOptions = {
      documents: data.documents,
      query: state.query,
      type: state.type,
      severity: state.severity,
      scoreDocument: matchesQuery,
    };

    if (state.view === "guided") {
      return GuidedModel.retrieve({
        ...commonOptions,
        categoryId: state.categoryId,
        childrenByParent,
      });
    }

    // Flat mode intentionally ignores categories. Connection mode also uses
    // this list only when the user applies search or filters.
    return FlatModel.retrieve(commonOptions);
  }

  function documentCard(document) {
    const color = TYPE_COLORS[document.document_type] || "#0f665f";
    const severity = document.severity === "info" ? "reference" : document.severity;
    return `<article class="document-card" data-document="${escapeHtml(document.id)}" tabindex="0" style="--type-color:${color}">
      <div class="card-meta"><span class="type-icon">${TYPE_CODES[document.document_type] || "DC"}</span><span>${escapeHtml(document.document_type)}</span><span class="severity-pill ${escapeHtml(document.severity)}">${escapeHtml(severity)}</span></div>
      <h3>${escapeHtml(document.title)}</h3>
      <p>${escapeHtml(document.summary)}</p>
      <div class="card-bottom"><div class="metric"><small>${escapeHtml(document.metric_label || "Updated")}</small><strong>${escapeHtml(document.metric_value || document.published_on)}</strong></div><button class="preview-link" data-document="${escapeHtml(document.id)}">Preview →</button></div>
    </article>`;
  }

  function relatedFor(documentId) {
    return HypertextModel.relatedFor(documentId, data.links, byId);
  }

  function renderConnectionStage() {
    const fallback = data.documents.find(document => document.document_type === "Anomaly incident");
    const graph = HypertextModel.connectionsFor({
      focusDocumentId: byId.has(state.focusDocument) ? state.focusDocument : fallback.id,
      links: data.links,
      documentById: byId,
      limit: 6,
    });
    const focus = graph.focus;
    state.focusDocument = focus.id;
    let connections = graph.connections;
    if (!connections.length) {
      connections = data.documents.filter(document => document.category_id === focus.category_id && document.id !== focus.id).slice(0, 6).map(document => ({ relationship: "same location", explanation: documentLocation(document), document }));
    }
    ui.count.textContent = `${connections.length} linked nodes`;
    ui.content.innerHTML = `<div class="connection-stage">
      <article class="connection-focus" data-document="${escapeHtml(focus.id)}" tabindex="0">
        <span class="overline">${escapeHtml(focus.document_type)}</span><h3>${escapeHtml(focus.title)}</h3><p>${escapeHtml(focus.summary)}</p>
        <button class="preview-link" data-document="${escapeHtml(focus.id)}">Open evidence →</button>
      </article>
      ${connections.map((connection, index) => `<article class="connection-node" data-focus-document="${escapeHtml(connection.document.id)}" style="grid-row:${index % 3 + 1}">
        <small>${escapeHtml(connection.relationship)}</small><strong>${escapeHtml(connection.document.title)}</strong><span>${escapeHtml(connection.explanation)}</span>
      </article>`).join("")}
    </div>`;
  }

  function updateHeading(documents) {
    const category = categoryById.get(state.categoryId);
    const isHome = state.view === "guided" && state.categoryId === "root" && !state.query;
    if (state.query) {
      ui.kicker.textContent = "Search + browse";
      ui.title.textContent = `Results for “${state.query}”`;
      ui.description.textContent = state.view === "guided" && state.categoryId !== "root" ? `Searching inside ${category.name}.` : "Searching across titles, summaries, content and tags.";
    } else if (state.view === "flat") {
      ui.kicker.textContent = "Flat browsing";
      ui.title.textContent = "Complete document index";
      ui.description.textContent = "Scan the collection without following a category path.";
    } else if (state.view === "connections") {
      ui.kicker.textContent = "Hypertext browsing";
      ui.title.textContent = "Follow the evidence network";
      ui.description.textContent = "Select any connected node to continue through a non-linear path.";
    } else if (isHome) {
      ui.kicker.textContent = "Browse collection";
      ui.title.textContent = "Priority evidence";
      ui.description.textContent = "Recent incidents and useful entry points across the collection.";
    } else {
      ui.kicker.textContent = category.kind === "factory" ? "Factory collection" : "Guided category";
      ui.title.textContent = category.name;
      ui.description.textContent = category.description;
    }
    if (state.view !== "connections") ui.count.textContent = `${documents.length} document${documents.length === 1 ? "" : "s"}`;
  }

  function renderDocuments() {
    let documents = filteredDocuments();
    const isHome = state.view === "guided" && state.categoryId === "root" && !state.query && state.type === "all" && state.severity === "all";
    if (isHome) documents = documents.filter(document => document.document_type === "Anomaly incident").slice(0, 6);
    updateHeading(documents);
    ui.hero.hidden = !isHome;
    ui.shelf.classList.toggle("is-visible", isHome);
    if (state.view === "connections" && !state.query && state.type === "all" && state.severity === "all") {
      renderConnectionStage();
      return;
    }
    ui.content.innerHTML = `<div class="document-grid">${documents.length
      ? documents.map(documentCard).join("")
      : `<div class="empty-state"><strong>No matching documents</strong>Try a broader category or clear one of the filters.</div>`}</div>`;
  }

  function renderBreadcrumbs() {
    let path = state.view === "guided" ? categoryPath(state.categoryId) : [categoryById.get("root")];
    const modeLabel = state.view === "flat" ? "Flat index" : state.view === "connections" ? "Connections" : null;
    const parts = path.map(category => `<button class="crumb" data-category="${escapeHtml(category.id)}">${escapeHtml(category.name)}</button>`);
    if (modeLabel) parts.push(`<span class="crumb">${modeLabel}</span>`);
    if (state.currentDocument) parts.push(`<span class="crumb">${escapeHtml(byId.get(state.currentDocument)?.title || "Preview")}</span>`);
    ui.breadcrumbs.innerHTML = parts.map((part, index) => `${index ? `<span class="crumb-separator">/</span>` : ""}${part}`).join("");
  }

  function renderRoute() {
    let steps = state.view === "guided" ? categoryPath(state.categoryId).map(category => ({ label: category.kind, name: category.name })) : [
      { label: "collection", name: "All factories" },
      { label: "mode", name: state.view === "flat" ? "Flat index" : "Connection network" },
    ];
    if (state.currentDocument && byId.has(state.currentDocument)) {
      const document = byId.get(state.currentDocument);
      steps = categoryPath(document.category_id).map(category => ({ label: category.kind, name: category.name }));
      steps.push({ label: document.document_type, name: document.title });
    }
    ui.route.innerHTML = steps.map((step, index) => `<div class="route-step"><span class="route-dot">${index + 1}</span><div><small>${escapeHtml(step.label)}</small><strong>${escapeHtml(step.name)}</strong></div></div>`).join("");
  }

  function renderRecent() {
    ui.recentCount.textContent = state.recent.length;
    ui.recent.innerHTML = state.recent.length ? state.recent.map(id => {
      const document = byId.get(id);
      return `<button class="mini-item" data-document="${escapeHtml(id)}"><span class="mini-symbol">${TYPE_CODES[document.document_type] || "DC"}</span><span><strong>${escapeHtml(document.title)}</strong><small>${escapeHtml(document.document_type)}</small></span></button>`;
    }).join("") : `<p class="mini-empty">Open a document and it will appear here for quick return.</p>`;
  }

  function renderHistoryButtons() {
    ui.back.disabled = state.historyIndex <= 0;
    ui.forward.disabled = state.historyIndex < 0 || state.historyIndex >= state.history.length - 1;
  }

  function renderAll() {
    renderTree();
    renderDocuments();
    renderBreadcrumbs();
    renderRoute();
    renderRecent();
    renderHistoryButtons();
    document.querySelectorAll(".mode-button").forEach(button => button.classList.toggle("is-active", button.dataset.view === state.view));
  }

  function selectCategory(categoryId) {
    if (!categoryById.has(categoryId)) return;
    state.view = "guided";
    state.categoryId = categoryId;
    state.currentDocument = null;
    categoryPath(categoryId).forEach(category => state.expanded.add(category.id));
    closeSidebar();
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectView(view) {
    state.view = view;
    state.currentDocument = null;
    closeSidebar();
    renderAll();
  }

  function openDocument(documentId, addToHistory = true) {
    const document = byId.get(documentId);
    if (!document) return;
    state.currentDocument = documentId;
    state.focusDocument = documentId;
    state.recent = [documentId, ...state.recent.filter(id => id !== documentId)].slice(0, 6);
    saveRecent();
    if (addToHistory) {
      state.history = state.history.slice(0, state.historyIndex + 1);
      if (state.history[state.history.length - 1] !== documentId) state.history.push(documentId);
      state.historyIndex = state.history.length - 1;
    }
    const related = relatedFor(documentId).slice(0, 5);
    ui.preview.innerHTML = `
      <header class="preview-head">
        <div class="preview-actions"><span class="doc-type">Quick document preview · ${escapeHtml(document.document_type)}</span><button class="close-dialog" data-close-dialog aria-label="Close preview"><svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div>
        <h2>${escapeHtml(document.title)}</h2><p>${escapeHtml(document.summary)}</p>
        <div class="preview-meta"><span>${escapeHtml(documentLocation(document))}</span><span>${escapeHtml(document.author)}</span><span>${escapeHtml(document.published_on)}</span><span>${escapeHtml(document.status)}</span></div>
      </header>
      <div class="preview-body">
        <div>
          ${document.metric_value ? `<div class="signal-card"><div><small>${escapeHtml(document.metric_label)}</small><strong>${escapeHtml(document.metric_value)}</strong></div><span class="severity-pill ${escapeHtml(document.severity)}">${escapeHtml(document.severity)}</span></div>` : ""}
          <section class="preview-section"><h3>Document content</h3><p>${escapeHtml(document.content)}</p><h3>Topics</h3><div class="tag-row">${document.tags.map(tag => `<button class="tag" data-tag="${escapeHtml(tag)}">#${escapeHtml(tag)}</button>`).join("")}</div></section>
          <div class="source-note">${escapeHtml(document.source_note)}. Records are synthetic and created for the Week 5 IR browsing assignment.</div>
        </div>
        <aside class="preview-section"><h3>Internal & related links</h3><div class="related-list">${related.length ? related.map(item => `<button class="related-item" data-related="${escapeHtml(item.document.id)}"><small>${escapeHtml(item.relationship)}</small><strong>${escapeHtml(item.document.title)}</strong><span>${escapeHtml(item.explanation)}</span></button>`).join("") : `<p>No explicit links from this item.</p>`}</div></aside>
      </div>`;
    renderBreadcrumbs(); renderRoute(); renderRecent(); renderHistoryButtons();
    if (!ui.dialog.open) ui.dialog.showModal();
  }

  function historyMove(direction) {
    const next = state.historyIndex + direction;
    if (next < 0 || next >= state.history.length) return;
    state.historyIndex = next;
    openDocument(state.history[next], false);
  }

  function showToast(message) {
    ui.toast.textContent = message;
    ui.toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => ui.toast.classList.remove("is-visible"), 1800);
  }

  function closeSidebar() { ui.sidebar.classList.remove("is-open"); ui.scrim.classList.remove("is-open"); }

  document.addEventListener("click", event => {
    const categoryButton = event.target.closest("[data-category], [data-open-category]");
    if (categoryButton) { selectCategory(categoryButton.dataset.category || categoryButton.dataset.openCategory); return; }

    const toggle = event.target.closest("[data-toggle-category]");
    if (toggle) {
      const id = toggle.dataset.toggleCategory;
      state.expanded.has(id) ? state.expanded.delete(id) : state.expanded.add(id);
      renderTree(); return;
    }

    const viewButton = event.target.closest("[data-view], [data-view-jump]");
    if (viewButton) { selectView(viewButton.dataset.view || viewButton.dataset.viewJump); return; }

    const focusButton = event.target.closest("[data-focus-document]");
    if (focusButton) { state.focusDocument = focusButton.dataset.focusDocument; state.currentDocument = null; renderAll(); return; }

    const documentButton = event.target.closest("[data-document]");
    if (documentButton) { openDocument(documentButton.dataset.document); return; }

    const relatedButton = event.target.closest("[data-related]");
    if (relatedButton) { openDocument(relatedButton.dataset.related); return; }

    const tagButton = event.target.closest("[data-tag]");
    if (tagButton) {
      ui.dialog.close(); state.currentDocument = null; state.query = tagButton.dataset.tag; ui.search.value = state.query;
      renderAll(); showToast(`Browsing topic: ${state.query}`); return;
    }

    if (event.target.closest("[data-close-dialog]")) { ui.dialog.close(); state.currentDocument = null; renderBreadcrumbs(); renderRoute(); }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "/" && document.activeElement !== ui.search) { event.preventDefault(); ui.search.focus(); }
    if ((event.key === "Enter" || event.key === " ") && event.target.matches(".document-card")) { event.preventDefault(); openDocument(event.target.dataset.document); }
  });

  ui.search.addEventListener("input", () => { state.query = ui.search.value.trim(); state.currentDocument = null; renderAll(); });
  ui.type.addEventListener("change", () => { state.type = ui.type.value; renderAll(); });
  ui.severity.addEventListener("change", () => { state.severity = ui.severity.value; renderAll(); });
  el("clear-filters").addEventListener("click", () => { state.query = ""; state.type = "all"; state.severity = "all"; ui.search.value = ""; ui.type.value = "all"; ui.severity.value = "all"; renderAll(); });
  el("clear-recent").addEventListener("click", () => { state.recent = []; saveRecent(); renderRecent(); showToast("Recent documents cleared"); });
  el("recent-button").addEventListener("click", () => { el("recent-panel").scrollIntoView({ behavior: "smooth", block: "center" }); });
  el("collapse-tree").addEventListener("click", () => { state.expanded.clear(); renderTree(); });
  ui.back.addEventListener("click", () => historyMove(-1));
  ui.forward.addEventListener("click", () => historyMove(1));
  el("mobile-menu").addEventListener("click", () => { ui.sidebar.classList.add("is-open"); ui.scrim.classList.add("is-open"); });
  ui.scrim.addEventListener("click", closeSidebar);
  ui.dialog.addEventListener("click", event => {
    const rect = ui.dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
      ui.dialog.close(); state.currentDocument = null; renderBreadcrumbs(); renderRoute();
    }
  });
  ui.dialog.addEventListener("close", () => { state.currentDocument = null; renderBreadcrumbs(); renderRoute(); });

  el("dataset-count").textContent = `${data.meta.document_count} documents · ${data.meta.relationship_count} links`;
  populateTypes();
  renderFactoryShelf();
  renderAll();
})();
