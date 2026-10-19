/* Grahko: your details, prices and offer. Used by every page of the site. */
const CONFIG = {
  whatsapp: "919999999999",                  // with country code, without +
  phoneText: "+91 99999 99999",
  email: "hello@grahko.in",
  payeeName: "Grahko",                      // name on the bank/UPI account
  upiId: "yourname@upi",                     // your UPI ID
  razorpayLink: "https://rzp.io/l/your-link" // Razorpay Payment Page / Link
};
// Festival offer: the pill in the nav shows until the last order date, then hides itself.
// Change these for the next season (e.g. शादी सीज़न, होली).
const FESTIVAL = { hi: "दिवाली", en: "Diwali", orderBy: "2026-11-01" };

// Prices. PRICE = what you charge now. OFFER.regular = the price after the offer ends.
// After OFFER.until the site switches to the regular price by itself.
// Only show a cut price you will really charge afterwards; an offer that never ends is a fake discount.
const PRICE = { web: 4999, app: 9999, all: 19999, big: 25000 };
const OFFER = { until: "2026-11-01", name: { hi: "दिवाली ऑफर", en: "Diwali offer" },
                regular: { web: 9999, app: 16999, all: 29999 } };   // save ₹5,000 / ₹7,000 / ₹10,000; big: no offer
