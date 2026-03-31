import { useState, useEffect, useRef } from "react";

import IMG_FILES_BROWSE from "../assets/cs-files/IMG_FILES_BROWSE.png";
import IMG_FILES_NEARBY from "../assets/cs-files/IMG_FILES_NEARBY.png";
import IMG_FILES_SAFE1 from "../assets/cs-files/IMG_FILES_SAFE1.png";
import IMG_FILES_SAFE2 from "../assets/cs-files/IMG_FILES_SAFE2.png";


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
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
    }}>{children}</div>
  );
};

const POP = "#D4552A"; const WARM_BG = "#FAF7F2"; const DARK = "#2C2416"; const MID = "#6B6155";
const MUTED = "#8A7D6B"; const SUBTLE = "#B0A694"; const TAN = "#E8E2D9"; const TAN_BG = "#F0EBE3";


const PhoneScreen = ({ src, alt, caption, radius }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 1 0", minWidth: "140px" }}>
    <div style={{ borderRadius: radius || "16px", overflow: "hidden", background: "#fff", border: "1px solid #E8E2D9", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", maxWidth: "220px", width: "100%" }}>
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </div>
    {caption && <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#B0A694", marginTop: "10px", lineHeight: 1.4, textAlign: "center", letterSpacing: "0.02em", maxWidth: "200px" }}>{caption}</p>}
  </div>
);

const StatCard = ({ number, label }) => (
  <div style={{ padding: "28px 0", borderTop: `1px solid ${TAN}` }}>
    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "42px", color: POP, lineHeight: 1.1, marginBottom: "6px" }}>{number}</div>
    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: MUTED, lineHeight: 1.5 }}>{label}</div>
  </div>
);
const PullQuote = ({ children }) => (
  <div style={{ margin: "48px 0", padding: "0 0 0 28px", borderLeft: `3px solid ${POP}` }}>
    <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "22px", color: DARK, lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>{children}</p>
  </div>
);
const Divider = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 0", gap: "12px" }}>
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4C9B8" }} />
    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: POP, opacity: 0.5 }} />
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4C9B8" }} />
  </div>
);
const SectionLabel = ({ children }) => (
  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: POP, letterSpacing: "0.12em", marginBottom: "16px", textTransform: "uppercase", opacity: 0.7 }}>{children}</div>
);

export default function CaseStudyFiles() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div style={{ background: WARM_BG, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(250,247,242,0.9)", backdropFilter: "blur(12px)", borderBottom: scrollY > 50 ? `1px solid ${TAN}` : "1px solid transparent", transition: "border-color 0.3s ease", padding: "16px 0" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: MUTED, textDecoration: "none", letterSpacing: "0.05em" }}onClick={() => window.location.href="/"}>← Back to all work</a>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: SUBTLE, letterSpacing: "0.06em" }}>SUMIER PHALAKE</span>
        </div>
      </nav>

      <header style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 24px 60px" }}>
        <FadeIn>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: POP, letterSpacing: "0.08em", marginBottom: "24px", opacity: 0.8 }}>01 — Strategic design</div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 400, color: DARK, lineHeight: 1.15, margin: "0 0 24px", letterSpacing: "-0.01em" }}>
            From pivot to{" "}<span style={{ color: POP, fontStyle: "italic" }}>500 million users</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{ fontSize: "18px", color: MID, lineHeight: 1.7, margin: "0 0 16px", maxWidth: "600px" }}>
            Files by Google — a story about investing the right level of craft to learn, and knowing when to scale that investment.
          </p>
        </FadeIn>
      </header>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: "1px", background: `linear-gradient(to right, transparent, ${POP}44, transparent)` }} />
      </div>

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px" }}>
        <FadeIn><SectionLabel>The challenge</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>A phone that stops working</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            For novice internet users on entry-level devices, storage management is critical. A phone can stop working after installing a few apps. Files by Google started as a storage management tool, but it needed a hard pivot in its core value proposition to avoid failure.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <PullQuote>
            Investing the right level of craft to learn — enough that usability doesn't cloud usefulness, but not so much that you can't move fast. That's the balance.
          </PullQuote>
        </FadeIn>
      </section>

      <Divider />

<section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>Impact</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0 40px" }}>
            <StatCard number="500M+" label="Monthly active users" />
            <StatCard number="3 years" label="Highest-rated Google app" />
            <StatCard number="Acquired" label="By Android as a core utility" />
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div style={{ marginTop: "40px", padding: "28px 32px", background: TAN_BG, borderRadius: "12px", borderLeft: `3px solid ${POP}44` }}>
            <p style={{ fontSize: "15px", color: MID, lineHeight: 1.8, margin: 0 }}>
              Several design paradigms my team pioneered — the Nearby Share interaction model, the Drive cleaning tab pattern, animated dialogs for mixed-literacy users — became Android-wide precedents. The team's work didn't just ship a product; it established design patterns used across the entire platform.
            </p>
          </div>
        </FadeIn>
      </section>

      <Divider />


      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>The approach</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>Build to learn, then build to last</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            I led the design strategy with a clear philosophy: invest the right level of craft to learn as cheaply and quickly as possible — but make sure there's enough craft that usability isn't conflated with usefulness. We needed trustworthy learnings. We used rapid prototyping and co-design to test hypotheses, trying and discarding multiple value propositions until we found the one that worked.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            Once we had confidence in the value proposition, we transitioned to designing for scale — investing fully in polish, delight, and the kind of craft that earns a five-star rating. The learning phase earned us the right to invest.
          </p>
        </FadeIn>

        {/* Product screens */}
        {/* Product screens */}
        <FadeIn delay={0.2}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#B0A694",
            letterSpacing: "0.08em", marginTop: "36px", marginBottom: "20px",
          }}>THE PRODUCT</div>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <PhoneScreen src={IMG_FILES_BROWSE} alt="Files Browse landing page" caption="The Browse landing page — recents, categories, collections, and Safe Folder in one view" />
            <PhoneScreen src={IMG_FILES_NEARBY} alt="Nearby Share in Files" caption="Nearby Share — share files without internet, a paradigm that became an Android-wide feature" />
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#B0A694",
            letterSpacing: "0.08em", marginTop: "32px", marginBottom: "20px",
          }}>SAFE FOLDER</div>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <PhoneScreen src={IMG_FILES_SAFE1} alt="Safe Folder home screen" caption="Research revealed that women sharing devices needed private storage. Safe Folder became a key feature." radius="28px" />
            <PhoneScreen src={IMG_FILES_SAFE2} alt="Safe Folder lock setup" caption="PIN, pattern, or device lock — protecting private files on shared devices" radius="28px" />
          </div>
        </FadeIn>
      </section>

      <Divider />

      
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 80px" }}>
        <FadeIn><SectionLabel>Why this matters</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            The relationship between{" "}<span style={{ color: POP, fontStyle: "italic" }}>learning and craft</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            This is the case study I point to when people ask about the relationship between learning and craft. It demonstrates that strategic thinking isn't abstract — it produces products people use every day, at a scale that most designers never get to experience.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
            500 million people use something my team designed. That still means something to me.
          </p>
        </FadeIn>
      </section>

            <div style={ background: TAN_BG, padding: "60px 24px" }>
        <div style={ maxWidth: "720px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }>
          <a href="/strategic-design/ecosystem" style={ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block" }>
            <div style={ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }>← PREVIOUS</div>
            <div style={ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }>Designing an ecosystem, not just an app</div>
          </a>
          <a href="/strategic-design/station" style={ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block", textAlign: "right" }>
            <div style={ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }>NEXT →</div>
            <div style={ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }>Connecting 100 million people to the internet</div>
          </a>
        </div>
      </div>

      <footer style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: SUBTLE }}>Sumier Phalake © 2026</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: SUBTLE }}>sumier@gmail.com</span>
      </footer>
    </div>
  );
}
