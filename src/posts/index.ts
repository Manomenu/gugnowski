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
    title: "Workflow spec-driven z agentami",
    description:
      "Jak prowadzić spec-driven development z agentami AI, żeby specyfikacje nie gniły: żywa spec per feature, bramka zamiast czytania diffów i dwie ścieżki review. 20 źródeł i jedno badanie recenzowane.",
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
  return new Intl.DateTimeFormat("pl-PL", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));
}
