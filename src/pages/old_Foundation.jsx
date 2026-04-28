import { useState, useEffect, useRef } from "react";

import IMG_NBU_SHOP from "../assets/foundation/IMG_NBU_SHOP.png";
import IMG_NBU_TRAIN from "../assets/foundation/IMG_NBU_TRAIN.png"


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

const POP = "#D4552A";
const GREEN = "#5C8A6E";
const WARM_BG = "#FAF7F2";
const DARK = "#2C2416";
const MID = "#6B6155";
const MUTED = "#8A7D6B";
const SUBTLE = "#B0A694";
const TAN = "#E8E2D9";
const TAN_BG = "#F0EBE3";
const FOUNDATION = "#8A7145";
const FOUNDATION_LIGHT = "#F5F0E8";


const Img = ({ src, alt, caption }) => (
  <div style={{ margin: "8px 0" }}>
    <div style={{ borderRadius: "12px", overflow: "hidden", background: "#F0EBE3", border: "1px solid #E8E2D9" }}>
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </div>
    {caption && <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#B0A694", marginTop: "10px", lineHeight: 1.5, letterSpacing: "0.02em" }}>{caption}</p>}
  </div>
);

const PullQuote = ({ children }) => (
  <div style={{ margin: "48px 0", padding: "0 0 0 28px", borderLeft: `3px solid ${FOUNDATION}` }}>
    <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "22px", color: DARK, lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>{children}</p>
  </div>
);

const Divider = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 0", gap: "12px" }}>
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4C9B8" }} />
    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: FOUNDATION, opacity: 0.5 }} />
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4C9B8" }} />
  </div>
);

const SectionLabel = ({ children }) => (
  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: FOUNDATION, letterSpacing: "0.12em", marginBottom: "16px", textTransform: "uppercase", opacity: 0.8 }}>{children}</div>
);

const EchoCard = ({ from, to, color }) => (
  <div style={{
    padding: "20px 24px",
    background: WARM_BG,
    borderRadius: "12px",
    border: `1px solid ${TAN}`,
    marginBottom: "12px",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
      <span style={{
        fontSize: "14px", color: MID, lineHeight: 1.5,
        fontFamily: "'DM Sans', sans-serif",
      }}>{from}</span>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: "12px",
        color: color || FOUNDATION, flexShrink: 0,
      }}>→</span>
      <span style={{
        fontSize: "14px", color: DARK, lineHeight: 1.5,
        fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
      }}>{to}</span>
    </div>
  </div>
);

const NumberBlock = ({ number, text }) => (
  <div style={{ display: "flex", gap: "16px", alignItems: "baseline", marginBottom: "12px" }}>
    <div style={{
      fontFamily: "'Instrument Serif', serif", fontSize: "36px", color: FOUNDATION,
      lineHeight: 1, flexShrink: 0, minWidth: "48px",
    }}>{number}</div>
    <div style={{
      fontSize: "15px", color: MID, lineHeight: 1.6,
      fontFamily: "'DM Sans', sans-serif", paddingTop: "8px",
    }}>{text}</div>
  </div>
);

export default function Foundation() {
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
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: FOUNDATION, letterSpacing: "0.08em", marginBottom: "24px", opacity: 0.8 }}>
            The foundation
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 400, color: DARK, lineHeight: 1.15, margin: "0 0 24px", letterSpacing: "-0.01em",
          }}>
            How I{" "}<span style={{ color: FOUNDATION, fontStyle: "italic" }}>think</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{ fontSize: "18px", color: MID, lineHeight: 1.7, margin: "0 0 0", maxWidth: "600px" }}>
            Before you can build the right thing, you have to find the right problem. That sounds obvious, but most teams skip this step — or think they've done it when they've really just validated assumptions they already had.
          </p>
        </FadeIn>
      </header>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: "1px", background: `linear-gradient(to right, ${FOUNDATION}44, transparent 70%)` }} />
      </div>

      {/* Principle 1 */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px" }}>
        <FadeIn><SectionLabel>Principle one</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            Go broad before you go deep
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            When I joined NBU, the team was doing product-centric research — asking "what do users think of this product?" That's useful, but it only tells you about the problems you've already assumed exist. We were blind to bigger opportunities.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            NBU is where I was deeply exposed to ethnographic, product-agnostic research — and I leaned into it. Partnering closely with our heads of research, we ran studies in-market, spending extended time with people in their homes, their communities, their daily lives. We weren't testing a product. We were trying to understand how people navigate their world. The problems that emerged were often ones we'd never considered, and they became the foundation for everything we built.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "36px 0" }}>
            <Img src={IMG_NBU_SHOP} alt="Shopkeeper in an Indian market" caption="Understanding how people navigate their world — in-context, not in a lab" />
            <Img src={IMG_NBU_TRAIN} alt="Young women using phones at a train station in India" caption="The next billion internet users — diverse contexts, diverse needs" />
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <PullQuote>
            We don't know what we don't know. The most valuable insights come from the problems you didn't know existed.
          </PullQuote>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 0", fontStyle: "italic" }}>
            This same instinct — go broad before you go deep — drove the Bangalore field research for the AI product strategy years later. Different product, different era, same principle.
          </p>
        </FadeIn>
      </section>

      <Divider />

      {/* Principle 2 */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>Principle two</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            Build frameworks that create organizational clarity
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            In NBU, we identified 175 problem statements through our research. That's too many. The question isn't "what problems exist" — it's "which ones should we solve?"
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            Working with our quantitative research lead, I directed the development of a problem confidence framework that prioritized opportunities using a combination of user severity, market size, existing competition, timing, and engineering feasibility. They were the subject matter expert; I led the team while it was being built and ensured it connected to our product strategy.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{
            padding: "32px",
            background: FOUNDATION_LIGHT,
            borderRadius: "16px",
            margin: "32px 0",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: "11px", color: FOUNDATION,
              letterSpacing: "0.1em", marginBottom: "24px", opacity: 0.8,
            }}>THE PROBLEM CONFIDENCE FRAMEWORK</div>
            <NumberBlock number="175" text="Problem statements identified through ethnographic research" />
            <div style={{ width: "1px", height: "20px", background: TAN, marginLeft: "20px", marginBottom: "12px" }} />
            <NumberBlock number="74" text="Prioritized using severity, prevalence, opportunity size, market players, timing, and engineering feasibility" />
            <div style={{ width: "1px", height: "20px", background: TAN, marginLeft: "20px", marginBottom: "12px" }} />
            <NumberBlock number="8" text="Problem spaces that became the engine for what NBU built next" />
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 0", fontStyle: "italic" }}>
            The same belief — that the right framework changes what's possible — shows up in my recent work: the audience identification matrix for AI strategy, the ecosystem connection mapping for cross-app growth, the proposal for ecosystem-oriented metrics.
          </p>
        </FadeIn>
      </section>

      <Divider />

      {/* Principle 3 */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>Principle three</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            Build to learn, then build to last
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            I've seen too many teams invest months of engineering and design craft in a product hypothesis that hasn't been validated. I champion rapid prototyping and co-design as tools for learning — investing the right level of craft to learn as cheaply and quickly as possible, while making sure there's enough craft that usability isn't conflated with usefulness. The learnings need to be trustworthy.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 20px" }}>
            Files by Google is the clearest example: we tried and discarded multiple value propositions through rapid prototyping — each built with enough care that we could trust what we learned. Once we had confidence in the value proposition, we invested fully in craft and polish. The result was 500 million users.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <PullQuote>
            This isn't about cutting corners. It's about investing the right level of craft at each stage — enough to learn trustworthy things, then scaling that investment when you've earned the confidence to do so.
          </PullQuote>
        </FadeIn>
      </section>

      <Divider />

      {/* Echoes */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 60px" }}>
        <FadeIn><SectionLabel>The same instincts, higher altitude</SectionLabel></FadeIn>
        <FadeIn delay={0.05}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: DARK, lineHeight: 1.3, margin: "0 0 24px" }}>
            How the foundation shows up{" "}<span style={{ color: FOUNDATION, fontStyle: "italic" }}>everywhere</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "16px", color: MID, lineHeight: 1.8, margin: "0 0 28px" }}>
            These principles aren't historical artifacts. They're the operating system behind everything I do — applied at increasingly higher altitudes across my career.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <EchoCard
            from="Ethnographic research in NBU"
            to="Field research in Bangalore for AI strategy"
            color={POP}
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <EchoCard
            from="Problem confidence framework"
            to="Audience identification matrix, ecosystem metrics proposal"
            color={POP}
          />
        </FadeIn>
        <FadeIn delay={0.25}>
          <EchoCard
            from="NBU 2.0 incubator model"
            to="Skunkworks program for regulatory innovation"
            color={GREEN}
          />
        </FadeIn>
        <FadeIn delay={0.3}>
          <EchoCard
            from="Rapid prototyping for Files"
            to="Sprint-based solution design for Search"
            color={POP}
          />
        </FadeIn>
      </section>

      <Divider />

      {/* Closing */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 80px" }}>
        <FadeIn>
          <div style={{
            maxWidth: "560px",
            margin: "0 auto",
            textAlign: "center",
          }}>
            <p style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "24px",
              color: DARK,
              lineHeight: 1.5,
              fontStyle: "italic",
              margin: "0 0 20px",
            }}>
              I start with people. I think in systems. I build what's needed to move from ambiguity to clarity.
            </p>
            <p style={{
              fontSize: "15px",
              color: MUTED,
              margin: 0,
            }}>
              That's the foundation. Everything else is application.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Nav */}
            <div style={{ background: TAN_BG, padding: "60px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <a href="/leadership" style={{ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }}>← CHAPTER 02</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }}>Design leadership</div>
          </a>
          <a href="/" style={{ textDecoration: "none", padding: "28px", background: WARM_BG, borderRadius: "12px", border: `1px solid ${TAN}`, display: "block", textAlign: "right" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: SUBTLE, letterSpacing: "0.1em", marginBottom: "8px" }}>HOME →</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: DARK }}>Back to the beginning</div>
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
