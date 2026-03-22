"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const WIKI = "https://oldschool.runescape.wiki/images";

export default function PokemonSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{
      background: "#1a0d05",
      borderTop: "2px solid #8b6914",
      borderBottom: "2px solid #8b6914",
      padding: "60px 20px",
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }} ref={ref}>
        {/* Section Header - Skill Guide Style */}
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
            <Image src={`${WIKI}/Magic_icon.png`} alt="Magic" width={20} height={20} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 10,
              color: "#ffcc44",
              letterSpacing: 1,
            }}>
              Skill Guide
            </span>
          </div>
          <div style={{ padding: "14px 18px", background: "#2e1f0e", textAlign: "center" }}>
            <h2 style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: "clamp(14px, 2.5vw, 20px)",
              color: "#ffcc44",
              marginBottom: 10,
            }}>
              Rare Skill Combination Detected
            </h2>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: 14,
              color: "#c8a96e",
              lineHeight: 1.6,
            }}>
              In Pokemon, rare type combinations are the most powerful. You&apos;re a rare build.
            </p>
          </div>
        </motion.div>

        {/* Type Combination Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#3d2b1f",
            border: "2px solid #8b6914",
            borderRadius: 2,
            overflow: "hidden",
            marginBottom: 16,
            boxShadow: "0 0 0 1px #2a1f0e, 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          <div style={{
            background: "linear-gradient(180deg, #5a3a1a, #3d2b1f)",
            borderBottom: "1px solid #8b6914",
            padding: "8px 12px",
            textAlign: "center",
          }}>
            <span style={{
              fontFamily: "Georgia, serif",
              fontSize: 13,
              color: "#c8a96e",
            }}>
              A wild job market appeared! Shayaan used TYPE ADVANTAGE!
            </span>
          </div>

          <div style={{ padding: "16px", background: "#2e1f0e" }}>
            {/* Skill Icons Row */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              marginBottom: 20,
              padding: "12px",
              background: "#1a0f05",
              border: "1px solid #3d2b1f",
              borderRadius: 2,
            }}>
              <div style={{ textAlign: "center" }}>
                <Image src={`${WIKI}/Smithing_icon.png`} alt="Electric" width={32} height={32} unoptimized style={{ imageRendering: "pixelated" }} />
                <div style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 8,
                  color: "#ffcc44",
                  marginTop: 4,
                }}>
                  Electric
                </div>
              </div>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 10,
                color: "#8b6914",
              }}>
                +
              </div>
              <div style={{ textAlign: "center" }}>
                <Image src={`${WIKI}/Magic_icon.png`} alt="Psychic" width={32} height={32} unoptimized style={{ imageRendering: "pixelated" }} />
                <div style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 8,
                  color: "#a855f7",
                  marginTop: 4,
                }}>
                  Psychic
                </div>
              </div>
            </div>

            {/* Type Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 12,
              marginBottom: 16,
            }}>
              {[
                { icon: `${WIKI}/Smithing_icon.png`, type: "Electric", trait: "Trade Skills", desc: "Can wire buildings, read blueprints, run conduit. Physical mastery that takes years to learn." },
                { icon: `${WIKI}/Magic_icon.png`, type: "Psychic", trait: "Tech Knowledge", desc: "CS background from ASU. Understands software, automation, PLCs, smart building systems." },
                { icon: `${WIKI}/Mining_icon.png`, type: "Ground", trait: "Grinder Values", desc: "Family-oriented. Understands hard work from immigrant values. Never quits." },
                { icon: `${WIKI}/Fishing_icon.png`, type: "Water", trait: "Grind Stamina", desc: "Plays RuneScape. Knows how to put in hours for long-term gains without burning out." },
              ].map((t) => (
                <div key={t.type} style={{
                  background: "#1a0f05",
                  border: "1px solid #3d2b1f",
                  borderRadius: 2,
                  padding: "12px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <Image src={t.icon} alt={t.type} width={16} height={16} unoptimized style={{ imageRendering: "pixelated" }} />
                    <span style={{
                      fontFamily: "var(--font-osrs), monospace",
                      fontSize: 7,
                      color: "#ffcc44",
                    }}>
                      {t.type}
                    </span>
                  </div>
                  <div style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 7,
                    color: "#c8a96e",
                    marginBottom: 6,
                  }}>
                    {t.trait}
                  </div>
                  <div style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 14,
                    color: "#c8a96e",
                    lineHeight: 1.6,
                  }}>
                    {t.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Super Effective Box */}
            <div style={{
              background: "#1a0f05",
              border: "2px solid rgba(255,204,68,0.4)",
              borderRadius: 2,
              padding: "14px 16px",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 9,
                color: "#ffcc44",
                marginBottom: 10,
              }}>
                SUPER EFFECTIVE!
              </div>
              <p style={{
                fontFamily: "Georgia, serif",
                fontSize: 13,
                color: "#c8a96e",
                lineHeight: 1.7,
              }}>
                Less than 3% of electricians have any CS or programming knowledge.
                In a world being wired for automation - smart buildings, chip fabs, data centers -
                you would be <span style={{ color: "#ffcc44" }}>irreplaceable</span>.
                That&apos;s not just an electrician. That&apos;s a $120K+ industrial automation specialist.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Salary Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}
        >
          {[
            { title: "Regular Electrician", salary: "$45-55/hr", note: "Journeyman. Great career. Solid life.", highlight: false },
            { title: "Tech-Hybrid Electrician", salary: "$60-80/hr", note: "You. Industrial automation. PLC systems. Chip fab infrastructure.", highlight: true },
            { title: "CS Grad (Entry)", salary: "$40/hr entry", note: "Needs 4-year degree, job hunting, competing with hundreds.", highlight: false },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#3d2b1f",
              border: item.highlight ? "2px solid #ffcc44" : "2px solid #8b6914",
              borderRadius: 2,
              padding: "14px 16px",
              boxShadow: item.highlight ? "0 0 20px rgba(255,204,68,0.1)" : "none",
            }}>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 8,
                color: item.highlight ? "#ffcc44" : "#c8a96e",
                marginBottom: 6,
              }}>
                {item.title}
              </div>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 11,
                color: item.highlight ? "#ffcc44" : "#4caf50",
                marginBottom: 8,
              }}>
                {item.salary}
              </div>
              <div style={{
                fontFamily: "Georgia, serif",
                fontSize: 14,
                color: "#c8a96e",
                lineHeight: 1.5,
              }}>
                {item.note}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
