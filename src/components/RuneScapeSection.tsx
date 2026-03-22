"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const levels = [
  { year: 1, levelRange: "1–20", pct: 40, hourly: "$19–22", task: "Learning fundamentals, conduit bending, safety protocols, basic wiring", xp: "0 – 302,288", badge: "Apprentice I" },
  { year: 2, levelRange: "21–40", pct: 50, hourly: "$24–27", task: "Residential wiring, circuit breakers, panel work, reading blueprints", xp: "302,288 – 1,210,421", badge: "Apprentice II" },
  { year: 3, levelRange: "41–60", pct: 60, hourly: "$29–33", task: "Commercial construction, 3-phase power, conduit runs, motor controls", xp: "1,210,421 – 4,053,000", badge: "Apprentice III" },
  { year: 4, levelRange: "61–80", pct: 70, hourly: "$34–38", task: "Industrial installations, transformers, switchgear, TSMC-level work", xp: "4,053,000 – 8,944,000", badge: "Apprentice IV" },
  { year: 5, levelRange: "81–99", pct: 100, hourly: "$45–55", task: "JOURNEYMAN WIREMAN — Max level unlocked. Leads crews. Names on buildings.", xp: "8,944,000 – 13,034,431", badge: "⚡ JOURNEYMAN (MAX)" },
];

function XPBar({ pct, inView, delay }: { pct: number; inView: boolean; delay: number }) {
  return (
    <div style={{ background: "#111", borderRadius: 4, height: 18, overflow: "hidden", position: "relative", border: "1px solid #2a2a2a" }}>
      <motion.div
        initial={{ width: "0%" }}
        animate={inView ? { width: `${pct}%` } : {}}
        transition={{ duration: 1.4, delay, ease: "easeOut" }}
        style={{
          height: "100%",
          background: pct >= 100 ? "linear-gradient(90deg, #4a2c00, #FF6B00, #FFD700)" : "linear-gradient(90deg, #4a1c00, #c45000)",
          boxShadow: pct >= 100 ? "0 0 12px rgba(255,215,0,0.6)" : "none",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {pct >= 100 && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 1.5, delay: delay + 1.4, repeat: Infinity, repeatDelay: 3 }}
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              width: "50%",
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

export default function RuneScapeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeLevel, setActiveLevel] = useState<number | null>(null);

  return (
    <section style={{
      background: "linear-gradient(180deg, #0D0D0D, #0a0800, #0D0D0D)",
      padding: "70px 20px",
      borderTop: "1px solid #252525",
      borderBottom: "1px solid #252525",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#FF6B00", marginBottom: 8 }}>
            The Core Mechanic
          </div>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 900, marginBottom: 12 }}>
            This Is Literally a{" "}
            <span style={{ color: "#FFD700" }}>Skill Grind</span>
          </h2>
          <p style={{ color: "#777", fontSize: 15, maxWidth: 580, margin: "0 auto" }}>
            You already know how XP systems work. The IBEW apprenticeship runs the exact same engine.
            Log the hours, the level-ups are automatic — written into the union contract.
          </p>
        </motion.div>

        {/* OSRS Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#0c0c0c",
            border: "2px solid #2a2000",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 0 40px rgba(255,107,0,0.08)",
          }}
        >
          {/* Panel header */}
          <div style={{
            background: "linear-gradient(180deg, #1a1200, #0e0e00)",
            borderBottom: "2px solid #2a2000",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            <span style={{ fontSize: 20 }}>⚡</span>
            <span style={{ fontFamily: "monospace", fontWeight: 700, color: "#FFD700", fontSize: 14 }}>
              Skills — Electrician
            </span>
            <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 12, color: "#888" }}>
              Total XP: 13,034,431
            </span>
          </div>

          {/* Skill description */}
          <div style={{
            padding: "16px 20px",
            borderBottom: "1px solid #1a1a00",
            background: "#0a0a00",
            fontFamily: "monospace",
            fontSize: 13,
            color: "#aaa",
            lineHeight: 1.7,
          }}>
            <span style={{ color: "#FFD700" }}>Electrician</span> is one of the most valuable skills in the Arizona job market.
            Unlike Intelligence-based skills, Electrician scales <span style={{ color: "#FF6B00" }}>purely with time logged and hours worked.</span>{" "}
            Players with high <span style={{ color: "#22c55e" }}>Work Ethic</span> and <span style={{ color: "#22c55e" }}>Consistency</span> stats
            gain maximum XP per session. <span style={{ color: "#FFD700" }}>Level 99</span> grants the coveted Journeyman Wireman title and
            unlocks access to the highest-paying construction sites in the state, including TSMC and Intel fab zones.
          </div>

          {/* Level bars */}
          <div style={{ padding: "24px 20px" }}>
            {levels.map((lvl, i) => (
              <motion.div
                key={lvl.year}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                onClick={() => setActiveLevel(activeLevel === i ? null : i)}
                style={{
                  marginBottom: i < levels.length - 1 ? 20 : 0,
                  cursor: "pointer",
                  background: activeLevel === i ? "rgba(255,215,0,0.04)" : "transparent",
                  borderRadius: 8,
                  padding: "10px 8px",
                  transition: "background 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: lvl.pct >= 100 ? "#FFD700" : "#888",
                    minWidth: 52,
                    fontWeight: lvl.pct >= 100 ? 700 : 400,
                  }}>
                    {lvl.pct >= 100 ? "⚡ MAX" : `Lvl ${lvl.levelRange}`}
                  </span>
                  <div style={{ flex: 1 }}>
                    <XPBar pct={lvl.pct} inView={inView} delay={0.4 + i * 0.1} />
                  </div>
                  <span style={{
                    fontFamily: "monospace",
                    fontSize: 12,
                    color: lvl.pct >= 100 ? "#FFD700" : "#FF6B00",
                    minWidth: 80,
                    textAlign: "right",
                    fontWeight: 700,
                  }}>
                    {lvl.hourly}/hr
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: 62 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 11, color: "#555" }}>
                    Year {lvl.year} — {lvl.badge}
                  </span>
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#333" }}>
                    {lvl.xp} XP
                  </span>
                </div>

                {/* Expanded details */}
                {activeLevel === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    style={{
                      marginTop: 10,
                      paddingLeft: 62,
                      paddingTop: 10,
                      borderTop: "1px solid #1a1a00",
                    }}
                  >
                    <p style={{ fontFamily: "monospace", fontSize: 12, color: "#aaa", lineHeight: 1.6 }}>
                      🛠️ {lvl.task}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Max cape unlock */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{
              background: "linear-gradient(135deg, #1a1200, #0f0a00)",
              borderTop: "2px solid rgba(255,215,0,0.2)",
              padding: "20px 24px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 8 }}>🏆</div>
            <div style={{ fontFamily: "monospace", fontWeight: 700, color: "#FFD700", fontSize: 15, marginBottom: 6 }}>
              MAX CAPE UNLOCKED: Journeyman Wireman
            </div>
            <div style={{ fontFamily: "monospace", fontSize: 12, color: "#888" }}>
              Passive income: $45–55/hr forever. Union pension accruing. Health insurance active.
              Arizona TSMC/Intel sites: ACCESS GRANTED.
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            textAlign: "center",
            marginTop: 28,
            padding: "18px 24px",
            background: "rgba(255,107,0,0.06)",
            border: "1px solid rgba(255,107,0,0.15)",
            borderRadius: 12,
            fontSize: 15,
            color: "#aaa",
          }}
        >
          <span style={{ color: "#FF6B00", fontWeight: 700 }}>The difference from RuneScape?</span>{" "}
          Every level-up also comes with an automatic pay raise — written into the union contract.
          You literally cannot be denied it. Show up. Log hours. Level up. Get paid more. Repeat.
        </motion.div>
      </div>
    </section>
  );
}
