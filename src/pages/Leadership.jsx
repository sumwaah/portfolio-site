// Leadership.jsx — Swiss Editorial v2 port
// Building the machine.

import IMG_TEAM_SINGAPORE from "../assets/leadership/IMG_TEAM_SINGAPORE.png";
import IMG_TEAM_WORKSHOP from "../assets/leadership/IMG_TEAM_WORKSHOP.png";

import { Page, Cover, Meta, Impact, Section, PrevNext, Footer, FadeIn,
  PAPER, ACCENT, INK, HAIR, FAINT, MUTED, MONO, SANS } from "./_swiss.jsx";

function Phase({ tag, title, body }) {
  return (
    <div style={{
      padding: "24px 28px", border: `1px solid ${HAIR}`,
      flex: "1 1 0", minWidth: "200px", background: PAPER,
    }}>
      <div style={{
        fontFamily: MONO, fontSize: "11px", color: ACCENT,
        letterSpacing: "0.06em", marginBottom: "10px",
      }}>{tag}</div>
      <div style={{
        fontFamily: SANS, fontWeight: 500, fontSize: "20px",
        letterSpacing: "-0.02em", color: INK, marginBottom: "8px",
      }}>{title}</div>
      <div style={{ fontSize: "14px", color: MUTED, lineHeight: 1.6 }}>{body}</div>
    </div>
  );
}

function TeamPlate({ src, alt, caption }) {
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

export default function Leadership() {
  return (
    <Page>
      <Cover
        chapter="§ Chapter 02 — Design leadership"
        title="Building the machine."
        subtitle="I build tight-knit teams with a culture that encourages creative risks, a high level of craft, and a sharp focus on the user. As Head of Design at Google's Next Billion Users, I managed the design org and co-led a 150-person cross-functional organization with the heads of business, engineering and product."
        accent="machine."
      />

      <Meta items={[
        { k: "Role",   v: "Head of design, NBU" },
        { k: "Years",  v: "8 years leading teams" },
        { k: "Team",   v: "35 UX · 18 direct reports" },
        { k: "Domain", v: "Org design · People · Craft" },
      ]} />

      <Impact stats={[
        { number: "35",   label: "UX team members built and led across the US, India and other locations." },
        { number: "18",   label: "Direct reports, including senior leads and managers I coached." },
        { number: "12+",  label: "Products launched while leading the NBU design organization." },
        { number: "90%+", label: "People-manager scores, sustained year over year." },
      ]} />

      <Section index={1} label="Organizational design"
        heading="Designing an incubator model for the organization.">
        <p style={{ margin: 0 }}>
          At NBU, we were investing too many resources in unproven product hypotheses and taking too long to learn and fail. Identifying an opportunity to increase our efficiency, I partnered with my Head of Research, PM and ProdOps to drive a new end-to-end product development process.
        </p>
      </Section>

      <FadeIn>
        <div style={{ padding: "16px 56px 72px", borderBottom: `1px solid ${HAIR}` }}>
          <div style={{
            fontFamily: MONO, fontSize: "11px", color: MUTED,
            letterSpacing: "0.08em", marginBottom: "20px",
          }}>The model</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <Phase tag="01 · Seed"      title="Explore"   body="A small team explores a specific problem statement and develops multiple proposals. They pitch the most promising ones." />
            <Phase tag="02 · Incubate"  title="Validate"  body="The best pitch gets funded. A team forms, explores multiple solutions, iterates fast — fail quickly or learn quickly. Only when there's confidence in product–market fit does the team move to Grow." />
            <Phase tag="03 · Grow"      title="Scale"     body="Launch the product, grow the user base, prove longevity." />
            <Phase tag="04 · Exit"      title="Graduate"  body="Graduate from the process. Failure creates space for the next seed team." />
          </div>
          <p style={{
            margin: "32px 0 0", fontSize: "16px", color: MUTED, lineHeight: 1.65, maxWidth: "880px",
          }}>
            This model was adopted org-wide in 2021/22. It fundamentally changed NBU's velocity and resource allocation. Teams failed faster, learned faster, and moved to the next bet with less sunk cost. It's essentially a startup incubator inside Google.
          </p>
        </div>
      </FadeIn>

      <Section index={2} label="Team building"
        heading="A globally distributed, mission-driven UX org.">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          <Phase tag="01" title="Leading multidisciplinary teams"
            body="Built a 35-person UX team from the ground up — designers, researchers, program managers, prototypers — distributed across the US, India and other locations. 18 reported directly to me." />
          <Phase tag="02" title="Scaling our impact"
            body="We learned a lot from our pioneering research and design for global emerging markets. We scaled that impact by creating frameworks, running workshops, and sharing research reports and talks with other Google teams." />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "16px" }}>
          <Phase tag="03" title="Growing careers"
            body="I coached my team into senior leads and managers. People-manager scores were consistently above 90% — but what I'm prouder of is the careers, the people who grew into leaders themselves." />
          <Phase tag="04" title="Psychological safety"
            body="Creating an environment where people feel supported enough to take calculated risks. Not so comfortable that people coast, not so stressful that people retreat." />
        </div>
      </Section>

      {/* Podcast strip */}
      <FadeIn>
        <a
          href="https://whatisux.co/podcast/s5e4-how-google-designs-for-the-next-billion-users-with-sumier-phalake/"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "grid", gridTemplateColumns: "60px 1fr auto",
            alignItems: "center", gap: "24px",
            padding: "32px 56px", borderBottom: `1px solid ${HAIR}`,
            textDecoration: "none", color: INK,
          }}>
          <div style={{
            width: "48px", height: "48px", border: `1px solid ${INK}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "16px",
          }}>▶</div>
          <div>
            <div style={{
              fontFamily: MONO, fontSize: "11px", color: MUTED,
              letterSpacing: "0.08em", marginBottom: "6px",
            }}>What is UX podcast</div>
            <div style={{
              fontFamily: SANS, fontWeight: 500, fontSize: "22px",
              letterSpacing: "-0.02em",
            }}>How Google Designs for the Next Billion Users</div>
          </div>
          <div style={{
            fontFamily: MONO, fontSize: "11px", color: ACCENT,
            letterSpacing: "0.04em",
          }}>Listen →</div>
        </a>
      </FadeIn>

      {/* Team plates */}
      <FadeIn>
        <div style={{
          padding: "72px 56px", borderBottom: `1px solid ${INK}`,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px",
        }}>
          <TeamPlate src={IMG_TEAM_WORKSHOP}
            alt="NBU team during a workshop in India"
            caption="Fig. 01 — Design sprint, Bangalore" />
          <TeamPlate src={IMG_TEAM_SINGAPORE}
            alt="NBU team in Singapore"
            caption="Fig. 02 — Team offsite, Singapore" />
        </div>
      </FadeIn>

      <PrevNext
        prev={{ href: "/strategic-design/files", title: "From pivot to 500M users." }}
        next={null}
      />
      <Footer />
    </Page>
  );
}
