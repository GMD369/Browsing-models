/*
 * FLAT BROWSING MODEL
 *
 * Purpose:
 * Browse the complete collection without using the category hierarchy.
 * Search, document-type filtering and severity filtering may still be used.
 */
(function registerFlatModel(global) {
  "use strict";

  function retrieve({ documents, query, type, severity, scoreDocument }) {
    return documents
      .map(document => ({
        document,
        score: query ? scoreDocument(document, query) : 0,
      }))
      // A score of -1 means at least one query term was not found.
      .filter(item => item.score >= 0)
      .filter(item => type === "all" || item.document.document_type === type)
      .filter(item => severity === "all" || item.document.severity === severity)
      .sort((left, right) => query
        ? right.score - left.score || right.document.published_on.localeCompare(left.document.published_on)
        : right.document.published_on.localeCompare(left.document.published_on))
      .map(item => item.document);
  }

  global.BrowsingModels = global.BrowsingModels || {};
  global.BrowsingModels.FlatModel = { retrieve };
})(window);

