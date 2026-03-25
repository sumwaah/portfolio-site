import { useState, useEffect, useRef } from "react";

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
const StatCard = ({ number, label }) => (
  <div style={{ padding: "28px 0", borderTop: `1px solid ${TAN}` }}>
    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "42px", color: POP, lineHeight: 1.1, marginBottom: "6px" }}>{number}</div>
    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: MUTED, lineHeight: 1.5 }}>{label}</div>
  </div>
);
const ProcessStep = ({ number, title, description }) => (
  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: "36px" }}>
    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: DARK, color: WARM_BG, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Mono', monospace", fontSize: "13px", flexShrink: 0, marginTop: "2px" }}>{number}</div>
    <div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: DARK, marginBottom: "6px" }}>{title}</div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: MID, lineHeight: 1.7 }}>{description}</div>
    </div>
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

export default function CaseStudyDMA() {
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
            Evolving a business model under{" "}<span style={{ color: POP, fontStyle: "italic" }}>regulatory pressure</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{ fontSize: "18px", color: MID, lineHeight: 1.7, margin: "0 0 40px", maxWidth: "600px" }}>
            Designing solutions that satisfy user needs, elevate third-party content, drive traffic to merchants, and comply with global regulations — all simultaneously. In essence, evolving the traditional business model of search itself.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 18px", background: "#EDE8DF", borderRadius: "8px", fontSize: "13px", color: MUTED, fontFamily: "'DM Mono', monospace" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Confidential — approach and impact shared, not product details
          </div>
        </FadeIn>
      </header>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: "1px", background: `linear-gradient(to right, transparent, ${POP}44, transparent)` }} />
      </div>

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px" }}>
        <FadeIn><SectionLabel>The challenge</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>Three forces pulling in different directions</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            Global regulations were demanding changes to how a major product surfaces commercial content. Users preferred richer, more integrated experiences — but merchants and aggregators were concerned about competitive overlap. The advent of AI-driven and agentic experiences was making the tension more pronounced.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            The design challenge was to find solutions that worked for all three constituencies at once — and to do it in a space where the rules were actively being rewritten.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <PullQuote>
            I knew the first tranche of ideas were unlikely to be fully successful. What mattered was building a system for continuous adaptation.
          </PullQuote>
        </FadeIn>
      </section>

      <Divider />

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>My role</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            Design lead for a cross-functional engagement of about 10 people from my team — designers, researchers, and business operations — plus PMs, designers, and researchers from the product organization. I drove the plan, the sprint structure, and the deliverables.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "28px" }}>
            {["Design lead", "Sprint design", "Legal collaboration", "Solution design", "Program development"].map(s => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </FadeIn>
      </section>

      <Divider />

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>The approach</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 36px" }}>From sprint to system</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ProcessStep number="01" title="Massive global sprint"
            description="Rapidly assembled a sprint bringing together people from legal — including external competition counsel — finance, product, and ads to develop a shared point of view on potential pathways, with end-to-end design solutions for each." />
        </FadeIn>
        <FadeIn delay={0.15}>
          <ProcessStep number="02" title="Multiple viable solutions"
            description="Developed a range of options rather than a single recommendation, recognizing that regulatory negotiations and user testing would shape the final direction. Each pathway had its own complete design solution." />
        </FadeIn>
        <FadeIn delay={0.2}>
          <ProcessStep number="03" title="From solutions to system"
            description="Beyond the immediate deliverables, helped the PM develop a program for a high-velocity skunkworks team — an ongoing engine for continuously generating, prototyping, and testing new approaches as regulations and AI capabilities evolved." />
        </FadeIn>
      </section>

      <Divider />

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>Impact</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0 40px" }}>
            <StatCard number="4" label="Top solutions selected for piloting" />
            <StatCard number="2" label="Partially incorporated into product roadmap" />
            <StatCard number="1" label="Skunkworks program established for ongoing innovation" />
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div style={{ marginTop: "40px", padding: "28px 32px", background: TAN_BG, borderRadius: "12px", borderLeft: `3px solid ${POP}44` }}>
            <p style={{ fontSize: "15px", color: MID, lineHeight: 1.8, margin: 0 }}>
              The more lasting contribution was organizational: a repeatable model for rapid innovation in a highly constrained space. The team could keep adapting as regulations and AI capabilities evolved, rather than relying on one-time design sprints.
            </p>
          </div>
        </FadeIn>
      </section>

      <Divider />

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 80px" }}>
        <FadeIn><SectionLabel>Why this matters</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            Design at the intersection of{" "}<span style={{ color: POP, fontStyle: "italic" }}>experience, business, and policy</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            This is design in a space where user preference, ecosystem health, and legal compliance all compete. It shows the ability to hold competing forces in your head and find creative paths forward.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
            The instinct to build a lasting system — not just deliver solutions — echoes the incubator model from the leadership chapter.
          </p>
        </FadeIn>
      </section>

      <div style={{ background: TAN_BG, padding: "60px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <a href="/" style={{ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }}>← PREVIOUS</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }}>Differentiating an AI product for a billion-person market</div>
          </a>
          <a href="/" style={{ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block", textAlign: "right" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }}>NEXT →</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }}>Designing an ecosystem, not just an app</div>
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
