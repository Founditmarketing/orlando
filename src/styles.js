// ═══════════════════════════════════════════════════════════════
// ORLANDO LIFESTYLE DENTISTRY — WORLD-CLASS CONVERSION STYLESHEET
// Engineered for $4-5K/mo AdWords ROI
// ═══════════════════════════════════════════════════════════════
export const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Outfit:wght@200;300;400;500;600;700;800&display=swap');

/* ─── DESIGN TOKENS ─── */
:root {
  --teal:#14B2CA;--td:#0A8FA5;--tl:#5CD4E8;--tg:rgba(20,178,202,0.22);--ts:rgba(20,178,202,0.07);--tb:rgba(20,178,202,0.18);
  --gold:#D4A853;--gold-g:rgba(212,168,83,0.12);
  --bg:#050A0D;--bg2:#0A1216;--bg3:#0E181E;--card:#0F1C23;--ch:#142930;
  --t1:#EEF5F8;--t2:#8EABB8;--t3:#4E6D7A;--brd:rgba(255,255,255,0.06);--brd2:rgba(20,178,202,0.12);
  --serif:'Cormorant Garamond',Georgia,serif;--sans:'Outfit',-apple-system,sans-serif;
  --r:14px;--rl:20px;--mw:1240px;--ease:cubic-bezier(0.22,1,0.36,1);
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
body{font-family:var(--sans);background:var(--bg);color:var(--t1);overflow-x:hidden;line-height:1.6}
img{max-width:100%;display:block}
::selection{background:var(--teal);color:var(--bg)}

/* ─── GRAIN OVERLAY ─── */
.G{position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:0.018;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}

/* ─── MARQUEE ─── */
.mq{overflow:hidden;background:linear-gradient(90deg,var(--td),var(--teal),var(--td));padding:10px 0;position:relative;z-index:50}
.mq-t{display:flex;gap:48px;white-space:nowrap;animation:mq 40s linear infinite;width:max-content}
.mq-t span{font-family:var(--sans);font-weight:700;font-size:11px;color:var(--bg);text-transform:uppercase;letter-spacing:3px;display:flex;align-items:center;gap:16px}
.mq-t span::after{content:'◆';font-size:5px;opacity:0.35}
@keyframes mq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

/* ─── HEADER ─── */
.hdr{position:fixed;top:38px;left:0;right:0;z-index:1000;transition:all 0.5s var(--ease);padding:20px 32px}
.hdr.s{top:0;background:rgba(5,10,13,0.94);backdrop-filter:blur(28px) saturate(1.6);border-bottom:1px solid var(--brd);padding:12px 32px}
.hdr-in{max-width:var(--mw);margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.logo-img{height:44px;width:auto;transition:height 0.3s}
.hdr.s .logo-img{height:36px}
.nav-d{display:flex;align-items:center;gap:24px}
.nav-d a{color:var(--t2);text-decoration:none;font-size:12.5px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;transition:color 0.3s;position:relative}
.nav-d a:hover{color:var(--teal)}
.nav-d a::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:1.5px;background:var(--teal);transition:width 0.3s var(--ease)}
.nav-d a:hover::after{width:100%}
.cta-hdr{background:var(--teal);color:var(--bg)!important;padding:11px 24px;border-radius:50px;font-weight:700!important;font-size:12px!important;letter-spacing:1px!important;transition:all 0.3s var(--ease)!important;border:none;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 20px var(--tg)}
.cta-hdr:hover{background:var(--td);transform:translateY(-1px);box-shadow:0 8px 32px var(--tg)}
.cta-hdr::after{display:none!important}
.mob-tog{display:none;background:none;border:none;color:var(--t1);cursor:pointer}

/* ─── MOBILE NAV ─── */
.mob-nav{position:fixed;inset:0;z-index:2000;background:rgba(5,10,13,0.98);backdrop-filter:blur(40px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;opacity:0;pointer-events:none;transition:opacity 0.4s var(--ease)}
.mob-nav.open{opacity:1;pointer-events:all}
.mob-nav a{font-family:var(--serif);font-size:34px;color:var(--t1);text-decoration:none;font-weight:400;transition:color 0.3s}
.mob-nav a:hover{color:var(--teal)}
.mob-x{position:absolute;top:22px;right:28px;background:none;border:none;color:var(--t1);cursor:pointer}

/* ─── HERO ─── */
.hero{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;padding:130px 32px 80px}
.hero-bg{position:absolute;inset:0;background-size:cover;background-position:center 30%;opacity:0.14;filter:saturate(0.6)}
.hero-ov{position:absolute;inset:0;background:linear-gradient(155deg,rgba(5,10,13,0.96) 0%,rgba(5,10,13,0.82) 40%,rgba(5,10,13,0.94) 100%)}
.hero-mesh{position:absolute;inset:0;background:radial-gradient(ellipse 55% 40% at 20% 55%,rgba(20,178,202,0.07),transparent 65%),radial-gradient(ellipse 35% 30% at 80% 25%,rgba(10,143,165,0.05),transparent)}
.hero-ln{position:absolute;top:0;bottom:0;width:1px;background:linear-gradient(180deg,transparent,var(--tb),transparent);opacity:0.5}
.hero-ct{position:relative;z-index:2;max-width:var(--mw);margin:0 auto;width:100%;display:grid;grid-template-columns:1.15fr 0.85fr;gap:64px;align-items:center}
.hero-badge{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--tb);border-radius:50px;padding:8px 20px;margin-bottom:28px;font-size:11px;font-weight:700;color:var(--teal);letter-spacing:2px;text-transform:uppercase;animation:fiu 0.6s var(--ease) both;backdrop-filter:blur(8px);background:rgba(20,178,202,0.04)}
.hero-dot{width:7px;height:7px;border-radius:50%;background:var(--teal);animation:pulse 2s ease infinite;box-shadow:0 0 10px var(--teal)}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(1.5)}}
.hero h1{font-family:var(--serif);font-size:clamp(44px,5.8vw,74px);font-weight:400;line-height:1.06;margin-bottom:26px;letter-spacing:-0.5px;animation:fiu 0.7s 0.12s var(--ease) both}
.hero h1 em{font-style:italic;color:var(--teal);text-shadow:0 0 60px var(--tg)}
.hero-sub{font-size:17px;color:var(--t2);max-width:520px;line-height:1.8;margin-bottom:36px;font-weight:300;animation:fiu 0.7s 0.24s var(--ease) both}
.hero-sub strong{color:var(--t1);font-weight:600}
.hero-ctas{display:flex;gap:14px;flex-wrap:wrap;animation:fiu 0.7s 0.36s var(--ease) both}
.bp{background:var(--teal);color:var(--bg);padding:16px 36px;border-radius:50px;font-weight:700;font-size:14px;border:none;cursor:pointer;transition:all 0.3s var(--ease);text-decoration:none;display:inline-flex;align-items:center;gap:9px;font-family:var(--sans);box-shadow:0 6px 28px var(--tg);letter-spacing:0.3px}
.bp:hover{background:var(--td);transform:translateY(-2px);box-shadow:0 14px 44px var(--tg)}
.bs{background:transparent;color:var(--t1);padding:16px 36px;border-radius:50px;font-weight:500;font-size:14px;border:1px solid rgba(255,255,255,0.12);cursor:pointer;transition:all 0.3s var(--ease);text-decoration:none;display:inline-flex;align-items:center;gap:9px;font-family:var(--sans);backdrop-filter:blur(4px)}
.bs:hover{border-color:var(--teal);color:var(--teal);background:rgba(20,178,202,0.04)}
.hero-trust{display:flex;gap:20px;margin-top:28px;animation:fiu 0.7s 0.48s var(--ease) both}
.ht-item{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--t3);font-weight:500}
.ht-item svg{color:var(--teal)}

/* ─── HERO CARD ─── */
.hero-card{background:rgba(15,28,35,0.7);border:1px solid var(--brd2);border-radius:var(--rl);padding:32px;animation:fiu 0.8s 0.4s var(--ease) both;position:relative;overflow:hidden;backdrop-filter:blur(16px)}
.hero-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--teal),var(--td),transparent)}
.hero-card::after{content:'';position:absolute;top:0;right:0;width:120px;height:120px;background:radial-gradient(circle,rgba(20,178,202,0.08),transparent 70%);pointer-events:none}
.hc-row{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.hc-stars{display:flex;gap:2px}
.hc-rating{font-family:var(--serif);font-size:24px;font-weight:600}
.hc-label{font-size:12px;color:var(--t3);font-weight:400}
.hc-div{height:1px;background:linear-gradient(90deg,transparent,var(--brd2),transparent);margin:16px 0}
.hc-stats{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.hc-s-n{font-family:var(--serif);font-size:30px;font-weight:600;color:var(--teal);line-height:1.1}
.hc-s-l{font-size:10px;color:var(--t3);text-transform:uppercase;letter-spacing:2px;font-weight:600;margin-top:3px}
.hc-cta{display:block;width:100%;margin-top:20px;text-align:center;padding:15px;border-radius:50px;background:var(--teal);color:var(--bg);font-weight:700;font-size:14px;text-decoration:none;transition:all 0.3s var(--ease);border:none;cursor:pointer;font-family:var(--sans);box-shadow:0 4px 24px var(--tg);letter-spacing:0.3px}
.hc-cta:hover{background:var(--td);box-shadow:0 8px 36px var(--tg);transform:translateY(-1px)}
@keyframes fiu{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}

/* ─── SECTIONS ─── */
.sec{padding:88px 32px;position:relative}
.sec-in{max-width:var(--mw);margin:0 auto}
.lab{font-size:11px;font-weight:700;color:var(--teal);text-transform:uppercase;letter-spacing:4px;margin-bottom:14px;font-family:var(--sans);display:flex;align-items:center;gap:12px}
.lab::before{content:'';width:24px;height:1.5px;background:var(--teal)}
.stl{font-family:var(--serif);font-size:clamp(32px,4.2vw,52px);font-weight:400;line-height:1.1;margin-bottom:20px;letter-spacing:-0.3px}
.stl em{font-style:italic;color:var(--teal)}
.sdesc{font-size:16px;color:var(--t2);max-width:560px;line-height:1.8;font-weight:300}
.rv{opacity:0;transform:translateY(16px);transition:opacity 0.5s var(--ease),transform 0.5s var(--ease)}
.rv.v{opacity:1;transform:translateY(0)}
@media(prefers-reduced-motion:reduce){.rv{opacity:1;transform:none;transition:none}}
.sec-cta-row{display:flex;gap:14px;margin-top:36px;flex-wrap:wrap}

/* ─── URGENCY BANNER ─── */
.urgency{background:linear-gradient(90deg,rgba(212,168,83,0.08),rgba(212,168,83,0.15),rgba(212,168,83,0.08));border:1px solid rgba(212,168,83,0.2);border-radius:var(--r);padding:14px 24px;display:flex;align-items:center;justify-content:center;gap:10px;margin-top:20px;animation:fiu 0.7s 0.55s var(--ease) both}
.urgency-dot{width:8px;height:8px;border-radius:50%;background:var(--gold);animation:pulse 1.5s ease infinite;box-shadow:0 0 8px var(--gold)}
.urgency-text{font-size:13px;font-weight:600;color:var(--gold);letter-spacing:0.3px}
.urgency-text strong{font-weight:700;color:#E8BD6A}

/* ─── VIDEO EMBED ─── */
.vid-wrap{margin-top:32px;border-radius:var(--rl);overflow:hidden;border:1px solid var(--brd);aspect-ratio:16/9;position:relative;background:var(--card)}
.vid-wrap iframe{width:100%;height:100%;border:none}

/* ─── TESTIMONIALS GRID ─── */
.testi-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:36px}
.tg-card{background:var(--card);border:1px solid var(--brd);border-radius:var(--rl);padding:28px;position:relative;transition:all 0.3s var(--ease)}
.tg-card:hover{border-color:var(--brd2)}
.tg-stars{display:flex;gap:2px;margin-bottom:12px}
.tg-text{font-family:var(--serif);font-size:16px;color:var(--t1);line-height:1.75;font-style:italic;font-weight:300;margin-bottom:16px}
.tg-author{font-weight:700;font-size:13px;color:var(--teal)}
.tg-loc{font-size:11px;color:var(--t3);margin-top:2px}
.tg-google{display:flex;align-items:center;gap:8px;margin-top:36px;justify-content:center}
.tg-google-badge{background:var(--card);border:1px solid var(--brd);border-radius:50px;padding:10px 24px;display:inline-flex;align-items:center;gap:10px;font-size:13px;color:var(--t2);font-weight:500}
.tg-google-badge strong{color:var(--t1);font-weight:700}

/* ─── HIPAA NOTE ─── */
.hipaa{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:12px;font-size:10.5px;color:var(--t3);letter-spacing:0.3px}
.hipaa svg{color:var(--teal);flex-shrink:0}

/* ─── SMS OPT-IN ─── */
.sms-opt{margin:18px 0 4px;background:rgba(20,178,202,0.04);border:1px solid var(--brd2);border-radius:var(--r);padding:14px 16px}
.sms-opt-label{display:flex;align-items:flex-start;gap:12px;cursor:pointer;position:relative}
.sms-opt-check{position:absolute;opacity:0;width:0;height:0}
.sms-opt-box{flex-shrink:0;width:18px;height:18px;border-radius:5px;border:1.5px solid var(--t3);background:var(--bg);transition:all 0.25s var(--ease);margin-top:1px;display:flex;align-items:center;justify-content:center}
.sms-opt-check:checked~.sms-opt-box{background:var(--teal);border-color:var(--teal)}
.sms-opt-check:checked~.sms-opt-box::after{content:'✓';color:var(--bg);font-size:11px;font-weight:900;line-height:1}
.sms-opt-label:hover .sms-opt-box{border-color:var(--teal)}
.sms-opt-text{font-size:11.5px;color:var(--t2);line-height:1.7;font-weight:300}
.sms-opt-text strong{color:var(--t1);font-weight:600}
.sms-opt-fine{font-size:10px;color:var(--t3);margin-top:8px;line-height:1.6;padding-left:30px}

/* ─── SMS BUTTON ─── */
.sms-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:50px;background:transparent;border:1px solid rgba(37,211,102,0.3);color:#25D366;font-weight:600;font-size:13px;text-decoration:none;font-family:var(--sans);transition:all 0.3s var(--ease);cursor:pointer}
.sms-btn:hover{background:rgba(37,211,102,0.08);border-color:#25D366}

/* ─── CREDIBILITY BAR ─── */
.cred{background:var(--bg2);border-top:1px solid var(--brd);border-bottom:1px solid var(--brd);padding:22px 32px}
.cred-in{max-width:var(--mw);margin:0 auto;display:flex;align-items:center;justify-content:center;gap:28px;flex-wrap:wrap}
.cred-item{font-size:13px;color:var(--t3);font-weight:400;display:flex;align-items:center;gap:8px}
.cred-item strong{color:var(--t2);font-weight:600}
.cred-sep{color:var(--t3);opacity:0.2;font-size:10px}

/* ─── SERVICE CARDS ─── */
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px}
.svc{background:var(--card);border:1px solid var(--brd);border-radius:var(--rl);overflow:hidden;transition:all 0.45s var(--ease);position:relative}
.svc::before{content:'';position:absolute;inset:0;border-radius:var(--rl);background:linear-gradient(135deg,rgba(20,178,202,0.04),transparent 50%);opacity:0;transition:opacity 0.4s;z-index:1;pointer-events:none}
.svc:hover{border-color:var(--brd2);transform:translateY(-4px);box-shadow:0 20px 56px rgba(0,0,0,0.3)}
.svc:hover::before{opacity:1}
.svc-img{width:100%;aspect-ratio:1;object-fit:cover;border-bottom:1px solid var(--brd);transition:transform 0.6s var(--ease)}
.svc:hover .svc-img{transform:scale(1.03)}
.svc-body{padding:28px 24px;position:relative;z-index:2}
.svc-tag{font-size:11px;font-weight:700;color:var(--teal);text-transform:uppercase;letter-spacing:2px;margin-bottom:12px}
.svc h3{font-family:var(--serif);font-size:26px;font-weight:500;margin-bottom:10px}
.svc p{font-size:14px;color:var(--t2);line-height:1.75;margin-bottom:16px;font-weight:300}
.svc-price{font-family:var(--serif);font-size:32px;font-weight:600;color:var(--teal)}
.svc-price small{font-size:14px;font-weight:400;color:var(--t2)}
.svc-sub{font-size:12px;color:var(--t3);margin-top:4px}

/* ─── BEFORE/AFTER ─── */
.ba-wrap{margin-top:56px;background:var(--card);border:1px solid var(--brd);border-radius:var(--rl);overflow:hidden;padding:36px}
.ba-wrap img{width:100%;border-radius:var(--r)}
.ba-disclaimer{font-size:12px;color:var(--t3);margin-top:16px;font-style:italic;line-height:1.7}

/* ─── 123TEETH ─── */
.proc-bg{background:linear-gradient(180deg,var(--bg) 0%,var(--bg3) 50%,var(--bg) 100%)}
.teeth-img{width:100%;max-width:780px;margin:36px auto 0;border-radius:var(--rl);display:block}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:56px;position:relative}
.steps::before{content:'';position:absolute;top:52px;left:14%;right:14%;height:1px;background:linear-gradient(90deg,transparent,var(--tb),transparent)}
.step{text-align:center;position:relative;z-index:2}
.step-n{width:104px;height:104px;border-radius:50%;background:var(--bg);border:1.5px solid var(--teal);display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:40px;font-weight:400;color:var(--teal);margin:0 auto 22px;box-shadow:0 0 60px var(--tg),inset 0 0 30px rgba(20,178,202,0.04);transition:all 0.4s var(--ease)}
.step:hover .step-n{box-shadow:0 0 80px var(--tg),inset 0 0 40px rgba(20,178,202,0.08);transform:scale(1.05)}
.step h3{font-family:var(--serif);font-size:22px;font-weight:500;margin-bottom:10px}
.step p{font-size:14px;color:var(--t2);line-height:1.75;font-weight:300;max-width:280px;margin:0 auto}
.comp-img{width:100%;max-width:880px;margin:48px auto 0;border-radius:var(--rl);display:block;border:1px solid var(--brd)}

/* ─── STATS ─── */
.stats-sec{background:var(--bg2);border-top:1px solid var(--brd);border-bottom:1px solid var(--brd)}
.stats-g{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
.stat{text-align:center;padding:8px 0}
.stat-n{font-family:var(--serif);font-size:clamp(40px,5.2vw,60px);font-weight:400;color:var(--teal);line-height:1}
.stat-n sup{font-size:0.42em}
.stat-l{font-size:11px;color:var(--t3);text-transform:uppercase;letter-spacing:2.5px;font-weight:600;margin-top:8px}

/* ─── PRICING ─── */
.pr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:52px}
.pr{background:var(--card);border:1px solid var(--brd);border-radius:var(--rl);padding:40px 28px;text-align:center;transition:all 0.45s var(--ease);position:relative}
.pr.feat{border-color:var(--teal);box-shadow:0 0 70px var(--tg);background:linear-gradient(180deg,var(--ch),var(--card))}
.pr.feat .pr-badge{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:var(--teal);color:var(--bg);padding:6px 20px;border-radius:50px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;white-space:nowrap;box-shadow:0 4px 20px var(--tg)}
.pr:hover{transform:translateY(-5px);border-color:var(--brd2);box-shadow:0 20px 60px rgba(0,0,0,0.25)}
.pr h3{font-family:var(--serif);font-size:26px;font-weight:500;margin-bottom:6px}
.pr .pdesc{font-size:13px;color:var(--t3);margin-bottom:28px}
.pr-amt{font-family:var(--serif);font-size:56px;font-weight:400;color:var(--teal);line-height:1}
.pr-per{font-size:16px;color:var(--t2);font-weight:300}
.pr-list{margin-top:28px;text-align:left;display:flex;flex-direction:column;gap:11px}
.pr-list li{list-style:none;display:flex;align-items:center;gap:10px;font-size:13px;color:var(--t2);font-weight:300}
.pr-cta{display:block;margin-top:32px;width:100%;padding:14px;border-radius:50px;font-weight:700;font-size:13px;cursor:pointer;transition:all 0.3s var(--ease);font-family:var(--sans);text-decoration:none;text-align:center;letter-spacing:0.5px}
.pr-cta-p{background:var(--teal);color:var(--bg);border:none;box-shadow:0 4px 20px var(--tg)}
.pr-cta-p:hover{box-shadow:0 8px 36px var(--tg);transform:translateY(-1px)}
.pr-cta-s{background:transparent;color:var(--teal);border:1px solid var(--tb)}
.pr-cta-s:hover{border-color:var(--teal);background:rgba(20,178,202,0.04)}
.pkg-note{font-size:12px;color:var(--t3);text-align:center;margin-top:36px;line-height:1.7;max-width:700px;margin-left:auto;margin-right:auto}

/* ─── DOCTOR ─── */
.doc-grid{display:grid;grid-template-columns:0.85fr 1.15fr;gap:60px;align-items:center;margin-top:44px}
.doc-img{position:relative;border-radius:var(--rl);overflow:hidden;border:1px solid var(--brd)}
.doc-img img{width:100%;display:block}
.doc-img::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 60%,rgba(5,10,13,0.4))}
.doc-creds{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}
.doc-tag{background:var(--ts);border:1px solid var(--tb);border-radius:50px;padding:6px 16px;font-size:11px;color:var(--teal);font-weight:600;letter-spacing:0.5px;transition:all 0.3s var(--ease)}
.doc-tag:hover{background:var(--tb);border-color:var(--teal)}
.doc-text h3{font-family:var(--serif);font-size:22px;font-weight:400;color:var(--teal);margin-bottom:18px;font-style:italic}
.doc-text p{font-size:15px;color:var(--t2);line-height:1.85;margin-bottom:16px;font-weight:300}

/* ─── GALLERY ─── */
.gallery{margin-top:48px}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.gallery-grid img{width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:var(--r);border:1px solid var(--brd);transition:all 0.4s var(--ease)}
.gallery-grid img:hover{transform:scale(1.02);border-color:var(--brd2)}

/* ─── TESTIMONIALS ─── */
.testi-bg{background:var(--bg2);border-top:1px solid var(--brd);border-bottom:1px solid var(--brd)}

/* ─── WHY INFOGRAPHICS ─── */
.why-imgs{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:48px}
.why-imgs img{width:100%;border-radius:var(--rl);border:1px solid var(--brd);transition:all 0.4s var(--ease)}
.why-imgs img:hover{border-color:var(--brd2);transform:translateY(-2px)}
.sponsors{margin-top:56px;text-align:center;overflow:hidden}
.sponsors img{max-width:880px;width:100%;margin:0 auto;opacity:0.65;filter:brightness(1.2);transition:opacity 0.4s}
.sponsors:hover img{opacity:0.85}

/* ─── CONTACT ─── */
.contact-bg{background:linear-gradient(180deg,var(--bg) 0%,var(--bg2) 100%)}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start;margin-top:48px}
.cf{background:var(--card);border:1px solid var(--brd);border-radius:var(--rl);padding:40px;position:relative;overflow:hidden}
.cf::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--teal),var(--td),transparent)}
.fg{margin-bottom:20px}
.fg label{display:block;font-size:11px;font-weight:600;color:var(--t3);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px}
.fg input,.fg select{width:100%;padding:14px 18px;border-radius:var(--r);border:1px solid var(--brd);background:var(--bg);color:var(--t1);font-size:14px;font-family:var(--sans);transition:all 0.3s;outline:none}
.fg input:focus,.fg select:focus{border-color:var(--teal);box-shadow:0 0 0 3px var(--ts)}
.fg input::placeholder{color:var(--t3)}
.fg select{cursor:pointer;appearance:none}
.fg select option{background:var(--card)}
.f-sub{width:100%;padding:16px;border-radius:50px;background:var(--teal);color:var(--bg);font-weight:700;font-size:15px;border:none;cursor:pointer;font-family:var(--sans);transition:all 0.3s var(--ease);box-shadow:0 4px 24px var(--tg);letter-spacing:0.3px}
.f-sub:hover{background:var(--td);box-shadow:0 12px 44px var(--tg);transform:translateY(-1px)}
.f-ok{text-align:center;padding:40px}
.f-ok h3{font-family:var(--serif);font-size:28px;margin-bottom:12px;color:var(--teal);font-weight:500}
.f-ok p{color:var(--t2);font-weight:300;line-height:1.7}
.ci{display:flex;flex-direction:column;gap:28px}
.ci-item{display:flex;gap:16px;align-items:flex-start}
.ci-ico{width:48px;height:48px;border-radius:14px;flex-shrink:0;background:var(--ts);border:1px solid var(--tb);display:flex;align-items:center;justify-content:center;color:var(--teal);transition:all 0.3s var(--ease)}
.ci-item:hover .ci-ico{background:var(--tb);border-color:var(--teal)}
.ci-text h4{font-size:14px;font-weight:600;margin-bottom:4px}
.ci-text p{font-size:13px;color:var(--t2);font-weight:300;line-height:1.6}
.ci-text a{color:var(--teal);text-decoration:none;transition:color 0.3s}
.ci-text a:hover{color:var(--tl)}

/* ─── COMPARISON TABLE ─── */
.cmp{margin-top:48px;overflow:hidden;border-radius:var(--rl);border:1px solid var(--brd);overflow-x:auto;-webkit-overflow-scrolling:touch}
.cmp table{width:100%;border-collapse:collapse}
.cmp th,.cmp td{padding:16px 20px;text-align:left;font-size:13.5px;border-bottom:1px solid var(--brd)}
.cmp th{background:var(--card);color:var(--t2);font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:1.5px}
.cmp th:first-child{color:var(--t3)}
.cmp th:nth-child(2){color:var(--teal);background:linear-gradient(180deg,rgba(20,178,202,0.08),var(--card))}
.cmp td:nth-child(2){color:var(--t1);font-weight:500}
.cmp td{color:var(--t3);font-weight:300}
.cmp td:first-child{color:var(--t2);font-weight:500}
.cmp tr:last-child td{border-bottom:none}
.cmp tr:hover td{background:rgba(20,178,202,0.02)}
.cmp-check{color:var(--teal)}
.cmp-x{color:#E05252;opacity:0.6}

/* ─── STICKY DESKTOP CTA ─── */
.sticky-desk{position:fixed;right:28px;bottom:28px;z-index:800;opacity:0;transform:translateY(20px);pointer-events:none;transition:all 0.4s var(--ease)}
.sticky-desk.show{opacity:1;transform:translateY(0);pointer-events:all}
.sticky-desk a{display:flex;align-items:center;gap:9px;padding:16px 32px;border-radius:50px;background:var(--teal);color:var(--bg);font-weight:700;font-size:14px;text-decoration:none;font-family:var(--sans);box-shadow:0 8px 36px var(--tg),0 0 0 1px rgba(20,178,202,0.3);transition:all 0.3s var(--ease);letter-spacing:0.3px}
.sticky-desk a:hover{background:var(--td);transform:translateY(-2px);box-shadow:0 14px 48px var(--tg),0 0 0 1px var(--teal)}

/* ─── FINAL CTA ─── */
.final-cta{padding:64px 32px;text-align:center;background:var(--bg2);border-top:1px solid var(--brd);position:relative;overflow:hidden}
.final-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 100%,rgba(20,178,202,0.06),transparent);pointer-events:none}

/* ─── FOOTER ─── */
.ftr{background:var(--bg);border-top:1px solid var(--brd);padding:44px 32px}
.ftr-in{max-width:var(--mw);margin:0 auto;display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:28px}
.ftr-brand{display:flex;flex-direction:column;gap:10px}
.ftr-logo-img{height:36px;width:auto;opacity:0.75}
.ftr-nap{font-style:normal;font-size:12px;color:var(--t3);line-height:1.8;font-weight:300}
.ftr-nap strong{color:var(--t2);font-weight:600}
.ftr-nap a{color:var(--teal);text-decoration:none;transition:color 0.3s}
.ftr-nap a:hover{color:var(--tl)}
.ftr-copy{font-size:11px;color:var(--t3);margin-top:2px}
.ftr-links{display:flex;flex-direction:column;gap:10px;align-items:flex-start}
.ftr-links a{font-size:12px;color:var(--t3);text-decoration:none;transition:color 0.3s}
.ftr-links a:hover{color:var(--teal)}
.ftr-soc{display:flex;gap:12px;align-items:center}
.ftr-soc a{width:38px;height:38px;border-radius:50%;background:var(--ts);border:1px solid var(--tb);display:flex;align-items:center;justify-content:center;color:var(--t2);text-decoration:none;font-size:13px;transition:all 0.3s var(--ease)}
.ftr-soc a:hover{background:var(--teal);color:var(--bg);border-color:var(--teal);transform:translateY(-2px)}

/* ─── INLINE LINK BUTTON ─── */
.lnk-btn{background:none;border:none;padding:0;color:var(--teal);font-size:inherit;font-family:inherit;cursor:pointer;text-decoration:underline;text-underline-offset:2px;transition:color 0.3s}
.lnk-btn:hover{color:var(--tl)}

/* ─── POLICY MODALS ─── */
.modal-ov{position:fixed;inset:0;z-index:9000;background:rgba(5,10,13,0.88);backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:center;padding:24px;animation:fiu 0.25s var(--ease) both}
.modal-box{position:relative;background:var(--bg2);border:1px solid var(--brd2);border-radius:var(--rl);max-width:720px;width:100%;max-height:85vh;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 40px 100px rgba(0,0,0,0.5)}
.modal-box>h2{font-family:var(--serif);font-size:28px;font-weight:500;color:var(--t1);padding:32px 40px 0;flex-shrink:0}
.modal-date{font-size:12px;color:var(--teal);padding:8px 40px 16px;border-bottom:1px solid var(--brd);flex-shrink:0}
.modal-body{overflow-y:auto;padding:28px 40px 40px;flex:1;scrollbar-width:thin;scrollbar-color:var(--tb) transparent}
.modal-body h3{font-family:var(--serif);font-size:18px;font-weight:500;color:var(--teal);margin:24px 0 8px}
.modal-body h3:first-child{margin-top:0}
.modal-body p{font-size:14px;color:var(--t2);line-height:1.85;font-weight:300;margin-bottom:12px}
.modal-body strong{color:var(--t1);font-weight:600}
.modal-body a{color:var(--teal);text-decoration:none}
.modal-body a:hover{color:var(--tl)}
.modal-cls{position:absolute;top:18px;right:22px;background:none;border:none;color:var(--t3);font-size:22px;cursor:pointer;transition:color 0.3s;z-index:1;line-height:1;width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:50%}
.modal-cls:hover{color:var(--t1);background:rgba(255,255,255,0.06)}

/* ─── STICKY MOBILE CTA ─── */
.sticky{display:none;position:fixed;bottom:0;left:0;right:0;z-index:900;padding:10px 14px;background:rgba(5,10,13,0.96);backdrop-filter:blur(24px);border-top:1px solid var(--tb)}
.sticky-in{display:flex;gap:10px;max-width:480px;margin:0 auto}
.sticky-in a{flex:1;padding:14px;border-radius:50px;font-weight:700;font-size:13px;text-align:center;cursor:pointer;font-family:var(--sans);text-decoration:none;display:flex;align-items:center;justify-content:center;gap:7px;transition:all 0.3s}
.st-call{background:transparent;color:var(--teal);border:1.5px solid var(--teal)}
.st-book{background:var(--teal);color:var(--bg);border:none;box-shadow:0 4px 20px var(--tg)}

/* ─── RESPONSIVE ─── */
@media(max-width:1024px){
  .hero-ct{grid-template-columns:1fr;gap:44px}
  .svc-grid,.pr-grid{grid-template-columns:1fr 1fr}
  .why-imgs{grid-template-columns:1fr}
  .doc-grid{grid-template-columns:1fr;gap:36px}
  .contact-grid{grid-template-columns:1fr;gap:36px}
  .hero-card{max-width:500px}
}
@media(max-width:768px){
  .nav-d{display:none}.mob-tog{display:block}
  .svc-grid,.pr-grid,.steps{grid-template-columns:1fr}
  .gallery-grid{grid-template-columns:1fr 1fr}
  .stats-g{grid-template-columns:1fr 1fr;gap:20px}
  .sticky{display:block}.sec{padding:64px 20px}.hero{padding:110px 20px 60px}
  body{padding-bottom:70px}.steps::before{display:none}
  .pr.feat{box-shadow:0 0 44px var(--tg)}
  .cred-in{gap:14px;font-size:12px}.lab::before{width:16px}
  .hero-trust{flex-direction:column;gap:10px}
  .testi-grid{grid-template-columns:1fr}
  .urgency{flex-direction:column;gap:6px;text-align:center}
  .vid-wrap{margin-top:24px}
  .sticky-desk{display:none}
  .cmp th,.cmp td{padding:12px 14px;font-size:12px}
}
@media(max-width:480px){.gallery-grid{grid-template-columns:1fr}}
`;
