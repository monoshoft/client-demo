import "./globals.css";import type {Metadata} from "next";import {Fraunces,Inter} from "next/font/google";import {B} from "@/lib/business";
const serif=Fraunces({subsets:["latin"],variable:"--font-serif",display:"swap"});const sans=Inter({subsets:["latin"],variable:"--font-sans",display:"swap"});
const title=`${B.name} (${B.tag}) – Sweets, Savouries & Catering in ${B.area}`;
const description=`${B.name} – ${B.tag}. Freshly made halwai sweets and savouries for every celebration in ${B.area}. Call, WhatsApp or get directions.`;
export const metadata:Metadata={metadataBase:new URL(B.site),title,description,keywords:["halwai near me","sweet shop","halwai for events","mithai","Shankar Enterprises"],openGraph:{title,description,type:"website",locale:"en_IN",siteName:B.name}};
export default function L({children}:{children:React.ReactNode}){
const ld={"@context":"https://schema.org","@type":"FoodEstablishment",name:`${B.name} (${B.tag})`,url:B.site,geo:{"@type":"GeoCoordinates",latitude:B.lat,longitude:B.lng},address:{"@type":"PostalAddress",streetAddress:B.address||undefined,addressCountry:"IN"},telephone:B.phone||undefined,openingHours:B.hours||undefined,...(B.rating?{aggregateRating:{"@type":"AggregateRating",ratingValue:B.rating,reviewCount:B.reviewCount}}:{})};
return <html lang="en-IN" className={`${serif.variable} ${sans.variable}`}><body className="font-sans antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>{children}</body></html>}
