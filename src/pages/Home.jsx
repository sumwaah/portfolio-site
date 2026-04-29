import { Link } from "react-router-dom";

import { FadeIn, PAPER, INK, ACCENT, MUTED, FAINT, HAIR, SANS, SERIF, MONO } from "./_swiss.jsx";

import IMG_HERO  from "../assets/home/IMG_HERO.png";
import IMG_TRAIN from "../assets/home/IMG_TRAIN.png";
import IMG_SHOP  from "../assets/home/IMG_SHOP.png";
import IMG_FILES from "../assets/home/IMG_FILES.png";
import IMG_TEAM  from "../assets/home/IMG_TEAM.png";

// ── Content
const PROJECTS = [
  {
    number: "01",
    title: "Differentiating an AI product for a billion-person market",
    description: "End-to-end product strategy for a major AI product in India — from audience identification and field research to co-created solutions and business-ready recommendations.",
    image: IMG_TRAIN,
    year: "2024",
    client: "Google",
    tag: "Strategy",
    href: "/strategic-design/gemini-india",
  },
  {
    number: "02",
    title: "Evolving a business model under regulatory pressure",
    description: "Designing solutions that satisfy user needs, elevate third-party content, and comply with global regulations — simultaneously.",
    image: IMG_SHOP,
    year: "2023",
    client: "Google Search",
    tag: "Policy",
    href: "/strategic-design/search-regulation",
  },
  {
    number: "03",
    title: "From pivot to 500 million users",
    description: "Files by Google — investing the right level of craft to learn, finding product-market fit, then scaling to the highest-rated Google app.",
    image: IMG_FILES,
    year: "2018–2022",
    client: "Google NBU",
    tag: "Product",
    href: "/strategic-design/files",
  },
  {
    number: "04",
    title: "Building the machine",
    description: "Head of Design at Google's Next Billion Users — building a 35-person UX team, redesigning the product development process, and cultivating a mission-driven culture.",
    image: IMG_TEAM,
    year: "2017–2023",
    client: "Google NBU",
    tag: "Leadership",
    href: "/leadership",
  },
];

const ABOUT = [
  "A Sinclair ZX Spectrum started me off on my journey as a lover of all things tech. I grew up in Mumbai, lived for many years in Atlanta, and now call San Francisco home.",
  "A life long gamer, I developed a love for narrative experiences that triggered deep emotional responses in me — games such as Grim Fandango. I carried that with me when I studied design and interactive narratives in grad school.",
  "I've been designing for over 20 years. I hold an MS in Digital Media from Georgia Tech and started my career at IBM Interactive before joining Google, where I've spent the last decade.",
];

const BELIEFS = [
  { title: "People not products", body: "Investing in people's growth results in successful products, not the other way around." },
  { title: "Start with what you don't know", body: "The most valuable insights come from the problems you didn't know existed." },
  { title: "Build to learn, then build to last", body: "Invest the right level of craft to learn trustworthy things, then scale that investment." },
  { title: "Culture is a design problem", body: "It happens whether you work on it or not. Great leaders design it intentionally." },
];

// ── Home-specific nav (uses anchor links, not router Links)
function Nav() {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(12, 1fr)", padding: "20px 56px",
      borderBottom: `1px solid ${INK}`, columnGap: "24px", alignItems: "center",
      background: PAPER, position: "sticky", top: 0, zIndex: 10,
    }}>
      <div style={{ gridColumn: "span 4", display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "10px", height: "10px", background: ACCENT }} />
        <span style={{ fontFamily: MONO, fontSize: "12px" }}>Sumier Phalake</span>
      </div>
      <div style={{ gridColumn: "span 5", fontFamily: MONO, fontSize: "12px", color: MUTED }}>
        Design & strategy leadership · San Francisco
      </div>
      <div style={{ gridColumn: "span 3", display: "flex", justifyContent: "flex-end", gap: "24px", fontFamily: MONO, fontSize: "12px" }}>
        <a href="#work" style={{ color: INK, textDecoration: "none" }}>Work</a>
        <a href="#about" style={{ color: INK, textDecoration: "none" }}>About</a>
        <a href="#contact" style={{ color: INK, textDecoration: "none" }}>Contact</a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{
      fontFamily: SANS, background: PAPER, color: INK,
      fontFeatureSettings: "'ss01','cv11'", minHeight: "100vh",
    }}>
      <Nav />

      {/* HERO */}
      <FadeIn>
        <div style={{
          padding: "80px 56px 96px", display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)", columnGap: "24px",
          borderBottom: `1px solid ${INK}`,
        }}>
          <div style={{ gridColumn: "span 8" }}>
            <h1 style={{
              fontFamily: SANS, fontWeight: 600, letterSpacing: "-0.035em",
              lineHeight: 0.96, fontSize: "140px", margin: 0,
            }}>
              Designing{" "}
              <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.01em" }}>
                clarity
              </span>{" "}
              <span style={{ color: ACCENT }}>·</span>
              <br />from ambiguity.
            </h1>
            <p style={{
              fontSize: "20px", lineHeight: 1.5, margin: "48px 0 0",
              maxWidth: "640px", color: MUTED,
            }}>
              I solve cross-functional strategy problems through the lens of human insight. I think in systems —
              building the teams, processes, and products needed to transform high-stakes ambiguity into clarity.
            </p>
          </div>
          <div style={{
            gridColumn: "span 4",
            display: "flex", flexDirection: "column", justifyContent: "flex-start",
            paddingTop: "40px",
          }}>
            <img src={IMG_HERO} alt="Sumier" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </FadeIn>

      {/* INDEX / SELECTED WORK */}
      <div id="work" style={{ padding: "48px 56px 0", borderBottom: `1px solid ${INK}` }}>
        <FadeIn>
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontFamily: MONO, fontSize: "12px", color: ACCENT, letterSpacing: "0.04em" }}>
              Selected work
            </div>
          </div>
        </FadeIn>

        <div>
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.number} delay={i * 0.05}>
              <Link to={p.href} style={{
                display: "grid", gridTemplateColumns: "repeat(12, 1fr)", columnGap: "24px",
                borderTop: i > 0 ? `1px solid ${INK}` : "none", padding: "32px 0",
                alignItems: "stretch", textDecoration: "none", color: "inherit",
              }}>
                <div style={{ gridColumn: "span 1", paddingTop: "14px", fontFamily: SANS }}>
                  <span style={{
                    fontFeatureSettings: "'tnum' 1, 'lnum' 1",
                    fontSize: "32px", color: MUTED,
                    fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 0.9,
                  }}>{p.number}</span>
                </div>
                <div style={{
                  gridColumn: "span 5",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  paddingTop: "8px", paddingBottom: "8px",
                }}>
                  <h3 style={{
                    fontFamily: SANS, fontWeight: 600, letterSpacing: "-0.03em",
                    lineHeight: 1.05, fontSize: "40px", margin: 0, maxWidth: "440px",
                  }}>{p.title}</h3>
                  <div style={{ fontFamily: MONO, fontSize: "11px", color: MUTED, letterSpacing: "0.04em", marginTop: "20px" }}>
                    {p.client} &nbsp;·&nbsp; {p.year}
                  </div>
                </div>
                <div style={{ gridColumn: "span 3", paddingTop: "8px", paddingBottom: "8px" }}>
                  <p style={{ fontSize: "14px", lineHeight: 1.55, margin: 0, color: MUTED }}>{p.description}</p>
                </div>
                <div style={{ gridColumn: "span 3" }}>
                  <div style={{ aspectRatio: "16/11", overflow: "hidden", background: FAINT }}>
                    <img src={p.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <div id="about" style={{
        padding: "48px 56px", borderBottom: `1px solid ${INK}`,
        display: "grid", gridTemplateColumns: "repeat(12, 1fr)", columnGap: "24px",
      }}>
        <div style={{ gridColumn: "span 3", fontFamily: MONO, fontSize: "12px", color: ACCENT, letterSpacing: "0.04em" }}>
          About
        </div>
        <div style={{ gridColumn: "span 5" }}>
          <FadeIn>
            <h2 style={{
              fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
              lineHeight: 1.05, fontSize: "44px", margin: "0 0 32px",
            }}>
              Twenty-plus years of design, mostly at the seam between people and platforms.
            </h2>
          </FadeIn>
          {ABOUT.map((p, i) => (
            <FadeIn key={i} delay={0.05 + i * 0.05}>
              <p style={{ fontSize: "15px", lineHeight: 1.65, margin: "0 0 16px", color: MUTED }}>{p}</p>
            </FadeIn>
          ))}
        </div>
        <div style={{ gridColumn: "span 4" }}>
          <div>
            {BELIEFS.map((b, i) => (
              <div key={i} style={{
                borderBottom: i < BELIEFS.length - 1 ? `1px solid ${HAIR}` : "none", padding: "20px 0",
                display: "grid", gridTemplateColumns: "32px 1fr", gap: "12px",
              }}>
                <span style={{ fontFamily: MONO, fontSize: "11px", color: ACCENT }}>0{i + 1}</span>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 500, marginBottom: "4px" }}>{b.title}.</div>
                  <div style={{ fontSize: "14px", color: MUTED, lineHeight: 1.55 }}>{b.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={{
        padding: "48px 56px",
        display: "grid", gridTemplateColumns: "repeat(12, 1fr)", columnGap: "24px",
        borderBottom: `1px solid ${INK}`,
      }}>
        <div style={{ gridColumn: "span 3", fontFamily: MONO, fontSize: "12px", color: ACCENT, letterSpacing: "0.04em" }}>
          Contact
        </div>
        <div style={{ gridColumn: "span 9" }}>
          <h2 style={{
            fontFamily: SANS, fontWeight: 600, letterSpacing: "-0.03em",
            lineHeight: 1.05, fontSize: "40px", margin: "0 0 32px",
          }}>
            sumier<span style={{ color: ACCENT }}>@</span>gmail.com
          </h2>
          <div style={{ fontFamily: MONO, fontSize: "13px", display: "flex", gap: "32px" }}>
            <a href="mailto:sumier@gmail.com" style={{ color: INK, textDecoration: "none" }}>→ Email</a>
            <a href="https://www.linkedin.com" style={{ color: INK, textDecoration: "none" }}>→ LinkedIn</a>
            <a href="#" style={{ color: INK, textDecoration: "none" }}>→ Read CV</a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        padding: "16px 56px",
        display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "24px",
        fontFamily: MONO, fontSize: "11px", color: MUTED,
      }}>
        <span>© Sumier Phalake · 2026</span>
        <span style={{ textAlign: "right" }}>San Francisco · California</span>
      </div>
    </div>
  );
}
