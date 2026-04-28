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

const POP = "#c7A9a8"; const WARM_BG = "#476285"; const DARK = "#FFFFFF"; const MID = "#E0E8F0";
const MUTED = "#C0CCD8"; const SUBTLE = "#A0B0C0"; const TAN = "#7A9ABB"; const TAN_BG = "rgba(255,255,255,0.12)";


const PhoneScreen = ({ src, alt, caption, radius }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 1 0", minWidth: "140px" }}>
    <div style={{ borderRadius: radius || "16px", overflow: "hidden", background: "#fff", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", maxWidth: "220px", width: "100%" }}>
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </div>
    {caption && <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#A0B0C0", marginTop: "10px", lineHeight: 1.4, textAlign: "center", letterSpacing: "0.02em", maxWidth: "200px" }}>{caption}</p>}
  </div>
);

const Pill = ({ children }) => (
  <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "20px", fontSize: "12px", fontFamily: "'DM Mono', monospace", letterSpacing: "0.03em", background: TAN_BG, color: MUTED, marginRight: "8px", marginBottom: "8px" }}>{children}</span>
);

const StatCard = ({ number, label }) => (
  <div style={{ padding: "28px 0", borderTop: `1px solid rgba(255,255,255,0.2)` }}>
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
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#7A9ABB" }} />
    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: POP, opacity: 0.5 }} />
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#7A9ABB" }} />
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

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(71,98,133,0.92)", backdropFilter: "blur(12px)", borderBottom: scrollY > 50 ? `1px solid ${TAN}` : "1px solid transparent", transition: "border-color 0.3s ease", padding: "16px 0" }}>
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
            Led the team that grew Files to a 500M monthly user app, the highest rated Google App for three years, and oversaw it's successful acquisition and transition to the Android team.
          </p>
        </FadeIn>
      </header>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: "1px", background: `linear-gradient(to right, transparent, ${POP}44, transparent)` }} />
      </div>

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px" }}>
        <FadeIn><SectionLabel>The challenge</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>A critical utility for novice internet users globally</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            Storage management on entry level devices is critical. Why? Hundreds of millions of users globally can only afford one computing device, often an entry level device with limited storage. A few apps and photos can fill up storage and render the device unusable. We needed to help novice users take control of their phone storage.
          </p>
        </FadeIn>

      </section>

      <Divider />

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>My role</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            I led the entire NBU Android Utilities division, which included Files, Camera Go, and other core utilities. Camera Go aimed to bring the power of computational photography to entry level devices and to users who had never used cameras before.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            I oversaw the growth of Files from its critical pivot all the way to 500M users, and Camera Go's launch across a dozen device manufacturers to 10M users.
          </p>
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
          <div style={{ marginTop: "40px", padding: "28px 32px", background: TAN_BG, borderRadius: "12px", borderLeft: `3px solid rgba(199,169,168,0.5)` }}>
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
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>A deep empathy for users led to highly loved features</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            The most popular feature of Files was its intelligent one-tap cleaning suggestions. We tailored this to emerging market needs, such as detection of WhatsApp memes and duplicate photos to delete.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            In-field research uncovered more opportunities. Women users desired a safe folder for privacy as they were often expected to share their devices with other family members. Data sensitive users stored media locally, so we built a media player. Nearby share allowed users to share files without using cellular data.
          </p>
        </FadeIn>

        {/* Product screens */}
        {/* Product screens */}
        <FadeIn delay={0.2}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#A0B0C0",
            letterSpacing: "0.08em", marginTop: "36px", marginBottom: "20px",
          }}>THE PRODUCT</div>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <PhoneScreen src={IMG_FILES_BROWSE} alt="Files Browse landing page" caption="The Browse landing page — recents, categories, collections, and Safe Folder in one view" />
            <PhoneScreen src={IMG_FILES_NEARBY} alt="Nearby Share in Files" caption="Nearby Share — share files without internet, a paradigm that became an Android-wide feature" />
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#A0B0C0",
            letterSpacing: "0.08em", marginTop: "32px", marginBottom: "20px",
          }}>SAFE FOLDER</div>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <PhoneScreen src={IMG_FILES_SAFE1} alt="Safe Folder home screen" caption="Research revealed that women sharing devices needed private storage. Safe Folder became a key feature." radius="28px" />
            <PhoneScreen src={IMG_FILES_SAFE2} alt="Safe Folder lock setup" caption="PIN, pattern, or device lock — protecting private files on shared devices" radius="28px" />
          </div>
        </FadeIn>
      </section>

      <Divider />

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>Our design philosophy</SectionLabel></FadeIn>
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
      </section>

      
      

            <div style={{ background: "#405877", padding: "60px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <a href="/strategic-design/ecosystem" style={{ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }}>← PREVIOUS</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }}>Designing an ecosystem, not just an app</div>
          </a>
          <a href="/strategic-design/station" style={{ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block", textAlign: "right" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }}>NEXT →</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }}>Connecting 100 million people to the internet</div>
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
