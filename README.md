# 2101 Fleming Street 🌿

A plant journal and project planner website, built as a plain static site — no build step, just HTML, CSS and two data files.

**Live site:** https://captainteach123.github.io/Grandpas/

## What's in it

| Page | What it does |
| --- | --- |
| `index.html` — **Plants** | One printable profile sheet per plant: photo, general information, sunlight / water / toxicity, plant uses, a **pruning** section (best season, method, frequency, tools, last pruned, notes), plant log, and pests & treatment. A searchable index sits above the sheets. |
| `pruning.html` — **Pruning** | A printable pruning guide: the rules of thumb, the six methods explained, a seasonal calendar, tools, where to cut, plus a pruning schedule table that fills itself in from the plants and a blank pruning log. |
| `projects.html` — **Projects** | Cards for every garden project with status, progress and budget, plus a printable overview table. |
| `project.html?id=…` | One page per project: photos, a tickable to-do list, a budget table (planned vs estimated vs spent), a tickable shopping list and notes. |

Every sheet is print-ready via the **Print** button.

## Adding plants

Open [`plants.js`](plants.js) and push one object per plant onto the `PLANTS` array. There is a fully documented example at the top of the file. Every field is optional — anything left out prints as a blank line to fill in by hand.

The house illustration goes in `images/cover.jpg` (or `cover.png`) and appears in the header automatically.

Photos go in `images/plants/` and are referenced by path (`photo: "images/plants/rosemary.jpg"`). Until the file exists the sheet shows "Photo to come".

With no plants added, the Plants page shows the blank printable template.

## Adding projects

Open [`projects.js`](projects.js) and push one object per project onto the `PROJECTS` array. Each project has:

- `id` — short slug used in the URL (`project.html?id=raised-bed`)
- `title`, `summary`, `status` (`Planned` / `In progress` / `Done`), `season`, `location`, `description`
- `cover` and `photos` — files in `images/projects/`
- `todos` — `[{ task, note, when, done }]`
- `budget` — `{ planned, items: [{ item, qty, est, actual, note }] }`
- `shopping` — `[{ item, qty, store, price, bought }]`
- `notes`

The first project, removing the fireplace mantel for a TV, is in the file as a worked example of the layout.

Ticking a to-do or shopping item on the site is remembered in that browser only. The `done` / `bought` flags in `projects.js` are the master record.

## Viewing online (GitHub Pages)

The workflow in `.github/workflows/jekyll-gh-pages.yml` deploys the site to GitHub Pages on every push to the default branch.
