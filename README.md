# PROCARE INSURANCE static website

The complete deployable website is in `dist/`. Upload that directory to any static hosting provider. No dependencies or build are required to serve it.

Run `node build-content.cjs` from this folder to regenerate the HTML after editing business details or service content. Styles are in `dist/style.css`, and browser interactions are in `dist/app.js`. Keep the business contact links and structured data consistent when editing.

For local preview: `python -m http.server 8080 --directory dist`, then open http://localhost:8080.

Forms validate in the browser and navigate to WhatsApp with a prepared message. The visitor must send it there. There is no submission storage, upload, login, payment processing, or analytics. Fonts load from Google Fonts; the photograph is locally served and sourced from Unsplash. Legal pages disclose third-party services.
