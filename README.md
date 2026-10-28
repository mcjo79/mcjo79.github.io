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
├── privacy/index.html      privacy policy (EN)
├── fr/privacy/index.html   privacy policy (FR)
├── 404.html                not-found page
├── assets/style.css        layout, themes and consent banner
├── assets/app.js           theme toggle + year
├── assets/js/consent.js    GDPR consent / conditional GA4 loading
├── assets/favicon.svg
├── assets/img/             project image and localized OG images
├── sitemap.xml
├── robots.txt
└── .nojekyll
```

No build step, no framework, no external font. **Google Analytics 4 (`G-2NDE82V29F`) runs in advanced consent mode**:
`gtag-init.js` loads the Google tag immediately with every consent signal `denied`; no analytics cookie or identifier
is stored before **Accept**, but Google may receive a cookieless measurement request. `consent.js` then updates
`analytics_storage` and removes the analytics cookies on refusal. The choice is stored for 180 days in `localStorage`
(`vroid-consent-v1`) and is shared with the project site on the same domain. GA4 uses session cookies
(`cookie_expires: 0`) and the cookie domain is pinned to the current host to avoid the `github.io` public-suffix rejection.

Debugging: adding `?gtm_debug=...`, `?ga_debug=1` or `?debug_mode=1` enables GA4 `debug_mode` and re-opens the
consent banner. In this mode a stored `granted` choice is deliberately **ignored** so Tag Assistant starts from the
`denied` default and sees the real update only after the Accept click. **The parameter never grants consent by
itself** — without that click, no analytics cookie or identifier is stored and `analytics_storage` stays denied.

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
