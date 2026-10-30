import {notFound} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {projects} from "@/data/projects";

export function generateStaticParams(){
  return projects.map(project=>({slug:project.slug}));
}

export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const index=projects.findIndex(project=>project.slug===slug);
  const project=projects[index];
  if(!project)notFound();

  const next=projects[(index+1)%projects.length];
  const previous=projects[(index+projects.length-1)%projects.length];

  return <article className="container page case-study">
    <Link className="underlink back-link" href="/work">← Back to all projects</Link>

    <header className="case-header">
      <p className="eyebrow">PROJECT {String(index+1).padStart(2,"0")} / {projects.length} · {project.category} · {project.year}</p>
      <h1>{project.title}</h1>
      <p className="lede">{project.description}</p>
    </header>

    <figure className="project-image case-hero" data-cursor="view">
      <Image src={project.image} alt={project.alt} fill priority sizes="100vw"/>
    </figure>

    <section className="case-facts" aria-label="Project information">
      <div><span>CLIENT / CONTEXT</span><b>{project.client}</b></div>
      <div><span>YEAR</span><b>{project.year}</b></div>
      <div><span>DISCIPLINE</span><b>{project.category}</b></div>
      <div><span>SERVICES</span><b>{project.scope.join(" · ")}</b></div>
    </section>

    <section className="copy-grid">
      <p className="eyebrow">OVERVIEW</p>
      <div>
        <h2>Making the message clear through design.</h2>
        <p>{project.description}</p>
        <p>This project is part of my selected design portfolio. The work brings together visual hierarchy, composition and brand-led communication to create a focused piece of creative work for its intended audience.</p>
      </div>
    </section>

    <section className="copy-grid">
      <p className="eyebrow">MY CONTRIBUTION</p>
      <div>
        <h2>Creative direction &amp; execution</h2>
        <p>The project scope includes {project.scope.join(", ").toLowerCase()}. The final presentation is intended to communicate the core message quickly while keeping the visual language consistent and considered.</p>
        <ul className="case-scope">{project.scope.map(item=><li key={item}>{item}</li>)}</ul>
      </div>
    </section>

    <section className="case-actions">
      <Link className="underlink" href={project.behanceUrl} target="_blank" rel="noreferrer">See original project on Behance ↗</Link>
      <Link className="underlink" href="/contact">Discuss a project ↗</Link>
    </section>

    <nav className="case-next" aria-label="Project navigation">
      <div><p className="eyebrow">PREVIOUS</p><h2><Link href={"/work/"+previous.slug}>{previous.title}</Link></h2></div>
      <Link className="round magnetic" href={"/work/"+next.slug} aria-label={"Next project: "+next.title}>↗</Link>
      <div><p className="eyebrow">NEXT PROJECT</p><h2><Link href={"/work/"+next.slug}>{next.title}</Link></h2></div>
    </nav>
  </article>;
}
