import { useState, useEffect, useRef } from "react";

import IMG_HERO from "../assets/home/IMG_HERO.png";
import IMG_TRAIN from "../assets/home/IMG_TRAIN.png";
import IMG_FILES from "../assets/home/IMG_FILES.png";
import IMG_TEAM from "../assets/home/IMG_TEAM.png";
import IMG_SHOP from "../assets/home/IMG_SHOP.png";

// ── Swiss Editorial v2 — palette & type tokens
const PAPER  = "#FAFAF7";
const INK    = "#0A0A0A";
const ACCENT = "#E8443C";
const MUTED  = "#5A5A5A";
const FAINT  = "#E5E2DA";
const HAIR   = "#C8C4B8";

const SANS  = "'Inter Tight', 'Helvetica Neue', Arial, sans-serif";
const SERIF = "'Times New Roman', Times, serif";
const MONO  = "'JetBrains Mono', 'IBM Plex Mono', monospace";

const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
    }}>{children}</div>
  );
};

const ProjectRow = ({ href, image, number, title, description, client, tag, year }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className="sa-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        columnGap: "24px",
        borderTop: `1px solid ${INK}`,
        padding: "32px 0",
        textDecoration: "none",
        color: INK,
        transition: "background 0.3s ease",
        background: hovered ? "rgba(232,68,60,0.03)" : "transparent",
      }}
    >
      <div style={{ gridColumn: "span 1", paddingTop: "14px" }}>
        <span style={{
          fontFamily: SANS, fontSize: "32px", fontWeight: 300,
          letterSpacing: "-0.02em", color: MUTED, fontVariantNumeric: "tabular-nums lining-nums",
        }}>{number}</span>
      </div>
      <div style={{ gridColumn: "span 5", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "8px", paddingBottom: "8px" }}>
        <h3 style={{
          fontFamily: SANS, fontSize: "40px", fontWeight: 600,
          letterSpacing: "-0.03em", lineHeight: 1.05,
          margin: 0, maxWidth: "440px", color: INK,
        }}>{title}</h3>
        <div style={{ fontFamily: MONO, fontSize: "11px", color: MUTED, letterSpacing: "0.04em", marginTop: "20px" }}>
          {client} &nbsp;·&nbsp; {tag} &nbsp;·&nbsp; {year}
        </div>
      </div>
      <div style={{ gridColumn: "span 3", paddingTop: "8px", paddingBottom: "8px" }}>
        <p style={{ fontFamily: SANS, fontSize: "14px", lineHeight: 1.55, margin: 0, color: MUTED, fontWeight: 400 }}>{description}</p>
      </div>
      <div style={{ gridColumn: "span 3" }}>
        <div style={{ aspectRatio: "16/11", overflow: "hidden", background: FAINT }}>
          <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      </div>
    </a>
  );
};

const beliefs = [
  { title: "People not products", body: "Investing in people's growth results in successful products, not the other way around." },
  { title: "Start with what you don't know", body: "The most valuable insights come from the problems you didn't know existed." },
  { title: "Build to learn, then build to last", body: "Invest the right level of craft to learn trustworthy things, then scale that investment." },
  { title: "Culture is a design problem", body: "It happens whether you work on it or not. Great leaders design it intentionally." },
];

export default function SimplePortfolio() {
  return (
    <div style={{ background: PAPER, color: INK, fontFamily: SANS, minHeight: "100vh", fontFeatureSettings: "'ss01','cv11'" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .sa-hero  { grid-template-columns: 1fr !important; }
          .sa-hero-photo { padding-top: 0 !important; max-width: 280px; }
          .sa-row   { grid-template-columns: 1fr !important; gap: 16px !important; }
          .sa-row > div { grid-column: auto !important; }
          .sa-about { grid-template-columns: 1fr !important; }
          .sa-nav   { grid-template-columns: 1fr 1fr !important; }
          .sa-nav-mid { display: none !important; }
          .sa-pad   { padding-left: 24px !important; padding-right: 24px !important; }
          .sa-hero-h1 { font-size: 64px !important; }
          .sa-h2    { font-size: 32px !important; }
          .sa-contact-h { font-size: 48px !important; }
        }
      ` }} />

      {/* Nav */}
      <nav className="sa-nav sa-pad" style={{
        display: "grid", gridTemplateColumns: "repeat(12, 1fr)", padding: "20px 56px",
        borderBottom: `1px solid ${INK}`, columnGap: "24px", alignItems: "center",
        position: "sticky", top: 0, background: PAPER, zIndex: 100,
      }}>
        <div style={{ gridColumn: "span 4", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "10px", height: "10px", background: ACCENT }} />
          <span style={{ fontFamily: MONO, fontSize: "12px", color: INK }}>Sumier Phalake</span>
        </div>
        <div className="sa-nav-mid" style={{ gridColumn: "span 5", fontFamily: MONO, fontSize: "12px", color: MUTED }}>
          Design & strategy leadership · San Francisco
        </div>
        <div style={{ gridColumn: "span 3", display: "flex", justifyContent: "flex-end", gap: "24px" }}>
          {[{ l: "Work", h: "#work" }, { l: "About", h: "#about" }, { l: "Contact", h: "#contact" }].map(i => (
            <a key={i.l} href={i.h} style={{ fontFamily: MONO, fontSize: "12px", color: INK, textDecoration: "none" }}>{i.l}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <header className="sa-pad" style={{ padding: "80px 56px 96px", borderBottom: `1px solid ${INK}` }}>
        <div className="sa-hero" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", columnGap: "24px" }}>
          <div style={{ gridColumn: "span 8" }}>
            <FadeIn>
              <div style={{ fontFamily: MONO, fontSize: "12px", color: ACCENT, marginBottom: "40px", letterSpacing: "0.04em" }}>§ 01 — Cover</div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="sa-hero-h1" style={{
                fontFamily: SANS, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 0.96,
                fontSize: "clamp(56px, 10vw, 140px)", margin: 0, color: INK,
              }}>
                Designing{" "}
                <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.01em" }}>clarity</span>{" "}
                <span style={{ color: ACCENT }}>·</span>
                <br />from ambiguity.
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p style={{ fontSize: "20px", lineHeight: 1.5, margin: "48px 0 0", maxWidth: "640px", color: MUTED, fontWeight: 400 }}>
                I solve cross-functional strategy problems through the lens of human insight. I think in systems — building the teams, processes, and products needed to transform high-stakes ambiguity into clarity.
              </p>
            </FadeIn>
          </div>
          <div className="sa-hero-photo" style={{ gridColumn: "span 4", display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingTop: "96px" }}>
            <FadeIn delay={0.1}>
              <img src={IMG_HERO} alt="Sumier Phalake" style={{ width: "100%", display: "block" }} />
            </FadeIn>
          </div>
        </div>
      </header>

      {/* Selected Work */}
      <section id="work" className="sa-pad" style={{ padding: "72px 56px 0", borderBottom: `1px solid ${INK}` }}>
        <FadeIn>
          <div style={{ marginBottom: "40px" }}>
            <div style={{ fontFamily: MONO, fontSize: "12px", color: ACCENT, letterSpacing: "0.04em", marginBottom: "16px" }}>Selected work</div>
            <h2 className="sa-h2" style={{ fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, fontSize: "40px", maxWidth: "720px" }}>
              Four projects across product, platform, and teams.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <ProjectRow
            href="/strategic-design/gemini-india"
            image={IMG_TRAIN}
            number="01"
            title="Differentiating an AI product for a billion-person market"
            description="End-to-end product strategy for a major AI product in India — from audience identification and field research to co-created solutions and business-ready recommendations."
            client="Google" tag="AI · Strategy" year="2024"
          />
        </FadeIn>
        <FadeIn delay={0.08}>
          <ProjectRow
            href="/strategic-design/search-regulation"
            image={IMG_SHOP}
            number="02"
            title="Evolving a business model under regulatory pressure"
            description="Designing solutions that satisfy user needs, elevate third-party content, and comply with global regulations — simultaneously."
            client="Google Search" tag="Policy · Product" year="2023"
          />
        </FadeIn>
        <FadeIn delay={0.11}>
          <ProjectRow
            href="/strategic-design/files"
            image={IMG_FILES}
            number="03"
            title="From pivot to 500 million users"
            description="Files by Google — investing the right level of craft to learn, finding product-market fit, then scaling to the highest-rated Google app."
            client="Google · NBU" tag="Android · Utility" year="2017–2020"
          />
        </FadeIn>
        <FadeIn delay={0.14}>
          <ProjectRow
            href="/leadership"
            image={IMG_TEAM}
            number="04"
            title="Building the machine"
            description="Head of Design at Google's Next Billion Users — building a 35-person UX team, redesigning the product development process, and cultivating a mission-driven culture."
            client="Google · NBU" tag="Leadership" year="2016–2022"
          />
        </FadeIn>
        <div style={{ borderTop: `1px solid ${INK}` }} />
      </section>

      {/* About */}
      <section id="about" className="sa-pad" style={{ padding: "80px 56px", borderBottom: `1px solid ${INK}` }}>
        <div className="sa-about" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", columnGap: "24px" }}>
          <div style={{ gridColumn: "span 3" }}>
            <FadeIn>
              <div style={{ fontFamily: MONO, fontSize: "12px", color: ACCENT, letterSpacing: "0.04em" }}>About</div>
            </FadeIn>
          </div>
          <div style={{ gridColumn: "span 5" }}>
            <FadeIn delay={0.05}>
              <h2 className="sa-h2" style={{ fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.05, fontSize: "44px", margin: "0 0 32px" }}>
                Twenty-plus years of design, mostly at the seam between people and platforms.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p style={{ fontSize: "15px", lineHeight: 1.65, margin: "0 0 16px", color: MUTED }}>
                A Sinclair ZX Spectrum started me off on my journey as a lover of all things tech. I grew up in Mumbai, lived for many years in Atlanta, and now call San Francisco home.
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.65, margin: "0 0 16px", color: MUTED }}>
                A life-long gamer, I developed a love for narrative experiences that triggered deep emotional responses in me — games such as Grim Fandango. I carried that with me when I studied design and interactive narratives in grad school. Moving to the US also helped me find community as a queer man, something that was hard to find in India back then. I've since developed a deep love of nature, hiking, and the national parks.
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.65, margin: "0 0 16px", color: MUTED }}>
                I'm an amateur street photographer, and baking sweet treats for friends is one of my favorite things.
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.65, margin: 0, color: MUTED }}>
                I hold an MS in Digital Media from Georgia Tech and started my career at IBM Interactive before joining Google, where I've spent the last decade.
              </p>
            </FadeIn>
          </div>
          <div style={{ gridColumn: "span 4" }}>
            <FadeIn delay={0.15}>
              <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.04em", color: MUTED, marginBottom: "16px" }}>Tenets · 04</div>
              <div style={{ borderTop: `1px solid ${INK}` }}>
                {beliefs.map((b, i) => (
                  <div key={i} style={{ borderBottom: `1px solid ${HAIR}`, padding: "20px 0", display: "grid", gridTemplateColumns: "32px 1fr", gap: "12px" }}>
                    <span style={{ fontFamily: MONO, fontSize: "11px", color: ACCENT }}>0{i + 1}</span>
                    <div>
                      <div style={{ fontSize: "15px", fontWeight: 500, marginBottom: "4px", color: INK }}>{b.title}.</div>
                      <div style={{ fontSize: "14px", color: MUTED, lineHeight: 1.55 }}>{b.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="sa-pad" style={{ padding: "96px 56px", borderBottom: `1px solid ${INK}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", columnGap: "24px" }}>
          <div style={{ gridColumn: "span 3" }}>
            <FadeIn>
              <div style={{ fontFamily: MONO, fontSize: "12px", color: ACCENT, letterSpacing: "0.04em" }}>Contact</div>
            </FadeIn>
          </div>
          <div style={{ gridColumn: "span 9" }}>
            <FadeIn delay={0.05}>
              <h2 className="sa-contact-h" style={{ fontFamily: SANS, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 0.96, fontSize: "84px", margin: "0 0 32px" }}>
                <a href="mailto:sumier@gmail.com" style={{ color: INK, textDecoration: "none" }}>
                  sumier<span style={{ color: ACCENT }}>@</span>gmail.com
                </a>
              </h2>
              <div style={{ fontFamily: MONO, fontSize: "13px", display: "flex", gap: "32px", flexWrap: "wrap" }}>
                <a href="mailto:sumier@gmail.com" style={{ color: INK, textDecoration: "none" }}>→ Email</a>
                <a href="https://www.linkedin.com/in/sumier/" target="_blank" rel="noopener noreferrer" style={{ color: INK, textDecoration: "none" }}>→ LinkedIn</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sa-pad" style={{ padding: "16px 56px", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", columnGap: "24px" }}>
        <span style={{ gridColumn: "span 4", fontFamily: MONO, fontSize: "11px", color: MUTED }}>© Sumier Phalake · 2026</span>
        <span style={{ gridColumn: "span 4", fontFamily: MONO, fontSize: "11px", color: MUTED }}>San Francisco · California</span>
        <span style={{ gridColumn: "span 4", textAlign: "right", fontFamily: MONO, fontSize: "11px", color: MUTED }}>Set in Inter Tight</span>
      </footer>
    </div>
  );
}
