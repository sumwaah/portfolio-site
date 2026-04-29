// CsFiles.jsx — Swiss Editorial v2 port
// From pivot to 500M users.

import { Page, Cover, Meta, Impact, Section, Quote, PrevNext, Footer, FadeIn,
  ACCENT, INK, HAIR, FAINT, MUTED, MONO } from "./_swiss.jsx";

import IMG_FILES_BROWSE from "../assets/cs-files/IMG_FILES_BROWSE.png";
import IMG_FILES_NEARBY from "../assets/cs-files/IMG_FILES_NEARBY.png";
import IMG_FILES_SAFE1  from "../assets/cs-files/IMG_FILES_SAFE1.png";
import IMG_FILES_SAFE2  from "../assets/cs-files/IMG_FILES_SAFE2.png";

// ── Content
const SCREENS = [
  { src: IMG_FILES_BROWSE, caption: "Browse landing — recents, categories, collections, Safe Folder", group: "Product" },
  { src: IMG_FILES_NEARBY, caption: "Nearby Share — share files without internet",                  group: "Product" },
  { src: IMG_FILES_SAFE1,  caption: "Safe Folder home — private storage for shared devices",        group: "Safe Folder" },
  { src: IMG_FILES_SAFE2,  caption: "Safe Folder lock — PIN, pattern, or device lock",              group: "Safe Folder" },
];

export default function CsFiles() {
  return (
    <Page>
      <Cover
        chapter="§ Case 03 — Files by Google"
        title="From pivot to 500M users."
        subtitle="Files by Google — investing the right level of craft to learn, finding product-market fit, then scaling to the highest-rated Google app."
        accent="500M"
      />

      <Meta items={[
        { k: "Role",   v: "Head of Design, NBU Android Utilities" },
        { k: "Years",  v: "2018 – 2022" },
        { k: "Team",   v: "12 designers, 4 researchers" },
        { k: "Domain", v: "Android · NBU · Utility" },
      ]} />

      <Impact stats={[
        { number: "500M+",    label: "Monthly active users." },
        { number: "3 yrs",    label: "Highest-rated Google app." },
        { number: "Acquired", label: "by Android core." },
      ]} />

      <Section index={1} label="The challenge"
        heading="A critical utility for novice internet users globally.">
        <p style={{ margin: 0 }}>
          Storage management on entry level devices is critical. Why? Hundreds of millions of users globally
          can only afford one computing device, often an entry level device with limited storage. A few apps
          and photos can fill up storage and render the device unusable. We needed to help novice users take
          control of their phone storage.
        </p>
      </Section>

      <Section index={2} label="My role"
        heading="Owning a multi-product utility division.">
        <p style={{ margin: 0 }}>
          I led the entire NBU Android Utilities division, which included Files, Camera Go, and other core
          utilities. I oversaw the growth of Files from its critical pivot all the way to 500M users, and
          Camera Go's launch across a dozen device manufacturers to 10M users.
        </p>
      </Section>

      <Section index={3} label="The approach"
        heading="A deep empathy for users led to highly loved features.">
        <p style={{ margin: 0 }}>
          The most popular feature of Files was its intelligent one-tap cleaning suggestions. We tailored
          this to emerging market needs, such as detection of WhatsApp memes and duplicate photos to delete.
          In-field research uncovered more opportunities — Safe Folder for women's privacy, a media player
          for data sensitive users, and Nearby Share for sharing without cellular data.
        </p>
      </Section>

      <Section index={4} label="Philosophy"
        heading="Build to learn, then build to last.">
        <p style={{ margin: 0 }}>
          Invest the right level of craft to learn as cheaply and quickly as possible — but make sure
          there's enough craft that usability isn't conflated with usefulness. Once we had confidence in
          the value proposition, we transitioned to designing for scale — investing fully in polish, delight,
          and the kind of craft that earns a five-star rating.
        </p>
      </Section>

      <Quote source="Internal review, Android leadership">
        The team's work didn't just ship a product; it established design patterns used across the entire Android platform.
      </Quote>

      {/* SCREENS — custom section, no direct _swiss equivalent */}
      <FadeIn>
        <div style={{ padding: "72px 56px", borderBottom: `1px solid ${INK}` }}>
          <div style={{ fontFamily: MONO, fontSize: "12px", color: ACCENT, marginBottom: "32px", letterSpacing: "0.04em" }}>
            § Artifacts
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px" }}>
            {SCREENS.map((sc, i) => (
              <FadeIn key={i} delay={(i % 2) * 0.05}>
                <div>
                  <div style={{
                    aspectRatio: "4/3", overflow: "hidden", background: FAINT,
                    display: "flex", alignItems: "center", justifyContent: "center", padding: "32px",
                  }}>
                    <img src={sc.src} alt="" style={{
                      maxWidth: "60%", maxHeight: "100%", objectFit: "contain",
                      display: "block", boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                    }} />
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: "10px", color: MUTED, marginTop: "12px", letterSpacing: "0.04em" }}>
                    Fig. {String(i + 1).padStart(2, "0")} — {sc.group}
                  </div>
                  <div style={{ fontSize: "14px", lineHeight: 1.5, marginTop: "4px", maxWidth: "440px" }}>
                    {sc.caption}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>

      <PrevNext
        prev={{ href: "/strategic-design/search-regulation", title: "Evolving a business model under regulatory pressure." }}
        next={{ href: "/leadership",                          title: "Building the machine." }}
      />
      <Footer />
    </Page>
  );
}
