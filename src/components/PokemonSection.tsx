"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PokemonSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{
      background: "linear-gradient(180deg, #0D0D0D, #00050a, #0D0D0D)",
      borderTop: "1px solid #252525",
      borderBottom: "1px solid #252525",
      padding: "70px 20px",
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 44 }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#3b82f6", marginBottom: 8 }}>
            Type Matchup
          </div>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, marginBottom: 8 }}>
            You Have a <span style={{ color: "#FFD700" }}>Type Advantage</span> 🔥
          </h2>
          <p style={{ color: "#777", fontSize: 15 }}>
            In Pokémon, rare type combinations are the most powerful. You&apos;re a rare build.
          </p>
        </motion.div>

        {/* Type battle card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#0c0c14",
            border: "1px solid #1a1a2a",
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 20,
          }}
        >
          <div style={{
            background: "linear-gradient(135deg, #0a0010, #0c0c14)",
            padding: "16px 24px",
            borderBottom: "1px solid #1a1a2a",
            textAlign: "center",
          }}>
            <span style={{ fontFamily: "monospace", fontSize: 13, color: "#aaa" }}>
              A wild job market appeared! Shayaan used TYPE ADVANTAGE!
            </span>
          </div>

          <div style={{ padding: "28px 24px" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              marginBottom: 24,
            }}>
              {[
                { type: "⚡ Electric", trait: "Trade Skills", desc: "Can wire buildings, read blueprints, run conduit. Physical mastery that takes years to learn." },
                { type: "🧠 Psychic", trait: "Tech Knowledge", desc: "CS background from ASU. Understands software, automation, PLCs, smart building systems." },
                { type: "🌍 Ground", trait: "Bangladeshi-American", desc: "Family-oriented. Understands hard work from immigrant values. Never quits." },
                { type: "💧 Water", trait: "Grinder Stamina", desc: "Plays RuneScape. Knows how to put in hours for long-term gains without burning out." },
              ].map((t) => (
                <div key={t.type} style={{
                  background: "#080810",
                  border: "1px solid #1a1a2a",
                  borderRadius: 10,
                  padding: "16px",
                }}>
                  <div style={{ fontFamily: "monospace", fontSize: 13, color: "#3b82f6", marginBottom: 6, fontWeight: 700 }}>{t.type}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#ccc", marginBottom: 6 }}>{t.trait}</div>
                  <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>{t.desc}</div>
                </div>
              ))}
            </div>

            <div style={{
              background: "rgba(255,215,0,0.06)",
              border: "1px solid rgba(255,215,0,0.2)",
              borderRadius: 10,
              padding: "18px 20px",
              textAlign: "center",
            }}>
              <div style={{ fontFamily: "monospace", fontSize: 14, color: "#FFD700", fontWeight: 700, marginBottom: 8 }}>
                ⚡ SUPER EFFECTIVE!
              </div>
              <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.7 }}>
                Less than 3% of electricians have any CS or programming knowledge.
                In a world being wired for automation — smart buildings, chip fabs, data centers —
                you would be <strong style={{ color: "#FFD700" }}>irreplaceable</strong>.
                That&apos;s not just an electrician. That&apos;s a $120K+ industrial automation specialist.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}
        >
          {[
            { title: "Regular Electrician", salary: "$45–55/hr", note: "Journeyman. Great career. Solid life." },
            { title: "Tech-Hybrid Electrician", salary: "$60–80/hr", note: "You. Industrial automation. PLC systems. Chip fab infrastructure." },
            { title: "Electrical Engineer (CS grad)", salary: "$40/hr entry level", note: "Needs a 4-year degree, job hunting, competition with hundreds." },
          ].map((item, i) => (
            <div key={i} style={{
              background: i === 1 ? "linear-gradient(135deg, #0f0c00, #0c0c14)" : "#141414",
              border: i === 1 ? "1px solid rgba(255,215,0,0.25)" : "1px solid #252525",
              borderRadius: 12,
              padding: "18px 20px",
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: i === 1 ? "#FFD700" : "#ccc", marginBottom: 6 }}>{item.title}</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: i === 1 ? "#FFD700" : "#FF6B00", marginBottom: 6 }}>{item.salary}</div>
              <div style={{ fontSize: 12, color: "#555" }}>{item.note}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
