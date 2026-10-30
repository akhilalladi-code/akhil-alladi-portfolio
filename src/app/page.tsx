import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Play, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

const featured = projects[0];
const rows = [
  { title: "Identity & brand worlds", eyebrow: "01 / BRAND SYSTEMS", categories: ["Brand Identity", "Corporate Design"] },
  { title: "Campaigns that communicate", eyebrow: "02 / CAMPAIGN DESIGN", categories: ["Social Media", "Advertising"] },
  { title: "Beyond the brief", eyebrow: "03 / DIGITAL & EXPERIMENTS", categories: ["Digital Design", "AI Experiments"] },
];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className="stream-card">
      <Link href={"/work/" + project.slug} className="stream-card-art" data-cursor="view" aria-label={"Open " + project.title}>
        <Image src={project.image} alt={project.alt} fill sizes="(max-width: 640px) 72vw, (max-width: 1100px) 36vw, 25vw" />
        <span className="stream-card-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="stream-card-open"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="stream-card-meta"><span>{project.category}</span><span>{project.year}</span></div>
      <h3><Link href={"/work/" + project.slug}>{project.title}</Link></h3>
      <p>{project.client}</p>
      {project.status !== "portfolio" && <small className="stream-status">{project.status === "concept" ? "Independent concept" : "Placeholder — replace with final artwork"}</small>}
    </article>
  );
}

function ProjectRow({ title, eyebrow, categories }: (typeof rows)[number]) {
  const items = projects.filter((project) => categories.includes(project.category));
  if (!items.length) return null;
  return (
    <section className="stream-row-section" aria-label={title}>
      <div className="stream-row-heading">
        <div><p className="stream-kicker">{eyebrow}</p><h2>{title}</h2></div>
        <Link href="/work" className="stream-see-all">View all work <ArrowRight size={15} /></Link>
      </div>
      <div className="stream-row">
        {items.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="stream-home">
      <section className="stream-hero">
        <Image className="stream-hero-image" src={featured.image} alt={featured.alt} fill priority sizes="100vw" />
        <div className="stream-hero-shade" />
        <div className="stream-hero-content">
          <p className="stream-kicker"><span className="stream-live-dot" /> INDEPENDENT CREATIVE PRACTICE <span className="stream-location">HYDERABAD, INDIA</span></p>
          <p className="stream-feature-label"><Sparkles size={14} /> FEATURED CASE STUDY <span>01 / 06</span></p>
          <h1>AKHIL<br /><span>ALLADI.</span></h1>
          <p className="stream-role">Graphic Designer <i /> Brand Identity <i /> Visual Storytelling</p>
          <p className="stream-intro">I turn ideas into visual experiences — building identities, campaigns and creative systems that make brands matter.</p>
          <div className="stream-actions">
            <Link href={"/work/" + featured.slug} className="stream-button stream-button-primary"><Play size={16} fill="currentColor" /> Explore featured work</Link>
            <Link href="/work" className="stream-button stream-button-glass"><ArrowDown size={16} /> Browse the collection</Link>
          </div>
          <p className="stream-hero-note">A CURATED SELECTION OF DESIGN, DIRECTION & DETAIL</p>
        </div>
        <div className="stream-hero-side"><span>CREATIVE PORTFOLIO</span><span>EST. 2021 — NOW</span></div>
      </section>

      <div className="stream-main">
        <section className="stream-intro-strip">
          <div><p className="stream-kicker">THE CREATIVE PROFILE</p><h2>Design with a point<br />of <em>view.</em></h2></div>
          <p>From brand identity and corporate communication to broadcast graphics and digital campaigns, I bring clarity and character to every frame. Currently shaping visual stories at the intersection of design, technology and culture.</p>
          <Link href="/about" aria-label="Read more about Akhil" className="stream-circle-link"><ArrowUpRight /></Link>
        </section>

        <div className="stream-rows">
          {rows.map((row) => <ProjectRow key={row.title} {...row} />)}
        </div>

        <section className="stream-services">
          <div><p className="stream-kicker">THE TOOLKIT / 04</p><h2>Ideas in.<br /><em>Impact out.</em></h2></div>
          <div className="stream-service-list">
            {["Brand identity & visual systems", "Corporate branding & communication", "Campaigns, social & digital creative", "Broadcast graphics & motion design", "Editorial, print & large-format design", "AI-assisted creative exploration"].map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p><ArrowUpRight size={16} /></div>
            ))}
            <Link href="/services" className="stream-text-link">Discover all services <ArrowRight size={15} /></Link>
          </div>
        </section>

        <section className="stream-contact">
          <p className="stream-kicker">NEXT UP / LET’S COLLABORATE</p>
          <h2>Have a good<br /><em>story to tell?</em></h2>
          <div className="stream-contact-bottom"><p>Let’s make something thoughtful, distinctive and worth remembering.</p><Link href="/contact" className="stream-button stream-button-primary">Start a conversation <ArrowUpRight size={17} /></Link></div>
        </section>
      </div>
    </div>
  );
}
