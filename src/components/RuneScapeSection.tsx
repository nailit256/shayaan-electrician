"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const WIKI = "https://oldschool.runescape.wiki/images";

const allSkills = [
  { name: "Attack",      icon: `${WIKI}/Attack_icon.png`,      level: 70 },
  { name: "Strength",    icon: `${WIKI}/Strength_icon.png`,    level: 80 },
  { name: "Defence",     icon: `${WIKI}/Defence_icon.png`,     level: 70 },
  { name: "Ranged",      icon: `${WIKI}/Ranged_icon.png`,      level: 60 },
  { name: "Prayer",      icon: `${WIKI}/Prayer_icon.png`,      level: 43 },
  { name: "Magic",       icon: `${WIKI}/Magic_icon.png`,       level: 55 },
  { name: "Runecraft",   icon: `${WIKI}/Runecraft_icon.png`,   level: 44 },
  { name: "Construction",icon: `${WIKI}/Construction_icon.png`,level: 1, highlight: true },
  { name: "Hitpoints",   icon: `${WIKI}/Hitpoints_icon.png`,   level: 80 },
  { name: "Agility",     icon: `${WIKI}/Agility_icon.png`,     level: 50 },
  { name: "Herblore",    icon: `${WIKI}/Herblore_icon.png`,    level: 31 },
  { name: "Thieving",    icon: `${WIKI}/Thieving_icon.png`,    level: 55 },
  { name: "Crafting",    icon: `${WIKI}/Crafting_icon.png`,    level: 40 },
  { name: "Fletching",   icon: `${WIKI}/Fletching_icon.png`,   level: 60 },
  { name: "Slayer",      icon: `${WIKI}/Slayer_icon.png`,      level: 55 },
  { name: "Hunter",      icon: `${WIKI}/Hunter_icon.png`,      level: 9 },
  { name: "Mining",      icon: `${WIKI}/Mining_icon.png`,      level: 60 },
  { name: "Smithing",    icon: `${WIKI}/Smithing_icon.png`,    level: 40 },
  { name: "Fishing",     icon: `${WIKI}/Fishing_icon.png`,     level: 50 },
  { name: "Cooking",     icon: `${WIKI}/Cooking_icon.png`,     level: 60 },
  { name: "Firemaking",  icon: `${WIKI}/Firemaking_icon.png`,  level: 60 },
  { name: "Woodcutting", icon: `${WIKI}/Woodcutting_icon.png`, level: 60 },
  { name: "Farming",     icon: `${WIKI}/Farming_icon.png`,     level: 32 },
];

const apprenticeLevels = [
  {
    year: 1, levelRange: "1-20", pct: 40, hourly: "$19-22/hr",
    task: "Conduit bending, safety, basic wiring, tools. Circle K paid $13.50. This pays $20.",
    xp: "0 - 302,288",
  },
  {
    year: 2, levelRange: "21-40", pct: 50, hourly: "$24-27/hr",
    task: "Residential panels, circuit breakers, blueprints. You actually know stuff now.",
    xp: "302,288 - 1,210,421",
  },
  {
    year: 3, levelRange: "41-60", pct: 60, hourly: "$29-33/hr",
    task: "Commercial builds, 3-phase power, motor controls. TSMC-level work starts here.",
    xp: "1,210,421 - 4,053,000",
  },
  {
    year: 4, levelRange: "61-80", pct: 70, hourly: "$34-38/hr",
    task: "Industrial installations, transformers, switchgear. The jobs with prestige.",
    xp: "4,053,000 - 8,944,000",
  },
  {
    year: 5, levelRange: "81-99", pct: 100, hourly: "$45-55/hr",
    task: "JOURNEYMAN. Max Cape. Lead crews. $100K+ per year. Union pension. For life.",
    xp: "8,944,000 - 13,034,431",
  },
];

function OSRSSkillCell({ skill, inView }: { skill: typeof allSkills[0]; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: "4px",
        borderRadius: 2,
        background: skill.highlight ? "rgba(255,204,68,0.15)" : "transparent",
        border: skill.highlight ? "1px solid rgba(255,204,68,0.5)" : "1px solid transparent",
        position: "relative",
      }}
    >
      {skill.highlight && (
        <div style={{
          position: "absolute",
          top: -10,
          left: "50%",
          transform: "translateX(-50%)",
          background: "#ffcc44",
          color: "#1a0f05",
          fontSize: 6,
          fontFamily: "var(--font-osrs), monospace",
          fontWeight: 700,
          padding: "1px 4px",
          borderRadius: 1,
          whiteSpace: "nowrap",
        }}>
          YOU
        </div>
      )}
      <Image
        src={skill.icon}
        alt={skill.name}
        width={20}
        height={20}
        style={{ imageRendering: "pixelated" }}
        unoptimized
      />
      <span style={{
        fontSize: 8,
        fontFamily: "var(--font-osrs), monospace",
        color: skill.highlight ? "#ffcc44" : "#c8a96e",
        lineHeight: 1,
      }}>
        {skill.highlight ? "1" : skill.level}
      </span>
    </motion.div>
  );
}

export default function RuneScapeSection() {
  const ref = useRef(null);
  const panelRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const panelInView = useInView(panelRef, { once: true, margin: "-80px" });
  const [activeYear, setActiveYear] = useState<number | null>(null);

  return (
    <section style={{
      background: "#1a0d05",
      padding: "60px 20px",
      borderTop: "2px solid #8b6914",
      borderBottom: "2px solid #8b6914",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }} ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            background: "#3d2b1f",
            border: "2px solid #8b6914",
            borderRadius: 2,
            marginBottom: 24,
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
            <Image src={`${WIKI}/Skills_icon.png`} alt="Skills" width={20} height={20} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 10,
              color: "#ffcc44",
              letterSpacing: 1,
            }}>
              Skills Tab
            </span>
          </div>
          <div style={{ padding: "14px 18px", background: "#2e1f0e", textAlign: "center" }}>
            <h2 style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: "clamp(10px, 2vw, 14px)",
              color: "#ffcc44",
              marginBottom: 10,
            }}>
              This Is Literally a Skill Grind
            </h2>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: 14,
              color: "#c8a96e",
              lineHeight: 1.6,
            }}>
              You know this screen. You&apos;ve stared at it for hundreds of hours.
              The IBEW apprenticeship runs the exact same engine - log hours, level up automatically.
            </p>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, alignItems: "start" }}>
          {/* Skills Panel */}
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div style={{
              background: "#3d2b1f",
              border: "2px solid #8b6914",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 0 0 1px #2a1f0e, 0 8px 32px rgba(0,0,0,0.8)",
              maxWidth: 280,
              margin: "0 auto",
            }}>
              <div style={{
                background: "linear-gradient(180deg, #5a3a1a, #3d2b1f)",
                borderBottom: "1px solid #8b6914",
                padding: "6px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}>
                <Image src={`${WIKI}/Skills_icon.png`} alt="Skills" width={14} height={14} unoptimized style={{ imageRendering: "pixelated" }} />
                <span style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 8,
                  color: "#ffcc44",
                }}>
                  Skills
                </span>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
                padding: "6px",
                background: "#2e1f0e",
              }}>
                {allSkills.map((skill) => (
                  <OSRSSkillCell key={skill.name} skill={skill} inView={panelInView} />
                ))}
              </div>

              <div style={{
                background: "linear-gradient(180deg, #3d2b1f, #2e1f0e)",
                borderTop: "1px solid #5a3a1a",
                padding: "6px 10px",
                textAlign: "center",
              }}>
                <span style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 7,
                  color: "#ffcc44",
                }}>
                  Total level: 1,257
                </span>
              </div>
            </div>

            {/* Caption */}
            <div style={{
              marginTop: 12,
              padding: "10px 14px",
              background: "#3d2b1f",
              border: "2px solid #8b6914",
              borderRadius: 2,
              maxWidth: 280,
              margin: "12px auto 0",
            }}>
              <p style={{
                fontFamily: "Georgia, serif",
                fontSize: 12,
                color: "#c8a96e",
                textAlign: "center",
                lineHeight: 1.6,
              }}>
                <span style={{ color: "#ffcc44" }}>Construction = Lvl 1.</span> That&apos;s where you start. But every year you show up, the level goes up automatically. It&apos;s written into the union contract.
              </p>
            </div>
          </motion.div>

          {/* XP Progress Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{
              background: "#3d2b1f",
              border: "2px solid #8b6914",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 0 0 1px #2a1f0e, 0 8px 32px rgba(0,0,0,0.8)",
            }}>
              <div style={{
                background: "linear-gradient(180deg, #5a3a1a, #3d2b1f)",
                borderBottom: "1px solid #8b6914",
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}>
                <Image src={`${WIKI}/Construction_icon.png`} alt="Construction" width={14} height={14} unoptimized style={{ imageRendering: "pixelated" }} />
                <span style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 7,
                  color: "#ffcc44",
                }}>
                  Electrician - The 5-Year Grind
                </span>
              </div>

              <div style={{ padding: "12px", background: "#2e1f0e" }}>
                {/* Skill description */}
                <div style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 11,
                  color: "#c8a96e",
                  lineHeight: 1.7,
                  marginBottom: 14,
                  padding: "8px 10px",
                  background: "#1a0f05",
                  border: "1px solid #3d2b1f",
                  borderRadius: 2,
                }}>
                  The Electrician skill scales with hours logged, not raw intelligence. High Work Ethic &amp; Consistency stats grant double XP. Level 99 grants the Journeyman title and unlocks the highest-paying job sites in AZ.
                </div>

                {/* Level bars */}
                {apprenticeLevels.map((lvl, i) => (
                  <div
                    key={lvl.year}
                    onClick={() => setActiveYear(activeYear === i ? null : i)}
                    style={{
                      marginBottom: 8,
                      cursor: "pointer",
                      padding: "6px 8px",
                      borderRadius: 2,
                      background: activeYear === i ? "rgba(255,204,68,0.08)" : "transparent",
                      border: activeYear === i ? "1px solid rgba(139,105,20,0.5)" : "1px solid transparent",
                      transition: "all 0.2s",
                    }}
                  >
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 4,
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Image src={`${WIKI}/Construction_icon.png`} alt="" width={12} height={12} unoptimized style={{ imageRendering: "pixelated" }} />
                        <span style={{
                          fontFamily: "var(--font-osrs), monospace",
                          fontSize: 6,
                          color: lvl.pct >= 100 ? "#ffcc44" : "#c8a96e",
                        }}>
                          Year {lvl.year} Lvl {lvl.levelRange}
                        </span>
                      </div>
                      <span style={{
                        fontFamily: "var(--font-osrs), monospace",
                        fontSize: 6,
                        color: lvl.pct >= 100 ? "#ffcc44" : "#4caf50",
                      }}>
                        {lvl.hourly}
                      </span>
                    </div>

                    {/* XP bar */}
                    <div style={{
                      background: "#1a0f05",
                      border: "1px solid #3d2b1f",
                      borderRadius: 1,
                      height: 12,
                      overflow: "hidden",
                      position: "relative",
                    }}>
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={inView ? { width: `${lvl.pct}%` } : {}}
                        transition={{ duration: 1.4, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                        style={{
                          height: "100%",
                          background: lvl.pct >= 100
                            ? "linear-gradient(90deg, #2d6b0e, #4caf50, #a3e635)"
                            : "linear-gradient(90deg, #1a4a07, #2d6b0e, #4caf50)",
                          borderRadius: 1,
                          boxShadow: lvl.pct >= 100 ? "0 0 8px rgba(76,175,80,0.8)" : "none",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        {lvl.pct >= 100 && (
                          <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "250%" }}
                            transition={{ duration: 2, delay: 2.5, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
                            style={{
                              position: "absolute",
                              inset: 0,
                              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                              width: "40%",
                            }}
                          />
                        )}
                      </motion.div>
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-osrs), monospace",
                        fontSize: 5,
                        color: "rgba(255,255,255,0.6)",
                        pointerEvents: "none",
                      }}>
                        {lvl.xp} xp
                      </div>
                    </div>

                    {/* Expanded details */}
                    {activeYear === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.25 }}
                        style={{
                          marginTop: 8,
                          fontFamily: "Georgia, serif",
                          fontSize: 11,
                          color: "#c8a96e",
                          lineHeight: 1.6,
                          paddingTop: 8,
                          borderTop: "1px solid #3d2b1f",
                        }}
                      >
                        {lvl.task}
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Max cape unlock */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  style={{
                    marginTop: 12,
                    padding: "10px 12px",
                    background: "#1a0f05",
                    border: "1px solid rgba(255,204,68,0.4)",
                    borderRadius: 2,
                    textAlign: "center",
                  }}
                >
                  <div style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 7,
                    color: "#ffcc44",
                    lineHeight: 2,
                  }}>
                    Congratulations! You have achieved<br />
                    level 99 in Electrician!<br />
                    <span style={{ color: "#4caf50" }}>
                      Journeyman Wireman title unlocked.
                    </span>
                  </div>
                </motion.div>
              </div>

              <div style={{
                background: "linear-gradient(180deg, #3d2b1f, #2e1f0e)",
                borderTop: "1px solid #5a3a1a",
                padding: "6px 12px",
                textAlign: "center",
              }}>
                <span style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 6,
                  color: "#8b6914",
                }}>
                  Click each year to see what you unlock
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            marginTop: 24,
            background: "#3d2b1f",
            border: "2px solid #8b6914",
            borderRadius: 2,
            padding: "14px 18px",
            textAlign: "center",
          }}
        >
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: 14,
            color: "#c8a96e",
            lineHeight: 1.7,
          }}>
            <span style={{ color: "#ffcc44" }}>The difference from RuneScape?</span> Every level-up also increases your hourly wage - written into the union contract. You literally cannot be denied it. Show up. Log hours. Level up. Get paid more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
