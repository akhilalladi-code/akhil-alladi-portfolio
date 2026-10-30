"use client";

import {useEffect} from "react";

export default function SiteEffects(){
  useEffect(()=>{
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine=window.matchMedia("(hover: hover) and (pointer: fine)");
    const progress=document.querySelector<HTMLElement>(".scroll-progress");
    let frame=0;
    let x=0,y=0,tx=0,ty=0;
    const cursor=document.querySelector<HTMLElement>(".custom-cursor");
    const label=cursor?.querySelector<HTMLElement>(".cursor-label");
    const update=()=>{
      frame=0;
      if(cursor){
        x+=(tx-x)*.22;y+=(ty-y)*.22;
        cursor.style.transform=`translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
        if(Math.abs(tx-x)+Math.abs(ty-y)>0.5) frame=requestAnimationFrame(update);
      }
    };
    const move=(event:PointerEvent)=>{
      tx=event.clientX;ty=event.clientY;
      if(cursor&&!frame) frame=requestAnimationFrame(update);
      if(cursor) cursor.classList.add("is-visible");
      if(progress){
        const max=document.documentElement.scrollHeight-window.innerHeight;
        progress.style.transform=`scaleX(${max>0?window.scrollY/max:0})`;
      }
    };
    const over=(event:PointerEvent)=>{
      const target=(event.target as HTMLElement|null)?.closest<HTMLElement>("[data-cursor]");
      cursor?.classList.toggle("is-active",!!target);
      if(label) label.textContent=target?.dataset.cursor==="view"?"VIEW PROJECT":target?.dataset.cursor==="drag"?"DRAG":"OPEN";
    };
    const leave=()=>cursor?.classList.remove("is-visible","is-active");
    const scroll=()=>{
      if(progress){
        const max=document.documentElement.scrollHeight-window.innerHeight;
        progress.style.transform=`scaleX(${max>0?window.scrollY/max:0})`;
      }
    };
    if(fine.matches&&!reduce.matches){
      document.documentElement.classList.add("has-custom-cursor");
      window.addEventListener("pointermove",move,{passive:true});
      document.addEventListener("pointerover",over);
      document.addEventListener("pointerout",over);
      document.addEventListener("pointerleave",leave);
      window.addEventListener("scroll",scroll,{passive:true});
    }
    return ()=>{
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove",move);
      document.removeEventListener("pointerover",over);
      document.removeEventListener("pointerout",over);
      document.removeEventListener("pointerleave",leave);
      window.removeEventListener("scroll",scroll);
      if(frame) cancelAnimationFrame(frame);
    };
  },[]);
  return <>
    <div className="scroll-progress" aria-hidden="true"/>
    <div className="custom-cursor" aria-hidden="true"><span className="cursor-dot"/><span className="cursor-label">OPEN</span></div>
  </>;
}
