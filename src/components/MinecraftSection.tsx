"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const WIKI = "https://oldschool.runescape.wiki/images";

export default function MinecraftSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }} ref={ref}>
      {/* Section Header - Construction Skill Style */}
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
          <Image src={`${WIKI}/Construction_icon.png`} alt="Construction" width={20} height={20} unoptimized style={{ imageRendering: "pixelated" }} />
          <span style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: 10,
            color: "#ffcc44",
            letterSpacing: 1,
          }}>
            Construction
          </span>
        </div>
        <div style={{ padding: "14px 18px", background: "#2e1f0e", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: "clamp(14px, 2.5vw, 20px)",
            color: "#ffcc44",
            marginBottom: 10,
          }}>
            You Already Build Worlds
          </h2>
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: 14,
            color: "#c8a96e",
            lineHeight: 1.6,
          }}>
            You&apos;ve put hundreds of hours into Minecraft. You already know what it feels like to build something and step back and say - I made that.
          </p>
        </div>
      </motion.div>

      {/* Training Methods Table */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {/* Minecraft Training */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
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
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <Image src={`${WIKI}/Crafting_icon.png`} alt="Crafting" width={16} height={16} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 9,
              color: "#c8a96e",
            }}>
              Training Method: Minecraft
            </span>
          </div>

          <div style={{ padding: "14px", background: "#2e1f0e" }}>
            {/* Training table */}
            <div style={{
              background: "#1a0f05",
              border: "1px solid #3d2b1f",
              borderRadius: 2,
              overflow: "hidden",
            }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderBottom: "1px solid #3d2b1f",
              }}>
                <div style={{
                  padding: "6px 10px",
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 8,
                  color: "#8b6914",
                  borderRight: "1px solid #3d2b1f",
                }}>
                  Method
                </div>
                <div style={{
                  padding: "6px 10px",
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 8,
                  color: "#8b6914",
                }}>
                  Result
                </div>
              </div>
              {[
                { method: "Build a house", result: "Takes hours" },
                { method: "Wire redstone", result: "Automation" },
                { method: "New world", result: "Blank map" },
                { method: "Server reset", result: "Gone forever" },
                { method: "GP/hr", result: "$0" },
              ].map((row, i) => (
                <div key={row.method} style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderBottom: i < 4 ? "1px solid #3d2b1f" : "none",
                }}>
                  <div style={{
                    padding: "8px 10px",
                    fontFamily: "Georgia, serif",
                    fontSize: 13,
                    color: "#c8a96e",
                    borderRight: "1px solid #3d2b1f",
                  }}>
                    {row.method}
                  </div>
                  <div style={{
                    padding: "8px 10px",
                    fontFamily: "Georgia, serif",
                    fontSize: 13,
                    color: "#8b6914",
                  }}>
                    {row.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Real Electrician Training */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
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
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <Image src={`${WIKI}/Construction_icon.png`} alt="Construction" width={16} height={16} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 9,
              color: "#ffcc44",
            }}>
              Training Method: IRL Electrician
            </span>
          </div>

          <div style={{ padding: "14px", background: "#2e1f0e" }}>
            {/* Training table */}
            <div style={{
              background: "#1a0f05",
              border: "1px solid rgba(255,204,68,0.3)",
              borderRadius: 2,
              overflow: "hidden",
            }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderBottom: "1px solid #3d2b1f",
              }}>
                <div style={{
                  padding: "6px 10px",
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 8,
                  color: "#8b6914",
                  borderRight: "1px solid #3d2b1f",
                }}>
                  Method
                </div>
                <div style={{
                  padding: "6px 10px",
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 8,
                  color: "#8b6914",
                }}>
                  Result
                </div>
              </div>
              {[
                { method: "Wire a building", result: "Takes weeks" },
                { method: "Wire PLCs", result: "Real automation" },
                { method: "New job site", result: "New map" },
                { method: "Project done", result: "PERMANENT" },
                { method: "GP/hr", result: "$20-55" },
              ].map((row, i) => (
                <div key={row.method} style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderBottom: i < 4 ? "1px solid #3d2b1f" : "none",
                }}>
                  <div style={{
                    padding: "8px 10px",
                    fontFamily: "Georgia, serif",
                    fontSize: 13,
                    color: "#c8a96e",
                    borderRight: "1px solid #3d2b1f",
                  }}>
                    {row.method}
                  </div>
                  <div style={{
                    padding: "8px 10px",
                    fontFamily: "Georgia, serif",
                    fontSize: 13,
                    color: row.result === "PERMANENT" || row.result === "$20-55" ? "#4caf50" : "#c8a96e",
                  }}>
                    {row.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Legacy Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          marginTop: 20,
          background: "#3d2b1f",
          border: "2px solid #8b6914",
          borderRadius: 2,
          padding: "16px 20px",
          textAlign: "center",
        }}
      >
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: 14,
          color: "#c8a96e",
          lineHeight: 1.8,
          fontStyle: "italic",
        }}>
          &quot;That hospital on Baseline Road? I wired that.&quot;<br />
          &quot;That data center in Chandler? I wired that.&quot;<br />
          &quot;That TSMC chip fab that makes the processors in your phone? <span style={{ color: "#4caf50" }}>I wired that.</span>&quot;
        </p>
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: 13,
          color: "#8b6914",
          marginTop: 12,
        }}>
          Permanence. Legacy. And they paid you for every hour of it.
        </p>
      </motion.div>
    </section>
  );
}
