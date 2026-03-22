"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const WIKI = "https://oldschool.runescape.wiki/images";

const currentStats = [
  { name: "Work Ethic", icon: `${WIKI}/Strength_icon.png`, level: 99 },
  { name: "Consistency", icon: `${WIKI}/Defence_icon.png`, level: 99 },
  { name: "Grind Stamina", icon: `${WIKI}/Hitpoints_icon.png`, level: 99 },
  { name: "Coding Skills", icon: `${WIKI}/Magic_icon.png`, level: 18 },
  { name: "Trade Skills", icon: `${WIKI}/Smithing_icon.png`, level: 1 },
  { name: "Earning Power", icon: `${WIKI}/Coins_10000.png`, level: 12 },
  { name: "Tech Hybrid", icon: `${WIKI}/Runecraft_icon.png`, level: 45 },
];

const futureStats = [
  { name: "Work Ethic", icon: `${WIKI}/Strength_icon.png`, level: 99 },
  { name: "Consistency", icon: `${WIKI}/Defence_icon.png`, level: 99 },
  { name: "Grind Stamina", icon: `${WIKI}/Hitpoints_icon.png`, level: 99 },
  { name: "Coding Skills", icon: `${WIKI}/Magic_icon.png`, level: 18 },
  { name: "Trade Skills", icon: `${WIKI}/Smithing_icon.png`, level: 99 },
  { name: "Earning Power", icon: `${WIKI}/Coins_10000.png`, level: 87 },
  { name: "Tech Hybrid", icon: `${WIKI}/Runecraft_icon.png`, level: 45 },
];

function StatRow({ stat, inView, delay }: { stat: typeof currentStats[0]; inView: boolean; delay: number }) {
  const isMaxed = stat.level >= 99;
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.3, delay }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 8px",
        background: isMaxed ? "rgba(255,204,68,0.06)" : "transparent",
        borderRadius: 2,
        marginBottom: 4,
      }}
    >
      <Image
        src={stat.icon}
        alt={stat.name}
        width={18}
        height={18}
        unoptimized
        style={{ imageRendering: "pixelated" }}
      />
      <span style={{
        fontFamily: "var(--font-osrs), monospace",
        fontSize: 7,
        color: "#c8a96e",
        flex: 1,
      }}>
        {stat.name}
      </span>
      <span style={{
        fontFamily: "var(--font-osrs), monospace",
        fontSize: 9,
        color: isMaxed ? "#ffcc44" : "#c8a96e",
        textShadow: isMaxed ? "0 0 6px rgba(255,204,68,0.5)" : "none",
      }}>
        {stat.level}
      </span>
    </motion.div>
  );
}

export default function CharacterSheet() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }} ref={ref}>
      {/* Section Header Panel */}
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
          <Image src={`${WIKI}/Combat_icon.png`} alt="Combat" width={20} height={20} unoptimized style={{ imageRendering: "pixelated" }} />
          <span style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: 10,
            color: "#ffcc44",
            letterSpacing: 1,
          }}>
            Character Stats
          </span>
        </div>
        <div style={{
          padding: "12px 16px",
          background: "#2e1f0e",
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: 14,
            color: "#c8a96e",
            lineHeight: 1.6,
          }}>
            Every player has a build. This is yours. Compare your current stats to your potential.
          </p>
        </div>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 16,
      }}>
        {/* Current Build Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
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
            padding: "6px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <Image src={`${WIKI}/Skills_icon.png`} alt="Skills" width={16} height={16} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 8,
              color: "#ffcc44",
            }}>
              Current Build: Circle K Cashier
            </span>
          </div>

          <div style={{ padding: "12px", background: "#2e1f0e" }}>
            {/* Character Portrait */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 12,
            }}>
              <div style={{
                background: "#3d2b1f",
                border: "2px solid #8b6914",
                borderRadius: 2,
                padding: 4,
                textAlign: "center",
              }}>
                <div style={{ width: 80, height: 80, overflow: "hidden", position: "relative" }}>
                  <Image
                    src="/shayaan.jpg"
                    alt="Shayaan"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "45% 30%",
                      imageRendering: "pixelated",
                      transform: "scale(1.6)",
                      transformOrigin: "45% 30%",
                    }}
                  />
                </div>
                <div style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 7,
                  color: "#ffcc44",
                  marginTop: 4,
                }}>
                  Shayaan
                </div>
                <div style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 7,
                  color: "#ffcc44",
                }}>
                  Total Level: 1
                </div>
                <div style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 7,
                  color: "#ffcc44",
                  maxWidth: 100,
                  lineHeight: 1.4,
                  marginTop: 2,
                }}>
                  Examine: A young adventurer with max Work Ethic. Currently employed at Circle K.
                </div>
              </div>
            </div>

            {/* Warning Box */}
            <div style={{
              background: "#1a0f05",
              border: "1px solid #cc3333",
              borderRadius: 2,
              padding: "8px 10px",
              marginBottom: 12,
            }}>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 6,
                color: "#cc3333",
                lineHeight: 1.8,
              }}>
                Warning: Current path leads to CS grad competing against 10,000 other CS grads
              </div>
            </div>

            {/* Stats */}
            {currentStats.map((stat, i) => (
              <StatRow key={stat.name} stat={stat} inView={inView} delay={0.3 + i * 0.05} />
            ))}

            {/* Special Trait */}
            <div style={{
              marginTop: 12,
              padding: "8px 10px",
              background: "#1a0f05",
              border: "1px solid #3d2b1f",
              borderRadius: 2,
            }}>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 6,
                color: "#8b6914",
                marginBottom: 4,
              }}>
                Special Trait:
              </div>
              <div style={{
                fontFamily: "Georgia, serif",
                fontSize: 11,
                color: "#c8a96e",
                lineHeight: 1.5,
              }}>
                &quot;The Grinder&quot; - Earns 2x XP from repetitive tasks. Immune to burnout from physical labor. Never quits.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Build Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
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
            padding: "6px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <Image src={`${WIKI}/Max_cape.png`} alt="Max" width={16} height={16} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 8,
              color: "#ffcc44",
            }}>
              Proposed Build: IBEW Journeyman
            </span>
          </div>

          <div style={{ padding: "12px", background: "#2e1f0e" }}>
            {/* Success Box */}
            <div style={{
              background: "#1a0f05",
              border: "1px solid #4caf50",
              borderRadius: 2,
              padding: "8px 10px",
              marginBottom: 12,
            }}>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 6,
                color: "#4caf50",
                lineHeight: 1.8,
              }}>
                This build rewards your ACTUAL stats - grind XP + work ethic + consistency = auto-win
              </div>
            </div>

            {/* Stats */}
            {futureStats.map((stat, i) => (
              <StatRow key={stat.name + "-future"} stat={stat} inView={inView} delay={0.4 + i * 0.05} />
            ))}

            {/* Special Trait */}
            <div style={{
              marginTop: 12,
              padding: "8px 10px",
              background: "#1a0f05",
              border: "1px solid rgba(255,204,68,0.3)",
              borderRadius: 2,
            }}>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 6,
                color: "#ffcc44",
                marginBottom: 4,
              }}>
                Rare Trait Unlocked:
              </div>
              <div style={{
                fontFamily: "Georgia, serif",
                fontSize: 11,
                color: "#c8a96e",
                lineHeight: 1.5,
              }}>
                &quot;Tech-Trade Hybrid&quot; - One of only ~3% of electricians with CS knowledge. Value multiplier: 2.5x in industrial/automation roles.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Insight Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          marginTop: 16,
          background: "#3d2b1f",
          border: "2px solid #8b6914",
          borderRadius: 2,
          padding: "14px 18px",
          boxShadow: "0 0 0 1px #2a1f0e, inset 0 1px 0 rgba(200,169,110,0.1)",
        }}
      >
        <div style={{
          fontFamily: "Georgia, serif",
          fontSize: 14,
          color: "#c8a96e",
          textAlign: "center",
          lineHeight: 1.7,
        }}>
          <span style={{ color: "#ffcc44", fontWeight: 700 }}>Key insight:</span> The electrician path is the only career where your actual max-level stats - work ethic, consistency, grind - are exactly what determine success. CS rewards stats you don&apos;t have. Trades reward stats you already have maxed out.
        </div>
      </motion.div>
    </section>
  );
}
