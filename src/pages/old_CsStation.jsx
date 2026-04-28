import { useState, useEffect, useRef } from "react";

import IMG_STATION1 from "../assets/cs-station/IMG_STATION1.png";
import IMG_STATION2 from "../assets/cs-station/IMG_STATION2.png";
import IMG_OTP from "../assets/cs-station/IMG_OTP.png";
import IMG_SMB1 from "../assets/cs-station/IMG_SMB1.png";
import IMG_SMB2 from "../assets/cs-station/IMG_SMB2.png";
import IMG_THAI from "../assets/cs-station/IMG_THAI.png";
import IMG_CONSOLE from "../assets/cs-station/IMG_CONSOLE.png";


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

const Pill = ({ children }) => (
  <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "20px", fontSize: "12px", fontFamily: "'DM Mono', monospace", letterSpacing: "0.03em", background: TAN_BG, color: MUTED, marginRight: "8px", marginBottom: "8px" }}>{children}</span>
);

const Img = ({ src, alt, caption }) => (
  <div style={{ margin: "8px 0" }}>
    <div style={{ borderRadius: "12px", overflow: "hidden", background: TAN_BG, border: `1px solid ${TAN}` }}>
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </div>
    {caption && <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, marginTop: "10px", lineHeight: 1.5, letterSpacing: "0.02em" }}>{caption}</p>}
  </div>
);

const PhoneScreen = ({ src, alt, caption }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 1 0", minWidth: "140px" }}>
    <div style={{ borderRadius: "16px", overflow: "hidden", background: "#fff", border: `1px solid ${TAN}`, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", maxWidth: "220px", width: "100%" }}>
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </div>
    {caption && <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: SUBTLE, marginTop: "10px", lineHeight: 1.4, textAlign: "center", letterSpacing: "0.02em", maxWidth: "200px" }}>{caption}</p>}
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

export default function CaseStudyStation() {
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
            Connecting{" "}<span style={{ color: POP, fontStyle: "italic" }}>100 million people</span>{" "}to the internet
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{ fontSize: "18px", color: MID, lineHeight: 1.7, margin: "0 0 16px", maxWidth: "600px" }}>
            Google Station — bringing fast, free Wi-Fi to public spaces around the world. A story about impact at global scale, designing across cultures, and honest lessons about sustainability.
          </p>
        </FadeIn>
      </header>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: "1px", background: `linear-gradient(to right, transparent, ${POP}44, transparent)` }} />
      </div>

      {/* Hero environment photos */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px 0" }}>
        <FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <Img src={IMG_STATION1} alt="Indian train station where Google Station was deployed" caption="A train station in India — one of thousands of public spaces where Station provided free Wi-Fi" />
            <Img src={IMG_STATION2} alt="Google Station signage showing how to connect" caption="On-site signage guiding users through the connection flow — designed for first-time internet users" />
          </div>
        </FadeIn>
      </section>

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px" }}>
        <FadeIn><SectionLabel>The challenge</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>Free Wi-Fi that pays for itself</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            Google Station brought fast, free Wi-Fi to public spaces around the world to encourage internet adoption. The business model: revenue through onboarding advertising, increased footfall in venues like malls, and revenue sharing with SMBs who joined the network.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            The design challenges were multifaceted: consumer onboarding for first-time internet users, partner tools for enterprise deployers and ISPs, SMB onboarding, monetization experiences, and a global brand that needed to work across vastly different cultural contexts.
          </p>
        </FadeIn>
      </section>

      <Divider />

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>My role</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            I was the design lead and grew a team of 6 spanning consumer experience, partner tools, monetization, SMB onboarding, and visual design. I also led a global rebranding effort that had to work across vastly different cultural contexts — what signals "free, fast, trustworthy Wi-Fi" in India is different from what works in Mexico or Indonesia.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "28px" }}>
            {["Design lead", "Team building", "Global rebrand", "Multi-lingual UX", "Cross-cultural design"].map(s => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </FadeIn>
      </section>

      <Divider />

<section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>Impact</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0 40px" }}>
            <StatCard number="5th" label="Largest public Wi-Fi network in the world at peak" />
            <StatCard number="6+" label="Countries deployed" />
            <StatCard number="100M" label="Unique users connected" />
          </div>
        </FadeIn>
      </section>

      <Divider />


      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>The work</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>Designing for everyone, everywhere</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            We designed innovative near-seamless onboarding experiences for consumers and businesses, tools for enterprises, ISPs, and infrastructure deployers. We created highly usable, inclusive multi-lingual experiences that worked for first-time internet users.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            The global rebrand was one of the most interesting challenges — incorporating cultural sensitivities across six countries while maintaining a coherent brand identity. Trust signals vary enormously across cultures, and getting these right was critical for adoption.
          </p>
        </FadeIn>

        {/* Consumer experience screens */}
        <FadeIn delay={0.2}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE,
            letterSpacing: "0.08em", marginTop: "36px", marginBottom: "20px",
          }}>CONSUMER EXPERIENCE</div>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <PhoneScreen src={IMG_THAI} alt="Thai language connection screen" caption="Scalable multilingual UI — Thai and English displayed simultaneously" />
            <PhoneScreen src={IMG_OTP} alt="OTP verification screen" caption="SMS verification for connecting — designed for simplicity" />
          </div>
        </FadeIn>

        {/* SMB ecosystem screens */}
        <FadeIn delay={0.25}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE,
            letterSpacing: "0.08em", marginTop: "48px", marginBottom: "20px",
          }}>SMB ECOSYSTEM</div>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <PhoneScreen src={IMG_SMB1} alt="Fonda SMB app landing" caption="Fonda — WiFi for small businesses, helping them attract customers" />
            <PhoneScreen src={IMG_SMB2} alt="SMB maps integration" caption="Google Maps integration to help customers find participating businesses" />
          </div>
        </FadeIn>

        {/* Partner console */}
        <FadeIn delay={0.3}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE,
            letterSpacing: "0.08em", marginTop: "48px", marginBottom: "20px",
          }}>PARTNER TOOLS</div>
          <Img src={IMG_CONSOLE} alt="Station Console for network providers" caption="Station Console — a dashboard for network providers to monitor system status across 1,000+ hotspots" />
        </FadeIn>
      </section>

      <Divider />

      
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 80px" }}>
        <FadeIn><SectionLabel>The ending</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            Not every product{" "}<span style={{ color: POP, fontStyle: "italic" }}>lasts forever</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            Station was an incredible product, but the connectivity landscape changed. As cellular data costs globally plummeted, the business model for bespoke high-speed Wi-Fi infrastructure was no longer viable. Station wound down in 2020.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <PullQuote>
            A story of multi-user, multi-platform complexity — deploying, maintaining, and designing the consumer experience for a global Wi-Fi network.
          </PullQuote>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            We built something that mattered, we learned from what didn't work, and the design challenges — multilingual inclusivity, cross-cultural branding, onboarding for first-time internet users — were some of the most rewarding of my career.
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
            At its peak, Google Station was the 5th largest public Wi-Fi network in the world and connected 100 million people to the internet.
          </p>
        </FadeIn>
      </section>

            <div style={{ background: TAN_BG, padding: "60px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <a href="/strategic-design/files" style={{ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }}>← PREVIOUS</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }}>From pivot to 500 million users</div>
          </a>
          <a href="/leadership" style={{ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block", textAlign: "right" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }}>NEXT →</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }}>Design leadership</div>
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
