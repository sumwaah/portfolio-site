// CsEcosystem.jsx — Swiss Editorial v2 port
// Designing an ecosystem, not just an app.

import { Page, Cover, Meta, Impact, Section, Steps, Quote, PrevNext, Footer,
  PAPER, ACCENT, INK, HAIR, MUTED, MONO } from "./_swiss.jsx";

// Minimal connected-nodes diagram, restyled in Swiss vocabulary.
function EcosystemDiagram() {
  return (
    <div style={{
      padding: "72px 56px", borderBottom: `1px solid ${HAIR}`,
      display: "flex", justifyContent: "center", background: PAPER,
    }}>
      <svg width="480" height="260" viewBox="0 0 480 260" fill="none">
        <circle cx="240" cy="130" r="28" stroke={ACCENT} strokeWidth="1.25" fill="none" />
        <circle cx="240" cy="130" r="5" fill={ACCENT} />
        {[
          [100, 70], [380, 70], [100, 190], [380, 190], [240, 30], [240, 230],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={cy === 30 || cy === 230 ? 14 : 18}
              stroke={INK} strokeWidth="1" fill="none" />
            <circle cx={cx} cy={cy} r={3} fill={INK} opacity="0.45" />
          </g>
        ))}
        {[
          [120, 78, 212, 118], [360, 78, 268, 118],
          [120, 182, 212, 142], [360, 182, 268, 142],
          [240, 46, 240, 102], [240, 214, 240, 158],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={INK} strokeWidth="0.75" strokeDasharray="3 4" opacity="0.35" />
        ))}
        <text x="240" y="258" textAnchor="middle"
          fontFamily="JetBrains Mono, monospace" fontSize="10"
          fill={MUTED} letterSpacing="0.08em">
          Fig. 01 — From isolated apps to connected ecosystem
        </text>
      </svg>
    </div>
  );
}

export default function CsEcosystem() {
  return (
    <Page>
      <Cover
        chapter="§ Case 03 — Ecosystem"
        title="Designing an ecosystem, not just an app."
        subtitle="Leading the design strategy for a multi-year, CEO-level initiative to transform how a suite of products works together on a major platform — from isolated apps to a connected ecosystem."
        accent="ecosystem,"
        confidential
      />

      <Meta items={[
        { k: "Role",   v: "Design strategy lead" },
        { k: "Year",   v: "2022–present" },
        { k: "Team",   v: "Growing UX org · CEO-level OKR" },
        { k: "Domain", v: "Cross-app · Platform · Strategy" },
      ]} />

      <EcosystemDiagram />

      <Impact stats={[
        { number: "Multiple", label: "Cross-app initiatives built and launched across the product suite." },
        { number: "Ongoing",  label: "Ecosystem-level metrics proposal in active development with Data Science." },
        { number: "Growing",  label: "Team expanding as the org recognizes the strategic importance of the work." },
      ]} />

      <Section index={1} label="The problem" heading="Every app for itself.">
        <p style={{ margin: 0 }}>
          Google's suite of products on a major platform had always operated independently. Each had its own team, its own growth metrics, its own roadmap. That model made sense for speed — but as users' tasks grew more complex and spanned multiple products, the seams became painful.
        </p>
        <p style={{ margin: "16px 0 0" }}>
          Context-switching. Copy-pasting. Manually bridging workflows. Meanwhile, the platform's native ecosystem offered increasingly seamless integration, making the fragmentation more visible with every OS update.
        </p>
      </Section>

      <Quote source="UX strategy review">
        You can design the most elegant cross-app experiences in the world, but if every team is still measured on their own DAU, nothing changes.
      </Quote>

      <Section index={2} label="My role" heading="Design strategy at the CEO altitude.">
        <p style={{ margin: 0 }}>
          A CEO-level OKR was established to address this. I lead the design strategy for this multi-year initiative, partnering with a Director of Strategy who presents to the CEO several times a year.
        </p>
        <p style={{ margin: "16px 0 0" }}>
          I lead the development of the user experience strategy for key bets and contribute to executive storytelling for forums at the senior director, VP, and GM levels. The team has grown as the organization has recognized the strategic importance of this work.
        </p>
      </Section>

      <Section index={3} label="The approach" heading="Four moves.">
        <Steps steps={[
          { title: "Mapping the gaps",
            body:  "Mapped experience gaps across the product suite — moments where users need products to work together but are forced to context-switch or abandon tasks. This alone changed conversations, because most teams had never seen their product through the lens of the broader ecosystem." },
          { title: "Finding the moment that matters",
            body:  "Months of focused work revealed a critical insight: device onboarding is the moment that matters most. Users setting up a new device are uniquely open to configuring things right — connections between apps that they'd never bother to set up later. This reframed the approach from 'how do we connect existing users' to 'how do we set up the ecosystem right from day one.'" },
          { title: "Organic growth pathways",
            body:  "Identified high-usage apps as natural on-ramps — pathways to drive traffic and usage to other apps in the suite, designed to feel helpful rather than promotional." },
          { title: "Proposing systemic change",
            body:  "Working closely with Data Science to develop a white paper proposing ecosystem-level metrics to replace individual-app DAU. Bringing insights from companies that do this well, organizational best practices for incentives, and identifying the right metrics from a UX standpoint. This isn't experience design — it's designing the conditions for an ecosystem to exist." },
        ]} />
      </Section>

      <Section index={4} label="Why this matters"
        heading="Design leadership at its most expansive.">
        <p style={{ margin: 0 }}>
          This isn't interface design. It's designing the conditions for an entire product ecosystem to work together — proposing new metrics, new incentives, new ways of working. The audience is the CEO. The artifacts are strategy presentations, not mockups.
        </p>
        <p style={{ margin: "16px 0 0", fontStyle: "italic" }}>
          If you're wondering what "I think in systems" looks like in practice — this is it.
        </p>
      </Section>

      <PrevNext
        prev={{ href: "/strategic-design/search-regulation",
                title: "Evolving a business model under regulatory pressure." }}
        next={{ href: "/strategic-design/files",
                title: "From pivot to 500M users." }}
      />
      <Footer />
    </Page>
  );
}
