# Separate Browsing Model Implementations

The three algorithms are separated from the interface so they can be understood independently. Each model receives ordinary data, performs one browsing operation and returns the resulting documents. The HTML design is handled elsewhere.

## 1. Flat browsing model

File: `dist/assets/models/flat-model.js`

### `registerFlatModel(global)`

```javascript
(function registerFlatModel(global) {
  // model implementation
})(window);
```

This is a wrapper that makes the model available to the rest of the website. Here, `global` means the browser's `window` object. At the end, the wrapper stores the model at:

```javascript
window.BrowsingModels.FlatModel
```

The wrapper runs automatically when the JavaScript file loads. It prevents temporary variables inside the file from conflicting with variables in other model files.

### `retrieve(options)`

```javascript
FlatModel.retrieve({
  documents,
  query,
  type,
  severity,
  scoreDocument
})
```

This is the complete flat-browsing algorithm.

Inputs:

- `documents`: every document in the collection.
- `query`: text entered in the search box.
- `type`: selected document type, such as `Anomaly incident`.
- `severity`: selected severity, such as `high`.
- `scoreDocument`: the shared function that calculates how well a document matches the query.

What it does:

1. Starts with all documents from all factories and zones.
2. Calculates a search score for each document.
3. Removes documents that do not match the query.
4. Applies the type and severity filters.
5. Sorts search results by score. Without a query, it sorts by date.
6. Removes the temporary score and returns only document objects.

The line:

```javascript
.map(document => ({ document, score: ... }))
```

temporarily changes every document into a pair containing the document and its score:

```text
{ document: Compressor incident, score: 12 }
```

The line:

```javascript
.filter(item => item.score >= 0)
```

removes non-matching documents. The shared scoring function returns `-1` when a query term is missing.

The final line:

```javascript
.map(item => item.document)
```

removes the temporary score after sorting and returns the final list.

Flat browsing never checks `category_id`. That is why documents from every factory and zone can appear together.

Example:

```text
Input: 62 documents, query = "compressor", type = all
Output: every matching compressor document, ordered by score
```

## 2. Structured / guided browsing model

File: `dist/assets/models/guided-model.js`

### `registerGuidedModel(global)`

This wrapper runs when the file loads and publishes the model as:

```javascript
window.BrowsingModels.GuidedModel
```

Like the flat-model wrapper, it keeps the file's internal variables separate from the rest of the website.

### `descendants(categoryId, childrenByParent)`

This function finds the selected category and everything located below it.

Inputs:

- `categoryId`: the category selected by the user.
- `childrenByParent`: a map showing the children of each category.

Example input:

```text
Selected category: Reference Weaving Unit
```

Example output:

```text
Reference Weaving Unit
Production hall
Compressor room
Humidification
Preparatory
Utilities
```

It starts by adding the selected category:

```javascript
const categoryIds = new Set([categoryId]);
```

A `Set` is used because it does not allow duplicate IDs.

### `visit(parentId)`

`visit()` is a small recursive function inside `descendants()`.

```javascript
function visit(parentId) {
  const children = childrenByParent.get(parentId) || [];

  children.forEach(child => {
    categoryIds.add(child.id);
    visit(child.id);
  });
}
```

For each category it:

1. Finds its immediate children.
2. Adds each child to the result.
3. Calls itself again for that child.

This continues until a category has no more children. This process is called recursion.

### `categoryPath(categoryId, categoryById)`

This function constructs the breadcrumb path.

Inputs:

- `categoryId`: the current category.
- `categoryById`: a map used to quickly find a category from its ID.

It starts at the current category and repeatedly follows `parent_id` until it reaches the root.

Example:

```text
Current category: Compressor room

Result:
All factories → Reference Weaving Unit → Compressor room
```

`path.unshift(category)` adds each parent to the beginning of the array so the final order starts at the root.

### `retrieve(options)`

```javascript
GuidedModel.retrieve({
  documents,
  categoryId,
  childrenByParent,
  query,
  type,
  severity,
  scoreDocument
})
```

This is the main guided-browsing algorithm.

It first calls:

```javascript
const allowedCategories = descendants(
  categoryId,
  childrenByParent
);
```

It then keeps a document only if the document belongs to one of those allowed categories:

```javascript
.filter(item =>
  allowedCategories.has(item.document.category_id)
)
```

After applying the hierarchy restriction, it applies search, type and severity filters and sorts the documents.

Example:

```text
Selected category: Compressor room
Allowed category: Compressor room

Returned documents:
- Compressor-room zone summary
- MT3 meter profile
- Compressed-air leak incident
- Compressor overnight incident
```

Documents from the bakery, cold store and other weaving-unit zones are excluded.

## 3. Hypertext / connection browsing model

File: `dist/assets/models/hypertext-model.js`

### `registerHypertextModel(global)`

This wrapper publishes the model as:

```javascript
window.BrowsingModels.HypertextModel
```

It runs automatically when its JavaScript file is loaded.

### `relatedFor(documentId, links, documentById)`

This function finds documents directly connected to one selected document.

Inputs:

- `documentId`: ID of the selected document or graph node.
- `links`: all stored relationships from the dataset.
- `documentById`: a map used to find a complete document from its ID.

It first finds outgoing relationships:

```javascript
.filter(link =>
  link.source_document_id === documentId
)
```

For example:

```text
Selected node: Compressed-air leak growth

Outgoing links:
- occurred in → Compressor room
- supported by → MT3 meter profile
- diagnosed with → Compressor anomaly triage
```

It then sorts the relationships from highest weight to lowest:

```javascript
.sort((left, right) =>
  right.weight - left.weight
)
```

Finally, it attaches the complete target document to every relationship:

```javascript
document: documentById.get(
  link.target_document_id
)
```

The returned result therefore contains both the relationship and the document it points to.

### `connectionsFor(options)`

```javascript
HypertextModel.connectionsFor({
  focusDocumentId,
  links,
  documentById,
  limit: 6
})
```

This function prepares the complete information required by the visual connection screen.

Inputs:

- `focusDocumentId`: document that will appear in the centre.
- `links`: all graph relationships.
- `documentById`: map containing all document nodes.
- `limit`: maximum connected nodes to return; the default is six.

It finds the central document:

```javascript
const focus = documentById.get(focusDocumentId);
```

If the ID is invalid, it safely returns an empty result:

```javascript
{ focus: null, connections: [] }
```

Otherwise, it calls `relatedFor()` and keeps only the strongest connections:

```javascript
relatedFor(...).slice(0, limit)
```

Example output:

```text
Focus:
Compressed-air leak growth

Connections:
1. Compressor room
2. MT3 meter profile
3. Compressor anomaly triage
4. Similar compressor incident
```

When the user clicks one connected node, that node becomes the new `focusDocumentId`, and the process runs again. This creates non-linear browsing.

## How the interface uses the functions

`dist/assets/app.js` is the shared interface controller.

For flat browsing, it calls:

```javascript
FlatModel.retrieve(commonOptions)
```

For guided browsing, it calls:

```javascript
GuidedModel.retrieve({
  ...commonOptions,
  categoryId,
  childrenByParent
})
```

For the connection screen, it calls:

```javascript
HypertextModel.connectionsFor({
  focusDocumentId,
  links,
  documentById,
  limit: 6
})
```

For related links inside a document preview, it calls:

```javascript
HypertextModel.relatedFor(
  documentId,
  links,
  documentById
)
```

The scripts are loaded in this order in `dist/index.html`:

```html
<script src="assets/data.js"></script>
<script src="assets/models/flat-model.js"></script>
<script src="assets/models/guided-model.js"></script>
<script src="assets/models/hypertext-model.js"></script>
<script src="assets/app.js"></script>
```

The dataset must load first, the three model implementations load next, and the interface controller loads last.
