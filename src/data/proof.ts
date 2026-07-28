/**
 * Machine-readable metadata for the Manifesto, shared by llms.txt and the
 * WebPage JSON-LD so both stay in sync. The visual Proof sections in
 * index.astro are authored inline; keep this list in the same order
 * (Proof · 01 → 03).
 */
export const SITE = {
  url: "https://wenhaoyu-bryan.github.io/AI-PM-Manifesto/",
  title: "How I Build — Wenhao Yu",
  description:
    "An AI Product Manager's manifesto: turning ambiguous problems into AI products that ship. Built with AI.",
  author: "Wenhao Yu",
  portfolio: "https://wenhaoyu-bryan.github.io",
};

export interface ProofRef {
  title: string;
  url: string;
  description: string;
}

export const PROOF: ProofRef[] = [
  {
    title: "Agent Anatomy",
    url: "https://wenhaoyu-bryan.github.io/agent-anatomy/",
    description:
      "An interactive visual essay on how AI agents actually work — a scripted agent run replayed live, with an open trace format anyone can write to.",
  },
  {
    title: "Prompt-to-Ontology",
    url: "https://wenhaoyu-bryan.github.io/projects/prompt-to-ontology/",
    description:
      "A system that turns raw CSVs into an operational knowledge graph with an agent layer — ontology inference, Neo4j, and human-in-the-loop actions.",
  },
  {
    title: "AI PM Operating Playbook",
    url: "https://wenhaoyu-bryan.github.io/AI-PM-Operating-Playbook/",
    description:
      "The method turned into an interactive tool: frame the problem, design the AI workflow, define evaluation and human review, then export a reusable handoff pack.",
  },
];
