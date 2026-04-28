import { useState, useEffect, useRef } from "react";


import IMG_HERO from "../assets/home/IMG_HERO.png";
import IMG_TRAIN from "../assets/home/IMG_TRAIN.png";
import IMG_FILES from "../assets/home/IMG_FILES.png";
import IMG_TEAM from "../assets/home/IMG_TEAM.png";
import IMG_SHOP from "../assets/home/IMG_SHOP.png";


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
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
    }}>{children}</div>
  );
};

const POP = "#F374AE";
const WARM_BG = "#F0F3F7";
const DARK = "#2C2416";
const MID = "#6B6155";
const MUTED = "#7A8494";
const SUBTLE = "#A0AAB8";
const TAN = "#DEE3EA";
const TAN_BG = "#E6EBF1";
const GREEN = "#5C8A6E";

const CaseStudyRow = ({ href, image, number, title, description, accent, imagePosition }) => {
  const [hovered, setHovered] = useState(false);
  const col = accent || POP;
  return (
    <a
      href={href}
      className="case-study-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: "32px",
        alignItems: "center",
        padding: "32px 0",
        borderBottom: `1px solid ${TAN}`,
        textDecoration: "none",
        transition: "all 0.3s ease",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
      }}
    >
      <div className="case-study-thumb" style={{
        borderRadius: "12px",
        overflow: "hidden",
        aspectRatio: "4/3",
        background: TAN_BG,
        border: `1px solid ${hovered ? col + "44" : TAN}`,
        transition: "border-color 0.3s ease",
      }}>
        <img src={image} alt={title} style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: imagePosition || "center",
          display: "block",
        }} />
      </div>
      <div>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          color: col,
          letterSpacing: "0.08em",
          marginBottom: "8px",
          opacity: 0.8,
        }}>{number}</div>
        <h3 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "22px",
          fontWeight: 400,
          color: DARK,
          margin: "0 0 8px",
          lineHeight: 1.3,
        }}>{title}</h3>
        <p style={{
          fontSize: "14px",
          color: MID,
          lineHeight: 1.6,
          margin: 0,
        }}>{description}</p>
        <div style={{
          marginTop: "12px",
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          color: col,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}>View case study →</div>
      </div>
    </a>
  );
};

export default function SimplePortfolio() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div style={{ background: "linear-gradient(180deg, #F5F8FB 0%, #D6DFEB 100%)", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />


      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 640px) {
          .hero-grid { display: flex !important; flex-direction: column !important; gap: 0 !important; }
          .hero-photo { width: 160px !important; height: 200px !important; margin-top: 16px !important; margin-bottom: 24px !important; }
          .hero-text-left { order: 1 !important; }
          .hero-photo-wrap { order: 2 !important; }
          .hero-positioning { order: 3 !important; }
          .case-study-row { grid-template-columns: 1fr !important; gap: 16px !important; }
          .case-study-thumb { aspect-ratio: 16/9 !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}} />

      {/* Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(245,248,251,0.9)", backdropFilter: "blur(12px)",
        borderBottom: scrollY > 50 ? `1px solid ${TAN}` : "1px solid transparent",
        transition: "border-color 0.3s ease", padding: "16px 0",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: DARK, letterSpacing: "0.04em", fontWeight: 500 }}>Sumier Phalake</span>
          <div style={{ display: "flex", gap: "28px" }}>
            {[{label: "Work", href: "#work"}, {label: "About", href: "#about"}, {label: "Contact", href: "#contact"}].map(item => (
              <a key={item.label} href={item.href} style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: MUTED, textDecoration: "none", letterSpacing: "0.04em" }}>{item.label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 32px 60px" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "48px", alignItems: "start" }}>
          <div>
            <FadeIn>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "28px" }}>
                DESIGN & STRATEGY LEADERSHIP
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(36px, 6vw, 56px)",
                fontWeight: 400, color: DARK, lineHeight: 1.1,
                margin: "0 0 24px", letterSpacing: "-0.015em",
              }}>
                Sumier{" "}<span style={{ color: POP, fontStyle: "italic" }}>Phalake</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p style={{ fontSize: "18px", color: MID, lineHeight: 1.75, margin: "0" }}>
                I solve cross-functional strategy problems through the lens of human insight. I think in systems — building the teams, processes, and products needed to transform high-stakes ambiguity into clarity.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <div style={{
              width: "200px",
              height: "240px",
              borderRadius: "16px",
              marginTop: "52px",
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <img src={IMG_HERO} alt="Sumier Phalake" style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }} />
            </div>
          </FadeIn>
        </div>
      </header>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ height: "1px", background: `linear-gradient(to right, ${POP}44, transparent 70%)` }} />
      </div>

      {/* Selected Work */}
      <section id="work" style={{ maxWidth: "800px", margin: "0 auto", padding: "30px 32px 40px" }}>
        <FadeIn>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", color: POP,
            letterSpacing: "0.12em", marginBottom: "0px", textTransform: "uppercase", opacity: 0.7,
          }}>Selected work</div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <CaseStudyRow
            href="/strategic-design/gemini-india"
            image={IMG_TRAIN}
            number="01"
            title="Differentiating an AI product for a billion-person market"
            description="End-to-end product strategy for a major AI product in India — from audience identification and field research to co-created solutions and business-ready recommendations."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <CaseStudyRow
            href="/strategic-design/search-regulation"
            image={IMG_SHOP}
            number="02"
            title="Evolving a business model under regulatory pressure"
            description="Designing solutions that satisfy user needs, elevate third-party content, and comply with global regulations — simultaneously."
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <CaseStudyRow
            href="/strategic-design/files"
            image={IMG_FILES}
            imagePosition="top 40px"
            number="03"
            title="From pivot to 500 million users"
            description="Files by Google — investing the right level of craft to learn, finding product-market fit, then scaling to the highest-rated Google app."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <CaseStudyRow
            href="/leadership"
            image={IMG_TEAM}
            number="04"
            title="Building the machine"
            description="Head of Design at Google's Next Billion Users — building a 35-person UX team, redesigning the product development process, and cultivating a mission-driven culture."
            accent={GREEN}
          />
        </FadeIn>
      </section>

      {/* About */}
      <section id="about" style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 32px 20px" }}>
        <FadeIn>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", color: POP,
            letterSpacing: "0.12em", marginBottom: "20px", textTransform: "uppercase", opacity: 0.7,
          }}>About</div>
        </FadeIn>

        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "40px", alignItems: "start" }}>
          <FadeIn delay={0.05}>
            <div>
              <h2 style={{
                fontFamily: "'Instrument Serif', serif", fontSize: "32px", fontWeight: 400,
                color: DARK, margin: "0 0 20px", lineHeight: 1.2,
              }}>
                Hi, I'm{" "}<span style={{ color: POP, fontStyle: "italic" }}>Sumier</span>
              </h2>

              <p style={{ fontSize: "15px", color: MID, lineHeight: 1.8, margin: "0 0 16px" }}>
                A Sinclair ZX Spectrum started me off on my journey as a lover of all things tech. I grew up in Mumbai, lived for many years in Atlanta, and now call San Francisco home.
              </p>
              <p style={{ fontSize: "15px", color: MID, lineHeight: 1.8, margin: "0 0 16px" }}>
                A life long gamer, I developed a love for narrative experiences that triggered deep emotional responses in me — games such as Grim Fandango. I carried that with me when I studied design and interactive narratives in grad school. Moving to the US also helped me find community as a queer man, something that was hard to find in India back then. I've since developed a deep love of nature, hiking, and the national parks.
              </p>
              <p style={{ fontSize: "15px", color: MID, lineHeight: 1.8, margin: "0 0 16px" }}>
                I'm an amateur street photographer, and baking sweet treats for friends is one of my favorite things.
              </p>
              <p style={{ fontSize: "15px", color: MID, lineHeight: 1.8, margin: "0" }}>
                I've been designing for over 20 years. I hold an MS in Digital Media from Georgia Tech and started my career at IBM Interactive before joining Google, where I've spent the last decade.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ padding: "28px 0 0", borderTop: `1px solid ${TAN}` }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: "11px", color: MUTED,
                letterSpacing: "0.1em", marginBottom: "20px",
              }}>WHAT I BELIEVE</div>

              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontWeight: 600, fontSize: "15px", color: DARK }}>People not products. </span>
                <span style={{ fontSize: "15px", color: MID, lineHeight: 1.7 }}>Investing in people's growth results in successful products, not the other way around.</span>
              </div>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontWeight: 600, fontSize: "15px", color: DARK }}>Start with what you don't know. </span>
                <span style={{ fontSize: "15px", color: MID, lineHeight: 1.7 }}>The most valuable insights come from the problems you didn't know existed.</span>
              </div>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontWeight: 600, fontSize: "15px", color: DARK }}>Build to learn, then build to last. </span>
                <span style={{ fontSize: "15px", color: MID, lineHeight: 1.7 }}>Invest the right level of craft to learn trustworthy things, then scale that investment.</span>
              </div>
              <div style={{ marginBottom: "0" }}>
                <span style={{ fontWeight: 600, fontSize: "15px", color: DARK }}>Culture is a design problem. </span>
                <span style={{ fontSize: "15px", color: MID, lineHeight: 1.7 }}>It happens whether you work on it or not. Great leaders design it intentionally.</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 32px 80px", textAlign: "center" }}>
        <FadeIn>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:sumier@gmail.com" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 24px", background: DARK, color: WARM_BG,
              borderRadius: "8px", textDecoration: "none",
              fontFamily: "'DM Mono', monospace", fontSize: "13px", letterSpacing: "0.03em",
            }}>
              sumier@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/sumier/" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 24px", background: "transparent", color: DARK,
              borderRadius: "8px", border: `1px solid ${TAN}`, textDecoration: "none",
              fontFamily: "'DM Mono', monospace", fontSize: "13px", letterSpacing: "0.03em",
            }}>
              LinkedIn →
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${TAN}`, padding: "32px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: SUBTLE }}>Sumier Phalake © 2026</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: SUBTLE }}>San Francisco</span>
        </div>
      </footer>
    </div>
  );
}