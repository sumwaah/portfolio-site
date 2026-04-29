// Shared Swiss Editorial v2 helpers — responsive edition.

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const PAPER  = "#FFFFFF";
export const INK    = "#0A0A0A";
export const ACCENT = "#E8443C";
export const MUTED  = "#5A5A5A";
export const FAINT  = "#E5E2DA";
export const HAIR   = "#C8C4B8";

export const SANS  = "'Inter Tight', 'Helvetica Neue', Arial, sans-serif";
export const SERIF = "'Times New Roman', Times, serif";
export const MONO  = "'JetBrains Mono', 'IBM Plex Mono', monospace";

// ── Mobile detection (breakpoint 768px)
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
};

// ── Reveal-on-scroll helpers
export const useInView = (threshold = 0.12) => {
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
  }, [threshold]);
  return [ref, visible];
};

export const FadeIn = ({ children, delay = 0 }) => {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
    }}>{children}</div>
  );
};

// ── Sticky nav
export function Nav() {
  const isMobile = useIsMobile();
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: isMobile ? "16px 24px" : "20px 56px",
      borderBottom: `1px solid ${INK}`,
      background: PAPER, position: "sticky", top: 0, zIndex: 10,
    }}>
      <Link to="/" style={{
        display: "flex", alignItems: "center", gap: "10px",
        textDecoration: "none", color: INK, flexShrink: 0,
      }}>
        <div style={{ width: "10px", height: "10px", background: ACCENT }} />
        <span style={{ fontFamily: MONO, fontSize: "12px" }}>Sumier Phalake</span>
      </Link>
      {!isMobile && (
        <div style={{ fontFamily: MONO, fontSize: "12px", color: MUTED }}>
          Design & strategy leadership · San Francisco
        </div>
      )}
      <div style={{
        display: "flex", gap: isMobile ? "16px" : "24px",
        fontFamily: MONO, fontSize: "12px",
      }}>
        <Link to="/" style={{ color: INK, textDecoration: "none" }}>Work</Link>
        <Link to="/#about" style={{ color: INK, textDecoration: "none" }}>About</Link>
        <Link to="/#contact" style={{ color: INK, textDecoration: "none" }}>Contact</Link>
      </div>
    </div>
  );
}

// ── Page shell
export function Page({ children }) {
  return (
    <div style={{
      fontFamily: SANS, background: PAPER, color: INK,
      fontFeatureSettings: "'ss01','cv11'", minHeight: "100vh",
    }}>
      <Nav />
      {children}
    </div>
  );
}

// ── Cover (case-study hero)
export function Cover({ chapter, title, subtitle, accent = "500M", confidential = false }) {
  const isMobile = useIsMobile();
  const chapterLabel = chapter.includes(" — ") ? chapter.split(" — ").slice(1).join(" — ") : chapter;
  const renderTitle = () => {
    if (!accent || !title.includes(accent)) return title;
    const [before, after] = title.split(accent);
    return <>{before}<span style={{ color: ACCENT }}>{accent}</span>{after}</>;
  };
  return (
    <FadeIn>
      <div style={{
        padding: isMobile ? "32px 24px 40px" : "56px 56px 64px",
        borderBottom: `1px solid ${INK}`,
      }}>
        <div style={{
          fontFamily: MONO, fontSize: "12px", color: ACCENT,
          marginBottom: isMobile ? "24px" : "48px", letterSpacing: "0.04em",
        }}>{chapterLabel}</div>
        <h1 style={{
          fontFamily: SANS, fontWeight: 600, letterSpacing: "-0.035em",
          lineHeight: 0.96, fontSize: isMobile ? "48px" : "112px",
          margin: 0, maxWidth: "1100px",
        }}>{renderTitle()}</h1>
        <p style={{
          fontSize: isMobile ? "16px" : "19px", lineHeight: 1.55,
          margin: `${isMobile ? "20px" : "40px"} 0 0`,
          maxWidth: "720px", color: MUTED,
        }}>{subtitle}</p>
        {confidential && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            marginTop: "24px", padding: "10px 16px",
            border: `1px solid ${HAIR}`, fontFamily: MONO, fontSize: "11px",
            color: MUTED, letterSpacing: "0.04em",
          }}>
            <span style={{ width: "6px", height: "6px", background: ACCENT, borderRadius: "50%" }} />
            Confidential — approach and impact shared, not product details
          </div>
        )}
      </div>
    </FadeIn>
  );
}

// ── Meta row (Role / Years / Team / Domain etc)
export function Meta({ items }) {
  const isMobile = useIsMobile();
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : `repeat(${items.length}, 1fr)`,
      borderBottom: `1px solid ${INK}`,
    }}>
      {items.map((m, i) => (
        <div key={m.k} style={{
          padding: isMobile ? "16px 20px" : "24px 32px",
          borderRight: isMobile
            ? (i % 2 === 0 ? `1px solid ${HAIR}` : "none")
            : (i < items.length - 1 ? `1px solid ${HAIR}` : "none"),
          borderBottom: isMobile && i + 2 < items.length ? `1px solid ${HAIR}` : "none",
        }}>
          <div style={{
            fontFamily: MONO, fontSize: "10px", letterSpacing: "0.08em",
            color: MUTED, marginBottom: "8px", textTransform: "uppercase",
          }}>{m.k}</div>
          <div style={{ fontSize: "14px", lineHeight: 1.45 }}>{m.v}</div>
        </div>
      ))}
    </div>
  );
}

// ── Impact
export function Impact({ stats, label = "Impact" }) {
  const isMobile = useIsMobile();
  return (
    <div style={{
      padding: isMobile ? "32px 24px" : "48px 56px",
      borderBottom: `1px solid ${INK}`,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(12, 1fr)",
      columnGap: "24px",
      alignItems: "start",
    }}>
      <div style={{ gridColumn: isMobile ? "auto" : "span 3", marginBottom: isMobile ? "20px" : 0 }}>
        <h2 style={{
          fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
          lineHeight: 1.05, fontSize: isMobile ? "16px" : "20px", margin: 0,
        }}>{label}</h2>
      </div>
      <div style={{ gridColumn: isMobile ? "auto" : "span 9" }}>
        {stats.map((s, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 280px",
              alignItems: "start",
              paddingTop: i === 0 ? 0 : "24px",
              paddingBottom: "24px",
              borderBottom: i < stats.length - 1 ? `1px solid ${HAIR}` : "none",
              gap: isMobile ? "6px" : "32px",
            }}>
              <div style={{
                fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
                lineHeight: 1.05, fontSize: isMobile ? "32px" : "40px", color: INK,
              }}>{s.number}</div>
              <div style={{ fontSize: "15px", color: MUTED, lineHeight: 1.5 }}>{s.label}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

// ── Section
export function Section({ index, label, heading, children }) {
  const isMobile = useIsMobile();
  return (
    <FadeIn>
      <div style={{
        padding: isMobile ? "32px 24px" : "72px 56px",
        borderBottom: `1px solid ${HAIR}`,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(12, 1fr)",
        columnGap: "24px",
      }}>
        <div style={{ gridColumn: isMobile ? "auto" : "span 3", marginBottom: isMobile ? "14px" : 0 }}>
          <div style={{
            fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
            lineHeight: 1.05, fontSize: isMobile ? "16px" : "20px",
          }}>{label}</div>
        </div>
        <div style={{ gridColumn: isMobile ? "auto" : "span 9" }}>
          {heading && (
            <h2 style={{
              fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
              lineHeight: 1.05, fontSize: isMobile ? "22px" : "40px",
              margin: "0 0 16px", maxWidth: "880px",
            }}>{heading}</h2>
          )}
          <div style={{
            fontSize: isMobile ? "15px" : "17px",
            lineHeight: 1.65, color: MUTED, maxWidth: "780px",
          }}>
            {children}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

// ── Numbered process steps
export function Steps({ steps }) {
  const isMobile = useIsMobile();
  return (
    <div>
      {steps.map((s, i) => (
        <div key={i} style={{
          display: "grid", gridTemplateColumns: "36px 1fr",
          gap: "14px", marginBottom: "22px",
        }}>
          <div style={{
            fontFamily: MONO, fontSize: "11px", color: ACCENT,
            letterSpacing: "0.04em", paddingTop: "3px",
          }}>{String(i + 1).padStart(2, "0")}</div>
          <div>
            <div style={{
              fontFamily: SANS, fontWeight: 600,
              fontSize: isMobile ? "15px" : "18px",
              color: INK, marginBottom: "5px", letterSpacing: "-0.01em",
            }}>{s.title}</div>
            <div style={{
              fontSize: isMobile ? "14px" : "15px",
              color: MUTED, lineHeight: 1.65,
            }}>{s.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Pull-quote
export function Quote({ children, source }) {
  const isMobile = useIsMobile();
  return (
    <FadeIn>
      <div style={{
        padding: isMobile ? "48px 24px" : "100px 56px",
        borderBottom: `1px solid ${INK}`,
      }}>
        <h2 style={{
          fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
          lineHeight: 1.3, fontSize: isMobile ? "22px" : "44px",
          maxWidth: "1000px", margin: "0 auto",
          textAlign: isMobile ? "left" : "center",
        }}>
          "{children}"
        </h2>
        {source && (
          <div style={{
            fontFamily: MONO, fontSize: "11px",
            textAlign: isMobile ? "left" : "center",
            marginTop: "20px", color: MUTED, letterSpacing: "0.04em",
          }}>— {source}</div>
        )}
      </div>
    </FadeIn>
  );
}

// ── Tag pills
export function Tags({ tags }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
      {tags.map((t) => (
        <span key={t} style={{
          fontFamily: MONO, fontSize: "11px", letterSpacing: "0.04em",
          padding: "4px 12px", border: `1px solid ${HAIR}`, color: MUTED,
        }}>{t}</span>
      ))}
    </div>
  );
}

// ── Prev / Next case-study footer
export function PrevNext({ prev, next }) {
  const isMobile = useIsMobile();
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      borderTop: `1px solid ${INK}`,
    }}>
      <div style={{
        padding: isMobile ? "24px" : "32px 56px",
        borderRight: isMobile ? "none" : `1px solid ${HAIR}`,
        borderBottom: isMobile && next ? `1px solid ${HAIR}` : "none",
        minHeight: isMobile ? "auto" : "120px",
      }}>
        {prev ? (
          <Link to={prev.href} style={{ color: INK, textDecoration: "none", display: "block" }}>
            <div style={{
              fontFamily: MONO, fontSize: "11px", color: MUTED,
              letterSpacing: "0.04em", marginBottom: "10px",
            }}>← Previous</div>
            <div style={{
              fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.02em",
              fontSize: isMobile ? "17px" : "22px", lineHeight: 1.2, maxWidth: "440px",
            }}>{prev.title}</div>
          </Link>
        ) : <div />}
      </div>
      <div style={{
        padding: isMobile ? "24px" : "32px 56px",
        textAlign: "right",
        minHeight: isMobile ? "auto" : "120px",
      }}>
        {next ? (
          <Link to={next.href} style={{ color: INK, textDecoration: "none", display: "block" }}>
            <div style={{
              fontFamily: MONO, fontSize: "11px", color: MUTED,
              letterSpacing: "0.04em", marginBottom: "10px",
            }}>Next →</div>
            <div style={{
              fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.02em",
              fontSize: isMobile ? "17px" : "22px", lineHeight: 1.2,
              maxWidth: "440px", marginLeft: "auto",
            }}>{next.title}</div>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}

// ── Footer
export function Footer() {
  const isMobile = useIsMobile();
  return (
    <div style={{
      padding: isMobile ? "20px 24px" : "20px 56px",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      gap: isMobile ? "6px" : "0",
      fontFamily: MONO, fontSize: "11px", color: MUTED,
    }}>
      <span>© Sumier Phalake · 2026</span>
      <span>San Francisco · California</span>
      <span>sumier@gmail.com</span>
    </div>
  );
}
