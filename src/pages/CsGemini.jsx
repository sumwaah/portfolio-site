// CsGemini.jsx — Swiss Editorial v2 port
// Differentiating an AI product for a billion-person market.

import { Page, Cover, Meta, Impact, Section, Steps, PrevNext, Footer, FadeIn,
  ACCENT, MUTED, MONO } from "./_swiss";

export default function CsGemini() {
  return (
    <Page>
      <Cover
        chapter="§ Case 01 — AI for India"
        title="Differentiating an AI product for a billion-person market."
        subtitle="Driving end-to-end product strategy for a major AI product in India — from audience identification and field research to co-created solutions and business-ready recommendations."
        accent="billion-person"
        confidential
      />

      <Meta items={[
        { k: "Role",   v: "Lead, design & strategy" },
        { k: "Year",   v: "2024" },
        { k: "Team",   v: "~20 cross-functional" },
        { k: "Domain", v: "AI · Emerging markets" },
      ]} />

      <Impact stats={[
        { number: "~20",         label: "Cross-functional team assembled and led across design, research, product, engineering, marketing, and BizOps." },
        { number: "Exponential", label: "Growth in downloads and usage following the strategy and campaigns we developed." },
        { number: "Adopted",     label: "Audience focus and insights adopted by the product team and incorporated into roadmap." },
      ]} />

      <Section index={1} label="The challenge"
        heading="A product and go-to-market strategy for India.">
        <p style={{ margin: 0 }}>
          One of Google's major AI products needed a differentiated growth strategy for India — the world's largest and most diverse internet market. The product had no clear value proposition that resonated with local users. This was simultaneously a product differentiation problem, a localization challenge, and a go-to-market strategy question.
        </p>
      </Section>

      <Section index={2} label="My role" heading="End-to-end engagement lead.">
        <p style={{ margin: 0 }}>
          I drove the entire engagement end-to-end — assembling and leading a cross-functional team of around 20 people spanning design, research, product, engineering, marketing, and business operations from both my team and the product team.
        </p>
      </Section>

      <Section index={3} label="The approach"
        heading="From data to the field to tangible recommendations.">
        <Steps steps={[
          { title: "Data-led audience identification",
            body:  "Analyzed existing research and usage data with business operations to identify the audience with highest growth potential — users who were sizable, AI-curious and had needs AI could meaningfully address." },
          { title: "Deep field research in Bangalore",
            body:  "Led a cross-functional team of PMs, engineers, business operations and UXers in Bangalore to participate in foundational field research with users from our target audience." },
          { title: "Co-creation with local context",
            body:  "We designed with — not just for — our users. Solutions developed collaboratively with the team and local design students, ensuring cultural and contextual grounding." },
          { title: "Tangible, sized recommendations",
            body:  "Delivered visual and motion prototypes plus marketing campaign recommendations with opportunity sizing and engineering-complexity scores — a detailed playbook for leadership to succeed in market." },
        ]} />
      </Section>

      <Section index={4} label="Outcome">
        <p style={{ margin: 0 }}>
          While the product's growth came from many efforts, ours helped accelerate it and showed clear impact. What I'm confident in is the rigor of the approach: quantitative audience analysis, qualitative field research, collaborative solution design, and business-ready recommendations — all delivered in a few months.
        </p>
      </Section>

      <PrevNext
        prev={null}
        next={{ href: "/strategic-design/search-regulation",
                title: "Evolving a business model under regulatory pressure." }}
      />
      <Footer />
    </Page>
  );
}
