// CsStation.jsx — Swiss Editorial v2 port
// Connecting 100 million people to the internet.

import IMG_STATION1 from "../assets/cs-station/IMG_STATION1.png";
import IMG_STATION2 from "../assets/cs-station/IMG_STATION2.png";
import IMG_OTP      from "../assets/cs-station/IMG_OTP.png";
import IMG_SMB1     from "../assets/cs-station/IMG_SMB1.png";
import IMG_SMB2     from "../assets/cs-station/IMG_SMB2.png";
import IMG_THAI     from "../assets/cs-station/IMG_THAI.png";
import IMG_CONSOLE  from "../assets/cs-station/IMG_CONSOLE.png";

import { Page, Cover, Meta, Impact, Section, Quote, PrevNext, Footer, FadeIn,
  ACCENT, INK, HAIR, FAINT, MUTED, MONO } from "./_swiss";

function Plate({ src, alt, caption, dark = false }) {
  return (
    <div>
      <div style={{
        aspectRatio: "4/3", overflow: "hidden", background: dark ? "#1a1a1a" : FAINT,
        display: "flex", alignItems: "center", justifyContent: "center", padding: "32px",
      }}>
        <img src={src} alt={alt} style={{
          maxWidth: "60%", maxHeight: "100%", objectFit: "contain", display: "block",
          boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
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

function FullPlate({ src, alt, caption }) {
  return (
    <div>
      <div style={{
        aspectRatio: "16/9", overflow: "hidden", background: FAINT,
      }}>
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

export default function CsStation() {
  return (
    <Page>
      <Cover
        chapter="§ Case 04 — Google Station"
        title="Connecting 100M people to the internet."
        subtitle="Google Station — bringing fast, free Wi-Fi to public spaces around the world. A story about impact at global scale, designing across cultures, and honest lessons about sustainability."
        accent="100M"
      />

      <Meta items={[
        { k: "Role",   v: "Design lead, team of 6" },
        { k: "Year",   v: "2017–20" },
        { k: "Team",   v: "Consumer · Partner · SMB · Brand" },
        { k: "Domain", v: "Connectivity · Emerging markets" },
      ]} />

      <Impact stats={[
        { number: "5th",  label: "Largest public Wi-Fi network in the world at peak." },
        { number: "6+",   label: "Countries deployed across — India, Mexico, Indonesia and more." },
        { number: "100M", label: "Unique users connected to the internet, often for the first time." },
      ]} />

      {/* Hero environment plates */}
      <FadeIn>
        <div style={{
          padding: "72px 56px", borderBottom: `1px solid ${INK}`,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px",
        }}>
          <FullPlate src={IMG_STATION1}
            alt="Indian train station where Google Station was deployed"
            caption="Fig. 01 — A train station in India, one of thousands of public spaces where Station provided free Wi-Fi" />
          <FullPlate src={IMG_STATION2}
            alt="Google Station signage showing how to connect"
            caption="Fig. 02 — On-site signage guiding users through the connection flow" />
        </div>
      </FadeIn>

      <Section index={1} label="The challenge" heading="Free Wi-Fi that pays for itself.">
        <p style={{ margin: 0 }}>
          Google Station brought fast, free Wi-Fi to public spaces around the world to encourage internet adoption. The business model: revenue through onboarding advertising, increased footfall in venues like malls, and revenue sharing with SMBs who joined the network.
        </p>
        <p style={{ margin: "16px 0 0" }}>
          The design challenges were multifaceted: consumer onboarding for first-time internet users, partner tools for enterprise deployers and ISPs, SMB onboarding, monetization experiences, and a global brand that needed to work across vastly different cultural contexts.
        </p>
      </Section>

      <Section index={2} label="My role" heading="Design lead across five workstreams.">
        <p style={{ margin: 0 }}>
          I was the design lead and grew a team of 6 spanning consumer experience, partner tools, monetization, SMB onboarding, and visual design. I also led a global rebranding effort that had to work across vastly different cultural contexts — what signals "free, fast, trustworthy Wi-Fi" in India is different from what works in Mexico or Indonesia.
        </p>
      </Section>

      <Section index={3} label="The work" heading="Designing for everyone, everywhere.">
        <p style={{ margin: 0 }}>
          We designed near-seamless onboarding for consumers and businesses, plus tools for enterprises, ISPs and infrastructure deployers. Highly usable, inclusive multi-lingual experiences that worked for first-time internet users.
        </p>
        <p style={{ margin: "16px 0 0" }}>
          The global rebrand was one of the most interesting challenges — incorporating cultural sensitivities across six countries while maintaining a coherent brand identity. Trust signals vary enormously across cultures, and getting these right was critical for adoption.
        </p>
      </Section>

      {/* Artifact gallery */}
      <FadeIn>
        <div style={{ padding: "72px 56px", borderBottom: `1px solid ${INK}` }}>
          <div style={{
            fontFamily: MONO, fontSize: "12px", color: ACCENT,
            marginBottom: "32px", letterSpacing: "0.04em",
          }}>§ Artifacts — Consumer experience</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "48px" }}>
            <Plate src={IMG_THAI} alt="Thai language connection screen"
              caption="Fig. 03 — Scalable multilingual UI: Thai and English displayed simultaneously" />
            <Plate src={IMG_OTP} alt="OTP verification screen"
              caption="Fig. 04 — SMS verification, designed for simplicity and trust" />
          </div>

          <div style={{
            fontFamily: MONO, fontSize: "12px", color: ACCENT,
            margin: "8px 0 32px", letterSpacing: "0.04em",
          }}>§ SMB ecosystem</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "48px" }}>
            <Plate src={IMG_SMB1} alt="Fonda SMB app landing"
              caption="Fig. 05 — Fonda: Wi-Fi for small businesses, helping them attract customers" />
            <Plate src={IMG_SMB2} alt="SMB maps integration"
              caption="Fig. 06 — Google Maps integration to help customers find participating businesses" />
          </div>

          <div style={{
            fontFamily: MONO, fontSize: "12px", color: ACCENT,
            margin: "8px 0 32px", letterSpacing: "0.04em",
          }}>§ Partner tools</div>
          <FullPlate src={IMG_CONSOLE}
            alt="Station Console for network providers"
            caption="Fig. 07 — Station Console: a dashboard for network providers monitoring 1,000+ hotspots" />
        </div>
      </FadeIn>

      <Quote source="A retrospective note">
        A story of multi-user, multi-platform complexity — deploying, maintaining, and designing the consumer experience for a global Wi-Fi network.
      </Quote>

      <Section index={4} label="The ending" heading="Not every product lasts forever.">
        <p style={{ margin: 0 }}>
          Station was an incredible product, but the connectivity landscape changed. As cellular data costs globally plummeted, the business model for bespoke high-speed Wi-Fi infrastructure was no longer viable. Station wound down in 2020.
        </p>
        <p style={{ margin: "16px 0 0" }}>
          We built something that mattered, learned from what didn't work, and the design challenges — multilingual inclusivity, cross-cultural branding, onboarding for first-time internet users — were some of the most rewarding of my career.
        </p>
        <p style={{ margin: "16px 0 0", fontStyle: "italic" }}>
          At its peak, Google Station was the 5th largest public Wi-Fi network in the world and connected 100 million people to the internet.
        </p>
      </Section>

      <PrevNext
        prev={{ href: "/strategic-design/files", title: "From pivot to 500M users." }}
        next={{ href: "/leadership", title: "Building the machine — design leadership." }}
      />
      <Footer />
    </Page>
  );
}
