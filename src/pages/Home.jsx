import { useState, useEffect, useRef } from "react";

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
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const POP = "#D4552A";
const POP_LIGHT = "#FDF0EC";
const WARM_BG = "#FAF7F2";
const DARK = "#2C2416";
const MID = "#6B6155";
const MUTED = "#8A7D6B";
const SUBTLE = "#B0A694";
const TAN = "#E8E2D9";
const TAN_BG = "#F0EBE3";

const Divider = () => (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "56px 0",
    gap: "12px",
  }}>
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4C9B8" }} />
    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: POP, opacity: 0.5 }} />
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4C9B8" }} />
  </div>
);

const SectionLabel = ({ children }) => (
  <div style={{
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    color: POP,
    letterSpacing: "0.12em",
    marginBottom: "20px",
    textTransform: "uppercase",
    opacity: 0.7,
  }}>
    {children}
  </div>
);

const ChapterCard = ({ number, title, description, proofs, accentColor, href }) => {
  const [hovered, setHovered] = useState(false);
  const accent = accentColor || POP;
  return (
    <a
      href={href || "/"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: "none",
        display: "block",
        padding: "36px 32px",
        background: hovered ? "#FFFFFF" : WARM_BG,
        borderRadius: "16px",
        border: `1px solid ${hovered ? accent + "44" : TAN}`,
        transition: "all 0.35s ease",
        cursor: "pointer",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "12px",
        color: accent,
        letterSpacing: "0.08em",
        marginBottom: "14px",
        opacity: 0.8,
      }}>
        {number}
      </div>
      <h3 style={{
        fontFamily: "'Instrument Serif', serif",
        fontSize: "26px",
        fontWeight: 400,
        color: DARK,
        margin: "0 0 12px",
        lineHeight: 1.25,
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: "15px",
        color: MID,
        lineHeight: 1.7,
        margin: "0 0 20px",
      }}>
        {description}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {proofs.map((proof, i) => (
          <div key={i} style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
            fontSize: "13px",
            color: MUTED,
            lineHeight: 1.5,
          }}>
            <span style={{ color: accent, flexShrink: 0, marginTop: "1px" }}>→</span>
            <span>{proof}</span>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: "24px",
        fontFamily: "'DM Mono', monospace",
        fontSize: "12px",
        color: accent,
        letterSpacing: "0.04em",
        opacity: hovered ? 1 : 0.6,
        transition: "opacity 0.3s ease",
      }}>
        Read more →
      </div>
    </a>
  );
};

const BeliefItem = ({ title, text }) => (
  <div style={{ marginBottom: "20px" }}>
    <span style={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
      fontSize: "15px",
      color: DARK,
    }}>{title} </span>
    <span style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "15px",
      color: MID,
      lineHeight: 1.7,
    }}>{text}</span>
  </div>
);

export default function Homepage() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div style={{
      background: WARM_BG,
      minHeight: "100vh",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(250,247,242,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: scrollY > 50 ? `1px solid ${TAN}` : "1px solid transparent",
        transition: "border-color 0.3s ease",
        padding: "16px 0",
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "13px",
            color: DARK,
            letterSpacing: "0.04em",
            fontWeight: 500,
          }}>Sumier Phalake</span>
          <div style={{ display: "flex", gap: "28px" }}>
            {["Work", "About", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                color: MUTED,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <header style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "100px 32px 80px",
      }}>
        <FadeIn>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            color: SUBTLE,
            letterSpacing: "0.1em",
            marginBottom: "28px",
          }}>
            DESIGN & STRATEGY LEADERSHIP
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(40px, 7vw, 64px)",
            fontWeight: 400,
            color: DARK,
            lineHeight: 1.1,
            margin: "0 0 32px",
            letterSpacing: "-0.015em",
            maxWidth: "750px",
          }}>
            Sumier{" "}
            <span style={{ color: POP, fontStyle: "italic" }}>Phalake</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{
            fontSize: "19px",
            color: MID,
            lineHeight: 1.75,
            margin: "0 0 0",
            maxWidth: "620px",
          }}>
            I solve cross-functional strategy problems through the lens of human insight. I think in systems — building the teams, processes, and products needed to transform high-stakes ambiguity into clarity.
          </p>
        </FadeIn>
      </header>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ height: "1px", background: `linear-gradient(to right, ${POP}44, transparent 70%)` }} />
      </div>

      {/* ============ TWO CHAPTER CARDS ============ */}
      <section id="work" style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "72px 32px 0",
      }}>
        <FadeIn>
          <SectionLabel>Selected work</SectionLabel>
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "24px",
          marginTop: "8px",
        }}>
          <FadeIn delay={0.05}>
            <div style={{
              padding: "36px 32px",
              background: WARM_BG,
              borderRadius: "16px",
              border: `1px solid ${TAN}`,
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                color: POP,
                letterSpacing: "0.08em",
                marginBottom: "14px",
                opacity: 0.8,
              }}>01</div>
              <h3 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "26px",
                fontWeight: 400,
                color: DARK,
                margin: "0 0 12px",
                lineHeight: 1.25,
              }}>Strategic design</h3>
              <p style={{
                fontSize: "15px",
                color: MID,
                lineHeight: 1.7,
                margin: "0 0 24px",
              }}>
                A decade of solving complex product and strategy problems through design — from AI product strategy in emerging markets to ecosystem architecture at the CEO level.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  { title: "Differentiating an AI product for a billion-person market", href: "/strategic-design/gemini-india" },
                  { title: "Evolving a business model under regulatory pressure", href: "/strategic-design/search-regulation" },
                  { title: "Designing an ecosystem, not just an app", href: "/strategic-design/ecosystem" },
                  { title: "From pivot to 500 million users", href: "/strategic-design/files" },
                  { title: "Connecting 100 million people to the internet", href: "/strategic-design/station" },
                ].map((cs, i) => (
                  <a key={i} href={cs.href} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 0",
                    borderTop: i === 0 ? `1px solid ${TAN}` : "none",
                    borderBottom: `1px solid ${TAN}`,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.paddingLeft = "8px"}
                  onMouseLeave={(e) => e.currentTarget.style.paddingLeft = "0"}
                  >
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: POP, flexShrink: 0 }}>→</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: DARK, lineHeight: 1.4 }}>{cs.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ChapterCard
              number="02"
              title="Design leadership"
              href="/leadership"
              description="Building teams, designing processes, and cultivating the culture that can take ideas to successful launches with a focus on craft and user value. Head of Design at Google's Next Billion Users."
              proofs={[
                "Built and led a 35-person globally distributed UX team",
                "Designed a startup-style incubator model adopted org-wide",
                "Launched 12+ products, 90%+ people manager scores",
              ]}
              accentColor="#5C8A6E"
            />
          </FadeIn>
        </div>
      </section>

      {/* ============ FOUNDATION ============ */}
      <section style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "64px 32px 0",
      }}>
        <FadeIn>
          <div style={{
            padding: "40px 36px",
            background: TAN_BG,
            borderRadius: "16px",
            borderLeft: `3px solid ${POP}33`,
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: MUTED,
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}>
              THE FOUNDATION
            </div>
            <h3 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "24px",
              fontWeight: 400,
              color: DARK,
              margin: "0 0 12px",
              lineHeight: 1.3,
            }}>
              How I think
            </h3>
            <p style={{
              fontSize: "15px",
              color: MID,
              lineHeight: 1.7,
              margin: "0 0 20px",
              maxWidth: "580px",
            }}>
              Before you can build the right thing, you have to find the right problem. My approach to design is rooted in deep human understanding — ethnographic research and rapid iterative prototyping with users to learn. Whether I'm leading a team or operating as a strategic IC, this is the foundation.
            </p>
            <a href="/" style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              color: POP,
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}>
              Read more →
            </a>
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* ============ ABOUT ============ */}
      <section id="about" style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 32px 20px",
      }}>
        <FadeIn>
          <SectionLabel>About</SectionLabel>
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "48px",
          alignItems: "start",
        }}>
          <FadeIn delay={0.05}>
            <div>
              {/* Photo placeholder */}
              <div style={{
                width: "100%",
                aspectRatio: "4/5",
                maxWidth: "320px",
                background: TAN_BG,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                border: `1px solid ${TAN}`,
              }}>
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: SUBTLE,
                  letterSpacing: "0.08em",
                }}>PHOTO</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h2 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "32px",
                fontWeight: 400,
                color: DARK,
                margin: "0 0 20px",
                lineHeight: 1.2,
              }}>
                Hi, I'm{" "}
                <span style={{ color: POP, fontStyle: "italic" }}>Sumier</span>
              </h2>

              <p style={{ fontSize: "15px", color: MID, lineHeight: 1.8, margin: "0 0 16px" }}>
                A Sinclair ZX Spectrum started me off on my journey as a lover of all things tech. I grew up in Mumbai, lived for many years in Atlanta, and now call San Francisco home.
              </p>

              <p style={{ fontSize: "15px", color: MID, lineHeight: 1.8, margin: "0 0 16px" }}>
                A life long gamer, I developed a love for narrative experiences that triggered deep emotional responses in me — games such as Grim Fandango. I carried that with me when I studied design and interactive narratives in grad school. Moving to the US also helped me find community as a queer man, something that was hard to find in India back then. I've since developed a deep love of nature, hiking, and the national parks.
              </p>

              <p style={{ fontSize: "15px", color: MID, lineHeight: 1.8, margin: "0 0 16px" }}>
                I'm an amateur street photographer, and baking sweet treats for friends is one of my favorite things.
              </p>

              <p style={{ fontSize: "15px", color: MID, lineHeight: 1.8, margin: "0 0 32px" }}>
                I've been designing for over 20 years. I hold an MS in Digital Media from Georgia Tech and started my career at IBM Interactive before joining Google, where I've spent the last decade.
              </p>

              <div style={{
                padding: "28px 0 0",
                borderTop: `1px solid ${TAN}`,
              }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: MUTED,
                  letterSpacing: "0.1em",
                  marginBottom: "20px",
                }}>
                  WHAT I BELIEVE
                </div>

                <BeliefItem
                  title="People not products."
                  text="Investing in people's growth results in successful products, not the other way around."
                />
                <BeliefItem
                  title="Start with what you don't know."
                  text="The most valuable insights come from the problems you didn't know existed."
                />
                <BeliefItem
                  title="Build to learn, then build to last."
                  text="Be scrappy until you've earned confidence, then invest in craft."
                />
                <BeliefItem
                  title="Culture is a design problem."
                  text="It happens whether you work on it or not. Great leaders design it intentionally."
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* ============ WHAT I'M LOOKING FOR ============ */}
      <section style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 32px 20px",
      }}>
        <FadeIn>
          <div style={{
            maxWidth: "640px",
            margin: "0 auto",
            textAlign: "center",
          }}>
            <SectionLabel>What I'm looking for</SectionLabel>

            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "28px",
              fontWeight: 400,
              color: DARK,
              margin: "0 0 20px",
              lineHeight: 1.35,
            }}>
              Problems that{" "}
              <span style={{ color: POP, fontStyle: "italic" }}>matter</span>
            </h2>

            <p style={{
              fontSize: "16px",
              color: MID,
              lineHeight: 1.8,
              margin: "0 0 32px",
            }}>
              I want to bring what I've learned — about people, about building in ambiguity, about the power of deep understanding — to problems that matter. I'm drawn to the responsible development of AI, access and tech policy, and climate: spaces where good design can genuinely shift outcomes for people. I'm looking for a team that believes in that, whether I'm leading it or embedded in it as a strategic partner.
            </p>

            <div style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
              {["Responsible AI", "Access & tech policy", "Climate"].map(tag => (
                <span key={tag} style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontFamily: "'DM Mono', monospace",
                  background: POP_LIGHT,
                  color: POP,
                  border: `1px solid ${POP}22`,
                  letterSpacing: "0.02em",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* ============ CONTACT ============ */}
      <section id="contact" style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 32px 80px",
        textAlign: "center",
      }}>
        <FadeIn>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "36px",
            fontWeight: 400,
            color: DARK,
            margin: "0 0 12px",
          }}>
            Let's talk
          </h2>
          <p style={{
            fontSize: "15px",
            color: MID,
            margin: "0 0 28px",
          }}>
            I'd love to hear about what you're building.
          </p>
          <div style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
            <a href="mailto:sumier@gmail.com" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              background: DARK,
              color: WARM_BG,
              borderRadius: "8px",
              textDecoration: "none",
              fontFamily: "'DM Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.03em",
              transition: "all 0.3s ease",
            }}>
              sumier@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/sumier/" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              background: "transparent",
              color: DARK,
              borderRadius: "8px",
              border: `1px solid ${TAN}`,
              textDecoration: "none",
              fontFamily: "'DM Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.03em",
              transition: "all 0.3s ease",
            }}>
              LinkedIn →
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: `1px solid ${TAN}`,
        padding: "32px 0",
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            color: SUBTLE,
          }}>
            Sumier Phalake © 2026
          </span>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            color: SUBTLE,
          }}>
            San Francisco
          </span>
        </div>
      </footer>
    </div>
  );
}
