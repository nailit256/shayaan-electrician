"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const csPath = [
  { age: 21, title: "Graduating ASU", desc: "CS degree in hand. No real coding experience. Resume looks like everyone else's.", color: "#888" },
  { age: 22, title: "The Job Hunt Begins", desc: "Applying everywhere. LinkedIn, Indeed, AngelList. Getting auto-rejected by ATS systems. Sound familiar? It happened to Shakib too.", color: "#ef4444" },
  { age: 23, title: "Still Applying...", desc: "Maybe some interviews. Competing against Stanford grads and people with 3 internships. AI is replacing junior dev roles.", color: "#ef4444" },
  { age: 24, title: "Entry-Level Job (Maybe)", desc: "If lucky, $55–65K. Angular or React. Imposter syndrome. Feeling behind peers who started earlier.", color: "#888" },
  { age: 25, title: "Grinding Through It", desc: "Still entry-level. Still learning things you should have learned in school. Student debt if any.", color: "#888" },
  { age: 26, title: "Mid-Junior Developer", desc: "$70–80K if things went well. But the market is volatile. Layoffs happen constantly. Shakib can tell you.", color: "#888" },
];

const tradePath = [
  { age: 21, title: "Start as Electrician Helper", desc: "Apply this week. $18–20/hr from day one. Learning the trade. Getting paid to learn.", color: "#22c55e" },
  { age: 22, title: "Year 1 Apprentice — IBEW", desc: "$20/hr + full health insurance + pension contributions. Learning conduit, basic wiring, safety.", color: "#22c55e" },
  { age: 23, title: "Year 2 Apprentice", desc: "$24/hr. Residential wiring, panels, blueprints. Real skills on your resume. Zero debt.", color: "#22c55e" },
  { age: 24, title: "Year 3 Apprentice", desc: "$29/hr. Commercial work. 3-phase power. Working on real buildings. TSMC and Intel hiring.", color: "#FFD700" },
  { age: 25, title: "Year 4 Apprentice", desc: "$34/hr. Industrial installations. Transformers, switchgear. You're the guy they call for the hard stuff.", color: "#FFD700" },
  { age: 26, title: "⚡ JOURNEYMAN WIREMAN", desc: "$45–55/hr. $100K+/year. Union pension. Health insurance. Can work anywhere in the country. MAX LEVEL.", color: "#FFD700" },
];

export default function TwoFutures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "70px 20px", maxWidth: 960, margin: "0 auto" }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: 44 }}
      >
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#a855f7", marginBottom: 8 }}>
          Choose Your Path
        </div>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, marginBottom: 8 }}>
          Age 21 → 26: Two Futures
        </h2>
        <p style={{ color: "#777", fontSize: 15 }}>
          Same person. Same 5 years. Completely different outcomes.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {/* CS Path */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: "#0e0008",
            border: "1px solid rgba(239,68,68,0.15)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          <div style={{
            padding: "18px 24px",
            background: "linear-gradient(135deg, #140010, #0e0008)",
            borderBottom: "1px solid rgba(239,68,68,0.15)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>💻</div>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "#ef4444" }}>Path A: Stay in CS</h3>
          </div>

          <div style={{ padding: "8px 20px 20px" }}>
            {csPath.map((step, i) => (
              <motion.div
                key={step.age}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                style={{
                  display: "flex",
                  gap: 14,
                  padding: "14px 0",
                  borderBottom: i < csPath.length - 1 ? "1px solid rgba(239,68,68,0.08)" : "none",
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "rgba(239,68,68,0.1)",
                  border: `1px solid rgba(239,68,68,0.2)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: step.color,
                  flexShrink: 0,
                }}>
                  {step.age}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#ccc", marginBottom: 3 }}>{step.title}</div>
                  <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{
            padding: "16px 24px",
            background: "rgba(239,68,68,0.06)",
            borderTop: "1px solid rgba(239,68,68,0.12)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#ef4444" }}>At 26: Maybe $70K</div>
            <div style={{ fontSize: 12, color: "#555", marginTop: 4 }}>High risk. Market dependent. AI replacing junior devs.</div>
          </div>
        </motion.div>

        {/* Trade Path */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#081000",
            border: "1px solid rgba(255,215,0,0.15)",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 0 30px rgba(255,215,0,0.03)",
          }}
        >
          <div style={{
            padding: "18px 24px",
            background: "linear-gradient(135deg, #141400, #081000)",
            borderBottom: "1px solid rgba(255,215,0,0.1)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>⚡</div>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "#FFD700" }}>Path B: Become an Electrician</h3>
          </div>

          <div style={{ padding: "8px 20px 20px" }}>
            {tradePath.map((step, i) => (
              <motion.div
                key={step.age}
                initial={{ opacity: 0, x: 10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                style={{
                  display: "flex",
                  gap: 14,
                  padding: "14px 0",
                  borderBottom: i < tradePath.length - 1 ? "1px solid rgba(255,215,0,0.06)" : "none",
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: i === tradePath.length - 1 ? "rgba(255,215,0,0.15)" : "rgba(34,197,94,0.1)",
                  border: `1px solid ${i === tradePath.length - 1 ? "rgba(255,215,0,0.3)" : "rgba(34,197,94,0.2)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: step.color,
                  flexShrink: 0,
                }}>
                  {step.age}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: i === tradePath.length - 1 ? "#FFD700" : "#ccc", marginBottom: 3 }}>{step.title}</div>
                  <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{
            padding: "16px 24px",
            background: "rgba(255,215,0,0.06)",
            borderTop: "1px solid rgba(255,215,0,0.12)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#FFD700" }}>At 26: $100K+ Journeyman</div>
            <div style={{ fontSize: 12, color: "#555", marginTop: 4 }}>Guaranteed progression. Union contract. Pension building. AI-proof.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
