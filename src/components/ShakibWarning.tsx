"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const WIKI = "https://oldschool.runescape.wiki/images";

export default function ShakibWarning() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{
      background: "#1a0d05",
      borderTop: "2px solid #8b6914",
      borderBottom: "2px solid #8b6914",
      padding: "60px 20px",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }} ref={ref}>
        {/* Section Header - Quest Journal Style */}
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
            <Image src={`${WIKI}/Quest_point_icon.png`} alt="Quest" width={20} height={20} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 10,
              color: "#ffcc44",
              letterSpacing: 1,
            }}>
              Quest Journal
            </span>
          </div>
          <div style={{ padding: "14px 18px", background: "#2e1f0e", textAlign: "center" }}>
            <h2 style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: "clamp(14px, 2.5vw, 20px)",
              color: "#ffcc44",
              marginBottom: 10,
            }}>
              You Already Saw What Happens
            </h2>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: 14,
              color: "#c8a96e",
              lineHeight: 1.6,
            }}>
              Shakib&apos;s story is real data. You watched it happen.
            </p>
          </div>
        </motion.div>

        {/* Quest 1 - Failed Quest */}
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
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            <Image src={`${WIKI}/Skull.png`} alt="Failed" width={16} height={16} unoptimized style={{ imageRendering: "pixelated" }} />
            <div>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 8,
                color: "#cc3333",
                letterSpacing: 1,
              }}>
                QUEST: THE LONG JOB HUNT
              </div>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 9,
                color: "#cc3333",
              }}>
                COMPLETED - 2.5 Years Later
              </div>
            </div>
          </div>

          <div style={{ padding: "14px", background: "#2e1f0e" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 10,
              marginBottom: 16,
            }}>
              {[
                { label: "Player", value: "Shakib (your brother)" },
                { label: "Build", value: "CS Masters Degree" },
                { label: "Time to complete", value: "2.5 years of applications" },
                { label: "Rejection letters", value: "Hundreds" },
                { label: "Starting salary", value: "~$70-80K (after Masters)" },
              ].map((item) => (
                <div key={item.label} style={{
                  background: "#1a0f05",
                  borderRadius: 2,
                  padding: "8px 10px",
                  borderLeft: "2px solid #cc3333",
                }}>
                  <div style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 8,
                    color: "#8b6914",
                    marginBottom: 4,
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 14,
                    color: "#c8a96e",
                  }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: 13,
              color: "#c8a96e",
              lineHeight: 1.7,
              marginBottom: 14,
              padding: "10px 12px",
              background: "#1a0f05",
              border: "1px solid #3d2b1f",
              borderRadius: 2,
            }}>
              This is not a knock on Shakib. He is smart, he worked hard, he got there.
              But you watched him grind for <span style={{ color: "#cc3333" }}>2.5 years</span> - applications, phone screens,
              technical interviews, ghosted emails. A CS Masters and it still took that long.
              That is the CS market in 2025. Competitive doesn&apos;t even cover it.
            </div>

            <div style={{
              background: "#1a0f05",
              border: "1px solid #cc3333",
              borderRadius: 2,
              padding: "10px 12px",
            }}>
              <div style={{
                fontFamily: "Georgia, serif",
                fontSize: 14,
                color: "#cc3333",
                lineHeight: 1.6,
              }}>
                Warning: You are currently on the same quest. Same major. Same market. And you don&apos;t have a Masters.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quest 2 - Available Quest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: "#3d2b1f",
            border: "2px solid #8b6914",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 0 0 1px #2a1f0e, 0 4px 20px rgba(0,0,0,0.6), 0 0 30px rgba(76,175,80,0.05)",
          }}
        >
          <div style={{
            background: "linear-gradient(180deg, #5a3a1a, #3d2b1f)",
            borderBottom: "1px solid #8b6914",
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            <Image src={`${WIKI}/Quest_point_icon.png`} alt="Available" width={16} height={16} unoptimized style={{ imageRendering: "pixelated" }} />
            <div>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 8,
                color: "#4caf50",
                letterSpacing: 1,
              }}>
                QUEST: THE GRIND TO JOURNEYMAN
              </div>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 9,
                color: "#ffcc44",
              }}>
                AVAILABLE NOW - Start This Week
              </div>
            </div>
          </div>

          <div style={{ padding: "14px", background: "#2e1f0e" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 10,
              marginBottom: 16,
            }}>
              {[
                { label: "Player", value: "Shayaan (you)" },
                { label: "Build", value: "IBEW Apprenticeship" },
                { label: "Time to complete", value: "5 years (guaranteed)" },
                { label: "Rejection risk", value: "Low - AZ is actively hiring" },
                { label: "Starting pay", value: "$18-20/hr from DAY ONE" },
              ].map((item) => (
                <div key={item.label} style={{
                  background: "#1a0f05",
                  borderRadius: 2,
                  padding: "8px 10px",
                  borderLeft: "2px solid #4caf50",
                }}>
                  <div style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 8,
                    color: "#8b6914",
                    marginBottom: 4,
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 14,
                    color: "#c8a96e",
                  }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: 13,
              color: "#c8a96e",
              lineHeight: 1.7,
              padding: "10px 12px",
              background: "#1a0f05",
              border: "1px solid rgba(76,175,80,0.3)",
              borderRadius: 2,
            }}>
              The electrician path has no &quot;job hunting&quot; phase. You apply to the apprenticeship program,
              and if accepted, you are <span style={{ color: "#4caf50" }}>employed from day one</span>.
              No gap year. No rejection spiral. No watching the months go by.
              Arizona needs 5,000+ electricians in the next 3 years for TSMC alone.
              They want people. They want <em>you</em>.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
