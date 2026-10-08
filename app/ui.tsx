"use client";
import {useEffect,useState} from "react";import {Menu,X} from "lucide-react";import {B,tel,dirUrl} from "@/lib/business";
export function Reveal({children,d=0,className=""}:{children:React.ReactNode;d?:number;className?:string}){
useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});document.querySelectorAll(".rv").forEach(n=>io.observe(n));return()=>io.disconnect()},[]);
return <div className={`rv ${className}`} style={{["--d" as string]:`${d}ms`}}>{children}</div>}
const links=[["About","#about"],["Services","#services"],["Why Choose Us","#why"],["Reviews","#reviews"],["Contact","#contact"]];
export function Nav(){const [s,setS]=useState(false),[o,setO]=useState(false);
useEffect(()=>{const f=()=>setS(scrollY>40);f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f)},[]);
return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${s||o?"bg-cream/90 backdrop-blur shadow-sm py-2":"py-4"}`}>
<nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-5">
<a href="#top" className="font-serif text-xl font-semibold text-maroon">{B.name}<span className="ml-2 hidden text-xs font-sans font-medium uppercase tracking-widest text-saffron sm:inline">{B.tag}</span></a>
<ul className="hidden items-center gap-8 text-sm font-medium lg:flex">{links.map(([n,h])=><li key={h}><a href={h} className="hover:text-saffron transition-colors">{n}</a></li>)}</ul>
<div className="flex items-center gap-3"><a href={tel} className="hidden rounded-full bg-maroon px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-ink sm:block">Enquire Now</a>
<button aria-label="Menu" aria-expanded={o} onClick={()=>setO(!o)} className="grid h-11 w-11 place-items-center rounded-full lg:hidden">{o?<X/>:<Menu/>}</button></div></nav>
<div className={`grid transition-all duration-500 lg:hidden ${o?"grid-rows-[1fr]":"grid-rows-[0fr]"}`}><ul className="overflow-hidden px-5">{links.map(([n,h])=><li key={h}><a onClick={()=>setO(false)} href={h} className="block border-b border-sand py-4 text-lg font-serif">{n}</a></li>)}<li className="py-4"><a href={tel} className="block rounded-full bg-maroon py-3.5 text-center font-semibold text-cream">Enquire Now</a></li></ul></div></header>}
export function MobileBar(){return <div className="fixed inset-x-3 bottom-3 z-50 flex gap-2 rounded-full bg-ink/95 p-2 shadow-2xl backdrop-blur sm:hidden" style={{marginBottom:"env(safe-area-inset-bottom)"}}>
<a href={tel} className="flex-1 rounded-full bg-saffron py-3 text-center text-sm font-bold text-ink">Call</a><a href={dirUrl} target="_blank" rel="noopener" className="flex-1 rounded-full bg-cream/10 py-3 text-center text-sm font-bold text-cream">Directions</a></div>}
