"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const WIKI = "https://oldschool.runescape.wiki/images";

const circleKYears = [
  { year: "Now", pay: "$13.50/hr", cumulative: "$0", note: "Making slushies" },
  { year: "Year 1", pay: "$14/hr", cumulative: "$29,120", note: "Same job" },
  { year: "Year 2", pay: "$14/hr", cumulative: "$58,240", note: "Still the same job" },
  { year: "Year 3", pay: "$14.50/hr", cumulative: "$88,360", note: "Maybe a raise?" },
  { year: "Year 4", pay: "$14.50/hr", cumulative: "$118,520", note: "Nothing has changed" },
  { year: "Year 5", pay: "$15/hr", cumulative: "$149,700", note: "Still Circle K. No career." },
];

const tradeYears = [
  { year: "Now", pay: "$18/hr helper", cumulative: "$0", note: "Apply this week. No experience needed." },
  { year: "Year 1", pay: "$20/hr + benefits", cumulative: "$41,600", note: "IBEW apprentice. Health insurance. Pension starts." },
  { year: "Year 2", pay: "$24/hr", cumulative: "$91,520", note: "Real skills. Real resume." },
  { year: "Year 3", pay: "$29/hr", cumulative: "$152,320", note: "Commercial work. Chip fab projects." },
  { year: "Year 4", pay: "$34/hr", cumulative: "$222,960", note: "Industrial. The big leagues." },
  { year: "Year 5", pay: "$45-55/hr", cumulative: "$315,000+", note: "JOURNEYMAN. Max level. For life." },
];

export default function CircleKVsTrade() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }} ref={ref}>
      {/* Section Header - Grand Exchange Style */}
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
          <Image src={`${WIKI}/Coins_10000.png`} alt="Coins" width={20} height={20} unoptimized style={{ imageRendering: "pixelated" }} />
          <span style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: 10,
            color: "#ffcc44",
            letterSpacing: 1,
          }}>
            Grand Exchange
          </span>
        </div>
        <div style={{ padding: "14px 18px", background: "#2e1f0e", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: "clamp(14px, 2.5vw, 20px)",
            color: "#ffcc44",
            marginBottom: 10,
          }}>
            Circle K vs. The Trade
          </h2>
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: 14,
            color: "#c8a96e",
            lineHeight: 1.6,
          }}>
            Compare these two items. Same 5 years. Completely different value.
          </p>
        </div>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        {/* Circle K Item Card */}
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
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <Image src={`${WIKI}/Skull.png`} alt="Skull" width={16} height={16} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 8,
              color: "#cc3333",
            }}>
              Circle K Job
            </span>
          </div>

          <div style={{ padding: "12px", background: "#2e1f0e" }}>
            {/* Item Description Box */}
            <div style={{
              background: "#1a0f05",
              border: "1px solid #3d2b1f",
              borderRadius: 2,
              padding: "10px",
              marginBottom: 12,
            }}>
              <div style={{
                fontFamily: "Georgia, serif",
                fontSize: 14,
                color: "#c8a96e",
                lineHeight: 1.6,
                marginBottom: 8,
              }}>
                A common retail position. Grants minimal XP and no progression. Examine: &quot;At least it pays... something.&quot;
              </div>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 8,
                color: "#8b6914",
              }}>
                Attack bonus: +0<br />
                Strength bonus: +0<br />
                GP/hr: 13,500
              </div>
            </div>

            {/* Year progression */}
            {circleKYears.map((row, i) => (
              <motion.div
                key={row.year}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "8px 0",
                  borderBottom: i < circleKYears.length - 1 ? "1px solid #3d2b1f" : "none",
                  gap: 10,
                }}
              >
                <div>
                  <div style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 8,
                    color: i === 5 ? "#cc3333" : "#c8a96e",
                  }}>
                    {row.year}
                  </div>
                  <div style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 13,
                    color: "#c8a96e",
                    marginTop: 2,
                  }}>
                    {row.note}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 8,
                    color: "#cc3333",
                  }}>
                    {row.pay}
                  </div>
                  {i > 0 && (
                    <div style={{
                      fontFamily: "var(--font-osrs), monospace",
                      fontSize: 7,
                      color: "#8b6914",
                      marginTop: 2,
                    }}>
                      Total: {row.cumulative}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom summary */}
          <div style={{
            padding: "12px",
            background: "#1a0f05",
            borderTop: "1px solid #3d2b1f",
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 12,
              color: "#cc3333",
            }}>
              $149,700
            </div>
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: 13,
              color: "#8b6914",
              marginTop: 4,
            }}>
              5-year total. Skill gained: making slushies.
            </div>
          </div>
        </motion.div>

        {/* Electrician Item Card */}
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
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <Image src={`${WIKI}/Max_cape.png`} alt="Max Cape" width={16} height={16} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 8,
              color: "#ffcc44",
            }}>
              IBEW Journeyman Card
            </span>
          </div>

          <div style={{ padding: "12px", background: "#2e1f0e" }}>
            {/* Item Description Box */}
            <div style={{
              background: "#1a0f05",
              border: "1px solid rgba(255,204,68,0.3)",
              borderRadius: 2,
              padding: "10px",
              marginBottom: 12,
            }}>
              <div style={{
                fontFamily: "Georgia, serif",
                fontSize: 14,
                color: "#c8a96e",
                lineHeight: 1.6,
                marginBottom: 8,
              }}>
                A rare professional certification. Grants massive XP and guaranteed progression. Examine: &quot;This is worth more than a CS degree.&quot;
              </div>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 8,
                color: "#4caf50",
              }}>
                Attack bonus: +99<br />
                Strength bonus: +99<br />
                GP/hr: 45,000 - 55,000
              </div>
            </div>

            {/* Year progression */}
            {tradeYears.map((row, i) => (
              <motion.div
                key={row.year}
                initial={{ opacity: 0, x: 10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "8px 0",
                  borderBottom: i < tradeYears.length - 1 ? "1px solid #3d2b1f" : "none",
                  gap: 10,
                }}
              >
                <div>
                  <div style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 8,
                    color: i === 5 ? "#ffcc44" : "#c8a96e",
                  }}>
                    {row.year}
                  </div>
                  <div style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 13,
                    color: "#c8a96e",
                    marginTop: 2,
                  }}>
                    {row.note}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 8,
                    color: i === 5 ? "#ffcc44" : "#4caf50",
                  }}>
                    {row.pay}
                  </div>
                  {i > 0 && (
                    <div style={{
                      fontFamily: "var(--font-osrs), monospace",
                      fontSize: 7,
                      color: "#8b6914",
                      marginTop: 2,
                    }}>
                      Total: {row.cumulative}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom summary */}
          <div style={{
            padding: "12px",
            background: "#1a0f05",
            borderTop: "1px solid rgba(255,204,68,0.2)",
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 12,
              color: "#ffcc44",
            }}>
              $315,000+
            </div>
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: 13,
              color: "#8b6914",
              marginTop: 4,
            }}>
              5-year total. Skill gained: Journeyman card for life.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Difference callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          marginTop: 16,
          background: "#3d2b1f",
          border: "2px solid #8b6914",
          borderRadius: 2,
          padding: "14px 18px",
          textAlign: "center",
        }}
      >
        <div style={{
          fontFamily: "var(--font-osrs), monospace",
          fontSize: 12,
          color: "#ffcc44",
          marginBottom: 8,
        }}>
          $165,000+ difference
        </div>
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: 13,
          color: "#c8a96e",
        }}>
          in 5 years. That&apos;s a house down payment in Arizona. That&apos;s your 20s sorted.
        </p>
      </motion.div>
    </section>
  );
}
