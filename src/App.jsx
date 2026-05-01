import { useState, useEffect, useRef } from "react";
import { CSS } from "./styles.js";

/* ═══════════════════════════════════════════════════════════════
   ORLANDO LIFESTYLE DENTISTRY — World-Class AdWords Landing Page  
   Brand: Teal #14B2CA / #0A8FA5
   Conversion-Optimized for $4-5K/mo AdWords Spend
   ═══════════════════════════════════════════════════════════════ */

// ─── IMAGE ASSETS ───
// Real photos kept for: doctor portrait, before/after cases
// Generated images used for: hero, services, practice atmosphere
const IMG = {
  logo: "https://static.wixstatic.com/media/57ca16_181e13fce0bc4f77be487736a75c10f2~mv2.png/v1/fill/w_400,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/57ca16_181e13fce0bc4f77be487736a75c10f2~mv2.png",
  logoFooter: "https://static.wixstatic.com/media/57ca16_111341539ca34d778d2c44eac085f38d~mv2.png/v1/fill/w_280,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/OLD_edited.png",
  // Real doctor photo — must stay authentic
  drMike: "https://static.wixstatic.com/media/57ca16_f63e6af0f5824dfebc0f7559c047c85d~mv2.png/v1/fill/w_700,h_714,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/OLDTeamPhotos-39_edited.png",
  // Real before/after — must stay authentic
  beforeAfter: "https://static.wixstatic.com/media/57ca16_6b82a9fb37e14fbcae6b5d65083d3e05~mv2.png/v1/fill/w_1100,h_268,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202026-01-02%20145543.png",
  // Generated images — will be swapped with generated assets
  hero: "/images/hero.png",
  singleImplant: "/images/single-implant.png",
  multiImplant: "/images/multi-implant.png",
  fullMouth: "/images/full-mouth.png",
  practice1: "/images/practice-1.png",
  practice2: "/images/practice-2.png",
  practice3: "/images/practice-3.png",
  // Infographics from original site (proprietary data graphics)
  teethPromise: "https://static.wixstatic.com/media/57ca16_703d4b97a0ef447599a250f124faa6c4~mv2.png/v1/crop/x_0,y_0,w_2776,h_1219/fill/w_900,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/123Teeth%20Product%20Promise.png",
  teethComparison: "https://static.wixstatic.com/media/57ca16_fd3cf34ec0454607b66e3d3dde81a590~mv2.png/v1/fill/w_1000,h_710,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/123%20teeth%20comparison%20table.png",
  svcSingle: "https://static.wixstatic.com/media/57ca16_3e777a3c1edc41ddb0ae656cabda67d9~mv2.png/v1/fill/w_800,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SINGLE%20TOOTH%20IMPLANT%20STARTING%20AT%201995.png",
  svcMulti: "https://static.wixstatic.com/media/57ca16_c9c4a4df37ac48d7b67a839008294255~mv2.png/v1/crop/x_22,y_0,w_3750,h_1748/fill/w_800,h_372,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MULTI%20IMPLANT%20BRIDGE%20STARTING%20AT%203995.png",
  svcFull: "https://static.wixstatic.com/media/57ca16_250c247d3a3b4e3f98f5fb656641b679~mv2.png/v1/crop/x_0,y_0,w_3881,h_1711/fill/w_800,h_353,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/FULL%20ARCH%20TEETH%20REPLACEMENT%20STARTING%20AT%209995.png",
  whyAdvantages: "https://static.wixstatic.com/media/57ca16_23735a3bd64a4ae89b020f19d5572457~mv2.png/v1/fill/w_900,h_467,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/advantages.png",
  whySedation: "https://static.wixstatic.com/media/57ca16_988c9dca1df44c47bfed2e02e3918703~mv2.png/v1/fill/w_900,h_495,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sedation.png",
  whyRelationship: "https://static.wixstatic.com/media/57ca16_d238031956da439186f3c4a8b081d14e~mv2.png/v1/fill/w_860,h_471,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/relationship.png",
  whyProcess: "https://static.wixstatic.com/media/57ca16_a50336adb74a4841b4c69739fee155fc~mv2.png/v1/fill/w_860,h_499,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/process.png",
  sponsors: "https://static.wixstatic.com/media/57ca16_dcbce6c2c6ec4407a79ad32835edc598~mv2.png/v1/crop/x_25,y_0,w_3388,h_628/fill/w_1100,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SPONSORS%20AND%20AFFILIATES.png",
};

// ─── HOOKS ───
function useCounter(end, dur = 2000) {
  const [count, setCount] = useState(0);
  const [go, setGo] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGo(true); o.disconnect(); } }, { threshold: 0.3 });
    o.observe(el); return () => o.disconnect();
  }, []);
  useEffect(() => {
    if (!go) return; let f; const s = performance.now();
    const step = (n) => { const p = Math.min((n - s) / dur, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end)); if (p < 1) f = requestAnimationFrame(step); };
    f = requestAnimationFrame(step); return () => cancelAnimationFrame(f);
  }, [go, end, dur]);
  return { count, ref };
}

function useReveal(t = 0.12) {
  const ref = useRef(null); const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: t });
    o.observe(el);
    // Fallback: reveal after 1.5s even if IntersectionObserver hasn't fired (prevents blank gaps)
    const fallback = setTimeout(() => setV(true), 1500);
    return () => { o.disconnect(); clearTimeout(fallback); };
  }, [t]);
  return { ref, v };
}

// ─── ICONS ───
const Phone = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;
const Arrow = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>;
const Check = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>;
const Star = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="#F5C518" stroke="#F5C518" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const Pin = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const Mail = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const Clock = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const MenuIco = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="16" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>;
const X = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const Shield = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const Zap = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;

// ═══════════════════════════════════════════════════════════════
export default function OLDv2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", smsOptIn: false });
  const [submitted, setSubmitted] = useState(false);
  const [modal, setModal] = useState(null); // 'privacy' | 'terms' | null

  useEffect(() => { const fn = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", fn, { passive: true }); return () => window.removeEventListener("scroll", fn); }, []);
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => { const fn = () => setShowSticky(window.scrollY > 600); window.addEventListener("scroll", fn, { passive: true }); return () => window.removeEventListener("scroll", fn); }, []);

  const r1=useReveal(),r2=useReveal(),r3=useReveal(),r4=useReveal(),r5=useReveal(),r6=useReveal(),r7=useReveal(),r8=useReveal(),r9=useReveal(),r10=useReveal(),r11=useReveal(),r12=useReveal(),r13=useReveal();
  const c1=useCounter(20000,2500),c2=useCounter(2000,2000),c3=useCounter(20,1500),c4=useCounter(98,2000);

  const testimonials = [
    { name: "Maria S.", text: "Dr. Mike and his team changed my life. I went from being afraid to smile to showing my teeth every chance I get. The 123Teeth process was so much faster than I expected.", loc: "Orlando, FL" },
    { name: "James R.", text: "I researched implant doctors for months. Nobody comes close to the experience and technology Dr. Mike offers. The financing made it possible for me to get full mouth implants.", loc: "Winter Park, FL" },
    { name: "Linda T.", text: "I was told by two other dentists I needed bone grafting and would wait over a year. Dr. Mike's 123Teeth approach got me my new smile in a fraction of the time. Incredible.", loc: "Brevard County, FL" },
    { name: "Robert K.", text: "The whole team treats you like family from the moment you walk in. State-of-the-art facility, transparent pricing, and the results speak for themselves.", loc: "Orlando, FL" },
    { name: "Sandra M.", text: "I was terrified of the dentist my whole life. Dr. Mike's sedation options made the entire experience painless. I woke up with a brand new smile. Worth every penny.", loc: "Kissimmee, FL" },
    { name: "David L.", text: "After wearing dentures for 8 years, I finally got permanent implants. The difference is night and day. I can eat anything, laugh freely, and feel like myself again.", loc: "Lake Nona, FL" },
  ];

  const practicePhotos = [IMG.practice1, IMG.practice2, IMG.practice3];
  const nav = [{l:"Services",h:"#services"},{l:"123Teeth™",h:"#process"},{l:"Pricing",h:"#pricing"},{l:"Dr. Mike",h:"#doctor"},{l:"Reviews",h:"#reviews"},{l:"Contact",h:"#contact"}];

  return (
    <>
      <style>{CSS}</style>
      <div className="G"/>

      {/* MOBILE NAV */}
      <div className={`mob-nav ${menuOpen?"open":""}`}>
        <button className="mob-x" onClick={()=>setMenuOpen(false)}><X/></button>
        {nav.map(n=><a key={n.h} href={n.h} onClick={()=>setMenuOpen(false)}>{n.l}</a>)}
        <a href="tel:4075476453" className="cta-hdr" style={{marginTop:12}}><Phone/> (407) 547-6453</a>
      </div>

      {/* HEADER */}
      <header className={`hdr ${scrolled?"s":""}`}>
        <div className="hdr-in">
          <a href="#"><img src={IMG.logo} alt="Orlando Lifestyle Dentistry" className="logo-img"/></a>
          <nav className="nav-d">
            {nav.map(n=><a key={n.h} href={n.h}>{n.l}</a>)}
            <a href="tel:4075476453" className="cta-hdr"><Phone/> (407) 547-6453</a>
          </nav>
          <button className="mob-tog" onClick={()=>setMenuOpen(true)}><MenuIco/></button>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="mq" style={{position:"fixed",top:0,zIndex:999,display:scrolled?"none":"block"}}>
        <div className="mq-t">
          {[1,2].map(i=><span key={`a${i}`}>Free Consultation</span>)}
          {[1,2].map(i=><span key={`b${i}`}>20,000+ Implants Placed</span>)}
          {[1,2].map(i=><span key={`c${i}`}>Financing From $99/mo</span>)}
          {[1,2].map(i=><span key={`d${i}`}>123Teeth™ — 3 Visits to Your New Smile</span>)}
          {[1,2].map(i=><span key={`e${i}`}>98% Success Rate</span>)}
          {[1,2].map(i=><span key={`f${i}`}>Celebrating 15 Years in Orlando</span>)}
          {[1,2].map(i=><span key={`g${i}`}>Free Consultation</span>)}
          {[1,2].map(i=><span key={`h${i}`}>20,000+ Implants Placed</span>)}
        </div>
      </div>

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-bg" style={{backgroundImage:`url('${IMG.hero}')`}}/>
        <div className="hero-ov"/>
        <div className="hero-mesh"/>
        <div className="hero-ln" style={{left:"20%"}}/>
        <div className="hero-ln" style={{left:"50%"}}/>
        <div className="hero-ln" style={{left:"80%"}}/>
        <div className="hero-ct">
          <div>
            <div className="hero-badge"><span className="hero-dot"/> Central Florida's #1 Implant Specialists</div>
            <h1>Your New<br/><em>Smile</em> Starts<br/>Right Here</h1>
            <p className="hero-sub">Over <strong>20,000 dental implants</strong> placed with a <strong>98% success rate</strong>. Experience the 123Teeth™ difference — your complete smile in just 3 visits. Financing from <strong>$99/month</strong>.</p>
            <div className="hero-ctas">
              <a href="#contact" className="bp">Book Free Consultation <Arrow/></a>
              <a href="tel:4075476453" className="bs"><Phone/> Call Now</a>
            </div>
            <div className="hero-trust">
              <div className="ht-item"><Shield/> No Obligation</div>
              <div className="ht-item"><Zap/> We Call Within 5 Min</div>
              <div className="ht-item"><Check/> On-Site Zirconia Lab</div>
            </div>
            <div className="urgency">
              <span className="urgency-dot"/>
              <span className="urgency-text">Only <strong>4 consultation slots</strong> remaining this week — book now to secure yours</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="hc-row"><div className="hc-stars">{[1,2,3,4,5].map(i=><Star key={i}/>)}</div><span className="hc-rating">5.0</span><span className="hc-label">200+ Google Reviews</span></div>
            <div className="hc-div"/>
            <div className="hc-stats">
              <div><div className="hc-s-n">20K+</div><div className="hc-s-l">Implants</div></div>
              <div><div className="hc-s-n">20+</div><div className="hc-s-l">Years Exp.</div></div>
              <div><div className="hc-s-n">98%</div><div className="hc-s-l">Success</div></div>
              <div><div className="hc-s-n">3</div><div className="hc-s-l">Visit Process</div></div>
            </div>
            <div className="hc-div"/>
            <a href="#contact" className="hc-cta">Request My Free Consultation</a>
            <p style={{fontSize:11,color:"var(--t3)",textAlign:"center",marginTop:8}}>No obligation · We call within 5 min</p>
          </div>
        </div>
      </section>

      {/* CREDENTIAL BAR */}
      <div className="cred">
        <div className="cred-in">
          <div className="cred-item"><strong>Nova Southeastern</strong> Graduate</div>
          <span className="cred-sep">|</span>
          <div className="cred-item"><strong>AGD</strong> Accredited CE Provider</div>
          <span className="cred-sep">|</span>
          <div className="cred-item">National Speaker · <strong>30+ States</strong></div>
          <span className="cred-sep">|</span>
          <div className="cred-item">On-Site <strong>Zirconia Lab</strong></div>
          <span className="cred-sep">|</span>
          <div className="cred-item"><strong>15 Years</strong> in Orlando</div>
        </div>
      </div>

      {/* ═══ TESTIMONIALS — Trust first for paid traffic ═══ */}
      <section className="sec testi-bg" id="reviews">
        <div className="sec-in">
          <div ref={r10.ref} className={`rv ${r10.v?"v":""}`} style={{textAlign:"center"}}>
            <div className="lab" style={{justifyContent:"center"}}>Patient Stories</div>
            <h2 className="stl">Real Results. <em>Real People.</em></h2>
            <p className="sdesc" style={{margin:"0 auto"}}>Over 200 five-star Google reviews. Every patient and case is different — we recommend a consultation with a 3D radiograph to determine if implants are right for you.</p>
          </div>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="tg-card">
                <div className="tg-stars">{[1,2,3,4,5].map(j=><Star key={j}/>)}</div>
                <p className="tg-text">"{t.text}"</p>
                <div className="tg-author">{t.name}</div>
                <div className="tg-loc">{t.loc}</div>
              </div>
            ))}
          </div>
          <div className="tg-google">
            <div className="tg-google-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              <span><strong>5.0</strong> rating · 200+ reviews on Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DOCTOR — Personal trust, right after social proof ═══ */}
      <section className="sec" id="doctor" style={{background:"var(--bg2)"}}>
        <div className="sec-in">
          <div ref={r7.ref} className={`rv ${r7.v?"v":""}`}>
            <div className="lab">Meet Your Doctor</div>
            <h2 className="stl">Dr. Michael <em>Gagaoudakis</em></h2>
            <p className="sdesc">Michael Gagaoudakis DMD, CDE-AGD</p>
          </div>
          <div ref={r8.ref} className={`rv doc-grid ${r8.v?"v":""}`} style={{transitionDelay:"0.15s"}}>
            <div className="doc-img">
              <img src={IMG.drMike} alt="Dr. Michael Gagaoudakis — Orlando Lifestyle Dentistry"/>
            </div>
            <div>
              <div className="doc-text">
                <h3>"People over profit — always."</h3>
                <p>With 8 years of formal training, 20 years of implant placement & restoration experience, and hundreds of hours of continuing education, Dr. Michael Gagaoudakis is highly qualified to do your implant surgery and restoration. But more than experience, certifications, and accolades — the biggest reason patients love him is because he cares.</p>
                <p>Dr. Mike is the owner and operator of Orlando Lifestyle Dentistry. He's been in business in the Orlando area for 15 years and has established a patient following of over 4,000 patients. He created the 123Teeth™ dental implant workflow that helps patients avoid bone grafting and dentures, saving months or years in their restoration process.</p>
                <p>He is a certified PACE Continuing Education provider for the AGD, which means he holds special accreditation to teach dentists to place and restore dental implants. He has taught hundreds of dentists advanced surgical and restorative techniques across 30+ states.</p>
              </div>
              <div className="doc-creds">
                {["Nova Southeastern DMD","AGD Accredited (CDE)","Sedation & Anxiolysis","Zygomatic Implants","TMJ/Occlusion Therapy","Lab Technician Cert.","CAD/CAM+ Manufacturing","123Teeth™ Creator","National Speaker"].map(t=><span key={t} className="doc-tag">{t}</span>)}
              </div>
              {/* YouTube Video */}
              <div className="vid-wrap" style={{marginTop:32}}>
                <video controls playsInline preload="metadata" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}}>
                  <source src="/video.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              </div>
              <p style={{fontSize:12,color:"var(--t3)",marginTop:8,fontStyle:"italic"}}>Watch Dr. Mike explain the 123Teeth™ process and hear from real patients</p>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ SERVICES — Now positioned after trust is established ═══ */}
      <section className="sec" id="services">
        <div className="sec-in">
          <div ref={r1.ref} className={`rv ${r1.v?"v":""}`}>
            <div className="lab">Implant Services</div>
            <h2 className="stl">New Teeth <em>Permanently</em> Anchored<br/>to Dental Implants</h2>
            <p className="sdesc">Everything under one roof — consultation, surgery, on-site lab fabrication, and post-op care. The only privately owned implant specialty practice in Central Florida providing this level of service.</p>
          </div>
          <div ref={r2.ref} className={`rv svc-grid ${r2.v?"v":""}`} style={{transitionDelay:"0.15s"}}>
            <div className="svc">
              <img src={IMG.singleImplant} alt="Single tooth dental implant" className="svc-img"/>
              <div className="svc-body">
                <div className="svc-tag">Starting at $1,995</div>
                <h3>Single Implant</h3>
                <p>A permanent solution for replacing a missing tooth. Restores the look, feel, and function of a natural tooth without affecting neighboring teeth — in half the time of traditional dental implants.</p>
                <div className="svc-price">$99<small>/mo</small></div>
                <div className="svc-sub">Zirconia crown included</div>
              </div>
            </div>
            <div className="svc">
              <img src={IMG.multiImplant} alt="Multiple dental implant bridge" className="svc-img"/>
              <div className="svc-body">
                <div className="svc-tag">Starting at $3,995</div>
                <h3>Multiple Implants</h3>
                <p>Replace several missing teeth with strong, stable support. Each implant serves as a foundation for individual crowns or bridges, preserving jawbone health and ensuring a natural look and feel.</p>
                <div className="svc-price">$199<small>/mo</small></div>
                <div className="svc-sub">Zirconia bridge included</div>
              </div>
            </div>
            <div className="svc">
              <img src={IMG.fullMouth} alt="Full mouth dental implants all-on-x" className="svc-img"/>
              <div className="svc-body">
                <div className="svc-tag">Starting at $9,995</div>
                <h3>Full Mouth Implants</h3>
                <p>A full arch of prosthetic teeth securely supported by strategically placed implants. Restores natural function, improves appearance, and provides a long-lasting alternative to traditional dentures.</p>
                <div className="svc-price">$399<small>/mo</small></div>
                <div className="svc-sub">Zirconia prosthetic included</div>
              </div>
            </div>
          </div>

          {/* BEFORE/AFTER */}
          <div ref={r11.ref} className={`rv ba-wrap ${r11.v?"v":""}`} style={{transitionDelay:"0.2s"}}>
            <div className="lab" style={{marginBottom:16}}>Real Results</div>
            <img src={IMG.beforeAfter} alt="Before and after dental implant case"/>
            <p className="ba-disclaimer">While this is an actual case from our practice, every patient and case is different and results may vary. We recommend a consultation with the doctor and a 3D radiograph to find out if dental implants could be right for you.</p>
          </div>
        </div>
      </section>

      {/* ═══ 123TEETH™ ═══ */}
      <section className="sec proc-bg" id="process">
        <div className="sec-in">
          <div ref={r3.ref} className={`rv ${r3.v?"v":""}`} style={{textAlign:"center"}}>
            <div className="lab" style={{justifyContent:"center"}}>The 123Teeth™ Process</div>
            <h2 className="stl" style={{margin:"0 auto 18px"}}>Three Visits. One <em>Life-Changing</em> Smile.</h2>
            <p className="sdesc" style={{margin:"0 auto"}}>Dr. Mike created the 123Teeth™ workflow to help patients avoid bone grafting and dentures — saving months or years in their restoration process.</p>
            <img src={IMG.teethPromise} alt="123Teeth Product Promise" className="teeth-img"/>
          </div>
          <div ref={r4.ref} className={`rv steps ${r4.v?"v":""}`} style={{transitionDelay:"0.15s"}}>
            <div className="step">
              <div className="step-n">1</div>
              <h3>Consultation & Plan</h3>
              <p>3D radiograph, comprehensive assessment, and a customized treatment plan built around your unique anatomy and goals. No obligation.</p>
            </div>
            <div className="step">
              <div className="step-n">2</div>
              <h3>Surgery & Temps</h3>
              <p>IV sedation, precision implant placement, and same-day temporary teeth. Walk out smiling. Our on-site lab handles everything in-house.</p>
            </div>
            <div className="step">
              <div className="step-n">3</div>
              <h3>Final Smile</h3>
              <p>Your permanent zirconia prosthetic is fabricated in our lab and delivered — completing your transformation with teeth that look and feel natural.</p>
            </div>
          </div>
          <div ref={r12.ref} className={`rv ${r12.v?"v":""}`} style={{transitionDelay:"0.2s"}}>
            <img src={IMG.teethComparison} alt="123Teeth comparison vs traditional implants" className="comp-img"/>
            <p style={{fontSize:12,color:"var(--t3)",textAlign:"center",marginTop:16,fontStyle:"italic",maxWidth:700,margin:"16px auto 0"}}>*Immediate load implants or "teeth-in-a-day" are provisional/temporary teeth fabricated from RAPID-CERAM nano-resin or 24HrSpeedZirconia. Final permanent teeth are made once post-operative healing has occurred. Healing time varies for each patient.</p>
          </div>
          <div style={{textAlign:"center",marginTop:48}}>
            <a href="#contact" className="bp">Book Free Consultation <Arrow/></a>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="sec stats-sec" style={{padding:"72px 32px"}}>
        <div className="sec-in">
          <div className="stats-g">
            <div className="stat" ref={c1.ref}><div className="stat-n">{c1.count.toLocaleString()}<sup>+</sup></div><div className="stat-l">Implants Placed</div></div>
            <div className="stat" ref={c2.ref}><div className="stat-n">{c2.count.toLocaleString()}<sup>+</sup></div><div className="stat-l">Smiles Transformed</div></div>
            <div className="stat" ref={c3.ref}><div className="stat-n">{c3.count}<sup>+</sup></div><div className="stat-l">Years Experience</div></div>
            <div className="stat" ref={c4.ref}><div className="stat-n">{c4.count}<sup>%</sup></div><div className="stat-l">Success Rate</div></div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section className="sec" id="pricing">
        <div className="sec-in">
          <div ref={r5.ref} className={`rv ${r5.v?"v":""}`} style={{textAlign:"center"}}>
            <div className="lab" style={{justifyContent:"center"}}>Transparent Pricing</div>
            <h2 className="stl">Invest in Your Smile With <em>Confidence</em></h2>
            <p className="sdesc" style={{margin:"0 auto"}}>We believe exceptional dental care should come with clear, accessible financial options. We accept most major insurance and offer flexible payment solutions.</p>
          </div>
          <div ref={r6.ref} className={`rv pr-grid ${r6.v?"v":""}`} style={{transitionDelay:"0.15s"}}>
            <div className="pr">
              <h3>Single Tooth</h3>
              <p className="pdesc">One missing tooth, permanently replaced</p>
              <div className="pr-amt">$99<span className="pr-per">/mo</span></div>
              <ul className="pr-list">
                <li><Check/> Titanium implant post</li>
                <li><Check/> Zirconia crown included</li>
                <li><Check/> Half the traditional time</li>
                <li><Check/> Free consultation</li>
              </ul>
              <a href="#contact" className="pr-cta pr-cta-s">Get Started</a>
            </div>
            <div className="pr feat">
              <div className="pr-badge">Most Popular</div>
              <h3>Full Mouth</h3>
              <p className="pdesc">Complete smile restoration — $25,000 value</p>
              <div className="pr-amt">$399<span className="pr-per">/mo</span></div>
              <ul className="pr-list">
                <li><Check/> 3D Smile Design</li>
                <li><Check/> Mild to moderate sedation</li>
                <li><Check/> Extractions included</li>
                <li><Check/> Implant surgery + implants</li>
                <li><Check/> RapidCeramic prototype</li>
                <li><Check/> SpeedZirconia temporary</li>
                <li><Check/> MaxZirconia final prosthetic</li>
                <li><Check/> 6 weeks post-op care</li>
                <li><Check/> Lifestyle Warranty†</li>
              </ul>
              <a href="#contact" className="pr-cta pr-cta-p">Book Free Consultation</a>
            </div>
            <div className="pr">
              <h3>Multiple Teeth</h3>
              <p className="pdesc">Bridge or partial solutions</p>
              <div className="pr-amt">$199<span className="pr-per">/mo</span></div>
              <ul className="pr-list">
                <li><Check/> Multiple implant posts</li>
                <li><Check/> Zirconia bridge included</li>
                <li><Check/> Preserves jawbone</li>
                <li><Check/> Natural look & feel</li>
              </ul>
              <a href="#contact" className="pr-cta pr-cta-s">Get Started</a>
            </div>
          </div>
          <p className="pkg-note">*$9,995 is the fee for cash or check pricing paid in full at presurgical consultation. Financing available through CareCredit, Proceed Finance, Cherry Finance, ASCI, Private Lending Group, or Orlando Federal Credit Union. Interest and financing fees apply.<br/><br/>†<strong>Lifestyle Warranty:</strong> Our Lifestyle Warranty covers your implant-supported prosthetic against manufacturing defects and structural failure for the lifetime of your implants, provided you maintain regular check-ups and follow post-care guidelines. Ask us for full details at your consultation.</p>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US + COMPARISON TABLE — Objection handling before form ═══ */}
      <section className="sec" style={{background:"var(--bg2)"}}>
        <div className="sec-in">
          <div ref={r9.ref} className={`rv ${r9.v?"v":""}`} style={{textAlign:"center"}}>
            <div className="lab" style={{justifyContent:"center"}}>The Difference</div>
            <h2 className="stl">Why Choose <em>Orlando Lifestyle</em> Over Corporate Chains?</h2>
            <p className="sdesc" style={{margin:"0 auto"}}>Most implant ads lead to corporate chains where you're a number. Here, Dr. Mike personally handles your case from start to finish.</p>
          </div>

          {/* COMPARISON TABLE */}
          <div className="cmp">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Orlando Lifestyle</th>
                  <th>Corporate Chains</th>
                  <th>General Dentists</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Owner-doctor does your surgery</td><td><span className="cmp-check">✓ Dr. Mike personally</span></td><td><span className="cmp-x">✗ Rotating doctors</span></td><td><span className="cmp-x">✗ Often refers out</span></td></tr>
                <tr><td>On-site zirconia lab</td><td><span className="cmp-check">✓ Same-building lab</span></td><td><span className="cmp-x">✗ Outsourced</span></td><td><span className="cmp-x">✗ Outsourced</span></td></tr>
                <tr><td>3-visit completion (123Teeth™)</td><td><span className="cmp-check">✓ Proprietary process</span></td><td><span className="cmp-x">✗ 6–12 months typical</span></td><td><span className="cmp-x">✗ 12–18 months</span></td></tr>
                <tr><td>Transparent pricing upfront</td><td><span className="cmp-check">✓ Published prices</span></td><td><span className="cmp-x">✗ Quote after consult</span></td><td><span className="cmp-x">✗ Quote after consult</span></td></tr>
                <tr><td>IV sedation in-house</td><td><span className="cmp-check">✓ Comfortable sedation</span></td><td><span className="cmp-check">✓ Usually available</span></td><td><span className="cmp-x">✗ Rarely offered</span></td></tr>
                <tr><td>20,000+ implants placed</td><td><span className="cmp-check">✓ By one doctor</span></td><td><span className="cmp-check">✓ Across many doctors</span></td><td><span className="cmp-x">✗ Limited experience</span></td></tr>
                <tr><td>Lifetime warranty included</td><td><span className="cmp-check">✓ Lifestyle Warranty</span></td><td><span className="cmp-x">✗ Limited/varies</span></td><td><span className="cmp-x">✗ Not offered</span></td></tr>
                <tr><td>Financing from $99/mo</td><td><span className="cmp-check">✓ 6+ lender options</span></td><td><span className="cmp-check">✓ Usually 1–2 options</span></td><td><span className="cmp-x">✗ Limited</span></td></tr>
              </tbody>
            </table>
          </div>

          <div className="why-imgs" style={{marginTop:36}}>
            <img src={IMG.whyAdvantages} alt="Advantages of Orlando Lifestyle Dentistry"/>
            <img src={IMG.whySedation} alt="Sedation dentistry options"/>
            <img src={IMG.whyRelationship} alt="Patient relationship approach"/>
            <img src={IMG.whyProcess} alt="Our streamlined process"/>
          </div>
          <div className="sponsors">
            <img src={IMG.sponsors} alt="Sponsors and affiliates"/>
          </div>
          <div style={{textAlign:"center",marginTop:40}}>
            <a href="#contact" className="bp">Book Free Consultation <Arrow/></a>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="sec contact-bg" id="contact">
        <div className="sec-in">
          <div>
            <div className="lab">Get Started</div>
            <h2 className="stl">Book Your <em>Free</em> Consultation</h2>
            <p className="sdesc">Take the first step toward your new smile. No obligation, no pressure — just a clear treatment estimate and honest conversation about your options.</p>
          </div>
          <div className="contact-grid">
            <div className="cf">
              {submitted ? (
                <div className="f-ok"><h3>Thank You!</h3><p>We've received your request and will reach out within 5 minutes during business hours. We can't wait to help you smile again.</p></div>
              ) : (
                <div>
                  <div className="fg"><label>Your Name *</label><input type="text" placeholder="First and last name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></div>
                  <div className="fg"><label>Phone Number *</label><input type="tel" placeholder="(555) 123-4567" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></div>
                  <div className="fg"><label>Email Address</label><input type="email" placeholder="you@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div>
                  <div className="fg"><label>I'm Interested In</label>
                    <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
                      <option value="">Select a service...</option>
                      <option value="single">Single Tooth Implant</option>
                      <option value="multiple">Multiple Tooth Implants</option>
                      <option value="full">Full Mouth Implants (123Teeth™)</option>
                      <option value="unsure">Not Sure — Need Guidance</option>
                    </select>
                  </div>
                  <div className="sms-opt">
                    <label className="sms-opt-label">
                      <input
                        type="checkbox"
                        id="sms-consent"
                        className="sms-opt-check"
                        checked={form.smsOptIn}
                        onChange={e=>setForm({...form,smsOptIn:e.target.checked})}
                      />
                      <span className="sms-opt-box"/>
                      <span className="sms-opt-text">
                        I agree to receive SMS text messages from Orlando Lifestyle Dentistry at the phone number provided above. Message frequency varies. Message &amp; data rates may apply. Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for help.
                      </span>
                    </label>
                    <p className="sms-opt-fine">SMS consent is not required as a condition of purchasing any goods or services. See our <button className="lnk-btn" onClick={()=>setModal('privacy')}>Privacy Policy</button> for details.</p>
                  </div>
                  <button className="f-sub" onClick={()=>{if(form.name&&form.phone)setSubmitted(true)}}>Request My Free Consultation</button>
                  <p style={{fontSize:11,color:"var(--t3)",textAlign:"center",marginTop:10}}>No obligation · We respond within 5 minutes during business hours</p>
                  <div className="hipaa"><Shield/> Your information is protected under HIPAA privacy regulations. We do not collect health diagnoses or symptoms.</div>
                  <p style={{fontSize:10,color:"var(--t3)",textAlign:"center",marginTop:8,lineHeight:1.6}}>By submitting, you agree to our <button className="lnk-btn" onClick={()=>setModal('privacy')}>Privacy Policy</button> and <button className="lnk-btn" onClick={()=>setModal('terms')}>Terms of Service</button>.</p>
                </div>
              )}
            </div>
            <div className="ci">
              <div className="ci-item"><div className="ci-ico"><Pin/></div><div className="ci-text"><h4>Visit Us</h4><p>1850 Greenwich Ave<br/>Winter Park, FL 32789</p></div></div>
              <div className="ci-item"><div className="ci-ico"><Phone/></div><div className="ci-text"><h4>Call Us</h4><p><a href="tel:4075476453">(407) 547-6453</a></p></div></div>
              <div className="ci-item"><div className="ci-ico"><Mail/></div><div className="ci-text"><h4>Email Us</h4><p><a href="mailto:orlandolifestyledentistry@gmail.com">orlandolifestyledentistry@gmail.com</a></p></div></div>
              <div className="ci-item"><div className="ci-ico"><Clock/></div><div className="ci-text"><h4>Hours</h4><p>Mon–Fri: 9:00 AM – 4:00 PM<br/>Sat–Sun: Closed</p></div></div>
              <div className="ci-item"><div className="ci-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div><div className="ci-text"><h4>Text Us</h4><p><a href="sms:4075476453">(407) 547-6453</a><br/><span style={{fontSize:11,color:"var(--t3)"}}>Prefer texting? We respond to SMS too</span></p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="final-cta">
        <h2 style={{fontFamily:"var(--serif)",fontSize:"clamp(28px,4vw,40px)",fontWeight:400,marginBottom:16,position:"relative",zIndex:1}}>Ready for Your New <em style={{fontStyle:"italic",color:"var(--teal)"}}>Smile</em>?</h2>
        <p style={{color:"var(--t2)",fontSize:16,marginBottom:32,fontWeight:300,maxWidth:500,margin:"0 auto 32px",position:"relative",zIndex:1}}>We will provide you with a clear & concise treatment estimate prior to care. Schedule your no-obligation consultation today.</p>
        <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",position:"relative",zIndex:1}}>
          <a href="#contact" className="bp">Book Free Consultation <Arrow/></a>
          <a href="tel:4075476453" className="bs"><Phone/> (407) 547-6453</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="ftr">
        <div className="ftr-in">
          <div className="ftr-brand">
            <img src={IMG.logoFooter} alt="Orlando Lifestyle Dentistry" className="ftr-logo-img"/>
            <address className="ftr-nap">
              <strong>Orlando Lifestyle Dentistry</strong><br/>
              1850 Greenwich Ave, Winter Park, FL 32789<br/>
              <a href="tel:4075476453">(407) 547-6453</a>
            </address>
            <span className="ftr-copy">© {new Date().getFullYear()} Orlando Lifestyle Dentistry. All rights reserved.</span>
          </div>
          <div className="ftr-links">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#doctor">Dr. Mike</a>
            <button className="lnk-btn" onClick={()=>setModal('privacy')}>Privacy Policy</button>
            <button className="lnk-btn" onClick={()=>setModal('terms')}>Terms of Service</button>
          </div>
          <div className="ftr-soc">
            <a href="https://www.youtube.com/@orlandolifestyledentistry10" target="_blank" rel="noopener noreferrer">▶</a>
            <a href="https://www.instagram.com/orlandolifestyledentistry" target="_blank" rel="noopener noreferrer">ig</a>
            <a href="https://www.facebook.com/OrlandosPlaceForImplants" target="_blank" rel="noopener noreferrer">fb</a>
          </div>
        </div>
      </footer>

      {/* STICKY DESKTOP CTA */}
      <div className={`sticky-desk ${showSticky?"show":""}`}>
        <a href="#contact"><Arrow/> Book Now</a>
      </div>

      {/* STICKY MOBILE CTA */}
      <div className="sticky">
        <div className="sticky-in">
          <a href="tel:4075476453" className="st-call"><Phone/> Call Now</a>
          <a href="#contact" className="st-book">Book Free Consult</a>
        </div>
      </div>

      {/* ═══ PRIVACY POLICY MODAL ═══ */}
      {modal === 'privacy' && (
        <div className="modal-ov" onClick={()=>setModal(null)}>
          <div className="modal-box" onClick={e=>e.stopPropagation()}>
            <button className="modal-cls" onClick={()=>setModal(null)}>✕</button>
            <h2>Privacy Policy</h2>
            <p className="modal-date">Effective Date: May 1, 2025 | Orlando Lifestyle Dentistry</p>
            <div className="modal-body">
              <h3>1. Information We Collect</h3>
              <p>We collect only the information you voluntarily provide when requesting a consultation: your name, phone number, and email address. <strong>We do not collect health diagnoses, symptoms, treatment history, or any Protected Health Information (PHI) through this website form.</strong></p>

              <h3>2. How We Use Your Information</h3>
              <p>Your contact information is used solely to respond to your consultation request and schedule appointments. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

              <h3>3. HIPAA Compliance</h3>
              <p>Orlando Lifestyle Dentistry is a HIPAA-covered entity. Any Protected Health Information (PHI) discussed during your consultation or treatment is handled in strict accordance with the Health Insurance Portability and Accountability Act (HIPAA). This website's contact form is designed to collect only non-sensitive scheduling information.</p>

              <h3>4. Google Ads & Advertising</h3>
              <p>We use Google Ads to promote our practice. Google may use cookies or device identifiers to show relevant ads. We participate in Google's Healthcare & Medicines advertising policy and comply with all applicable advertiser verification requirements. You can opt out of personalized advertising at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>.</p>

              <h3>5. Cookies & Analytics</h3>
              <p>We may use cookies and Google Analytics to understand how visitors interact with our site. This data is anonymous and aggregated. No personally identifiable information is linked to your browsing activity without your consent.</p>

              <h3>6. Data Security</h3>
              <p>We implement industry-standard security measures to protect your information. Our site is served over HTTPS/SSL encryption. Access to patient records is restricted to authorized staff only.</p>

              <h3>7. Third-Party Links</h3>
              <p>Our website may contain links to external sites (e.g., Google Maps, YouTube, financing partners). We are not responsible for the privacy practices of those sites.</p>

              <h3>8. Your Rights</h3>
              <p>You may request to review, correct, or delete any personal information we have collected from you by contacting us at <a href="mailto:orlandolifestyledentistry@gmail.com">orlandolifestyledentistry@gmail.com</a> or calling <a href="tel:4075476453">407-547-6453</a>.</p>

              <h3>9. Contact Us</h3>
              <p>Orlando Lifestyle Dentistry<br/>1850 Greenwich Ave, Winter Park, FL 32789<br/>Phone: (407) 547-6453<br/>Email: orlandolifestyledentistry@gmail.com</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══ TERMS OF SERVICE MODAL ═══ */}
      {modal === 'terms' && (
        <div className="modal-ov" onClick={()=>setModal(null)}>
          <div className="modal-box" onClick={e=>e.stopPropagation()}>
            <button className="modal-cls" onClick={()=>setModal(null)}>✕</button>
            <h2>Terms of Service</h2>
            <p className="modal-date">Effective Date: May 1, 2025 | Orlando Lifestyle Dentistry</p>
            <div className="modal-body">
              <h3>1. Acceptance of Terms</h3>
              <p>By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site.</p>

              <h3>2. Not Medical Advice</h3>
              <p>The content on this website is provided for informational purposes only and does not constitute medical or dental advice. Every patient and case is different. Results may vary. Always consult with a licensed dental professional for diagnosis and treatment recommendations specific to your situation.</p>

              <h3>3. Consultation Requests</h3>
              <p>Submitting a consultation request through this website does not establish a doctor-patient relationship. A relationship is established only after you have been examined in person by Dr. Michael Gagaoudakis and have agreed to a treatment plan.</p>

              <h3>4. Pricing & Financing</h3>
              <p>All pricing shown on this website is a starting price and may vary based on individual treatment needs. Financing is subject to credit approval through third-party lenders (CareCredit, Cherry Finance, Proceed Finance, ASCI, Private Lending Group, Orlando Federal Credit Union). Interest and fees apply.</p>

              <h3>5. Testimonials & Results</h3>
              <p>Patient testimonials reflect individual experiences. Results are not guaranteed and may vary. Before-and-after images shown are real cases from our practice; individual outcomes depend on each patient's unique anatomy and treatment compliance.</p>

              <h3>6. Intellectual Property</h3>
              <p>All content on this website — including text, images, graphics, logos, and the 123Teeth™ trademark — is the property of Orlando Lifestyle Dentistry and may not be reproduced without written permission.</p>

              <h3>7. Limitation of Liability</h3>
              <p>Orlando Lifestyle Dentistry shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.</p>

              <h3>8. Governing Law</h3>
              <p>These Terms of Service are governed by the laws of the State of Florida. Any disputes shall be resolved in the courts of Orange County, Florida.</p>

              <h3>9. Changes to These Terms</h3>
              <p>We reserve the right to update these Terms at any time. Continued use of this website after changes constitutes acceptance of the revised terms.</p>

              <h3>10. Contact Us</h3>
              <p>Orlando Lifestyle Dentistry<br/>1850 Greenwich Ave, Winter Park, FL 32789<br/>Phone: (407) 547-6453<br/>Email: orlandolifestyledentistry@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
