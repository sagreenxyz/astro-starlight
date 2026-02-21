# astro-starlight

An Astro documentation site built with the [Starlight](https://starlight.astro.build/) template and [PageFind](https://pagefind.app/) for full-text search.

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v7 or higher

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open your browser to `http://localhost:4321`.

### Build

Build the site for production:

```bash
npm run build
```

The built site will be in the `dist/` directory. PageFind indexes the built pages automatically.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
.
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx          # Home page (splash)
│   │       ├── guides/
│   │       │   └── example.md    # Example guide page
│   │       └── reference/
│   │           └── example.md    # Example reference page
│   ├── content.config.ts          # Content collection config
│   └── env.d.ts
├── astro.config.mjs               # Astro + Starlight config
├── package.json
└── tsconfig.json
```

## 🔍 Search (PageFind)

This site uses [PageFind](https://pagefind.app/) for client-side full-text search. PageFind is integrated automatically by Starlight — it runs after the build and indexes all generated HTML pages.

Search is accessible via the search button in the header (or `Ctrl+K` / `Cmd+K`).

## 🧞 Commands

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `npm install`     | Installs dependencies                            |
| `npm run dev`     | Starts local dev server at `localhost:4321`      |
| `npm run build`   | Builds your production site to `./dist/`         |
| `npm run preview` | Previews your build locally, before deploying    |

## 📚 Adding Content

Add new Markdown or MDX files to `src/content/docs/` to create new pages. Files in subdirectories are grouped automatically in the sidebar.

For more information, see the [Starlight documentation](https://starlight.astro.build/).
