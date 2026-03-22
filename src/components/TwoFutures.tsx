"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const WIKI = "https://oldschool.runescape.wiki/images";

const csPath = [
  { age: 21, title: "Graduating ASU", desc: "CS degree in hand. No real coding experience. Resume looks like everyone else's.", color: "#c8a96e" },
  { age: 22, title: "The Job Hunt Begins", desc: "Applying everywhere. LinkedIn, Indeed, AngelList. Getting auto-rejected by ATS systems. Sound familiar? It happened to Shakib too.", color: "#cc3333" },
  { age: 23, title: "Still Applying...", desc: "Maybe some interviews. Competing against Stanford grads and people with 3 internships. AI is replacing junior dev roles.", color: "#cc3333" },
  { age: 24, title: "Entry-Level Job (Maybe)", desc: "If lucky, $55-65K. Angular or React. Imposter syndrome. Feeling behind peers who started earlier.", color: "#c8a96e" },
  { age: 25, title: "Grinding Through It", desc: "Still entry-level. Still learning things you should have learned in school. Student debt if any.", color: "#c8a96e" },
  { age: 26, title: "Mid-Junior Developer", desc: "$70-80K if things went well. But the market is volatile. Layoffs happen constantly. Shakib can tell you.", color: "#c8a96e" },
];

const tradePath = [
  { age: 21, title: "Start as Electrician Helper", desc: "Apply this week. $18-20/hr from day one. Learning the trade. Getting paid to learn.", color: "#4caf50" },
  { age: 22, title: "Year 1 Apprentice - IBEW", desc: "$20/hr + full health insurance + pension contributions. Learning conduit, basic wiring, safety.", color: "#4caf50" },
  { age: 23, title: "Year 2 Apprentice", desc: "$24/hr. Residential wiring, panels, blueprints. Real skills on your resume. Zero debt.", color: "#4caf50" },
  { age: 24, title: "Year 3 Apprentice", desc: "$29/hr. Commercial work. 3-phase power. Working on real buildings. TSMC and Intel hiring.", color: "#ffcc44" },
  { age: 25, title: "Year 4 Apprentice", desc: "$34/hr. Industrial installations. Transformers, switchgear. You're the guy they call for the hard stuff.", color: "#ffcc44" },
  { age: 26, title: "JOURNEYMAN WIREMAN", desc: "$45-55/hr. $100K+/year. Union pension. Health insurance. Can work anywhere in the country. MAX LEVEL.", color: "#ffcc44" },
];

export default function TwoFutures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "60px 20px", maxWidth: 960, margin: "0 auto" }} ref={ref}>
      {/* Section Header - Choose Your Path Style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          background: "#3d2b1f",
          border: "2px solid #8b6914",
          borderRadius: 2,
          marginBottom: 20,
          boxShadow: "0 0 0 1px #2a1f0e, inset 0 1px 0 rgba(200,169,110,0.1)",
        }}
      >
        <div style={{
          background: "linear-gradient(180deg, #5a3a1a, #3d2b1f)",
          borderBottom: "1px solid #8b6914",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}>
          <Image src={`${WIKI}/Quest_point_icon.png`} alt="Quest" width={18} height={18} unoptimized style={{ imageRendering: "pixelated" }} />
          <span style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: 10,
            color: "#ffcc44",
            letterSpacing: 1,
          }}>
            Choose Your Path
          </span>
          <Image src={`${WIKI}/Quest_point_icon.png`} alt="Quest" width={18} height={18} unoptimized style={{ imageRendering: "pixelated" }} />
        </div>
        <div style={{ padding: "14px 18px", background: "#2e1f0e", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: "clamp(10px, 2vw, 14px)",
            color: "#ffcc44",
            marginBottom: 10,
          }}>
            Age 21 - 26: Two Futures
          </h2>
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: 14,
            color: "#c8a96e",
            lineHeight: 1.6,
          }}>
            Same person. Same 5 years. Completely different outcomes.
          </p>
        </div>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        {/* CS Path Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: "#3d2b1f",
            border: "2px solid #8b6914",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 0 0 1px #2a1f0e, 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <div style={{
            background: "linear-gradient(180deg, #5a3a1a, #3d2b1f)",
            borderBottom: "1px solid #8b6914",
            padding: "10px 14px",
            textAlign: "center",
          }}>
            <Image src={`${WIKI}/Magic_icon.png`} alt="CS" width={20} height={20} unoptimized style={{ imageRendering: "pixelated", marginBottom: 6 }} />
            <div style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 8,
              color: "#cc3333",
            }}>
              Path A: Stay in CS (Hard Mode)
            </div>
          </div>

          <div style={{ padding: "10px 14px", background: "#2e1f0e" }}>
            {csPath.map((step, i) => (
              <motion.div
                key={step.age}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                style={{
                  display: "flex",
                  gap: 10,
                  padding: "10px 0",
                  borderBottom: i < csPath.length - 1 ? "1px solid #3d2b1f" : "none",
                }}
              >
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: 2,
                  background: "#1a0f05",
                  border: "1px solid #3d2b1f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 8,
                  color: step.color,
                  flexShrink: 0,
                }}>
                  {step.age}
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 7,
                    color: step.color,
                    marginBottom: 4,
                  }}>
                    {step.title}
                  </div>
                  <div style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 10,
                    color: "#8b6914",
                    lineHeight: 1.5,
                  }}>
                    {step.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Summary */}
          <div style={{
            padding: "12px 14px",
            background: "#1a0f05",
            borderTop: "1px solid #3d2b1f",
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 10,
              color: "#cc3333",
              marginBottom: 4,
            }}>
              At 26: Maybe $70K
            </div>
            <div style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 6,
              color: "#8b6914",
            }}>
              High risk. Market dependent. AI replacing junior devs.
            </div>
          </div>
        </motion.div>

        {/* Trade Path Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#3d2b1f",
            border: "2px solid #8b6914",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 0 0 1px #2a1f0e, 0 4px 20px rgba(0,0,0,0.6), 0 0 30px rgba(255,204,68,0.05)",
          }}
        >
          <div style={{
            background: "linear-gradient(180deg, #5a3a1a, #3d2b1f)",
            borderBottom: "1px solid #8b6914",
            padding: "10px 14px",
            textAlign: "center",
          }}>
            <Image src={`${WIKI}/Construction_icon.png`} alt="Trade" width={20} height={20} unoptimized style={{ imageRendering: "pixelated", marginBottom: 6 }} />
            <div style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 8,
              color: "#ffcc44",
            }}>
              Path B: Become an Electrician (Normal Mode + OP Rewards)
            </div>
          </div>

          <div style={{ padding: "10px 14px", background: "#2e1f0e" }}>
            {tradePath.map((step, i) => (
              <motion.div
                key={step.age}
                initial={{ opacity: 0, x: 10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                style={{
                  display: "flex",
                  gap: 10,
                  padding: "10px 0",
                  borderBottom: i < tradePath.length - 1 ? "1px solid #3d2b1f" : "none",
                }}
              >
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: 2,
                  background: i === tradePath.length - 1 ? "rgba(255,204,68,0.15)" : "#1a0f05",
                  border: i === tradePath.length - 1 ? "1px solid rgba(255,204,68,0.4)" : "1px solid #3d2b1f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 8,
                  color: step.color,
                  flexShrink: 0,
                }}>
                  {step.age}
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 7,
                    color: step.color,
                    marginBottom: 4,
                  }}>
                    {step.title}
                  </div>
                  <div style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 10,
                    color: "#8b6914",
                    lineHeight: 1.5,
                  }}>
                    {step.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Summary */}
          <div style={{
            padding: "12px 14px",
            background: "#1a0f05",
            borderTop: "1px solid rgba(255,204,68,0.2)",
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 10,
              color: "#ffcc44",
              marginBottom: 4,
            }}>
              At 26: $100K+ Journeyman
            </div>
            <div style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 6,
              color: "#4caf50",
            }}>
              Guaranteed progression. Union contract. Pension building. AI-proof.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
