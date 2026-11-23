# gugnowski / blog

A blog about AI engineering: https://blog.gugnowski.com

Astro, a static build, deployed to GitHub Pages by GitHub Actions (`.github/workflows/deploy.yml`) on every push to `master`.

## Work locally

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm check      # astro check + build, the same as CI
```

## A new post

1. Add an HTML fragment in `src/posts/<slug>.html`. Sections are `<section>` elements with an `<h2 id>`; the table of contents is built from them. The visual blocks (`cards`, `flow`, `versus`, `pick`, `stats`, `callout`, `tag`, `<pre class="mermaid">` diagrams) are styled in `src/styles/post.css`.
2. Add the post to the list in `src/posts/index.ts`.
