# mcjo79.github.io

Personal projects landing page, served at <https://mcjo79.github.io/>.

It is a static bilingual site (English at the root, French in `fr/`) that presents the
projects. The only project for now is [VRoid MCP Bridge](https://mcjo79.github.io/vroid-mcp/),
whose site lives in the `vroid-mcp` repository.

## Structure

```
.
├── index.html              English home (default)
├── fr/index.html           French home
├── 404.html                not-found page
├── assets/style.css        layout and themes
├── assets/app.js           theme toggle + year
├── assets/favicon.svg
├── assets/img/             project image and localized OG images
├── sitemap.xml
├── robots.txt
└── .nojekyll
```

No build step, no framework, no external font, **no cookie and no analytics** on this site.

## Local preview

From this directory:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000/> (English) or <http://localhost:8000/fr/> (French).
Project links point to `/vroid-mcp/`; they only resolve on the deployed site.

## Publish

The repository is the GitHub user site (`mcjo79/mcjo79.github.io`), so GitHub Pages serves
the root of `main` at <https://mcjo79.github.io/>. Push to `main`; the project site at
`/vroid-mcp/` is separate and keeps its own deployment.

## License

MIT — see [LICENSE](LICENSE).
