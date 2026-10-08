// SINGLE SOURCE OF TRUTH. Only fields marked VERIFIED came from the Maps link; fill the rest from the real listing.
export const B = {
  name: "Shankar Enterprises",            // VERIFIED (Maps title)
  tag: "Halwai Palta",                    // VERIFIED (Maps title)
  lat: 28.6904839, lng: 77.0436661,       // VERIFIED (Maps link)
  address: "",                            // TODO: paste from Maps listing
  area: "Delhi, India",                   // TODO: confirm locality
  phone: "",                              // TODO e.g. "+91 98XXXXXXXX"
  whatsapp: "",                           // TODO digits only e.g. "9198XXXXXXXX"
  email: "",                              // TODO
  hours: "",                              // TODO e.g. "Mon–Sun · 8:00 AM – 10:00 PM"
  rating: 0, reviewCount: 0,              // TODO from Maps; 0 hides the badge
  reviewsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJS92AHQUNORARH_Ba-QYb28g".replace("ChIJS92AHQUNORARH_Ba-QYb28g",""),
  site: "https://example.com",            // TODO production domain
};
// Real reviews only. Paste genuine ones: {name, text, stars}
export const REVIEWS: {name:string;text:string;stars:number}[] = [];
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${B.lat},${B.lng}`;
export const dirUrl = `https://www.google.com/maps/dir/?api=1&destination=${B.lat},${B.lng}`;
export const tel = B.phone ? `tel:${B.phone.replace(/\s/g,"")}` : "#contact";
export const wa = B.whatsapp ? `https://wa.me/${B.whatsapp}?text=Hello%2C%20I%27d%20like%20to%20enquire` : "#contact";
