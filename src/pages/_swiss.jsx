// Shared Swiss Editorial v2 helpers for all case studies.
// Drop this in src/pages/_swiss.jsx and import from each case-study file.

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
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(12, 1fr)", padding: "20px 56px",
      borderBottom: `1px solid ${INK}`, columnGap: "24px", alignItems: "center",
      background: PAPER, position: "sticky", top: 0, zIndex: 10,
    }}>
      <Link to="/" style={{
        gridColumn: "span 4", display: "flex", alignItems: "center", gap: "10px",
        textDecoration: "none", color: INK,
      }}>
        <div style={{ width: "10px", height: "10px", background: ACCENT }} />
        <span style={{ fontFamily: MONO, fontSize: "12px" }}>Sumier Phalake</span>
      </Link>
      <div style={{ gridColumn: "span 5", fontFamily: MONO, fontSize: "12px", color: MUTED }}>
        Design & strategy leadership · San Francisco
      </div>
      <div style={{
        gridColumn: "span 3", display: "flex", justifyContent: "flex-end", gap: "24px",
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
  // Strip "§ Case 01 — " / "§ Chapter 02 — " prefix, keep only the label after the dash
  const chapterLabel = chapter.includes(' — ') ? chapter.split(' — ').slice(1).join(' — ') : chapter;

  // Render title with optional accent token replaced in red
  const renderTitle = () => {
    if (!accent || !title.includes(accent)) return title;
    const [before, after] = title.split(accent);
    return (
      <>
        {before}<span style={{ color: ACCENT }}>{accent}</span>{after}
      </>
    );
  };
  return (
    <FadeIn>
      <div style={{ padding: "56px 56px 64px", borderBottom: `1px solid ${INK}` }}>
        <div style={{
          fontFamily: MONO, fontSize: "12px", color: ACCENT,
          marginBottom: "48px", letterSpacing: "0.04em",
        }}>{chapterLabel}</div>
        <h1 style={{
          fontFamily: SANS, fontWeight: 600, letterSpacing: "-0.035em",
          lineHeight: 0.96, fontSize: "112px", margin: 0, maxWidth: "1100px",
        }}>{renderTitle()}</h1>
        <p style={{
          fontSize: "19px", lineHeight: 1.55, margin: "40px 0 0",
          maxWidth: "720px", color: MUTED,
        }}>{subtitle}</p>
        {confidential && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            marginTop: "32px", padding: "10px 16px",
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
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      borderBottom: `1px solid ${INK}`,
    }}>
      {items.map((m, i) => (
        <div key={m.k} style={{
          padding: "24px 32px",
          borderRight: i < items.length - 1 ? `1px solid ${HAIR}` : "none",
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

// ── Impact / By the numbers
export function Impact({ stats, label = "Impact" }) {
  return (
    <div style={{
      padding: "48px 56px", borderBottom: `1px solid ${INK}`,
      display: "grid", gridTemplateColumns: "repeat(12, 1fr)", columnGap: "24px",
    }}>
      <div style={{ gridColumn: "span 3" }}>
        <h2 style={{
          fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
          lineHeight: 1.05, fontSize: "26px", margin: 0,
        }}>{label}</h2>
      </div>
      <div style={{ gridColumn: "span 9" }}>
        <div>
          {stats.map((s, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 280px",
                alignItems: "start", padding: "28px 0",
                borderBottom: i < stats.length - 1 ? `1px solid ${HAIR}` : "none", gap: "32px",
              }}>
                <div style={{
                  fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
                  lineHeight: 1.05, fontSize: "40px", color: INK,
                }}>{s.number}</div>
                <div style={{ fontSize: "15px", color: MUTED, lineHeight: 1.5 }}>{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Section (label / heading / body) — the workhorse of every case study
export function Section({ index, label, heading, children }) {
  return (
    <FadeIn>
      <div style={{
        padding: "72px 56px", borderBottom: `1px solid ${HAIR}`,
        display: "grid", gridTemplateColumns: "repeat(12, 1fr)", columnGap: "24px",
      }}>
        <div style={{ gridColumn: "span 3" }}>
          <div style={{ fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.05, fontSize: "26px" }}>{label}</div>
        </div>
        <div style={{ gridColumn: "span 9" }}>
          {heading && (
            <h2 style={{
              fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
              lineHeight: 1.05, fontSize: "40px", margin: "0 0 24px", maxWidth: "880px",
            }}>{heading}</h2>
          )}
          <div style={{ fontSize: "17px", lineHeight: 1.65, color: MUTED, maxWidth: "780px" }}>
            {children}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

// ── Numbered process steps (used in approach sections)
export function Steps({ steps }) {
  return (
    <div>
      {steps.map((s, i) => (
        <div key={i} style={{
          display: "grid", gridTemplateColumns: "48px 1fr",
          gap: "20px", marginBottom: "28px",
        }}>
          <div style={{
            fontFamily: MONO, fontSize: "11px", color: ACCENT,
            letterSpacing: "0.04em", paddingTop: "4px",
          }}>{String(i + 1).padStart(2, "0")}</div>
          <div>
            <div style={{
              fontFamily: SANS, fontWeight: 600, fontSize: "18px",
              color: INK, marginBottom: "6px", letterSpacing: "-0.01em",
            }}>{s.title}</div>
            <div style={{ fontSize: "15px", color: MUTED, lineHeight: 1.65 }}>{s.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Pull-quote
export function Quote({ children, source }) {
  return (
    <FadeIn>
      <div style={{ padding: "100px 56px", borderBottom: `1px solid ${INK}` }}>
        <h2 style={{
          fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.025em",
          lineHeight: 1.25, fontSize: "44px", maxWidth: "1000px",
          margin: "0 auto", textAlign: "center",
        }}>
          "{children}"
        </h2>
        {source && (
          <div style={{
            fontFamily: MONO, fontSize: "11px", textAlign: "center",
            marginTop: "32px", color: MUTED, letterSpacing: "0.04em",
          }}>— {source}</div>
        )}
      </div>
    </FadeIn>
  );
}

// ── Tag pills (used by Search / Ecosystem / Station)
export function Tags({ tags }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
      {tags.map((t) => (
        <span key={t} style={{
          fontFamily: MONO, fontSize: "11px", letterSpacing: "0.04em",
          padding: "4px 12px", border: `1px solid ${HAIR}`,
          color: MUTED,
        }}>{t}</span>
      ))}
    </div>
  );
}

// ── Prev / Next case-study footer
export function PrevNext({ prev, next }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr",
      borderTop: `1px solid ${INK}`,
    }}>
      <div style={{
        padding: "32px 56px", borderRight: `1px solid ${HAIR}`,
        minHeight: "120px",
      }}>
        {prev ? (
          <Link to={prev.href} style={{ color: INK, textDecoration: "none", display: "block" }}>
            <div style={{
              fontFamily: MONO, fontSize: "11px", color: MUTED,
              letterSpacing: "0.04em", marginBottom: "12px",
            }}>← Previous</div>
            <div style={{
              fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.02em",
              fontSize: "22px", lineHeight: 1.2, maxWidth: "440px",
            }}>{prev.title}</div>
          </Link>
        ) : <div />}
      </div>
      <div style={{ padding: "32px 56px", textAlign: "right", minHeight: "120px" }}>
        {next ? (
          <Link to={next.href} style={{ color: INK, textDecoration: "none", display: "block" }}>
            <div style={{
              fontFamily: MONO, fontSize: "11px", color: MUTED,
              letterSpacing: "0.04em", marginBottom: "12px",
            }}>Next →</div>
            <div style={{
              fontFamily: SANS, fontWeight: 500, letterSpacing: "-0.02em",
              fontSize: "22px", lineHeight: 1.2, maxWidth: "440px",
              marginLeft: "auto",
            }}>{next.title}</div>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}

// ── Footer
export function Footer() {
  return (
    <div style={{
      padding: "20px 56px",
      display: "grid", gridTemplateColumns: "repeat(3, 1fr)", columnGap: "24px",
      fontFamily: MONO, fontSize: "11px", color: MUTED,
    }}>
      <span>© Sumier Phalake · 2026</span>
      <span style={{ textAlign: "center" }}>San Francisco · California</span>
      <span style={{ textAlign: "right" }}>sumier@gmail.com</span>
    </div>
  );
}
