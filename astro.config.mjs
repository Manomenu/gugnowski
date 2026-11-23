import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://blog.gugnowski.com",
  trailingSlash: "always",
  integrations: [sitemap()],
});
