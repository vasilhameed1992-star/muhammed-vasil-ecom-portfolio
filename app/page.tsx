"use client";
import { useEffect, useState } from "react";

const channels = [
  ["/logos/channel-1.png","Virgin Megastore"],["/logos/channel-4.png","Sharaf DG"],
  ["/logos/channel-6.png","Amazon"],["/logos/channel-8.png","Noon"],
  ["/logos/channel-9.png","Jumbo"],["/logos/channel-12.png","e&"],
  ["/logos/channel-14.png","Microless"],["/logos/channel-18.png","Careem"],
  ["/logos/channel-20.png","Mumzworld"],["/logos/channel-21.png","Trendyol"],
  ["/logos/channel-2.png","Xcite"],["/logos/channel-3.png","Jarir"],
  ["/logos/channel-5.png","Store974"],["/logos/channel-7.png","Snoonu"],
  ["/logos/channel-10.png","Emax"],["/logos/channel-11.png","Best"],
  ["/logos/channel-13.png","Z Games"],["/logos/channel-15.png","Blink"],
  ["/logos/channel-17.png","Level Up"],["/logos/channel-19.png","Deliveroo"]
  ,["/logos/carrefour.svg","Carrefour"],["/logos/firstcry.jpg","FirstCry"],
  ["/logos/namshi.png","Namshi"],["/logos/babyshop.jpg","Babyshop"],
  ["/logos/gamestreet.jpg","Game Street"],["/logos/gccgamers.jpg","GCC Gamers"],
  ["/logos/takealot.png","Takealot"],["/logos/jumia.png","Jumia"],
  ["/logos/evetech.webp","Evetech"],["/logos/cartlow.jpeg","Cartlow"]
];
const brandNames=["SteelSeries","Playseat","Fanatec","D-BOX","Case-Mate","Belkin","adidas","JURA","Ledger","Cabeau","BuddyPhones","Twelve South","Nanoleaf","Lollipop","Kikkerland","STM","iOttie","Linksys","XD Design","Insta360","Ember","myFirst"];

export default function Home(){
  const [solid,setSolid]=useState(false);
  useEffect(()=>{
    const fn=()=>{setSolid(scrollY>20);document.documentElement.style.setProperty("--page-scroll",String(scrollY));};
    fn();addEventListener("scroll",fn,{passive:true});
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add("in-view");e.target.querySelectorAll<HTMLElement>("[data-count]").forEach(node=>{if(node.dataset.done)return;node.dataset.done="true";const end=Number(node.dataset.count);const suffix=node.dataset.suffix||"";const start=performance.now();const tick=(now:number)=>{const p=Math.min((now-start)/900,1);node.textContent=`${Math.round(end*(1-Math.pow(1-p,3)))}${suffix}`;if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)});}),{threshold:.16});
    document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
    return()=>{removeEventListener("scroll",fn);observer.disconnect()}
  },[]);
  return <main>
    <div className="scrollProgress" aria-hidden="true"/>
    <nav className={solid?"solid":""}>
      <a className="wordmark" href="#top"><img src="/mv-logo.svg" alt="MV"/><span>Muhammed Vasil</span></a>
      <div className="navlinks"><a href="#about">About</a><a href="#experience">Experience</a><a href="#channels">Channels</a><a href="#contact">Contact</a></div>
      <a className="navCta" href="https://www.linkedin.com/in/muhammed-vasil-320668132/" target="_blank">LinkedIn ↗</a>
    </nav>

    <section className="hero" id="top">
      <div className="heroCopy">
        <p className="availability"><i/> Based in Dubai · Open to leadership opportunities</p>
        <h1>Building profitable<br/><span>e-commerce growth.</span></h1>
        <p className="heroIntro">Head of E-commerce with close to 10 years of experience scaling marketplaces, DTC, eRetail, quick commerce and omnichannel businesses across GCC, India and South Africa.</p>
        <div className="actions"><a className="primary" href="#experience">View experience</a><a className="secondary" href="mailto:vasilhameed1992@gmail.com">Contact me</a></div>
        <div className="heroProof"><div><b>3</b><span>Regions</span></div><div><b>60+</b><span>Brands</span></div><div><b>8</b><span>Team built</span></div><div><b>35%</b><span>YoY growth</span></div></div>
      </div>
      <div className="portraitStage">
        <div className="portraitHalo" aria-hidden="true"><span>GCC</span><span>INDIA</span><span>SOUTH AFRICA</span></div>
        <div className="portraitCard cleanPhoto"><img src="/muhammed-vasil.jpeg" alt="Muhammed Vasil"/><div className="photoFade"/><div className="profileLabel"><b>E-commerce Manager</b><span>Head of E-commerce Function</span></div></div>
        <div className="valueChip chipOne"><b>35%</b><span>YoY growth</span></div>
        <div className="valueChip chipTwo"><b>60+</b><span>Brands</span></div>
      </div>
    </section>

    <section className="trusted"><p>Brands I have worked with</p><div className="brandMarquee"><div>{[...brandNames,...brandNames].map((name,i)=><span className="brandName" key={i}>{name}<i>•</i></span>)}</div></div></section>

    <section className="about section reveal" id="about">
      <p className="eyebrow">What I do</p>
      <div className="aboutGrid"><div className="aboutHeading"><h2>I lead the complete<br/>e-commerce function.</h2><div className="scopeDial" aria-hidden="true"><span>P&amp;L</span><span>PPC</span><span>DTC</span><span>AI</span><b>360°</b></div></div><div><p>Commercial ownership meets hands-on execution. I manage regional P&amp;L, marketplace strategy, brand onboarding, pricing, assortment, content, PPC, performance marketing, campaigns, fulfilment, technology and executive reporting.</p><p>I build full-funnel growth plans across Sponsored Products, Sponsored Brands and Sponsored Display, covering keyword and ASIN targeting, budget allocation, bid optimisation, ROAS, conversion and retail readiness. As a Computer Science engineer, I also use AI and automation to improve decision-making and execution speed.</p><div className="pillRow"><span>Marketplaces</span><span>DTC</span><span>eRetail</span><span>Quick Commerce</span><span>PPC & ROAS</span><span>Performance Marketing</span><span>AI-Enabled Commerce</span></div></div></div>
    </section>

    <section className="results section reveal">
      <p className="eyebrow">Selected impact</p>
      <div className="resultGrid"><Result n="35%" title="Revenue growth" text="Year-on-year growth through disciplined trading and channel expansion."/><Result n="15%" title="Margin improvement" text="Pricing, mix and profitability levers managed across the portfolio."/><Result n="60+" title="Brands managed" text="Consumer technology, electronics and gaming brands across major channels."/><Result n="10+" title="Brand launches" text="Research, onboarding and go-to-market execution across multiple regions."/></div>
    </section>

    <section className="experience section reveal" id="experience">
      <p className="eyebrow">Experience</p><div className="sectionTitle"><h2>Built from the ground up.<br/>Now leading regionally.</h2><p>A career combining commercial leadership, team building and technical execution.</p></div>
      <div className="roles">
        <Role period="2024 — Present" company="Techxhub · Dubai" title="E-commerce Manager" subtitle="Head of E-commerce Function" text="Sole owner of the end-to-end e-commerce function across GCC, India and South Africa. Lead regional P&L, Amazon and Noon Vendor + Seller operations, eRetail expansion, brand onboarding, GTM, fulfilment, PPC, performance reporting, content, technology and AI-enabled projects." tags={["GCC · India · South Africa","P&L ownership","Vendor + Seller","PPC & marketing"]}/>
        <Role period="2019 — 2024" company="Shift Electronics · Dubai" title="E-commerce Key Account" subtitle="Assistant Manager" text="Built the e-commerce business across DTC, marketplaces and eRetail channels. Created and led an eight-person team, established commercial and marketing processes, managed marketplace advertising and scaled a portfolio of 60+ brands across leading regional retailers." tags={["Team of 8","DTC build","60+ brands","Performance marketing"]}/>
        <Role period="2017 — 2019" company="ITD / DXB.NET · Dubai" title="Website Developer" subtitle="E-commerce Specialist" text="Managed websites, catalogues and marketplace operations while building the technical foundation that now supports my commercial leadership." tags={["Web development","CMS","Marketplaces","Analytics"]}/>
      </div>
    </section>

    <section className="channels section reveal" id="channels">
      <div className="sectionTitle"><div><p className="eyebrow">Channel experience</p><h2>Across every route<br/>to market.</h2></div><p>Direct experience operating Vendor, Seller, eRetail and DTC models across the platforms shaping digital retail in the region.</p></div>
      <div className="logoGrid">{channels.map(([src,name],i)=><div key={name} className="logoTile" style={{transitionDelay:`${i*45}ms`}}><img src={src} alt={name}/></div>)}</div>
    </section>

    <section className="expertise section reveal">
      <p className="eyebrow">Leadership scope</p><div className="expertiseGrid"><Expert title="P&L & commercial growth" text="Revenue, margin, contribution, budgeting, forecasting, pricing and profitability."/><Expert title="Marketplace expansion" text="Amazon, Noon, regional eRetailers, local and cross-border operating models."/><Expert title="PPC & performance marketing" text="SP, SB and SD strategy, keywords, bids, budgets, ROAS, CAC and conversion."/><Expert title="DTC & technology" text="Shopify, CMS, UX, merchandising, catalogue, integrations and conversion."/><Expert title="Operations & fulfilment" text="Demand planning, inventory, FBA, last mile, SLAs, returns and CX."/><Expert title="Teams & AI" text="Function building, clear KPIs, automation, project agents and faster execution."/></div>
    </section>

    <section className="contact section reveal" id="contact"><div><p className="eyebrow">Let’s connect</p><h2>Ready to build the<br/>next growth story.</h2></div><div className="contactCopy"><p>I’m exploring Head of E-commerce and Senior E-commerce Manager opportunities in the UAE.</p><a className="primary" href="mailto:vasilhameed1992@gmail.com">Start a conversation</a><span><a href="mailto:vasilhameed1992@gmail.com">vasilhameed1992@gmail.com</a> · <a href="tel:+971509210219">+971 50 921 0219</a> · Dubai, UAE</span></div></section>
    <footer><b className="footerBrand"><img src="/mv-logo.svg" alt="MV"/><span>Muhammed Vasil</span></b><span>Head of E-commerce · Dubai</span><a href="#top">Back to top ↑</a></footer>
  </main>
}

function Result({n,title,text}:{n:string,title:string,text:string}){const match=n.match(/^(\d+)(.*)$/);return <article><b data-count={match?.[1]} data-suffix={match?.[2]}>{n}</b><h3>{title}</h3><p>{text}</p></article>}
function Role({period,company,title,subtitle,text,tags}:{period:string,company:string,title:string,subtitle:string,text:string,tags:string[]}){return <article><div className="roleMeta"><span>{period}</span><b>{company}</b></div><div className="roleTitle"><h3>{title}</h3><p>{subtitle}</p></div><div className="roleCopy"><p>{text}</p><div>{tags.map(t=><span key={t}>{t}</span>)}</div></div></article>}
function Expert({title,text}:{title:string,text:string}){return <article><div className="check">✓</div><h3>{title}</h3><p>{text}</p></article>}
