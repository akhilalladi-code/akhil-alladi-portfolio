import type {Metadata,Viewport} from "next";
import Link from "next/link";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteEffects from "@/components/site-effects";
import PageTransition from "@/components/page-transition";

const siteUrl="https://akhilalladi-code.github.io/akhil-alladi-portfolio/";
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#f7f7f5"};
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:"Akhil Alladi® — Senior Graphic Designer",template:"%s — Akhil Alladi"},description:"Akhil Alladi is a Senior Graphic Designer based in Hyderabad, India, working across brand identity, corporate branding, visual communication, broadcast graphics and motion design.",alternates:{canonical:"/"},openGraph:{type:"website",locale:"en_IN",siteName:"Akhil Alladi",url:siteUrl,title:"Akhil Alladi® — Senior Graphic Designer",description:"Brand identity, corporate design, broadcast graphics and visual storytelling."},twitter:{card:"summary_large_image",title:"Akhil Alladi® — Senior Graphic Designer",description:"Brand identity, corporate design and visual communication."},robots:{index:true,follow:true}};
function Footer(){return <footer className="footer"><div className="container"><p className="eyebrow">HAVE A PROJECT IN MIND?</p><Link className="footer-title" href="/contact">Let’s make<br/><em>something matter.</em> ↗</Link><div className="footer-bottom"><b className="logo">AA®</b><span>Senior Graphic Designer · Hyderabad, India</span><a href="https://www.linkedin.com/in/akhil-alladi/" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>© {new Date().getFullYear()} Akhil Alladi</span></div></div></footer>}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><SiteHeader/><SiteEffects/><main id="main"><PageTransition>{children}</PageTransition></main><Footer/></body></html>}
