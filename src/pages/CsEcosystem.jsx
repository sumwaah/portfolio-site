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
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const POP = "#D4552A";
const POP_LIGHT = "#FDF0EC";
const WARM_BG = "#FAF7F2";
const DARK = "#2C2416";
const MID = "#6B6155";
const MUTED = "#8A7D6B";
const SUBTLE = "#B0A694";
const TAN = "#E8E2D9";
const TAN_BG = "#F0EBE3";

const Pill = ({ children, accent }) => (
  <span style={{
    display: "inline-block",
    padding: "4px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    fontFamily: "'DM Mono', monospace",
    letterSpacing: "0.03em",
    background: accent ? POP_LIGHT : TAN_BG,
    color: accent ? POP : MUTED,
    marginRight: "8px",
    marginBottom: "8px",
    border: accent ? `1px solid ${POP}33` : "1px solid transparent",
  }}>
    {children}
  </span>
);

const StatCard = ({ number, label }) => (
  <div style={{ padding: "28px 0", borderTop: `1px solid ${TAN}` }}>
    <div style={{
      fontFamily: "'Instrument Serif', serif",
      fontSize: "42px",
      color: POP,
      lineHeight: 1.1,
      marginBottom: "6px",
    }}>{number}</div>
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "14px",
      color: MUTED,
      lineHeight: 1.5,
    }}>{label}</div>
  </div>
);

const ProcessStep = ({ number, title, description }) => (
  <div style={{
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
    marginBottom: "36px",
  }}>
    <div style={{
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      background: DARK,
      color: WARM_BG,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Mono', monospace",
      fontSize: "13px",
      flexShrink: 0,
      marginTop: "2px",
    }}>{number}</div>
    <div>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 600,
        fontSize: "16px",
        color: DARK,
        marginBottom: "6px",
      }}>{title}</div>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "15px",
        color: MID,
        lineHeight: 1.7,
      }}>{description}</div>
    </div>
  </div>
);

const PullQuote = ({ children }) => (
  <div style={{
    margin: "48px 0",
    padding: "0 0 0 28px",
    borderLeft: `3px solid ${POP}`,
  }}>
    <p style={{
      fontFamily: "'Instrument Serif', serif",
      fontSize: "22px",
      color: DARK,
      lineHeight: 1.6,
      fontStyle: "italic",
      margin: 0,
    }}>{children}</p>
  </div>
);

const Divider = () => (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 0",
    gap: "12px",
  }}>
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4C9B8" }} />
    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: POP, opacity: 0.5 }} />
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4C9B8" }} />
  </div>
);

const EcosystemIllustration = () => {
  const [ref, visible] = useInView(0.3);
  return (
    <div ref={ref} style={{ margin: "56px 0", display: "flex", justifyContent: "center" }}>
      <svg width="480" height="260" viewBox="0 0 480 260" fill="none" style={{ maxWidth: "100%" }}>
        {/* Central node */}
        <circle
          cx="240" cy="130" r="28"
          stroke={POP} strokeWidth="2"
          fill={WARM_BG}
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
          }}
        />
        <circle cx="240" cy="130" r="6" fill={POP}
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.5s" }}
        />

        {/* Orbiting nodes */}
        {[
          { cx: 100, cy: 70, r: 20, delay: 0.3 },
          { cx: 380, cy: 70, r: 20, delay: 0.35 },
          { cx: 100, cy: 190, r: 20, delay: 0.4 },
          { cx: 380, cy: 190, r: 20, delay: 0.45 },
          { cx: 240, cy: 30, r: 16, delay: 0.5 },
          { cx: 240, cy: 230, r: 16, delay: 0.55 },
        ].map((n, i) => (
          <g key={i} style={{ opacity: visible ? 1 : 0, transition: `opacity 0.6s ease ${n.delay}s` }}>
            <circle cx={n.cx} cy={n.cy} r={n.r} stroke={DARK} strokeWidth="1.2" fill={WARM_BG} />
            <circle cx={n.cx} cy={n.cy} r={4} fill={DARK} opacity="0.3" />
          </g>
        ))}

        {/* Connection lines - dashed */}
        {[
          { x1: 120, y1: 78, x2: 212, y2: 118 },
          { x1: 360, y1: 78, x2: 268, y2: 118 },
          { x1: 120, y1: 182, x2: 212, y2: 142 },
          { x1: 360, y1: 182, x2: 268, y2: 142 },
          { x1: 240, y1: 46, x2: 240, y2: 102 },
          { x1: 240, y1: 214, x2: 240, y2: 158 },
        ].map((l, i) => (
          <line key={i}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke={DARK}
            strokeWidth="1"
            strokeDasharray="4 4"
            style={{
              opacity: visible ? 0.25 : 0,
              transition: `opacity 0.8s ease ${0.6 + i * 0.05}s`,
            }}
          />
        ))}

        {/* Cross connections in terracotta */}
        {[
          { x1: 118, y1: 76, x2: 224, y2: 32 },
          { x1: 256, y1: 32, x2: 362, y2: 76 },
          { x1: 118, y1: 184, x2: 224, y2: 228 },
          { x1: 256, y1: 228, x2: 362, y2: 184 },
          { x1: 104, y1: 90, x2: 104, y2: 170 },
          { x1: 376, y1: 90, x2: 376, y2: 170 },
        ].map((l, i) => (
          <line key={`cross-${i}`}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke={POP}
            strokeWidth="1"
            strokeDasharray="3 5"
            style={{
              opacity: visible ? 0.3 : 0,
              transition: `opacity 1s ease ${0.9 + i * 0.08}s`,
            }}
          />
        ))}

        {/* Annotation */}
        <text
          x="240" y="258"
          textAnchor="middle"
          fontFamily="'DM Mono', monospace"
          fontSize="10"
          fill={SUBTLE}
          letterSpacing="0.08em"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 1.4s" }}
        >
          FROM ISOLATED APPS TO CONNECTED ECOSYSTEM
        </text>
      </svg>
    </div>
  );
};

export default function CaseStudyEcosystem() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div style={{ background: WARM_BG, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(250,247,242,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: scrollY > 50 ? `1px solid ${TAN}` : "1px solid transparent",
        transition: "border-color 0.3s ease",
        padding: "16px 0",
      }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "13px",
            color: MUTED,
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}onClick={() => window.location.href="/"}>← Back to all work</a>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            color: SUBTLE,
            letterSpacing: "0.06em",
          }}>SUMIER PHALAKE</span>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 24px 60px" }}>
        <FadeIn>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            color: POP,
            letterSpacing: "0.08em",
            marginBottom: "24px",
            opacity: 0.8,
          }}>
            01 — Strategic design
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 400,
            color: DARK,
            lineHeight: 1.15,
            margin: "0 0 24px",
            letterSpacing: "-0.01em",
          }}>
            Designing an ecosystem,{" "}
            <span style={{ color: POP, fontStyle: "italic" }}>not just an app</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{
            fontSize: "18px",
            color: MID,
            lineHeight: 1.7,
            margin: "0 0 40px",
            maxWidth: "600px",
          }}>
            Leading the design strategy for a multi-year, CEO-level initiative to
            transform how a suite of products works together on a major platform —
            from isolated apps to a connected ecosystem.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
            background: "#EDE8DF",
            borderRadius: "8px",
            fontSize: "13px",
            color: MUTED,
            fontFamily: "'DM Mono', monospace",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            Confidential — approach and impact shared, not product details
          </div>
        </FadeIn>
      </header>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: "1px", background: `linear-gradient(to right, transparent, ${POP}44, transparent)` }} />
      </div>

      {/* Illustration */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 0" }}>
        <EcosystemIllustration />
      </section>

      {/* The Problem */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: POP,
            letterSpacing: "0.12em",
            marginBottom: "16px",
            textTransform: "uppercase",
            opacity: 0.7,
          }}>THE PROBLEM</div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "28px",
            fontWeight: 400,
            color: DARK,
            lineHeight: 1.3,
            margin: "0 0 24px",
          }}>Every app for itself</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            Google's suite of products on a major platform had always operated independently. Each had its own team, its own growth metrics, its own roadmap. That model made sense for speed — but as users' tasks grew more complex and spanned multiple products, the seams became painful.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            Context-switching. Copy-pasting. Manually bridging workflows. Meanwhile, the platform's native ecosystem offered increasingly seamless integration, making the fragmentation more visible with every OS update.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <PullQuote>
            You can design the most elegant cross-app experiences in the world, but if every team is still measured on their own DAU, nothing changes.
          </PullQuote>
        </FadeIn>
      </section>

      <Divider />

      {/* My Role */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: POP,
            letterSpacing: "0.12em",
            marginBottom: "16px",
            textTransform: "uppercase",
            opacity: 0.7,
          }}>MY ROLE</div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            A CEO-level OKR was established to address this. I lead the design strategy for this multi-year initiative, partnering with a Director of Strategy who presents to the CEO several times a year.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            I lead the development of the user experience strategy for key bets and contribute to the executive storytelling for forums at the senior director, VP, and GM levels. The team has grown as the organization has recognized the strategic importance of this work.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "28px" }}>
            {["UX strategy", "Exec storytelling", "Cross-team alignment", "Metrics design", "Org incentive design"].map(s => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </FadeIn>
      </section>

      <Divider />

<section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: POP,
            letterSpacing: "0.12em",
            marginBottom: "16px",
            textTransform: "uppercase",
            opacity: 0.7,
          }}>IMPACT</div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0 40px",
          }}>
            <StatCard number="Multiple" label="Cross-app initiatives built and launched" />
            <StatCard number="Ongoing" label="Ecosystem metrics proposal in development" />
            <StatCard number="Growing" label="Team expanding as org recognizes strategic importance" />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{
            marginTop: "40px",
            padding: "28px 32px",
            background: TAN_BG,
            borderRadius: "12px",
            borderLeft: `3px solid ${POP}44`,
          }}>
            <p style={{ fontSize: "15px", color: MID, lineHeight: 1.8, margin: 0 }}>
              Existing efforts across teams have been unblocked and accelerated. The metrics and incentive proposals are actively being championed. This work is ongoing — and the fact that the team keeps growing is perhaps the strongest signal that it's working.
            </p>
          </div>
        </FadeIn>
      </section>

      <Divider />


      {/* The Approach */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: POP,
            letterSpacing: "0.12em",
            marginBottom: "16px",
            textTransform: "uppercase",
            opacity: 0.7,
          }}>THE APPROACH</div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "28px",
            fontWeight: 400,
            color: DARK,
            lineHeight: 1.3,
            margin: "0 0 36px",
          }}>Four moves</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ProcessStep
            number="01"
            title="Mapping the gaps"
            description="I started by mapping experience gaps across the product suite — moments where users need products to work together but are instead forced to context-switch or abandon tasks. This alone changed conversations, because most teams had never seen their product through the lens of the broader ecosystem."
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <ProcessStep
            number="02"
            title="Finding the moment that matters"
            description="Months of focused work revealed a critical insight: device onboarding is the moment that matters most. Users setting up a new device are uniquely open to configuring things right — to setting up connections between apps that they'd never bother to do later. This reframed the approach from 'how do we connect existing users' to 'how do we set up the ecosystem right from day one.'"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <ProcessStep
            number="03"
            title="Organic growth pathways"
            description="We identified high-usage apps as natural on-ramps — organic pathways to drive traffic and usage to other apps in the suite, designed to feel helpful rather than promotional."
          />
        </FadeIn>

        <FadeIn delay={0.25}>
          <ProcessStep
            number="04"
            title="Proposing systemic change"
            description="The most important work might be the least visible. I'm working closely with Data Science to help develop a white paper proposing ecosystem-level metrics to replace individual app DAU measurements. While DS leads the charge, I'm helping bring insights from other companies that do this well, organizational best practices for incentives, and identifying the right metrics from a user experience standpoint. This isn't experience design — it's designing the conditions for an ecosystem to exist."
          />
        </FadeIn>
      </section>

      <Divider />

      {/* Impact */}
      
      {/* Why this matters */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 80px" }}>
        <FadeIn>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: POP,
            letterSpacing: "0.12em",
            marginBottom: "16px",
            textTransform: "uppercase",
            opacity: 0.7,
          }}>WHY THIS MATTERS</div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "28px",
            fontWeight: 400,
            color: DARK,
            lineHeight: 1.3,
            margin: "0 0 24px",
          }}>
            Design leadership at its{" "}
            <span style={{ color: POP, fontStyle: "italic" }}>most expansive</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            This project is more than interface design. It's about designing the conditions for an entire product ecosystem to work together — proposing new metrics, new incentives, new ways of working. The audience is the CEO. The artifacts are strategy presentations to accelerate decision making and growing the strength of an entire ecosystem of apps.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p style={{
            fontSize: "16px",
            color: MID,
            lineHeight: 1.8,
            margin: "0 0 0",
            fontStyle: "italic",
          }}>
            If you're wondering what "I think in systems" looks like in practice — this is it.
          </p>
        </FadeIn>
      </section>

      {/* Next / Prev */}
            <div style={{ background: TAN_BG, padding: "60px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <a href="/strategic-design/search-regulation" style={{ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }}>← PREVIOUS</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }}>Evolving a business model under regulatory pressure</div>
          </a>
          <a href="/strategic-design/files" style={{ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block", textAlign: "right" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }}>NEXT →</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }}>From pivot to 500 million users</div>
          </a>
        </div>
      </div>

      <footer style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "40px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: SUBTLE }}>
          Sumier Phalake © 2026
        </span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: SUBTLE }}>
          sumier@gmail.com
        </span>
      </footer>
    </div>
  );
}
