/*
 * STRUCTURED / GUIDED BROWSING MODEL
 *
 * Purpose:
 * Follow the hierarchy: collection -> factory -> zone. Only documents inside
 * the selected category and its descendants are returned.
 */
(function registerGuidedModel(global) {
  "use strict";

  // Recursively collect the selected category and every category below it.
  function descendants(categoryId, childrenByParent) {
    const categoryIds = new Set([categoryId]);

    function visit(parentId) {
      const children = childrenByParent.get(parentId) || [];
      children.forEach(child => {
        categoryIds.add(child.id);
        visit(child.id);
      });
    }

    visit(categoryId);
    return categoryIds;
  }

  // Walk from the selected category to the root to construct breadcrumbs.
  function categoryPath(categoryId, categoryById) {
    const path = [];
    let category = categoryById.get(categoryId);

    while (category) {
      path.unshift(category);
      category = category.parent_id
        ? categoryById.get(category.parent_id)
        : null;
    }

    return path;
  }

  function retrieve({
    documents,
    categoryId,
    childrenByParent,
    query,
    type,
    severity,
    scoreDocument,
  }) {
    const allowedCategories = descendants(categoryId, childrenByParent);

    return documents
      .map(document => ({
        document,
        score: query ? scoreDocument(document, query) : 0,
      }))
      .filter(item => allowedCategories.has(item.document.category_id))
      .filter(item => item.score >= 0)
      .filter(item => type === "all" || item.document.document_type === type)
      .filter(item => severity === "all" || item.document.severity === severity)
      .sort((left, right) => query
        ? right.score - left.score || right.document.published_on.localeCompare(left.document.published_on)
        : right.document.published_on.localeCompare(left.document.published_on))
      .map(item => item.document);
  }

  global.BrowsingModels = global.BrowsingModels || {};
  global.BrowsingModels.GuidedModel = {
    descendants,
    categoryPath,
    retrieve,
  };
})(window);

