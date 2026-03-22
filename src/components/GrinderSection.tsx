"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const WIKI = "https://oldschool.runescape.wiki/images";

export default function GrinderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }} ref={ref}>
      {/* Section Header - Hiscores Style */}
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
            Hiscores
          </span>
        </div>
        <div style={{ padding: "14px 18px", background: "#2e1f0e", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: "clamp(14px, 2.5vw, 20px)",
            color: "#ffcc44",
            marginBottom: 10,
          }}>
            The Grinder Always Wins
          </h2>
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: 14,
            color: "#c8a96e",
            lineHeight: 1.6,
          }}>
            CS punishes anyone who isn&apos;t a genius. The trades reward the grinder. Always have. Always will.
          </p>
        </div>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 20 }}>
        {/* CS Job Market */}
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
            <Image src={`${WIKI}/Magic_icon.png`} alt="CS" width={16} height={16} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 9,
              color: "#cc3333",
            }}>
              CS Job Market
            </span>
          </div>

          <div style={{ padding: "12px", background: "#2e1f0e" }}>
            {[
              "Rewards 10x developers and Stanford PhDs",
              "LeetCode grind for every interview",
              "Competing against thousands of CS grads",
              "AI is eating entry-level coding jobs right now",
              "2.5 year job hunts are the new normal",
              "Salary negotiation is on you - no contract",
              "Can be laid off any time without notice",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                  padding: "6px 0",
                  borderBottom: i < 6 ? "1px solid #3d2b1f" : "none",
                }}
              >
                <span style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 8,
                  color: "#cc3333",
                  flexShrink: 0,
                }}>
                  X
                </span>
                <span style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 14,
                  color: "#c8a96e",
                  lineHeight: 1.5,
                }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Trades */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
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
            gap: 8,
          }}>
            <Image src={`${WIKI}/Smithing_icon.png`} alt="Trades" width={16} height={16} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 9,
              color: "#4caf50",
            }}>
              The Trades
            </span>
          </div>

          <div style={{ padding: "12px", background: "#2e1f0e" }}>
            {[
              "Rewards showing up and doing the work",
              "No LeetCode. No whiteboard. No ego.",
              "Arizona literally needs 5,000+ more electricians",
              "AI cannot wire a building. Ever.",
              "Pay raises are AUTOMATIC per union contract",
              "Cannot be denied a raise. Cannot be passed over.",
              "Cannot be outsourced or replaced by a bot",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                  padding: "6px 0",
                  borderBottom: i < 6 ? "1px solid #3d2b1f" : "none",
                }}
              >
                <span style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 8,
                  color: "#4caf50",
                  flexShrink: 0,
                }}>
                  +
                </span>
                <span style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 14,
                  color: "#c8a96e",
                  lineHeight: 1.5,
                }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hiscores Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.45 }}
        style={{
          background: "#3d2b1f",
          border: "2px solid #8b6914",
          borderRadius: 2,
          overflow: "hidden",
          marginBottom: 16,
          boxShadow: "0 0 0 1px #2a1f0e",
        }}
      >
        <div style={{
          background: "linear-gradient(180deg, #5a3a1a, #3d2b1f)",
          borderBottom: "1px solid #8b6914",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}>
          <Image src={`${WIKI}/Combat_icon.png`} alt="Hiscores" width={14} height={14} unoptimized style={{ imageRendering: "pixelated" }} />
          <span style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: 8,
            color: "#ffcc44",
          }}>
            Hiscores Comparison
          </span>
        </div>

        <div style={{ background: "#2e1f0e" }}>
          {/* Header Row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            borderBottom: "1px solid #8b6914",
            background: "#1a0f05",
          }}>
            <div style={{ padding: "8px 12px", fontFamily: "var(--font-osrs), monospace", fontSize: 8, color: "#8b6914" }}>
              Skill
            </div>
            <div style={{ padding: "8px 12px", fontFamily: "var(--font-osrs), monospace", fontSize: 8, color: "#cc3333", textAlign: "center" }}>
              CS Grad Rank
            </div>
            <div style={{ padding: "8px 12px", fontFamily: "var(--font-osrs), monospace", fontSize: 8, color: "#4caf50", textAlign: "center" }}>
              Electrician Rank
            </div>
          </div>

          {/* Data Rows */}
          {[
            { skill: "Work Ethic", cs: "#4,521,000", trade: "#1" },
            { skill: "Consistency", cs: "#3,000,000", trade: "#1" },
            { skill: "Earning Power (5yr)", cs: "$70K", trade: "$100K+" },
            { skill: "AI-Proof", cs: "No", trade: "YES" },
            { skill: "Rejection Risk", cs: "HIGH", trade: "LOW" },
          ].map((row, i) => (
            <div key={row.skill} style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              borderBottom: i < 4 ? "1px solid #3d2b1f" : "none",
            }}>
              <div style={{ padding: "8px 12px", fontFamily: "Georgia, serif", fontSize: 13, color: "#c8a96e" }}>
                {row.skill}
              </div>
              <div style={{ padding: "8px 12px", fontFamily: "var(--font-osrs), monospace", fontSize: 8, color: "#cc3333", textAlign: "center" }}>
                {row.cs}
              </div>
              <div style={{ padding: "8px 12px", fontFamily: "var(--font-osrs), monospace", fontSize: 8, color: "#4caf50", textAlign: "center" }}>
                {row.trade}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Phoenix Suns Analogy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.55 }}
        style={{
          background: "#3d2b1f",
          border: "2px solid #8b6914",
          borderRadius: 2,
          padding: "14px 18px",
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <Image src={`${WIKI}/Agility_icon.png`} alt="Agility" width={28} height={28} unoptimized style={{ imageRendering: "pixelated", flexShrink: 0 }} />
          <div>
            <div style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 9,
              color: "#ffcc44",
              marginBottom: 8,
            }}>
              Phoenix Suns Analogy
            </div>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: 14,
              color: "#c8a96e",
              lineHeight: 1.7,
            }}>
              The Suns need role players just as much as stars. A guy who shows up every game,
              plays consistent defense, hits his assignments - that player has a job for 10 years.
              You don&apos;t have to be Kevin Durant. You just have to be the guy who shows up and does the work.
              The trades are full of those guys making $100K. CS is full of people waiting for a callback.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.65 }}
        style={{
          background: "#3d2b1f",
          border: "2px solid rgba(255,204,68,0.4)",
          borderRadius: 2,
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Image src={`${WIKI}/Strength_icon.png`} alt="Strength" width={28} height={28} unoptimized style={{ imageRendering: "pixelated", marginBottom: 12 }} />
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: 16,
          color: "#ffcc44",
          lineHeight: 1.6,
          fontStyle: "italic",
        }}>
          &quot;If you can grind RuneScape to 99,<br />
          you can grind this to Journeyman.&quot;
        </p>
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: 13,
          color: "#8b6914",
          marginTop: 12,
        }}>
          The only difference is one pays you $45/hr when you max out.
        </p>
      </motion.div>
    </section>
  );
}
