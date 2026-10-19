# Week 5 Requirement Mapping

The implementation covers the seven minimum assignment requirements and all ten development-focus features shown in the lecture.

| Lecture requirement | VoltMize implementation | How to demonstrate it |
|---|---|---|
| Home page | Collection overview, guided example path, factory entry cards and priority evidence | Open `dist/index.html` |
| Category hierarchy / menu | `All factories → factory → zone` tree | Expand a factory in the left panel |
| Document list | Cards for briefs, zones, meters, incidents and playbooks | Select any tree category |
| Search + browse option | Search scores title, tags, summary and content while retaining the chosen category scope | Choose Compressor room, then search `leak` |
| Breadcrumb path | Clickable route shown above the workspace | Browse to Weaving Unit → Compressor room |
| Related documents | Weighted links connect context, evidence, meters and procedures | Preview `Compressed-air leak growth` |
| Document preview | Modal shows summary, signal, content, topics and links | Press **Preview** on any card |
| Recently viewed documents | Last six opened documents persist in browser storage | Open several documents; inspect right rail |
| Filters | Filter by document type and severity | Select `Anomaly incident` and `High` |
| Navigation history | Back and forward arrows revisit the preview sequence | Open two previews, then use the arrows |
| Internal links | Tags and related items open another browsing path | Click a related playbook inside a preview |
| User-friendly interface | Responsive desktop/mobile layout, keyboard search shortcut and accessible controls | Resize the browser; press `/` to search |

## Demonstration path

Use this short path in class:

1. Start at **All factories** and explain that the user does not need an exact query.
2. Select **Reference Weaving Unit** and then **Compressor room**.
3. Preview **Compressed-air leak growth**.
4. Show that it links backward to the zone and meter evidence and forward to **Compressor anomaly triage**.
5. Close the preview and switch to **Connections** to show the same items as a non-linear hypertext path.
6. Switch to **Flat index** to contrast sequential browsing with guided and linked browsing.

## Clear FYP relevance

- Factory and zone nodes match VoltMize's monitored-site topology.
- Meter profiles explain where the anomaly evidence comes from.
- Incidents represent the result a VoltMize user would investigate.
- Diagnostic playbooks represent the recommended next action.
- Related links model the operator's real reasoning path: context → measurement → anomaly → diagnosis.

