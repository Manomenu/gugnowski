import rss from "@astrojs/rss";
import { sortedPosts } from "../posts";

export function GET(context) {
  return rss({
    title: "gugnowski / blog",
    description: "AI engineering w praktyce: RAG, chatboty, ewaluacja, fine-tuning i praca z agentami.",
    site: context.site,
    items: sortedPosts.map((p) => ({ title: p.title, description: p.description, pubDate: new Date(p.date), link: `/${p.slug}/` })),
  });
}
