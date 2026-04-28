import { useState, useEffect, useRef } from "react";

import IMG_TEAM_SINGAPORE from "../assets/leadership/IMG_TEAM_SINGAPORE.png";
import IMG_TEAM_CANDID from "../assets/leadership/IMG_TEAM_CANDID.png";
import IMG_TEAM_WORKSHOP from "../assets/leadership/IMG_TEAM_WORKSHOP.png";


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

const GREEN = "#5C8A6E";
const GREEN_LIGHT = "#EEF4F0";
const POP = "#F374AE";
const WARM_BG = "#F0F3F7";
const DARK = "#2C2416";
const MID = "#6B6155";
const MUTED = "#7A8494";
const SUBTLE = "#A0AAB8";
const TAN = "#DEE3EA";
const TAN_BG = "#E6EBF1";


const Img = ({ src, alt, caption }) => (
  <div style={{ margin: "8px 0" }}>
    <div style={{ borderRadius: "12px", overflow: "hidden", background: "#F0EBE3", border: "1px solid #E8E2D9" }}>
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </div>
    {caption && <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#B0A694", marginTop: "10px", lineHeight: 1.5, letterSpacing: "0.02em" }}>{caption}</p>}
  </div>
);

const StatCard = ({ number, label, color }) => (
  <div style={{ padding: "28px 0", borderTop: `1px solid ${TAN}` }}>
    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "42px", color: color || GREEN, lineHeight: 1.1, marginBottom: "6px" }}>{number}</div>
    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: MUTED, lineHeight: 1.5 }}>{label}</div>
  </div>
);

const PullQuote = ({ children }) => (
  <div style={{ margin: "48px 0", padding: "0 0 0 28px", borderLeft: `3px solid ${GREEN}` }}>
    <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "22px", color: DARK, lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>{children}</p>
  </div>
);

const Divider = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 0", gap: "12px" }}>
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#DEE3EA" }} />
    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: GREEN, opacity: 0.5 }} />
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#DEE3EA" }} />
  </div>
);

const SectionLabel = ({ children }) => (
  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: GREEN, letterSpacing: "0.12em", marginBottom: "16px", textTransform: "uppercase", opacity: 0.8 }}>{children}</div>
);

const PhaseCard = ({ phase, title, description }) => (
  <div style={{
    padding: "24px 28px",
    background: WARM_BG,
    borderRadius: "12px",
    border: `1px solid ${TAN}`,
    flex: "1 1 0",
    minWidth: "180px",
  }}>
    <div style={{
      fontFamily: "'DM Mono', monospace", fontSize: "11px", color: GREEN,
      letterSpacing: "0.08em", marginBottom: "8px", opacity: 0.8,
    }}>{phase}</div>
    <div style={{
      fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK,
      marginBottom: "8px", lineHeight: 1.3,
    }}>{title}</div>
    <div style={{
      fontSize: "13px", color: MID, lineHeight: 1.6,
    }}>{description}</div>
  </div>
);

const BeliefItem = ({ title, text }) => (
  <div style={{ marginBottom: "24px" }}>
    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "15px", color: DARK }}>{title} </span>
    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: MID, lineHeight: 1.7 }}>{text}</span>
  </div>
);

export default function DesignLeadership() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div style={{ background: "linear-gradient(180deg, #F5F8FB 0%, #D6DFEB 100%)", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(245,248,251,0.9)", backdropFilter: "blur(12px)", borderBottom: scrollY > 50 ? `1px solid ${TAN}` : "1px solid transparent", transition: "border-color 0.3s ease", padding: "16px 0" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: MUTED, textDecoration: "none", letterSpacing: "0.05em" }}onClick={() => window.location.href="/"}>← Back home</a>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: SUBTLE, letterSpacing: "0.06em" }}>SUMIER PHALAKE</span>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 24px 60px" }}>
        <FadeIn>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: GREEN, letterSpacing: "0.08em", marginBottom: "24px", opacity: 0.8 }}>
            02 — Design leadership
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 400, color: DARK, lineHeight: 1.15, margin: "0 0 24px", letterSpacing: "-0.01em",
          }}>
            Building the{" "}<span style={{ color: GREEN, fontStyle: "italic" }}>machine</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{ fontSize: "18px", color: MID, lineHeight: 1.7, margin: "0 0 0", maxWidth: "600px" }}>
            I build tight knit teams with a culture that encourages creative risks, a high level of craft with a sharp focus on the user As Head of Design at Google's Next Billion Users, I managed the design org, but I also co-led a 150 person cross-functional organization with the Heads of Business, Engineering and Product
          </p>
        </FadeIn>
      </header>

      {/* Stats overview */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px" }}>
        <FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0 40px" }}>
            <StatCard number="35" label="UX team members" />
            <StatCard number="18" label="Direct reports" />
            <StatCard number="12+" label="Products launched" />
            <StatCard number="90%+" label="Manager scores" />
          </div>
        </FadeIn>
      </section>

      {/* NBU 2.0 */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>Organizational design</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            Designing an incubator model for the organization
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            At NBU, we were investing too many resources in unproven product hypotheses and taking too long to learn and fail. Identifying an opportunity to increase our efficiency, I partnered with my Head of Research, PM and ProdOps to drive a new end-to-end product development process.
          </p>
        </FadeIn>


      </section>

      {/* The model */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 60px" }}>
        <FadeIn>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", color: MUTED,
            letterSpacing: "0.1em", marginBottom: "20px",
          }}>THE MODEL</div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "16px",
          }}>
            <PhaseCard
              phase="SEED"
              title="Explore"
              description="A small team explores a specific problem statement and develops multiple proposals. They pitch the most promising ones."
            />
            <PhaseCard
              phase="INCUBATE"
              title="Validate"
              description="The best pitch gets funded. A team forms, explores multiple solutions, and iterates fast — the goal is to fail quickly or learn quickly. Only when there's confidence in product-market fit does the team move to Grow. This prevents over-investing too soon."
            />
            <PhaseCard
              phase="GROW"
              title="Scale"
              description="Launch the product, grow the user base, prove longevity."
            />
            <PhaseCard
              phase="EXIT"
              title="Graduate"
              description="Graduate from the process. Failure creates space for the next seed team."
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ marginTop: "32px", padding: "24px 28px", background: GREEN_LIGHT, borderRadius: "12px", borderLeft: `3px solid ${GREEN}44` }}>
            <p style={{ fontSize: "15px", color: MID, lineHeight: 1.8, margin: 0 }}>
              This model was adopted org-wide in 2021/22. It fundamentally changed NBU's velocity and resource allocation. Teams failed faster, learned faster, and moved to the next bet with less sunk cost. It's essentially a startup incubator inside Google.
            </p>
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* Leadership dimensions */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 40px" }}>
        <FadeIn><SectionLabel>Team building</SectionLabel></FadeIn>
        <FadeIn delay={0.02}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            A globally distributed,{" "}<span style={{ color: GREEN, fontStyle: "italic" }}>mission-driven</span>{" "}UX org
          </h2>
        </FadeIn>
        <FadeIn>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <PhaseCard
              phase="01"
              title="Leading multidisciplinary teams"
              description="Built a 35-person UX team from the ground up — designers, researchers, program managers, prototypers — distributed across the US, India and other locations. 18 reported directly to me."
            />
            <PhaseCard
              phase="02"
              title="Scaling our impact"
              description="We learned a lot from our pioneering research and design for global emerging markets. We made sure we scale our impact by creating frameworks, running workshops and sharing research reports and talks with other Google teams."
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "16px" }}>
            <PhaseCard
              phase="03"
              title="Growing careers"
              description="I coached my team into senior leads and managers. My people manager scores were consistently above 90%. But what I'm prouder of is the careers — the people who grew into leaders themselves."
            />
            <PhaseCard
              phase="04"
              title="Psychological safety"
              description="Creating an environment where people feel supported enough to take calculated risks. Not so comfortable that people coast, not so stressful that people retreat."
            />
          </div>
        </FadeIn>
      </section>

      {/* Podcast */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 40px" }}>
        <FadeIn>
          <a href="https://whatisux.co/podcast/s5e4-how-google-designs-for-the-next-billion-users-with-sumier-phalake/" target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", gap: "20px",
            padding: "24px 28px", background: TAN_BG, borderRadius: "12px",
            border: `1px solid ${TAN}`, textDecoration: "none",
            transition: "all 0.3s ease",
          }}>
            <div style={{
              width: "48px", height: "48px", borderRadius: "50%",
              background: GREEN, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, fontSize: "20px",
            }}>▶</div>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: MUTED, letterSpacing: "0.08em", marginBottom: "6px" }}>WHAT IS UX PODCAST</div>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK, lineHeight: 1.3 }}>How Google Designs for the Next Billion Users</div>
              <div style={{ fontSize: "13px", color: MUTED, marginTop: "4px" }}>Hear me talk about the work our team accomplished together</div>
            </div>
          </a>
        </FadeIn>
      </section>

      {/* Team photos */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 40px" }}>
        <FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <Img src={IMG_TEAM_WORKSHOP} alt="NBU team during a workshop in India" caption="Design sprint in Bangalore" />
            <Img src={IMG_TEAM_SINGAPORE} alt="NBU team in Singapore" caption="Team offsite in Singapore" />
          </div>
        </FadeIn>
      </section>

      {/* Nav */}
            <div style={{ background: TAN_BG, padding: "60px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <a href="/" style={{ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }}>← CHAPTER 01</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }}>Strategic design</div>
          </a>
          <a href="/foundation" style={{ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block", textAlign: "right" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }}>THE FOUNDATION →</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }}>How I think</div>
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
