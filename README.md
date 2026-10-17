# Grahko website

Single-page website: we take shops and small businesses from offline to online
(website, app, Google Maps, WhatsApp). English by default, Hindi toggle.

## Brand
Logo: a gold map pin with a shop inside (your shop, on the map). Colours: gold `#F5B800`,
ink `#0E1525`, sand `#FAF8F4`. Font: Inter (Hindi text uses Hind).

## Files
| File | What it is |
|---|---|
| `index.html` | The whole website (HTML, CSS and JavaScript in one file) |
| `og-image.png` | Picture shown when the link is shared on WhatsApp / social media |
| `logo.svg` | The Grahko logo, for print, WhatsApp profile picture and visiting cards |
| `robots.txt` | Lets Google and AI search (ChatGPT, Perplexity, Gemini) read the site |
| `sitemap.xml` | Page list for Google Search Console |
| `llms.txt` | Plain summary of the business for AI tools |

## Before going live, edit `index.html`
1. `CONFIG` → WhatsApp number, phone, email, UPI ID, Razorpay link, payee name
2. `+91-99999-99999` (structured data near the top) → real phone number
3. `REVIEWS` → add **real** customer reviews only; the section stays hidden while empty
4. `PRICE` / `OFFER` → prices and offer end date (site switches to regular prices by itself)
5. `FESTIVAL` → next festival name and last order date

The site address is set to `https://grahko.in/`. If you use another domain, replace it in
`index.html`, `robots.txt`, `sitemap.xml` and `llms.txt`.

## Deploy
Vercel: New Project → Import this GitHub repo → Framework "Other" → Deploy.
