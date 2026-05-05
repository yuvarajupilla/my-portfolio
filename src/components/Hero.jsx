import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaRocket, FaBolt, FaMobileAlt } from "react-icons/fa";
import profile from "../assets/profile.png";

/* ─── Tech stack data ─── */
const TECH = [
  { label: "React.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { label: "Tailwind CSS",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { label: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "Express.js",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { label: "MongoDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { label: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

function Hero() {
  const stripRef = useRef(null);

  /* auto-scroll tech strip */
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    let raf;
    let pos = 0;
    const speed = 0.4;
    const half = el.scrollWidth / 2;
    const tick = () => {
      pos += speed;
      if (pos >= half) pos = 0;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="hero-section">

      {/* ── BACKGROUND ── */}
      <div className="hero-bg">
        <div className="orb orb-left" />
        <div className="orb orb-right" />
        <div className="dot-grid" />
      </div>

      {/* ── PROFILE IMAGE ── */}
      <div className="profile-col anim-profile">
        <div className="profile-vignette" />
        <img src={profile} alt="Yuvaraju Pilla" className="profile-img" />
        <div className="otw-card anim-otw">
          <p className="otw-avail">
            <span className="otw-dot" /> Available for opportunities
          </p>
          <p className="otw-title">
            <span className="otw-highlight">Open</span> to Work
          </p>
          <p className="otw-sub">Let's build something amazing together!</p>
          <div className="otw-bar" />
        </div>
      </div>

      {/* ── LEFT CONTENT ── */}
      <div className="content-col">

        <div className="hero-badge anim-item" style={{ animationDelay: "0.1s" }}>
          <span>👋</span> Hi, I'm Yuvaraju Pilla
        </div>

        <h1 className="hero-heading anim-item" style={{ animationDelay: "0.25s" }}>
          Frontend Developer<br />
          building{" "}
          <span className="hero-accent">fast, scalable</span>
          <br />and modern web apps.
        </h1>

        <p className="hero-desc anim-item" style={{ animationDelay: "0.42s" }}>
          I craft responsive, user-friendly and high-performance web applications
          using React.js and modern technologies.
        </p>

        <div className="feat-row anim-item" style={{ animationDelay: "0.56s" }}>
          <div className="feat-chip">
            <span className="feat-icon-wrap"><FaRocket className="feat-icon" /></span>
            <span>
              <span className="feat-title">Clean Code</span>
              <span className="feat-sub">Maintainable &amp; Scalable</span>
            </span>
          </div>
          <div className="feat-chip">
            <span className="feat-icon-wrap"><FaBolt className="feat-icon" /></span>
            <span>
              <span className="feat-title">High Performance</span>
              <span className="feat-sub">Optimized &amp; Fast</span>
            </span>
          </div>
          <div className="feat-chip">
            <span className="feat-icon-wrap"><FaMobileAlt className="feat-icon" /></span>
            <span>
              <span className="feat-title">Responsive</span>
              <span className="feat-sub">Works on all devices</span>
            </span>
          </div>
        </div>

        <div className="cta-row anim-item" style={{ animationDelay: "0.7s" }}>
          <a href="#projects" className="btn-primary">View My Work →</a>
          <a href="/resume.pdf" download className="btn-outline">Download Resume ↓</a>
        </div>

        <div className="social-section anim-item" style={{ animationDelay: "0.84s" }}>
          <p className="social-label">Let's connect</p>
          <div className="social-row">
            <a href="https://github.com"    target="_blank" rel="noreferrer" className="social-btn"><FaGithub /></a>
            <a href="https://linkedin.com"  target="_blank" rel="noreferrer" className="social-btn"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn"><FaInstagram /></a>
            <a href="https://wa.me/"        target="_blank" rel="noreferrer" className="social-btn"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* ── TECH STACK BAR ── */}
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
          <div className="tech-more">••• More</div>
        </div>
      </div>

      {/* ── STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        /* ══════════════════════════════
           KEYFRAMES
        ══════════════════════════════ */

        /* Left content elements: slide up + fade in */
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Profile image: slide in from right */
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* OTW card: spring pop */
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.78) translateY(16px); }
          65%  { transform: scale(1.04) translateY(-3px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Tech bar: fade up from bottom */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* OTW dot pulse */
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(168,85,247,0.7); }
          50%       { box-shadow: 0 0 0 7px rgba(168,85,247,0); }
        }

        /* ══════════════════════════════
           ANIMATION CLASSES
        ══════════════════════════════ */
        .anim-item {
          opacity: 0;
          animation: slideUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .anim-profile {
          animation: slideInRight 0.95s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
        }
        .anim-otw {
          animation: popIn 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) 1.1s both;
        }
        .anim-techbar {
          animation: fadeUp 0.6s ease 1.0s both;
        }

        /* ══════════════════════════════
           LAYOUT
        ══════════════════════════════ */
        .hero-section {
          position: relative;
          min-height: 100vh;
          background: #080810;
          color: #fff;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr auto;
          grid-template-areas:
            "content profile"
            "tech    tech";
          font-family: 'DM Sans', sans-serif;
        }

        /* ── BACKGROUND ── */
        .hero-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .orb { position: absolute; border-radius: 50%; filter: blur(120px); }
        .orb-left  { width: 500px; height: 500px; background: rgba(100,30,220,0.22); top: -100px; left: -100px; }
        .orb-right { width: 600px; height: 600px; background: rgba(120,40,240,0.18); bottom: 60px; right: -150px; }
        .dot-grid {
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(139,92,246,0.15) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(ellipse 80% 80% at 20% 50%, black 30%, transparent 100%);
        }

        /* ── PROFILE ── */
        .profile-col {
          grid-area: profile;
          position: relative; z-index: 1;
          display: flex; align-items: flex-end; justify-content: center;
          overflow: hidden;
        }
        .profile-img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top center;
          display: block; min-height: 560px;
        }
        .profile-vignette {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(to right, #080810 0%, rgba(8,8,16,0.4) 25%, transparent 60%);
        }
        .profile-col::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 180px;
          background: linear-gradient(to top, #080810 0%, transparent 100%);
          z-index: 2; pointer-events: none;
        }

        /* ── OTW CARD ── */
        .otw-card {
          position: absolute; bottom: 56px; right: 28px; z-index: 10;
          background: rgba(15,12,28,0.82);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(139,92,246,0.25);
          border-radius: 14px; padding: 18px 22px; min-width: 230px;
        }
        .otw-avail {
          display: flex; align-items: center; gap: 7px;
          font-size: 11px; color: #94a3b8; margin-bottom: 6px;
        }
        .otw-dot {
          display: inline-block; width: 7px; height: 7px;
          border-radius: 50%; background: #a855f7; flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }
        .otw-title { font-size: 1.35rem; font-weight: 700; font-family: 'Syne', sans-serif; color: #fff; margin-bottom: 4px; }
        .otw-highlight { color: #a855f7; }
        .otw-sub { font-size: 11.5px; color: #64748b; line-height: 1.5; }
        .otw-bar { margin-top: 12px; height: 3px; width: 44px; border-radius: 2px; background: linear-gradient(90deg, #7c3aed, #a855f7); }

        /* ── CONTENT COL ── */
        .content-col {
          grid-area: content; position: relative; z-index: 5;
          display: flex; flex-direction: column; justify-content: center;
          padding: 120px 0 60px 60px; max-width: 640px;
        }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid rgba(139,92,246,0.4); background: rgba(139,92,246,0.08);
          padding: 7px 18px; border-radius: 100px;
          font-size: 13px; color: #c4b5fd; font-weight: 500;
          margin-bottom: 22px; width: fit-content;
        }

        .hero-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 3.2vw, 3rem);
          font-weight: 700; line-height: 1.18;
          letter-spacing: -0.015em; margin-bottom: 18px;
        }
        .hero-accent {
          background: linear-gradient(135deg, #a855f7, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-desc {
          font-size: 15px; color: #94a3b8;
          line-height: 1.7; max-width: 480px;
          font-weight: 300; margin-bottom: 28px;
        }

        /* ── FEAT CHIPS ── */
        .feat-row { display: flex; gap: 12px; margin-bottom: 32px; flex-wrap: wrap; }
        .feat-chip {
          display: flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px; padding: 10px 14px; flex: 1; min-width: 130px;
          transition: border-color 0.25s, background 0.25s;
        }
        .feat-chip:hover { border-color: rgba(139,92,246,0.4); background: rgba(139,92,246,0.07); }
        .feat-icon-wrap {
          width: 32px; height: 32px; background: rgba(124,58,237,0.2);
          border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .feat-icon { color: #a78bfa; font-size: 14px; }
        .feat-title { display: block; font-size: 13px; font-weight: 600; color: #e2e8f0; }
        .feat-sub   { display: block; font-size: 10.5px; color: #64748b; margin-top: 1px; }

        /* ── CTA ── */
        .cta-row { display: flex; gap: 14px; margin-bottom: 28px; flex-wrap: wrap; }
        .btn-primary {
          padding: 12px 28px; background: linear-gradient(135deg, #7c3aed, #6d28d9);
          border-radius: 100px; font-size: 14px; font-weight: 500;
          color: #fff; text-decoration: none; cursor: pointer; border: none;
          font-family: 'DM Sans', sans-serif; transition: opacity 0.2s, transform 0.2s;
        }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }
        .btn-outline {
          padding: 12px 28px; border: 1.5px solid rgba(139,92,246,0.55);
          border-radius: 100px; font-size: 14px; font-weight: 500;
          color: #a78bfa; text-decoration: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; transition: background 0.2s, transform 0.2s;
        }
        .btn-outline:hover { background: rgba(139,92,246,0.1); transform: translateY(-2px); }

        /* ── SOCIALS ── */
        .social-section { display: flex; align-items: center; gap: 18px; }
        .social-label { font-size: 12px; color: #475569; font-weight: 500; border-bottom: 1.5px solid #7c3aed; padding-bottom: 2px; white-space: nowrap; }
        .social-row { display: flex; gap: 10px; }
        .social-btn {
          width: 36px; height: 36px;
          border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: #64748b; font-size: 16px; text-decoration: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .social-btn:hover { color: #fff; border-color: rgba(139,92,246,0.5); background: rgba(139,92,246,0.1); transform: translateY(-2px); }

        /* ── TECH BAR ── */
        .tech-bar {
          grid-area: tech; position: relative; z-index: 5;
          display: flex; align-items: center;
          background: rgba(255,255,255,0.03); border-top: 1px solid rgba(255,255,255,0.07);
          padding: 0 60px; height: 68px; overflow: hidden;
        }
        .tech-label-block { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
        .tech-code { font-size: 20px; color: #7c3aed; font-family: monospace; font-weight: 700; }
        .tech-title-txt { display: block; font-size: 13px; font-weight: 600; color: #e2e8f0; line-height: 1.2; }
        .tech-sub-txt   { display: block; font-size: 10.5px; color: #475569; }
        .tech-divider { width: 1px; height: 38px; background: rgba(255,255,255,0.1); margin: 0 24px; flex-shrink: 0; }
        .tech-strip-wrapper { display: flex; align-items: center; gap: 36px; overflow-x: hidden; flex: 1; cursor: default; user-select: none; scroll-behavior: auto; }
        .tech-item { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .tech-icon { width: 22px; height: 22px; object-fit: contain; filter: brightness(0.85); }
        .tech-name { font-size: 13px; color: #94a3b8; font-weight: 500; white-space: nowrap; }
        .tech-more { font-size: 13px; color: #475569; flex-shrink: 0; }

        /* ══════════════════════════════
           MOBILE RESPONSIVE
        ══════════════════════════════ */
        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
            grid-template-areas: "profile" "content" "tech";
            min-height: 100svh;
          }
          .anim-profile { animation: fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
          .profile-col { height: 55vw; min-height: 280px; max-height: 400px; }
          .profile-img { min-height: unset; height: 100%; width: 100%; object-position: top center; }
          .profile-vignette { background: linear-gradient(to bottom, transparent 40%, rgba(8,8,16,0.7) 75%, #080810 100%); }
          .profile-col::after { height: 80px; }
          .otw-card { bottom: 16px; right: 16px; padding: 12px 16px; min-width: 180px; }
          .otw-title { font-size: 1.05rem; }
          .content-col { padding: 20px 24px 32px; max-width: 100%; justify-content: flex-start; }
          .hero-heading { font-size: clamp(1.6rem, 5.5vw, 2.2rem); }
          .feat-row { gap: 8px; }
          .feat-chip { min-width: 100px; padding: 8px 10px; }
          .tech-bar { padding: 0 20px; height: 58px; }
        }

        @media (max-width: 520px) {
          .hero-heading { font-size: 1.55rem; }
          .feat-row { flex-direction: column; gap: 8px; }
          .feat-chip { min-width: unset; }
          .cta-row { flex-direction: column; gap: 10px; }
          .btn-primary, .btn-outline { text-align: center; }
          .social-section { flex-direction: column; align-items: flex-start; gap: 10px; }
          .otw-card { display: none; }
          .tech-bar { padding: 0 16px; }
        }
      `}</style>
    </section>
  );
}

export default Hero;
