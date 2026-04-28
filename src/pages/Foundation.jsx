// Foundation.jsx — Swiss Editorial v2 port
// How I think.

import IMG_NBU_SHOP  from "../assets/foundation/IMG_NBU_SHOP.png";
import IMG_NBU_TRAIN from "../assets/foundation/IMG_NBU_TRAIN.png";

import { Page, Cover, Section, Quote, PrevNext, Footer, FadeIn,
  ACCENT, INK, HAIR, FAINT, MUTED, MONO, SANS } from "./_swiss";

function Plate({ src, alt, caption }) {
  return (
    <div>
      <div style={{ aspectRatio: "4/3", overflow: "hidden", background: FAINT }}>
        <img src={src} alt={alt} style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
        }} />
      </div>
      {caption && (
        <div style={{
          fontFamily: MONO, fontSize: "10px", color: MUTED,
          marginTop: "12px", letterSpacing: "0.04em",
        }}>{caption}</div>
      )}
    </div>
  );
}

function FrameworkRow({ n, body }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "120px 1fr",
      alignItems: "baseline", padding: "24px 0",
      borderBottom: `1px solid ${HAIR}`, gap: "24px",
    }}>
      <div style={{
        fontFamily: SANS, fontFeatureSettings: "'tnum' 1, 'lnum' 1",
        fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.9,
        whiteSpace: "nowrap", fontSize: "64px",
      }}>{n}</div>
      <div style={{ fontSize: "16px", color: MUTED, lineHeight: 1.65 }}>{body}</div>
    </div>
  );
}

function Echo({ from, to }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 24px 1fr",
      alignItems: "center", padding: "16px 0",
      borderBottom: `1px solid ${HAIR}`, gap: "16px",
    }}>
      <span style={{ fontSize: "15px", color: MUTED, lineHeight: 1.5 }}>{from}</span>
      <span style={{
        fontFamily: MONO, fontSize: "12px", color: ACCENT, textAlign: "center",
      }}>→</span>
      <span style={{
        fontSize: "15px", color: INK, lineHeight: 1.5,
        fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.01em",
      }}>{to}</span>
    </div>
  );
}

export default function Foundation() {
  return (
    <Page>
      <Cover
        chapter="§ Chapter 03 — The foundation"
        title="How I think."
        subtitle="Before you can build the right thing, you have to find the right problem. That sounds obvious, but most teams skip this step — or think they've done it when they've really just validated assumptions they already had."
        accent="think."
      />

      <Section index={1} label="Principle one"
        heading="Go broad before you go deep.">
        <p style={{ margin: 0 }}>
          When I joined NBU, the team was doing product-centric research — asking "what do users think of this product?" That's useful, but it only tells you about the problems you've already assumed exist. We were blind to bigger opportunities.
        </p>
        <p style={{ margin: "16px 0 0" }}>
          NBU is where I was deeply exposed to ethnographic, product-agnostic research — and I leaned into it. Partnering closely with our heads of research, we ran studies in-market, spending extended time with people in their homes, their communities, their daily lives. We weren't testing a product. We were trying to understand how people navigate their world. The problems that emerged were often ones we'd never considered, and they became the foundation for everything we built.
        </p>
      </Section>

      {/* Field photos */}
      <FadeIn>
        <div style={{
          padding: "72px 56px", borderBottom: `1px solid ${HAIR}`,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px",
        }}>
          <Plate src={IMG_NBU_SHOP} alt="Shopkeeper in an Indian market"
            caption="Fig. 01 — Understanding how people navigate their world; in-context, not in a lab" />
          <Plate src={IMG_NBU_TRAIN} alt="Young women using phones at a train station in India"
            caption="Fig. 02 — The next billion internet users; diverse contexts, diverse needs" />
        </div>
      </FadeIn>

      <Quote>
        We don't know what we don't know. The most valuable insights come from the problems you didn't know existed.
      </Quote>

      <Section index={2} label="Principle two"
        heading="Build frameworks that create organizational clarity.">
        <p style={{ margin: 0 }}>
          In NBU, we identified 175 problem statements through our research. That's too many. The question isn't "what problems exist" — it's "which ones should we solve?"
        </p>
        <p style={{ margin: "16px 0 0" }}>
          Working with our quantitative research lead, I directed the development of a problem-confidence framework that prioritized opportunities using a combination of user severity, market size, existing competition, timing, and engineering feasibility. They were the subject-matter expert; I led the team while it was being built and ensured it connected to our product strategy.
        </p>

        {/* Funnel */}
        <div style={{
          margin: "40px 0 0", padding: "8px 32px",
          border: `1px solid ${HAIR}`, background: "#FFFEFB",
        }}>
          <div style={{
            fontFamily: MONO, fontSize: "11px", color: ACCENT,
            letterSpacing: "0.08em", padding: "24px 0 12px",
          }}>The problem-confidence framework</div>
          <FrameworkRow n="175" body="Problem statements identified through ethnographic research." />
          <FrameworkRow n="74"  body="Prioritized using severity, prevalence, opportunity size, market players, timing, and engineering feasibility." />
          <FrameworkRow n="8"   body="Problem spaces that became the engine for what NBU built next." />
        </div>

        <p style={{ margin: "32px 0 0", fontStyle: "italic" }}>
          The same belief — that the right framework changes what's possible — shows up in my recent work: the audience-identification matrix for AI strategy, the ecosystem connection mapping for cross-app growth, the proposal for ecosystem-oriented metrics.
        </p>
      </Section>

      <Section index={3} label="Principle three"
        heading="Build to learn, then build to last.">
        <p style={{ margin: 0 }}>
          I've seen too many teams invest months of engineering and design craft in a product hypothesis that hasn't been validated. I champion rapid prototyping and co-design as tools for learning — investing the right level of craft to learn as cheaply and quickly as possible, while making sure there's enough craft that usability isn't conflated with usefulness. The learnings need to be trustworthy.
        </p>
        <p style={{ margin: "16px 0 0" }}>
          Files by Google is the clearest example: we tried and discarded multiple value propositions through rapid prototyping — each built with enough care that we could trust what we learned. Once we had confidence in the value proposition, we invested fully in craft and polish. The result was 500M users.
        </p>
      </Section>

      <Quote>
        This isn't about cutting corners. It's about investing the right level of craft at each stage — enough to learn trustworthy things, then scaling that investment when you've earned the confidence to do so.
      </Quote>

      <Section index={4} label="Echoes"
        heading="The same instincts, higher altitude.">
        <p style={{ margin: "0 0 24px" }}>
          These principles aren't historical artifacts. They're the operating system behind everything I do — applied at increasingly higher altitudes across my career.
        </p>
        <div style={{ borderTop: `1px solid ${HAIR}` }}>
          <Echo from="Ethnographic research in NBU"     to="Field research in Bangalore for AI strategy" />
          <Echo from="Problem-confidence framework"     to="Audience identification matrix; ecosystem metrics proposal" />
          <Echo from="NBU 2.0 incubator model"          to="Skunkworks program for regulatory innovation" />
          <Echo from="Rapid prototyping for Files"      to="Sprint-based solution design for Search" />
        </div>
      </Section>

      <FadeIn>
        <div style={{
          padding: "100px 56px", borderBottom: `1px solid ${INK}`,
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
            fontSize: "36px", lineHeight: 1.25, margin: "0 auto 24px",
            maxWidth: "880px",
          }}>
            I start with people. I think in <span style={{ color: ACCENT }}>systems</span>. I build what's needed to move from ambiguity to clarity.
          </p>
          <div style={{
            fontFamily: MONO, fontSize: "11px", color: MUTED, letterSpacing: "0.04em",
          }}>That's the foundation. Everything else is application.</div>
        </div>
      </FadeIn>

      <PrevNext
        prev={{ href: "/leadership", title: "Building the machine — design leadership." }}
        next={{ href: "/", title: "Back to the beginning." }}
      />
      <Footer />
    </Page>
  );
}
