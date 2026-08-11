# Fledge Trading Lab — public site

Static, dependency-free site for fledge's public research notes. Implemented from
the claude.ai/design project "Fledge Quant Lab Site"
(`72b4f59b-e271-462e-9d04-7385860fc135`); the imported design files live in
`design/` for reference.

**Live (temporary) URL:** https://claude.ai/code/artifact/c2f310c9-bb5e-43fc-965d-07accf677ef5

## Layout

```
src/
  tokens.css     design tokens (dark-committed, IBM Plex, monochrome slate)
  site.css       component styles
  site.js        hash router, canvas motifs, SVG chart renderer
  articles.js    ARTICLE REGISTRY — new research notes go here
  shell.html     header / footer chrome
fonts/           IBM Plex latin subsets as data-URI @font-face css
research/
  k-repeat/      Note 01 experiment (experiment.py -> results.json)
build.py         assembles dist/index.html + dist/artifact.html
dist/            build output — never hand-edit
```

## Build & preview

```
python3 build.py
open dist/index.html          # or file://.../dist/index.html#article/k-repeats
```

Publishing/maintenance workflow: see the `fledge-site` skill
(`~/.claude/skills/fledge-site/SKILL.md`).
