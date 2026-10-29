# PROCARE INSURANCE static website

The complete deployable website is in `dist/`. Upload that directory to any static hosting provider. No dependencies or build are required to serve it.

Run `node build-content.cjs` from this folder to regenerate the HTML after editing business details or service content. Styles are in `dist/style.css`, and browser interactions are in `dist/app.js`. Keep the business contact links and structured data consistent when editing.

For local preview: `python -m http.server 8080 --directory dist`, then open http://localhost:8080.

This project is maintained locally for your own server. To set absolute social-sharing image and structured-data URLs before uploading, set `PROCARE_SITE_URL` to your public HTTPS website origin and run `node build-content.cjs`. For example, in PowerShell: `$env:PROCARE_SITE_URL = 'https://your-domain.example'`. No private hosted-site URLs are included by default.

Typography uses 16px body copy, 15px main buttons, 16px form controls, and responsive headings. The end of `dist/style.css` contains the readability and responsive layout refinements. Navigation switches to a menu below 1200px, and forms stack below 651px.

Forms validate in the browser and navigate to WhatsApp with a prepared message. The visitor must send it there. There is no submission storage, upload, login, payment processing, or analytics. Fonts load from Google Fonts; the photograph is locally served and sourced from Unsplash. Legal pages disclose third-party services.

The homepage includes separate scrolling logo galleries for the 23 motor and 7 health insurers supplied by you. Edit `insurers.json` for the company lists and `logo-assets.json` for asset filenames and source URLs; logo images are in `dist/assets/insurers/`. `insurer-section.cjs` renders the galleries during HTML generation. Logos retain their original colors and proportions. Each row has pause/play and previous/next controls, pauses on hover or keyboard focus, allows touch scrolling, and starts stationary when reduced motion is enabled. Company identification does not assert a partnership.
