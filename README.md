# Grahko website

Website for Grahko: we take shops and small businesses from offline to online
(website, app, Google Maps, WhatsApp) and promote them every month. English by default, Hindi toggle.
Two pages: the home page (`index.html`) and Services (`services.html`: promotion packages and add-ons).

## Brand
Logo: a gold map pin with a shop inside (your shop, on the map). Colours: gold `#F5B800`,
ink `#0E1525`, sand `#FAF8F4`. Font: Inter (Hindi text uses Hind).

## Files
| File | What it is |
|---|---|
| `index.html` | Home page: live shop preview, plans, calculator, FAQ, contact |
| `services.html` | Services page: business promotion packages and 20 add-on services |
| `styles.css` | Design for both pages |
| `config.js` | **Your details, prices and festival offer, used by both pages** |
| `vercel.json` | Lets `/services` work without `.html` |
| `og-image.png` | Picture shown when the link is shared on WhatsApp / social media |
| `logo.svg` | The Grahko logo, for print, WhatsApp profile picture and visiting cards |
| `robots.txt` | Lets Google and AI search (ChatGPT, Perplexity, Gemini) read the site |
| `sitemap.xml` | Page list for Google Search Console |
| `llms.txt` | Plain summary of the business for AI tools |

## Before going live
1. `config.js` → `CONFIG`: WhatsApp number, phone, email, UPI ID, Razorpay link, payee name
2. `index.html`: `+91-99999-99999` (structured data near the top) → real phone number
3. `index.html`: `REVIEWS` → add **real** customer reviews only; the section stays hidden while empty
4. `config.js` → `PRICE` / `OFFER`: prices and offer end date (site switches to regular prices by itself).
   Now: Website ₹4,999 (regular ₹9,999), Website + WhatsApp ₹9,999 (regular ₹16,999),
   Everything ₹19,999 (regular ₹29,999). The nav's offer pill shows the biggest saving by itself.
   If you change what a plan includes, also update its card in the Pricing section of `index.html`.
   Which plan is suggested for each business type is `plan:` in `TYPES` (`web`, `app` = Website + WhatsApp, `all`, `big`).
5. `config.js` → `FESTIVAL`: next festival name and last order date
6. Promotion packages and add-on services → `services.html` (name, one line, price).
   Each item opens WhatsApp with its name, so no code change is needed to add one.

The site address is set to `https://grahko.in/`. If you use another domain, replace it in
`index.html`, `robots.txt`, `sitemap.xml` and `llms.txt`.

## Deploy
Vercel: New Project → Import this GitHub repo → Framework "Other" → Deploy.
