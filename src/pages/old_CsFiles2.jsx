import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import IMG_FILES_BROWSE from "../assets/cs-files/IMG_FILES_BROWSE.png";
import IMG_FILES_NEARBY from "../assets/cs-files/IMG_FILES_NEARBY.png";
import IMG_FILES_SAFE1  from "../assets/cs-files/IMG_FILES_SAFE1.png";
import IMG_FILES_SAFE2  from "../assets/cs-files/IMG_FILES_SAFE2.png";

// ── Swiss Editorial v2 — Option A
const PAPER  = "#FAFAF7";
const INK    = "#0A0A0A";
const ACCENT = "#E8443C";
const MUTED  = "#5A5A5A";
const FAINT  = "#E5E2DA";
const HAIR   = "#C8C4B8";

const SANS  = "'Inter Tight', 'Helvetica Neue', Arial, sans-serif";
const SERIF = "'Times New Roman', Times, serif";
const MONO  = "'JetBrains Mono', 'IBM Plex Mono', monospace";

// ── Content
const DETAIL = {
  subtitle: "Files by Google — investing the right level of craft to learn, finding product-market fit, then scaling to the highest-rated Google app.",
  role: "Head of Design, NBU Android Utilities",
  year: "2018 – 2022",
  team: "12 designers, 4 researchers",
  domain: "Android · NBU · Utility",
  sections: [
    {
      label: "The challenge",
      heading: "A critical utility for novice internet users globally",
      body: "Storage management on entry level devices is critical. Why? Hundreds of millions of users globally can only afford one computing device, often an entry level device with limited storage. A few apps and photos can fill up storage and render the device unusable. We needed to help novice users take control of their phone storage.",
    },
    {
      label: "My role",
      heading: "Owning a multi-product utility division",
      body: "I led the entire NBU Android Utilities division, which included Files, Camera Go, and other core utilities. I oversaw the growth of Files from its critical pivot all the way to 500M users, and Camera Go's launch across a dozen device manufacturers to 10M users.",
    },
    {
      label: "The approach",
      heading: "A deep empathy for users led to highly loved features",
      body: "The most popular feature of Files was its intelligent one-tap cleaning suggestions. We tailored this to emerging market needs, such as detection of WhatsApp memes and duplicate photos to delete. In-field research uncovered more opportunities — Safe Folder for women's privacy, a media player for data sensitive users, and Nearby Share for sharing without cellular data.",
    },
    {
      label: "Philosophy",
      heading: "Build to learn, then build to last",
      body: "Invest the right level of craft to learn as cheaply and quickly as possible — but make sure there's enough craft that usability isn't conflated with usefulness. Once we had confidence in the value proposition, we transitioned to designing for scale — investing fully in polish, delight, and the kind of craft that earns a five-star rating.",
    },
  ],
  stats: [
    { number: "500M+", label: "Monthly active users" },
    { number: "3 yrs", label: "Highest-rated Google app" },
    { number: "Acquired", label: "by Android core" },
  ],
  quote: "The team's work didn't just ship a product; it established design patterns used across the entire Android platform.",
  screens: [
    { src: IMG_FILES_BROWSE, caption: "Browse landing — recents, categories, collections, Safe Folder", group: "Product" },
    { src: IMG_FILES_NEARBY, caption: "Nearby Share — share files without internet",                  group: "Product" },
    { src: IMG_FILES_SAFE1,  caption: "Safe Folder home — private storage for shared devices",        group: "Safe Folder" },
    { src: IMG_FILES_SAFE2,  caption: "Safe Folder lock — PIN, pattern, or device lock",              group: "Safe Folder" },
  ],
};

// ── Reveal-on-scroll
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
  }, [threshold]);
  return [ref, visible];
};

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
    }}>{children}</div>
  );
};

function Nav() {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(12, 1fr)", padding: "20px 56px",
      borderBottom: `1px solid ${INK}`, columnGap: "24px", alignItems: "center",
      background: PAPER, position: "sticky", top: 0, zIndex: 10,
    }}>
      <Link to="/" style={{
        gridColumn: "span 4", display: "flex", alignItems: "center", gap: "10px",
        textDecoration: "none", color: INK,
      }}>
        <div style={{ width: "10px", height: "10px", background: ACCENT }} />
        <span style={{ fontFamily: MONO, fontSize: "12px" }}>Sumier Phalake</span>
      </Link>
      <div style={{ gridColumn: "span 5", fontFamily: MONO, fontSize: "12px", color: MUTED }}>
        Design & strategy leadership · San Francisco
      </div>
      <div style={{ gridColumn: "span 3", display: "flex", justifyContent: "flex-end", gap: "24px", fontFamily: MONO, fontSize: "12px" }}>
        <Link to="/" style={{ color: INK, textDecoration: "none" }}>Work</Link>
        <Link to="/#about" style={{ color: INK, textDecoration: "none" }}>About</Link>
        <Link to="/#contact" style={{ color: INK, textDecoration: "none" }}>Contact</Link>
      </div>
    </div>
  );
}

export default function CsFiles() {
  const D = DETAIL;
  const meta = [
    { k: "Role",   v: D.role },
    { k: "Years",  v: D.year },
    { k: "Team",   v: D.team },
    { k: "Domain", v: D.domain },
  ];

  return (
    <div style={{
      fontFamily: SANS, background: PAPER, color: INK,
      fontFeatureSettings: "'ss01','cv11'", minHeight: "100vh",
    }}>
      <Nav />

      {/* COVER */}
      <FadeIn>
        <div style={{ padding: "56px 56px 64px", borderBottom: `1px solid ${INK}` }}>
          <div style={{ fontFamily: MONO, fontSize: "12px", color: ACCENT, marginBottom: "48px", letterSpacing: "0.04em" }}>
            § Case 03 — Files by Google
          </div>
          <h1 style={{
            fontFamily: SANS, fontWeight: 600, letterSpacing: "-0.035em",
            lineHeight: 0.96, fontSize: "112px", margin: 0, maxWidth: "1100px",
          }}>
            From pivot to <span style={{ color: ACCENT }}>500M</span> users.
          </h1>
          <p style={{ fontSize: "19px", lineHeight: 1.55, margin: "40px 0 0", maxWidth: "720px", color: MUTED }}>
            {D.subtitle}
          </p>
        </div>
      </FadeIn>

      {/* META row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderBottom: `1px solid ${INK}` }}>
        {meta.map((m, i) => (
          <div key={m.k} style={{
            padding: "24px 32px",
            borderRight: i < 3 ? `1px solid ${HAIR}` : "none",
          }}>
            <div style={{
              fontFamily: MONO, fontSize: "10px", letterSpacing: "0.08em",
              color: MUTED, marginBottom: "8px", textTransform: "uppercase",
            }}>{m.k}</div>
            <div style={{ fontSize: "14px", lineHeight: 1.45 }}>{m.v}</div>
          </div>
        ))}
      </div>

      {/* IMPACT — left-rail label, big numerals stacked */}
      <div style={{
        padding: "80px 56px", borderBottom: `1px solid ${INK}`,
        display: "grid", gridTemplateColumns: "repeat(12, 1fr)", columnGap: "24px",
      }}>
        <div style={{ gridColumn: "span 3" }}>
          <div style={{ fontFamily: MONO, fontSize: "12px", color: ACCENT, letterSpacing: "0.04em", marginBottom: "8px" }}>
            § Impact
          </div>
          <h2 style={{
            fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
            lineHeight: 1.05, fontSize: "26px", margin: 0,
          }}>By the numbers.</h2>
        </div>
        <div style={{ gridColumn: "span 9" }}>
          <div style={{ borderTop: `1px solid ${INK}` }}>
            {D.stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div style={{
                  display: "grid", gridTemplateColumns: "60px 1fr 280px",
                  alignItems: "baseline", padding: "28px 0",
                  borderBottom: `1px solid ${HAIR}`, gap: "32px",
                }}>
                  <div style={{ fontFamily: MONO, fontSize: "12px", color: MUTED }}>0{i + 1}</div>
                  <div style={{
                    fontFamily: SANS, fontFeatureSettings: "'tnum' 1, 'lnum' 1",
                    fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.9,
                    whiteSpace: "nowrap", fontSize: "108px", color: INK,
                  }}>{s.number}</div>
                  <div style={{ fontSize: "15px", color: MUTED, lineHeight: 1.5 }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      {D.sections.map((s, i) => (
        <FadeIn key={i}>
          <div style={{
            padding: "72px 56px", borderBottom: `1px solid ${HAIR}`,
            display: "grid", gridTemplateColumns: "repeat(12, 1fr)", columnGap: "24px",
          }}>
            <div style={{ gridColumn: "span 3" }}>
              <div style={{ fontFamily: MONO, fontSize: "11px", color: ACCENT, marginBottom: "8px", letterSpacing: "0.04em" }}>
                § {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ fontFamily: MONO, fontSize: "13px", letterSpacing: "0.04em" }}>{s.label}</div>
            </div>
            <div style={{ gridColumn: "span 9" }}>
              <h2 style={{
                fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
                lineHeight: 1.05, fontSize: "40px", margin: "0 0 24px", maxWidth: "880px",
              }}>{s.heading}</h2>
              <p style={{ fontSize: "17px", lineHeight: 1.65, margin: 0, maxWidth: "780px", color: MUTED }}>{s.body}</p>
            </div>
          </div>
        </FadeIn>
      ))}

      {/* QUOTE */}
      <FadeIn>
        <div style={{ padding: "100px 56px", borderBottom: `1px solid ${INK}` }}>
          <h2 style={{
            fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
            lineHeight: 1.25, fontSize: "44px", maxWidth: "1000px",
            margin: "0 auto", textAlign: "center",
          }}>
            "{D.quote}"
          </h2>
          <div style={{
            fontFamily: MONO, fontSize: "11px", textAlign: "center",
            marginTop: "32px", color: MUTED, letterSpacing: "0.04em",
          }}>
            — Internal review, Android leadership
          </div>
        </div>
      </FadeIn>

      {/* SCREENS */}
      <div style={{ padding: "72px 56px", borderBottom: `1px solid ${INK}` }}>
        <div style={{ fontFamily: MONO, fontSize: "12px", color: ACCENT, marginBottom: "32px", letterSpacing: "0.04em" }}>
          § Artifacts
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px" }}>
          {D.screens.map((sc, i) => (
            <FadeIn key={i} delay={(i % 2) * 0.05}>
              <div>
                <div style={{
                  aspectRatio: "4/3", overflow: "hidden", background: FAINT,
                  display: "flex", alignItems: "center", justifyContent: "center", padding: "32px",
                }}>
                  <img src={sc.src} alt="" style={{
                    maxWidth: "60%", maxHeight: "100%", objectFit: "contain",
                    display: "block", boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  }} />
                </div>
                <div style={{ fontFamily: MONO, fontSize: "10px", color: MUTED, marginTop: "12px", letterSpacing: "0.04em" }}>
                  Fig. {String(i + 1).padStart(2, "0")} — {sc.group}
                </div>
                <div style={{ fontSize: "14px", lineHeight: 1.5, marginTop: "4px", maxWidth: "440px" }}>
                  {sc.caption}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* PREV / NEXT */}
      <div style={{
        padding: "20px 56px",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        fontFamily: MONO, fontSize: "11px", color: MUTED,
      }}>
        <Link to="/strategic-design/ecosystem" style={{ color: MUTED, textDecoration: "none" }}>← Previous · Ecosystem</Link>
        <Link to="/strategic-design/station" style={{ color: MUTED, textDecoration: "none", textAlign: "right" }}>Next · Station →</Link>
      </div>
    </div>
  );
}
