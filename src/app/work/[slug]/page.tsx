import {notFound} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {projects} from "@/data/projects";
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){
 const{slug}=await params;const index=projects.findIndex(x=>x.slug===slug);const p=projects[index];if(!p)notFound();
 const next=projects[(index+1)%projects.length];
 const isConcept=p.status!=="portfolio";
 return <article className="container page case-study">
  <Link className="underlink back-link" href="/work">← Back to work</Link>
  <p className="eyebrow">{p.category} / {p.year} / {isConcept?"CONCEPT OR PLACEHOLDER":"SELECTED WORK"}</p>
  <h1>{p.title}</h1><p className="lede">{p.description}</p>
  <div className="project-image case-hero" data-cursor="view"><Image src={p.image} alt={p.alt} fill priority sizes="100vw"/></div>
  <div className="case-facts"><div><span>CLIENT / CONTEXT</span><b>{p.client}</b></div><div><span>YEAR</span><b>{p.year}</b></div><div><span>SERVICES</span><b>{p.scope.join(" · ")}</b></div></div>
  <div className="copy-grid"><p className="eyebrow">THE PROJECT</p><div><h2>{isConcept?"An exploration in progress.":"A visual system built around a clear message."}</h2><p>{isConcept?"This entry is currently a concept or placeholder. Replace the sample image and copy with original artwork, project objectives, design decisions and final deliverables before publishing it as portfolio work.":"Use this section to explain the business context, communication challenge and the role design played. Add only verified project details and approved client work."}</p><p className="note">{isConcept?"Concept / placeholder — not represented as commissioned client work.":"Add approved project-specific process notes, outcomes and final deliverables before launch."}</p></div></div>
  <div className="case-next"><div><p className="eyebrow">NEXT PROJECT</p><h2>{next.title}</h2><p className="muted">{next.category} · {next.year}</p></div><Link className="round magnetic" href={"/work/"+next.slug} aria-label={"Next project: "+next.title}>↗</Link></div>
  <div className="case-actions"><Link className="underlink" href={p.behanceUrl} target="_blank" rel="noreferrer">View full project on Behance ↗</Link><Link className="underlink" href="/contact">Discuss a project ↗</Link></div>
 </article>;
}
