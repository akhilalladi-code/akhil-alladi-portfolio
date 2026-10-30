"use client";

import Link from "next/link";
import {useState} from "react";

export default function SiteHeader(){
  const[open,setOpen]=useState(false);
  const close=()=>setOpen(false);
  return <header className="header"><div className="container nav">
    <Link className="logo" href="/" onClick={close}>AA<span>®</span></Link>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={()=>setOpen(v=>!v)}>{open?"Close":"Menu"} <span aria-hidden="true">{open?"−":"+"}</span></button>
    <nav id="primary-navigation" className={open?"is-open":""} aria-label="Main navigation">
      <Link href="/work" onClick={close}>Work</Link><Link href="/about" onClick={close}>About</Link><Link href="/services" onClick={close}>Services</Link><Link href="/resume" onClick={close}>Resume</Link>
    </nav>
    <Link className="nav-cta magnetic" href="/contact">Let’s talk ↗</Link>
  </div></header>;
}
