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
const POP = "#D4552A";
const WARM_BG = "#FAF7F2";
const DARK = "#2C2416";
const MID = "#6B6155";
const MUTED = "#8A7D6B";
const SUBTLE = "#B0A694";
const TAN = "#E8E2D9";
const TAN_BG = "#F0EBE3";


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
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4C9B8" }} />
    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: GREEN, opacity: 0.5 }} />
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4C9B8" }} />
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
    <div style={{ background: WARM_BG, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(250,247,242,0.9)", backdropFilter: "blur(12px)", borderBottom: scrollY > 50 ? `1px solid ${TAN}` : "1px solid transparent", transition: "border-color 0.3s ease", padding: "16px 0" }}>
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
            I build teams, design processes, and cultivate the culture that can take ideas to successful launches with a focus on craft and user value. As Head of Design at Google's Next Billion Users, I didn't just manage a design org — I co-led an entire 150-person cross-functional organization and redesigned how it developed products from the ground up.
          </p>
        </FadeIn>
      </header>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: "1px", background: `linear-gradient(to right, ${GREEN}44, transparent 70%)` }} />
      </div>

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

      <Divider />

      {/* NBU 2.0 */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>Organizational design</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            Redesigning how an organization works
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            NBU had a problem that a lot of innovation teams face: we were investing too many resources in unproven product hypotheses and taking too long to fail. Every product got the same level of investment regardless of how validated it was. Teams spent months building things that should have been killed in weeks.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            Together with my Head of UX Research partner, I developed a new product process in close collaboration with PM and ProdOps. We didn't tweak the existing model — we replaced it.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <PullQuote>
            Failure at any stage creates the space to kick off a new seed team. Failure is not wasted — it's fuel.
          </PullQuote>
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

      {/* Team building */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>Team building</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            A globally distributed,{" "}<span style={{ color: GREEN, fontStyle: "italic" }}>mission-driven</span>{" "}UX org
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            I built a UX team of 35 from the ground up — designers, researchers, program managers, visual designers, prototypers — distributed across the US, India, and other locations. 18 reported directly to me.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ margin: "36px 0" }}>
            <Img src={IMG_TEAM_WORKSHOP} alt="NBU team during a workshop in India" caption="The NBU team during a design sprint in Bangalore — sticky notes, whiteboards, and cross-functional collaboration" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <PullQuote>
            I don't hire for culture fit — I hire for culture add. Every person on the team brought something the rest of us didn't have.
          </PullQuote>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            Together, the team launched over a dozen 0-to-1 products. One reached 500M+ MAUs. Several others reached 10M+. We had a mission-driven culture that was deeply user-focused, and we were effective at balancing user needs with business goals — which is often where design teams struggle most.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 0" }}>
            Beyond our own products, I made sure our learnings scaled. We ran engagement workshops with teams across Google, built a case study library cataloguing what worked and what failed, and created tools that helped other teams analyze and target their users more effectively.
          </p>
        </FadeIn>
      </section>

      <Divider />

      {/* Culture & people */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>Culture & people</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            Growing leaders
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            I coached and mentored my team into senior leads and managers. My people manager scores were consistently above 90%. But scores are just numbers — what I'm prouder of is the careers.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            I believe in creating an environment of psychological safety where people feel supported enough to take calculated risks. That's the sweet spot for growth: not so comfortable that people coast, not so stressful that people retreat to what's safe. I provide guidance and air cover, but I expect people to stretch.
          </p>
        </FadeIn>
      </section>

      {/* Team photos */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 40px" }}>
        <FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <Img src={IMG_TEAM_SINGAPORE} alt="NBU team in Singapore" caption="Team offsite in Singapore — the tight-knit culture wasn't accidental" />
            <Img src={IMG_TEAM_CANDID} alt="Team members laughing together" caption="The relationships that make great work possible" />
          </div>
        </FadeIn>
      </section>

      {/* Beliefs */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 60px" }}>
        <FadeIn>
          <div style={{
            padding: "36px 32px",
            background: GREEN_LIGHT,
            borderRadius: "16px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: "11px", color: GREEN,
              letterSpacing: "0.1em", marginBottom: "24px", opacity: 0.8,
            }}>WHAT I'VE LEARNED MATTERS MOST</div>

            <BeliefItem
              title="People not products."
              text="If you invest in your people's growth, the products take care of themselves."
            />
            <BeliefItem
              title="Strong opinions weakly held."
              text="Have passionate convictions, but listen. Accept good arguments. Disagree and commit."
            />
            <BeliefItem
              title="Break down silos."
              text="Get interested in business, in engineering, in operations. The designers who develop cross-functional acumen are the ones who earn real influence."
            />
            <BeliefItem
              title="Trust and respect."
              text="Assume good intent. Communicate respectfully. Be willing to learn from anyone."
            />
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* Why this matters */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 80px" }}>
        <FadeIn><SectionLabel>Why this matters</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            I don't just manage teams —{" "}<span style={{ color: GREEN, fontStyle: "italic" }}>I design organizations</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            The NBU 2.0 incubator model. The culture principles. The scaling programs. These aren't management activities — they're design work applied to organizations. The same instinct that drives my product strategy work — start with the real problem, build frameworks for clarity, iterate until it works — is what I bring to teams and culture.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
            The best evidence isn't the products we shipped. It's the people who grew into leaders themselves.
          </p>
        </FadeIn>
      </section>

      {/* Testimonials placeholder */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 60px" }}>
        <FadeIn>
          <div style={{
            padding: "40px 32px",
            background: TAN_BG,
            borderRadius: "16px",
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE,
              letterSpacing: "0.1em", marginBottom: "16px",
            }}>TESTIMONIALS</div>
            <p style={{
              fontFamily: "'Instrument Serif', serif", fontSize: "20px",
              color: MUTED, fontStyle: "italic", margin: "0 0 8px", lineHeight: 1.5,
            }}>
              "Quotes from colleagues and reports coming soon."
            </p>
            <p style={{ fontSize: "13px", color: SUBTLE, margin: 0 }}>
              Reach out if you'd like to speak directly with people I've worked with.
            </p>
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
