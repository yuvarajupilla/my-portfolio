import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaRocket, FaBolt, FaMobileAlt } from "react-icons/fa";
import profile from "../assets/profile.png";

/* ─── Tech stack ─── */
const TECH = [
  { label: "React.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { label: "Tailwind",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { label: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { label: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { label: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

function Hero() {
  const stripRef = useRef(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    let raf, pos = 0;
    const speed = 0.4;
    const tick = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="hero-section">

      {/* ── BG ORBS ── */}
      <div className="hero-bg">
        <div className="orb orb-left" />
        <div className="orb orb-right" />
        <div className="dot-grid" />
      </div>

      {/* ── PROFILE IMAGE — responsive for tablet ── */}
      <div className="profile-col anim-profile">
        <div className="profile-vignette" />
        <img src={profile} alt="Yuvaraju Pilla" className="profile-img" />

        {/* OTW card - hidden on tablet & mobile */}
        <div className="otw-card desktop-only">
          <p className="otw-avail"><span className="otw-dot" /> Available for opportunities</p>
          <p className="otw-title"><span className="otw-hi">Open</span> to Work</p>
          <p className="otw-sub">Let's build something amazing together!</p>
          <div className="otw-bar" />
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="content-col">
        <span className="hero-badge anim-item" style={{ animationDelay: "0.1s" }}>
          👋 &nbsp;Hi, I'm Yuvaraju Pilla
        </span>

        <h1 className="hero-heading anim-item" style={{ animationDelay: "0.26s" }}>
          Frontend<br />
          Developer<br />
          building{" "}
          <em className="hero-accent">fast,<br className="mobile-br" /> scalable</em>
          <br />web apps.
        </h1>

        <p className="hero-desc anim-item" style={{ animationDelay: "0.44s" }}>
          Crafting responsive, high-performance web experiences
          with React.js and modern technologies.
        </p>

        <div className="feat-row anim-item" style={{ animationDelay: "0.58s" }}>
          {[
            { icon: <FaRocket />, t: "Clean Code",      s: "Maintainable" },
            { icon: <FaBolt />,   t: "Performance",     s: "Fast & Optimized" },
            { icon: <FaMobileAlt />, t: "Responsive",   s: "All devices" },
          ].map(({ icon, t, s }) => (
            <div className="feat-chip" key={t}>
              <span className="feat-icon-wrap">{icon}</span>
              <span>
                <span className="feat-title">{t}</span>
                <span className="feat-sub">{s}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="cta-row anim-item" style={{ animationDelay: "0.72s" }}>
          <a href="#projects" className="btn-primary">View My Work →</a>
          <a href="/yuvaraju_pilla_resume.pdf" download className="btn-outline">Download Resume ↓</a>
        </div>

        <div className="social-section anim-item" style={{ animationDelay: "0.86s" }}>
          <p className="social-label">Let's connect</p>
          <div className="social-row">
            {[
              { icon: <FaGithub />,    href: "https://github.com/yuvarajupilla" },
              { icon: <FaLinkedin />,  href: "https://www.linkedin.com/in/yuvarajupilla/" },
              { icon: <FaInstagram />, href: "https://www.instagram.com/yuvaraju___p/" },
              { icon: <FaWhatsapp />,  href: "https://wa.me/919885988059" },
            ].map(({ icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" className="social-btn">{icon}</a>
            ))}
          </div>
        </div>
      </div>

      {/* ── TECH BAR ── */}
      <div className="tech-bar anim-techbar">
        <div className="tech-label-block">
          <span className="tech-code">&lt;/&gt;</span>
          <span>
            <span className="tech-title-txt">Technologies</span>
            <span className="tech-sub-txt">I work with</span>
          </span>
        </div>
        <div className="tech-divider" />
        <div className="tech-strip-wrapper" ref={stripRef}>
          {[...TECH, ...TECH].map((t, i) => (
            <div className="tech-item" key={i}>
              <img src={t.icon} alt={t.label} className="tech-icon" />
              <span className="tech-name">{t.label}</span>
            </div>
          ))}
          <span className="tech-more">••• More</span>
        </div>
      </div>

      <style>{`
        /* ── PROFESSIONAL RESUME FONTS ── */
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&family=Manrope:wght@400;500;600;700;800&display=swap');

        /* ══ KEYFRAMES ══ */
        @keyframes slideUp {
          from { opacity:0; transform:translateY(40px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity:0; transform:translateX(70px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes pulse {
          0%,100% { box-shadow:0 0 0 0 rgba(168,85,247,0.7); }
          50%     { box-shadow:0 0 0 7px rgba(168,85,247,0); }
        }

        /* ══ ANIMATION CLASSES ══ */
        .anim-item    { opacity:0; animation:slideUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        .anim-profile { animation:slideInRight 1s cubic-bezier(0.22,1,0.36,1) 0.12s both; }
        .anim-techbar { animation:fadeUp 0.6s ease 1.05s both; }

        /* ══ BASE LAYOUT - DESKTOP FIRST ══ */
        .hero-section {
          position: relative;
          min-height: 100vh;
          background: #07070f;
          color: #fff;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr auto;
          grid-template-areas: "content profile" "tech tech";
          font-family: 'Inter', 'Manrope', sans-serif;
        }

        /* ── BG ── */
        .hero-bg { position:absolute; inset:0; z-index:0; pointer-events:none; }
        .orb { position:absolute; border-radius:50%; filter:blur(120px); }
        .orb-left  { width:520px; height:520px; background:rgba(100,30,220,0.2); top:-110px; left:-110px; }
        .orb-right { width:620px; height:620px; background:rgba(120,40,240,0.16); bottom:50px; right:-160px; }
        .dot-grid {
          position:absolute; inset:0;
          background-image:radial-gradient(rgba(139,92,246,0.14) 1px, transparent 1px);
          background-size:32px 32px;
          mask-image:radial-gradient(ellipse 80% 80% at 20% 50%, black 30%, transparent 100%);
        }

        /* ── PROFILE COL ── */
        .profile-col {
          grid-area: profile;
          position: relative; z-index:1;
          display: flex; align-items:flex-end; justify-content:center;
          overflow: hidden;
        }
        .profile-img {
          width:100%; height:100%;
          object-fit:cover; object-position:top center;
          display:block; min-height:580px;
        }
        .profile-vignette {
          position:absolute; inset:0; z-index:2;
          background: linear-gradient(to right, #07070f 0%, rgba(7,7,15,0.35) 28%, transparent 60%);
        }
        .profile-col::after {
          content:''; position:absolute; bottom:0; left:0; right:0; height:200px;
          background:linear-gradient(to top, #07070f 0%, transparent 100%);
          z-index:2; pointer-events:none;
        }

        /* ── OTW CARD - Desktop only ── */
        .otw-card.desktop-only {
          position:absolute; bottom:60px; right:32px; z-index:10;
          background:rgba(12,10,26,0.85); backdrop-filter:blur(16px);
          border:1px solid rgba(139,92,246,0.22); border-radius:16px;
          padding:20px 24px; min-width:235px;
        }
        .otw-avail { display:flex; align-items:center; gap:8px; font-size:11px; color:#94a3b8; margin-bottom:7px; font-weight:500; }
        .otw-dot   { display:inline-block; width:7px; height:7px; border-radius:50%; background:#a855f7; flex-shrink:0; animation:pulse 2s ease-in-out infinite; }
        .otw-title { font-family:'Manrope','Inter',sans-serif; font-size:1.4rem; font-weight:800; color:#fff; margin-bottom:5px; letter-spacing:-0.3px; }
        .otw-hi    { color:#a855f7; font-weight:800; }
        .otw-sub   { font-size:11.5px; color:#64748b; line-height:1.5; }
        .otw-bar   { margin-top:13px; height:3px; width:46px; border-radius:2px; background:linear-gradient(90deg,#7c3aed,#a855f7); }

        /* ── CONTENT COL ── */
        .content-col {
          grid-area: content; position:relative; z-index:5;
          display:flex; flex-direction:column; justify-content:center;
          padding: 120px 0 60px 64px; max-width:640px;
        }

        .hero-badge {
          display:inline-flex; align-items:center;
          border:1px solid rgba(139,92,246,0.38); background:rgba(139,92,246,0.09);
          padding:6px 16px; border-radius:100px;
          font-size:12.5px; color:#c4b5fd; font-weight:600;
          margin-bottom:24px; width:fit-content;
          backdrop-filter: blur(4px);
        }

        .hero-heading {
          font-family: 'Manrope', 'Inter', sans-serif;
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .hero-accent {
          font-weight: 800;
          background: linear-gradient(135deg, #c084fc, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .mobile-br { display:none; }

        .hero-desc {
          font-size:15px; color:#94a3b8; line-height:1.75;
          max-width:460px; font-weight:400; margin-bottom:30px;
        }

        .feat-row { display:flex; gap:12px; margin-bottom:32px; flex-wrap:wrap; }
        .feat-chip {
          display:flex; align-items:center; gap:10px;
          background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08);
          border-radius:12px; padding:10px 14px; flex:1; min-width:130px;
          transition:all 0.25s;
        }
        .feat-chip:hover { border-color:rgba(139,92,246,0.42); background:rgba(139,92,246,0.07); transform:translateY(-2px); }
        .feat-icon-wrap {
          width:32px; height:32px; background:rgba(124,58,237,0.18);
          border-radius:8px; display:flex; align-items:center; justify-content:center;
          color:#a78bfa; font-size:14px;
        }
        .feat-title { display:block; font-size:12.5px; font-weight:700; color:#e2e8f0; }
        .feat-sub   { display:block; font-size:10px; color:#64748b; margin-top:2px; font-weight:500; }

        .cta-row { display:flex; gap:14px; margin-bottom:28px; flex-wrap:wrap; }
        .btn-primary {
          padding:12px 28px; background:linear-gradient(135deg,#7c3aed,#6d28d9);
          border-radius:100px; font-size:13.5px; font-weight:600;
          color:#fff; text-decoration:none; cursor:pointer;
          transition:all 0.2s;
        }
        .btn-primary:hover { opacity:0.9; transform:translateY(-2px); box-shadow:0 8px 24px rgba(124,58,237,0.35); }
        .btn-outline {
          padding:12px 28px; border:1.5px solid rgba(139,92,246,0.5);
          border-radius:100px; font-size:13.5px; font-weight:600;
          color:#a78bfa; text-decoration:none; cursor:pointer;
          transition:all 0.2s;
        }
        .btn-outline:hover { background:rgba(139,92,246,0.1); transform:translateY(-2px); }

        .social-section { display:flex; align-items:center; gap:18px; }
        .social-label { font-size:11.5px; color:#475569; font-weight:700; border-bottom:2px solid #7c3aed; padding-bottom:2px; text-transform:uppercase; }
        .social-row { display:flex; gap:10px; }
        .social-btn {
          width:36px; height:36px; border:1px solid rgba(255,255,255,0.1); border-radius:8px;
          display:flex; align-items:center; justify-content:center;
          color:#64748b; font-size:16px; text-decoration:none;
          transition:all 0.2s;
        }
        .social-btn:hover { color:#fff; border-color:rgba(139,92,246,0.5); background:rgba(139,92,246,0.1); transform:translateY(-2px); }

        .tech-bar {
          grid-area:tech; position:relative; z-index:5;
          display:flex; align-items:center;
          background:rgba(255,255,255,0.025); border-top:1px solid rgba(255,255,255,0.07);
          padding:0 64px; height:68px; overflow:hidden;
        }
        .tech-label-block { display:flex; align-items:center; gap:12px; flex-shrink:0; }
        .tech-code { font-size:18px; color:#7c3aed; font-family:monospace; font-weight:700; }
        .tech-title-txt { display:block; font-size:12.5px; font-weight:700; color:#e2e8f0; }
        .tech-sub-txt   { display:block; font-size:10px; color:#475569; }
        .tech-divider { width:1px; height:36px; background:rgba(255,255,255,0.1); margin:0 24px; flex-shrink:0; }
        .tech-strip-wrapper { display:flex; align-items:center; gap:36px; overflow-x:hidden; flex:1; cursor:default; user-select:none; scroll-behavior:auto; }
        .tech-item { display:flex; align-items:center; gap:8px; flex-shrink:0; }
        .tech-icon { width:20px; height:20px; object-fit:contain; filter:brightness(0.8); }
        .tech-name { font-size:12.5px; color:#94a3b8; font-weight:500; white-space:nowrap; }
        .tech-more { font-size:12.5px; color:#475569; flex-shrink:0; }

        /* ══════════════════════════════════════════
           TABLET RESPONSIVE (768px - 1024px)
        ══════════════════════════════════════════ */
        @media (min-width: 768px) and (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 0.9fr 1.1fr;
            min-height: 100vh;
          }

          .content-col {
            padding: 100px 0 60px 40px;
            max-width: 500px;
          }

          .hero-heading {
            font-size: clamp(2rem, 3.5vw, 2.8rem);
          }

          .hero-desc {
            font-size: 13.5px;
            max-width: 380px;
          }

          .feat-chip {
            min-width: 110px;
            padding: 8px 12px;
          }

          .profile-img {
            min-height: auto;
            height: 100%;
            object-position: center 20%;
          }

          .profile-vignette {
            background: linear-gradient(to right, #07070f 0%, rgba(7,7,15,0.4) 40%, transparent 70%);
          }

          /* Show OTW card only on larger tablets */
          .otw-card.desktop-only {
            display: block;
            bottom: 40px;
            right: 24px;
            padding: 16px 20px;
            min-width: 200px;
          }

          .otw-title { font-size: 1.2rem; }
          .otw-sub { font-size: 10px; }

          .tech-bar {
            padding: 0 40px;
            height: 62px;
          }

          .tech-strip-wrapper {
            gap: 28px;
          }
        }

        /* ══════════════════════════════════════════
           MOBILE RESPONSIVE (below 768px)
        ══════════════════════════════════════════ */
        @media (max-width: 767px) {
          .hero-section {
            display: flex;
            flex-direction: column;
            min-height: 100svh;
          }

          .profile-col {
            position: absolute;
            inset: 0;
            z-index: 0;
            height: 100%;
          }
          .profile-img {
            width: 100%; height: 100%;
            object-fit: cover;
            object-position: center top;
            min-height: unset;
          }
          .profile-vignette {
            background: linear-gradient(135deg, rgba(7,7,15,0.92) 0%, rgba(7,7,15,0.75) 45%, rgba(7,7,15,0.55) 100%);
          }
          .profile-col::after {
            height: 100%;
            background: linear-gradient(to top, rgba(7,7,15,0.95) 0%, rgba(7,7,15,0.4) 45%, transparent 100%);
          }

          .otw-card.desktop-only {
            display: none;
          }

          .content-col {
            position: relative;
            z-index: 5;
            flex: 1;
            padding: 100px 24px 24px 24px;
            max-width: 100%;
            justify-content: flex-end;
          }

          .hero-heading {
            font-size: clamp(1.8rem, 8vw, 2.6rem);
            line-height: 1.1;
          }
          .mobile-br { display:block; }

          .hero-desc { font-size: 13px; max-width: 100%; margin-bottom: 22px; }

          .feat-row { gap: 8px; margin-bottom: 22px; }
          .feat-chip {
            min-width: unset;
            padding: 8px 10px;
            background: rgba(7,7,15,0.55);
            backdrop-filter: blur(8px);
          }

          .cta-row { gap: 10px; margin-bottom: 22px; flex-direction: column; }
          .btn-primary, .btn-outline { text-align: center; width: 100%; }

          .social-section { gap: 14px; flex-wrap: wrap; }

          .tech-bar {
            position: relative; z-index: 5;
            padding: 0 16px; height: 56px;
            background: rgba(7,7,15,0.88);
            backdrop-filter: blur(10px);
          }
          .tech-strip-wrapper { gap: 24px; }
          .tech-name { font-size: 11px; }
          .tech-code { font-size: 16px; }
          .tech-title-txt { font-size: 11px; }
          .tech-sub-txt { font-size: 9px; }
          .tech-divider { margin: 0 12px; }
        }

        /* ══════════════════════════════════════════
           SMALL MOBILE (below 480px)
        ══════════════════════════════════════════ */
        @media (max-width: 480px) {
          .content-col { padding: 90px 16px 20px 16px; }
          .hero-heading { font-size: clamp(1.6rem, 7vw, 2.2rem); }
          .hero-badge { font-size: 11px; padding: 5px 12px; }
          .hero-desc { font-size: 12px; }
          .feat-chip { flex: 1 1 calc(50% - 4px); }
          .social-label { font-size: 10px; }
          .tech-bar { height: 52px; padding: 0 12px; }
          .tech-strip-wrapper { gap: 18px; }
          .tech-icon { width: 16px; height: 16px; }
          .tech-name { font-size: 10px; }
        }
      `}</style>
    </section>
  );
}

export default Hero;