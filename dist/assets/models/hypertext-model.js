/*
 * HYPERTEXT / CONNECTION BROWSING MODEL
 *
 * Purpose:
 * Treat documents as graph nodes and document_links as directed edges. The
 * strongest outgoing edges determine which related nodes are shown next.
 */
(function registerHypertextModel(global) {
  "use strict";

  function relatedFor(documentId, links, documentById) {
    return links
      .filter(link =>
        link.source_document_id === documentId &&
        documentById.has(link.target_document_id))
      .sort((left, right) => right.weight - left.weight)
      .map(link => ({
        ...link,
        document: documentById.get(link.target_document_id),
      }));
  }

  function connectionsFor({ focusDocumentId, links, documentById, limit = 6 }) {
    const focus = documentById.get(focusDocumentId);
    if (!focus) return { focus: null, connections: [] };

    return {
      focus,
      connections: relatedFor(focusDocumentId, links, documentById).slice(0, limit),
    };
  }

  global.BrowsingModels = global.BrowsingModels || {};
  global.BrowsingModels.HypertextModel = {
    relatedFor,
    connectionsFor,
  };
})(window);

