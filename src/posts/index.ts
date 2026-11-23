import workflowSpecDriven from "./workflow-spec-driven.html?raw";

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  kind: string;
  html: string;
  stats?: { value: string; label: string }[];
}

export const posts: Post[] = [
  {
    slug: "workflow-spec-driven",
    title: "A spec-driven workflow with AI agents",
    description:
      "How to run spec-driven development with AI agents so that specs don't rot: one living spec per feature, a gate instead of reading diffs, and two review paths. 20 sources and one peer-reviewed study.",
    date: "2026-10-31",
    tags: ["agentic engineering", "spec-driven", "guardrails", "gate"],
    kind: "Research",
    html: workflowSpecDriven,
  },
];

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function headings(html: string) {
  return [...html.matchAll(/<h2 id="([^"]+)">(.*?)<\/h2>/g)].map((m) => ({
    id: m[1],
    text: m[2].replace(/<[^>]+>/g, "").replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, "&"),
  }));
}

export function readingMinutes(html: string) {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));
}
