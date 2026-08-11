#!/usr/bin/env python3
"""Assemble the Fledge Trading Lab site from src/ into dist/.

Outputs:
  dist/index.html    — full standalone document (real hosting / local preview)
  dist/artifact.html — same content without the document shell, for publishing
                       as a Claude Artifact (the artifact wrapper supplies
                       doctype/head/body; <title> is read from the content)

Everything is inlined (fonts as data URIs) so both outputs are single files
with no external requests.
"""
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "src"
DIST = ROOT / "dist"

TITLE = "Fledge Trading Lab"
DESC = "An independent research lab studying how LLM agents make consequential decisions under uncertainty."


def main() -> None:
    fonts = (ROOT / "fonts" / "fonts-inline.css").read_text()
    tokens = (SRC / "tokens.css").read_text()
    css = (SRC / "site.css").read_text()
    shell = (SRC / "shell.html").read_text()
    articles = (SRC / "articles.js").read_text()
    site_js = (SRC / "site.js").read_text()
    data = (ROOT / "research" / "k-repeat" / "results.json").read_text()

    theme_boot = (
        '<script>(function(){var t;try{t=localStorage.getItem("fledge-theme")}catch(e){}'
        'document.documentElement.setAttribute("data-theme",t==="light"?"light":"dark");})();</script>'
    )
    content = f"""<style>{fonts}</style>
<style>{tokens}
{css}</style>
{theme_boot}
{shell}
<script>window.FLEDGE_DATA = {data};</script>
<script>{articles}</script>
<script>{site_js}</script>
"""

    DIST.mkdir(exist_ok=True)
    (DIST / "artifact.html").write_text(f"<title>{TITLE}</title>\n{content}")
    (DIST / "index.html").write_text(
        f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="{DESC}">
<title>{TITLE}</title>
</head>
<body>
{content}</body>
</html>
"""
    )
    # GitHub Pages serves the repo root: keep a copy of the full document there
    (ROOT / "index.html").write_text((DIST / "index.html").read_text())
    for f in ("index.html", "artifact.html"):
        print(f"dist/{f}: {(DIST / f).stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
