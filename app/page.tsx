import {Phone,MessageCircle,Navigation,MapPin,Clock,Star,Flame,ChefHat,PartyPopper,Leaf,HeartHandshake,Store,ArrowRight} from "lucide-react";
import {B,REVIEWS,tel,wa,dirUrl,mapsUrl} from "@/lib/business";import {Nav,Reveal,MobileBar} from "./ui";
const btn="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 font-semibold transition duration-300 hover:-translate-y-0.5";
const services=[
{i:ChefHat,t:"Fresh Halwai Sweets",d:"Traditional mithai made the classic way, in fresh batches.",b:"Taste you grew up with",big:true},
{i:Flame,t:"Hot Savouries",d:"Freshly fried snacks for tea-time and gatherings.",b:"Served fresh"},
{i:PartyPopper,t:"Events & Occasions",d:"Sweets and food for weddings, festivals and family functions.",b:"Bulk orders welcome"},
{i:Store,t:"Boxes & Gifting",d:"Neatly packed sweet boxes for Diwali and special days.",b:"Ready to gift"}];
const why=[[Leaf,"Quality ingredients","Traditional recipes and honest ingredients."],[ChefHat,"Made by halwais","Craft that comes from hands-on experience."],[MapPin,"Easy to reach","Pinned on Google Maps with one-tap directions."],[HeartHandshake,"Personal service","Talk to us directly to plan your order."]] as const;
export default function Home(){return <main id="top">
<Nav/>
<section className="relative flex min-h-[100svh] items-end overflow-hidden bg-maroon pb-24 pt-32 text-cream sm:items-center sm:pb-0">
<div className="pat absolute inset-0"/><div className="absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full bg-saffron/20 blur-3xl"/>
<div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 lg:grid-cols-12"><div className="lg:col-span-8">
<Reveal><p className="mb-5 text-xs font-semibold uppercase tracking-[.3em] text-saffron">{B.tag} · {B.area}</p></Reveal>
<Reveal d={120}><h1 className="font-serif text-5xl font-semibold leading-[1.05] sm:text-7xl">Mithai made fresh,<br/><em className="text-saffron">for every celebration.</em></h1></Reveal>
<Reveal d={240}><p className="mt-6 max-w-xl text-lg text-cream/80">{B.name} brings the warmth of a traditional halwai to your table — sweets, savouries and event food, made the way it should be.</p></Reveal>
<Reveal d={360} className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={tel} className={`${btn} bg-saffron text-ink`}>Visit / Contact Us <ArrowRight size={18}/></a><a href={dirUrl} target="_blank" rel="noopener" className={`${btn} border border-cream/30 hover:bg-cream/10`}><Navigation size={18}/>Get Directions</a></Reveal></div>
<Reveal d={500} className="hidden self-end lg:col-span-4 lg:block"><div className="rounded-3xl border border-cream/15 bg-cream/5 p-6 backdrop-blur"><MapPin className="text-saffron"/><p className="mt-3 font-serif text-xl">Find us on Google Maps</p><p className="mt-1 text-sm text-cream/70">{B.address||B.area}</p>{B.rating>0&&<p className="mt-4 flex items-center gap-2 text-sm"><Star size={16} className="fill-saffron text-saffron"/>{B.rating} · {B.reviewCount} Google reviews</p>}</div></Reveal></div></section>

<section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center">
<Reveal><div className="pat relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand"><div className="absolute inset-6 grid place-items-center rounded-[1.5rem] border-2 border-dashed border-saffron/60 p-6 text-center font-serif text-xl text-maroon/70">Replace with a photo of the shop or signature sweets<br/><span className="text-sm font-sans">/public/shop.jpg</span></div></div></Reveal>
<Reveal d={150}><p className="text-xs font-semibold uppercase tracking-[.3em] text-saffron">About us</p><h2 className="mt-3 font-serif text-4xl font-semibold text-maroon sm:text-5xl">A halwai you can trust with your occasion.</h2>
<p className="mt-6 text-lg leading-relaxed text-ink/75">{B.name} ({B.tag}) is a local halwai business serving {B.area}. We focus on freshly prepared food, fair service and the personal attention that big chains can’t offer. {/* Add the real founding story here */}</p>
<ul className="mt-8 grid grid-cols-2 gap-4 text-sm"><li className="rounded-2xl bg-sand p-5"><b className="font-serif text-2xl text-maroon">Local</b><br/>Rooted in the neighbourhood</li><li className="rounded-2xl bg-sand p-5"><b className="font-serif text-2xl text-maroon">{B.rating>0?`${B.rating}★`:"Fresh"}</b><br/>{B.rating>0?"Google rating":"Prepared daily"}</li></ul></Reveal></section>

<section id="services" className="bg-sand/60 py-24"><div className="mx-auto max-w-7xl px-5"><Reveal><p className="text-xs font-semibold uppercase tracking-[.3em] text-saffron">What we make</p><h2 className="mt-3 max-w-2xl font-serif text-4xl font-semibold text-maroon sm:text-5xl">From daily sweets to full celebrations.</h2></Reveal>
<div className="mt-12 grid gap-5 md:grid-cols-3">{services.map((s,k)=><Reveal key={s.t} d={k*100} className={s.big?"md:col-span-2 md:row-span-2":""}><article className={`group h-full rounded-[2rem] p-8 transition duration-500 hover:-translate-y-1 ${s.big?"bg-maroon text-cream sm:p-12":"bg-cream"}`}><s.i className="text-saffron" size={s.big?44:30}/><h3 className={`mt-6 font-serif font-semibold ${s.big?"text-4xl":"text-2xl"}`}>{s.t}</h3><p className={`mt-3 ${s.big?"max-w-md text-cream/80":"text-ink/70"}`}>{s.d}</p><p className="mt-5 text-sm font-semibold text-saffron">✓ {s.b}</p><a href={wa} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline">Ask about this <ArrowRight size={16}/></a></article></Reveal>)}</div>
<p className="mt-6 text-xs text-ink/50">Edit this list to match your actual menu.</p></div></section>

<section id="why" className="mx-auto max-w-7xl px-5 py-24"><Reveal><h2 className="max-w-2xl font-serif text-4xl font-semibold text-maroon sm:text-5xl">Why people choose {B.name}</h2></Reveal>
<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{why.map(([I,t,d],k)=><Reveal key={t} d={k*100}><I className="text-saffron" size={32}/><h3 className="mt-4 font-serif text-xl font-semibold">{t}</h3><p className="mt-2 text-ink/70">{d}</p></Reveal>)}</div></section>

<section id="reviews" className="bg-ink py-24 text-cream"><div className="mx-auto max-w-7xl px-5"><Reveal><h2 className="font-serif text-4xl font-semibold sm:text-5xl">What customers say</h2>{B.rating>0&&<p className="mt-4 flex items-center gap-2 text-saffron"><Star className="fill-saffron"/>{B.rating} from {B.reviewCount} Google reviews</p>}</Reveal>
{REVIEWS.length>0&&<div className="mt-10 grid gap-5 md:grid-cols-3">{REVIEWS.map((r,k)=><Reveal key={r.name} d={k*100}><blockquote className="rounded-3xl bg-cream/5 p-7"><p className="text-cream/90">“{r.text}”</p><footer className="mt-4 text-sm text-saffron">— {r.name}</footer></blockquote></Reveal>)}</div>}
<Reveal d={150}><a href={mapsUrl} target="_blank" rel="noopener" className={`${btn} mt-10 bg-saffron text-ink`}>View All Google Reviews</a></Reveal></div></section>

<section id="location" className="mx-auto grid max-w-7xl gap-8 px-5 py-24 lg:grid-cols-5"><Reveal className="lg:col-span-2"><h2 className="font-serif text-4xl font-semibold text-maroon">Visit us</h2>
<ul className="mt-6 space-y-4"><li className="flex gap-3"><MapPin className="shrink-0 text-saffron"/>{B.address||`${B.area} — add full address`}</li><li className="flex gap-3"><Clock className="shrink-0 text-saffron"/>{B.hours||"Opening hours — add from Maps"}</li></ul>
<div className="mt-8 flex flex-wrap gap-3"><a href={dirUrl} target="_blank" rel="noopener" className={`${btn} bg-maroon text-cream`}><Navigation size={18}/>Get Directions</a><a href={tel} className={`${btn} border border-maroon/30`}><Phone size={18}/>Call</a><a href={wa} className={`${btn} border border-maroon/30`}><MessageCircle size={18}/>WhatsApp</a></div></Reveal>
<Reveal d={150} className="lg:col-span-3"><iframe title={`Map of ${B.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${B.lat},${B.lng}&z=17&output=embed`} className="h-80 w-full rounded-[2rem] border-0 sm:h-[26rem]"/></Reveal></section>

<section id="contact" className="px-5 pb-28"><div className="pat mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-saffron px-6 py-20 text-center text-ink sm:pb-20"><Reveal><h2 className="mx-auto max-w-2xl font-serif text-4xl font-semibold sm:text-6xl">Planning an occasion? Let’s make it sweet.</h2><p className="mx-auto mt-5 max-w-xl text-ink/80">Tell us the date and headcount — we’ll take care of the rest.</p>
<div className="mt-9 flex flex-wrap justify-center gap-3"><a href={tel} className={`${btn} bg-ink text-cream`}><Phone size={18}/>Call Now</a><a href={wa} className={`${btn} bg-maroon text-cream`}><MessageCircle size={18}/>WhatsApp</a><a href={dirUrl} target="_blank" rel="noopener" className={`${btn} border border-ink/30`}><Navigation size={18}/>Directions</a></div></Reveal></div></section>

<footer className="bg-ink px-5 py-14 pb-28 text-sm text-cream/70 sm:pb-14"><div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-3"><div><p className="font-serif text-2xl text-cream">{B.name}</p><p className="mt-1 text-saffron">{B.tag}</p><p className="mt-3">Traditional halwai sweets, savouries and event food.</p></div>
<div><p className="font-semibold text-cream">Explore</p><ul className="mt-3 space-y-2"><li><a href="#about">About</a></li><li><a href="#services">Services</a></li><li><a href="#reviews">Reviews</a></li><li><a href="#location">Location</a></li></ul></div>
<div><p className="font-semibold text-cream">Contact</p><ul className="mt-3 space-y-2"><li>{B.address||B.area}</li>{B.phone&&<li>{B.phone}</li>}{B.email&&<li>{B.email}</li>}{B.hours&&<li>{B.hours}</li>}<li><a className="underline" href={mapsUrl} target="_blank" rel="noopener">Open in Google Maps</a></li></ul></div></div>
<p className="mx-auto mt-10 max-w-7xl border-t border-cream/10 pt-6">© {new Date().getFullYear()} {B.name}. All rights reserved.</p></footer>
<MobileBar/></main>}
