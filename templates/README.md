# Templates

Raw HTML + CSS starter templates. Each folder is a standalone Nx project you can run or copy.

**Run a template (from repo root):**
```bash
npx nx run template-minimal:serve
```
Then open http://localhost:4200.

**Construction template (contractor-style demo):**
```bash
npx nx run template-construction:serve
```
Then open http://localhost:4201.

**Templates:**
- [minimal](./minimal) – bare bones HTML + CSS
- [construction](./construction) – static HTML contractor one-pager (same content as the Next.js demo)

**Next.js construction demo (for contractor pitches):**  
The contractor-style demo lives in **modern_templates/construction** (Next.js). Run: `nx run construction:dev` → http://localhost:3001

Add new templates as subfolders with their own `project.json`, `index.html`, and styles.
