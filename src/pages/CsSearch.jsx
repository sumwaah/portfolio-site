// CsSearch.jsx — Swiss Editorial v2 port
// Evolving a business model under regulatory pressure.

import { Page, Cover, Meta, Impact, Section, Steps, PrevNext, Footer,
  ACCENT, MUTED, MONO } from "./_swiss";

export default function CsSearch() {
  return (
    <Page>
      <Cover
        chapter="§ Case 02 — Search & regulation"
        title="Evolving a business model under regulatory pressure."
        subtitle="Designing solutions that satisfy user needs, elevate third-party content, drive traffic to merchants, and comply with global regulations — all simultaneously. In essence, evolving the traditional business model of search itself."
        accent="regulatory pressure"
        confidential
      />

      <Meta items={[
        { k: "Role",   v: "Design lead" },
        { k: "Year",   v: "2023–24" },
        { k: "Team",   v: "~10 + product org partners" },
        { k: "Domain", v: "Search · Commerce · Policy" },
      ]} />

      <Impact stats={[
        { number: "4",   label: "Top solutions selected for piloting with the product organization." },
        { number: "2",   label: "Partially incorporated into the product roadmap." },
        { number: "1",   label: "Skunkworks program established for ongoing innovation under the framework." },
      ]} />

      <Section index={1} label="The challenge"
        heading="Adapting to evolving user needs, AI-driven experiences and a changing regulatory landscape.">
        <p style={{ margin: 0 }}>
          Global regulations were demanding changes to how a major product surfaces commercial content. Users preferred richer, more integrated experiences — but merchants and aggregators were concerned about competitive overlap. The advent of AI-driven and agentic experiences was making the tension more pronounced.
        </p>
        <p style={{ margin: "16px 0 0" }}>
          The design challenge was to find solutions that worked for all three constituencies at once — and to do it in a space where the rules were actively being rewritten.
        </p>
      </Section>

      <Section index={2} label="My role" heading="Design lead across teams.">
        <p style={{ margin: 0 }}>
          Design lead for a cross-functional engagement of about 10 people from my team — designers, researchers, and business operations — plus PMs, designers, and researchers from the product organization. I drove the plan, the sprint structure, and the deliverables.
        </p>
      </Section>

      <Section index={3} label="The approach" heading="From sprint to system.">
        <Steps steps={[
          { title: "A complex, global sprint",
            body:  "Assembled a sprint between 4 different product teams at Google — Finance, Search, Legal, Ads — and external counsel to develop a shared framework under which solutions could be developed that met the needs of all the players in the ecosystem." },
          { title: "Multiple viable solutions",
            body:  "Developed a range of solutions, recognizing that regulatory negotiations and user testing would shape the final direction." },
          { title: "From solutions to system",
            body:  "Partnered with PM to develop a high-velocity skunkworks team — an incubator for continuously generating, prototyping and testing new solutions designed under this framework, in pursuit of product–market fit." },
        ]} />
      </Section>

      <Section index={4} label="Outcome">
        <p style={{ margin: 0 }}>
          The more lasting contribution was organizational: a repeatable model for rapid innovation in a highly constrained space. The team could keep adapting as regulations and AI capabilities evolved, rather than relying on one-time design sprints.
        </p>
      </Section>

      <PrevNext
        prev={{ href: "/strategic-design/gemini-india",
                title: "Differentiating an AI product for a billion-person market." }}
        next={{ href: "/strategic-design/ecosystem",
                title: "Designing an ecosystem, not just an app." }}
      />
      <Footer />
    </Page>
  );
}
