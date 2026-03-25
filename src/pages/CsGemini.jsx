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
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
    }}>{children}</div>
  );
};

const POP = "#D4552A";
const WARM_BG = "#FAF7F2";
const DARK = "#2C2416";
const MID = "#6B6155";
const MUTED = "#8A7D6B";
const SUBTLE = "#B0A694";
const TAN = "#E8E2D9";
const TAN_BG = "#F0EBE3";

const Pill = ({ children }) => (
  <span style={{
    display: "inline-block", padding: "4px 14px", borderRadius: "20px", fontSize: "12px",
    fontFamily: "'DM Mono', monospace", letterSpacing: "0.03em", background: TAN_BG,
    color: MUTED, marginRight: "8px", marginBottom: "8px",
  }}>{children}</span>
);

const StatCard = ({ number, label }) => (
  <div style={{ padding: "28px 0", borderTop: `1px solid ${TAN}` }}>
    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "42px", color: POP, lineHeight: 1.1, marginBottom: "6px" }}>{number}</div>
    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: MUTED, lineHeight: 1.5 }}>{label}</div>
  </div>
);

const ProcessStep = ({ number, title, description }) => (
  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: "36px" }}>
    <div style={{
      width: "36px", height: "36px", borderRadius: "50%", background: DARK, color: WARM_BG,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'DM Mono', monospace", fontSize: "13px", flexShrink: 0, marginTop: "2px",
    }}>{number}</div>
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
  <div style={{
    fontFamily: "'DM Mono', monospace", fontSize: "11px", color: POP,
    letterSpacing: "0.12em", marginBottom: "16px", textTransform: "uppercase", opacity: 0.7,
  }}>{children}</div>
);

export default function CaseStudyGemini() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div style={{ background: WARM_BG, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <nav style={{
        position: "sticky", top: 0, zIndex: 100, background: "rgba(250,247,242,0.9)",
        backdropFilter: "blur(12px)", borderBottom: scrollY > 50 ? `1px solid ${TAN}` : "1px solid transparent",
        transition: "border-color 0.3s ease", padding: "16px 0",
      }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: MUTED, textDecoration: "none", letterSpacing: "0.05em" }}onClick={() => window.location.href="/"}>← Back to all work</a>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: SUBTLE, letterSpacing: "0.06em" }}>SUMIER PHALAKE</span>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 24px 60px" }}>
        <FadeIn>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: POP, letterSpacing: "0.08em", marginBottom: "24px", opacity: 0.8 }}>
            01 — Strategic design
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 400, color: DARK, lineHeight: 1.15, margin: "0 0 24px", letterSpacing: "-0.01em",
          }}>
            Differentiating an AI product for a{" "}
            <span style={{ color: POP, fontStyle: "italic" }}>billion-person market</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{ fontSize: "18px", color: MID, lineHeight: 1.7, margin: "0 0 40px", maxWidth: "600px" }}>
            Driving end-to-end product strategy for a major AI product in India — from audience identification and field research to co-created solutions and business-ready recommendations.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 18px",
            background: "#EDE8DF", borderRadius: "8px", fontSize: "13px", color: MUTED,
            fontFamily: "'DM Mono', monospace",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            Confidential — approach and impact shared, not product details
          </div>
        </FadeIn>
      </header>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: "1px", background: `linear-gradient(to right, transparent, ${POP}44, transparent)` }} />
      </div>

      {/* The Problem */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px" }}>
        <FadeIn><SectionLabel>The challenge</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            No clear reason to choose it
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            One of Google's major AI products needed a differentiated growth strategy for India — the world's largest and most diverse internet market. The product had no clear value proposition that resonated with local users. This was simultaneously a product differentiation problem, a localization challenge, and a go-to-market strategy question.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <PullQuote>
            When your engineer is sitting in someone's living room watching them struggle with your product, the conversations back at the office change.
          </PullQuote>
        </FadeIn>
      </section>

      <Divider />

      {/* My Role */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>My role</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            I drove the entire engagement end-to-end — assembling and leading a cross-functional team of around 20 people spanning design, research, product, engineering, marketing, and business operations from both my team and the product team.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "28px" }}>
            {["Engagement lead", "Research design", "Team assembly", "Solution design", "Opportunity sizing"].map(s => (
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
            <StatCard number="~20" label="Cross-functional team assembled and led" />
            <StatCard number="Exponential" label="Growth in downloads and usage following campaigns" />
            <StatCard number="Adopted" label="Audience focus and insights by product team" />
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div style={{ marginTop: "40px", padding: "28px 32px", background: TAN_BG, borderRadius: "12px", borderLeft: `3px solid ${POP}44` }}>
            <p style={{ fontSize: "15px", color: MID, lineHeight: 1.8, margin: 0 }}>
              While the product's growth came from many efforts, ours helped accelerate it and showed clear impact. What I'm confident in is the rigor of the approach: quantitative audience analysis, qualitative field research, collaborative solution design, and business-ready recommendations, all delivered in a few months.
            </p>
          </div>
        </FadeIn>
      </section>

      <Divider />


      {/* The Approach */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>The approach</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 36px" }}>
            From data to the field to tangible recommendations
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ProcessStep number="01" title="Data-led audience identification"
            description="Partnered with business operations to analyze existing research and usage data, mapping top use cases against user demographics. We identified which audience segment had the highest growth potential — users who were sizable, already AI-curious, and had needs AI could meaningfully address." />
        </FadeIn>
        <FadeIn delay={0.15}>
          <ProcessStep number="02" title="Deep field research in Bangalore"
            description="Led a team to Bangalore for in-home interviews and street intercepts with a diverse set of users from our target audience. Worked with local research agencies for translation and recruitment. Organized research so the entire cross-functional team — designers, PMs, engineers — participated in the field." />
        </FadeIn>
        <FadeIn delay={0.2}>
          <ProcessStep number="03" title="Co-creation with local context"
            description="Developed solutions collaboratively with the team and with local design students, ensuring cultural and contextual accuracy. We didn't design for users from afar — we designed with them." />
        </FadeIn>
        <FadeIn delay={0.25}>
          <ProcessStep number="04" title="Tangible, sized recommendations"
            description="Delivered visual mockups, motion prototypes, and opportunity sizing with engineering complexity scores. We gave leadership a clear pathway: who to focus on, what they need, how to build it, and how big the opportunity is." />
        </FadeIn>
      </section>

      <Divider />

      {/* Impact */}
      
      {/* Why this matters */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 80px" }}>
        <FadeIn><SectionLabel>Why this matters</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            Full-stack{" "}<span style={{ color: POP, fontStyle: "italic" }}>strategic design</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            This engagement demonstrates the full arc of strategic design work: quantitative audience analysis, qualitative field research, collaborative solution design, and business-ready recommendations — all delivered end-to-end in a few months with a large cross-functional team.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
            The same deep-user-understanding muscle I built in NBU, now applied to AI product strategy at a massive scale.
          </p>
        </FadeIn>
      </section>

      {/* Nav */}
            <div style={{ background: TAN_BG, padding: "60px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <div />
          <a href="/strategic-design/search-regulation" style={{ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block", textAlign: "right" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }}>NEXT →</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }}>Evolving a business model under regulatory pressure</div>
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
