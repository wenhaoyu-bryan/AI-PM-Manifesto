import type { APIRoute } from "astro";
import { SITE, PROOF } from "@/data/proof";

/**
 * llms.txt — a concise, machine-readable index of this page, following the
 * llmstxt.org convention. Points AI answer engines at the manifesto and the
 * shipped work it stands on.
 */
export const GET: APIRoute = async () => {
  const lines: string[] = [];

  lines.push("# How I Build — Wenhao Yu (Bryan)");
  lines.push("");
  lines.push(
    "> A single-page manifesto by Wenhao Yu, an AI Product Manager: turning " +
      "ambiguous problems into AI products that ship. It frames how he works — " +
      "frame the ambiguity, design the system, build with AI, extract the pattern — " +
      "and backs it with shipped proof."
  );
  lines.push("");
  lines.push(`Page: ${SITE.url}`);
  lines.push(`Full portfolio: ${SITE.portfolio}`);
  lines.push("");

  lines.push("## Proof");
  for (const p of PROOF) {
    lines.push(`- [${p.title}](${p.url}): ${p.description}`);
  }
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
