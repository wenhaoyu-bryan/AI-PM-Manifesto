# AI-PM-Manifesto

A single, deeply-polished scroll page — a manifesto about how I turn ambiguous
problems into AI products that ship, and a showcase of what AI-assisted frontend
craft can look like.

**Live:** https://wenhaoyu-bryan.github.io/AI-PM-Manifesto/

This is the third piece in a set, alongside
[Prompt-to-Ontology](https://github.com/wenhaoyu-bryan/prompt-to-ontology) and
the [AI PM Operating Playbook](https://github.com/wenhaoyu-bryan/AI-PM-Operating-Playbook).
Where those prove systems thinking and PM methodology, this one proves UI/UX and
frontend craft.

## Design

- **Goal:** craft-first. The look, motion, and interaction quality _are_ the
  proof. Built on existing material (writings + the two projects) so it's
  substantive, not decorative.
- **Concept:** "The Manifesto" — a cinematic scroll story with the arc
  _belief → method → proof → proof → voice → invitation_.
- **Aesthetic:** an original "warm editorial paper" palette — warm parchment
  canvas, warm near-black ink, a terracotta accent, large typography, and
  scroll-triggered motion. Tuned to meet WCAG AA contrast. Not based on any
  brand's visual identity.

## The seven beats

1. **Hero** — kinetic thesis line
2. **The shift** — what AI changed about the PM role
3. **The method** — how I work, in four steps
4. **Proof I** — Prompt-to-Ontology (links to the live 3D graph)
5. **Proof II** — AI PM Operating Playbook
6. **In my words** — pull-quotes linking to writing
7. **Close** — who I am + call to action

## Stack

- [Astro](https://astro.build) (static, deploys to GitHub Pages)
- [React](https://react.dev) islands for interactive pieces
- [Tailwind CSS v4](https://tailwindcss.com)
- [GSAP](https://gsap.com) + ScrollTrigger for scroll choreography
- [Lenis](https://lenis.studio) for smooth scrolling

## Develop

```sh
pnpm install
pnpm dev      # local dev server
pnpm build    # astro check + static build
```

Deployed automatically to GitHub Pages on push to `main`.
