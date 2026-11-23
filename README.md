# gugnowski / blog

Blog o AI engineeringu: https://blog.gugnowski.com

Astro, statyczny build, deploy na GitHub Pages przez GitHub Actions (`.github/workflows/deploy.yml`) przy każdym pushu na `master`.

## Praca lokalnie

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm check      # astro check + build, to samo co w CI
```

## Nowy wpis

1. Dodaj fragment HTML w `src/posts/<slug>.html`. Sekcje to `<section>` z `<h2>`, z nich powstaje spis treści. Bloki wizualne (`cards`, `flow`, `versus`, `pick`, `stats`, `callout`, `tag`, diagramy `<pre class="mermaid">`) są ostylowane w `src/styles/post.css`.
2. Dopisz wpis do listy w `src/posts/index.ts`.
