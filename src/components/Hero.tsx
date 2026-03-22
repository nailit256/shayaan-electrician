"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WIKI = "https://oldschool.runescape.wiki/images";

export default function Hero() {
  return (
    <section
      style={{
        background: `
          radial-gradient(ellipse at 50% 30%, rgba(90,58,26,0.3) 0%, transparent 60%),
          linear-gradient(180deg, #1a0d05 0%, #0f0805 50%, #1a0d05 100%)
        `,
        borderBottom: "2px solid #8b6914",
        padding: "60px 20px 50px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Decorative corners like OSRS login */}
      <div style={{
        position: "absolute",
        top: 20,
        left: 20,
        width: 60,
        height: 60,
        borderTop: "2px solid #8b6914",
        borderLeft: "2px solid #8b6914",
        opacity: 0.5,
      }} />
      <div style={{
        position: "absolute",
        top: 20,
        right: 20,
        width: 60,
        height: 60,
        borderTop: "2px solid #8b6914",
        borderRight: "2px solid #8b6914",
        opacity: 0.5,
      }} />
      <div style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        width: 60,
        height: 60,
        borderBottom: "2px solid #8b6914",
        borderLeft: "2px solid #8b6914",
        opacity: 0.5,
      }} />
      <div style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderBottom: "2px solid #8b6914",
        borderRight: "2px solid #8b6914",
        opacity: 0.5,
      }} />

      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Main Title - OSRS style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: "clamp(24px, 5vw, 48px)",
            color: "#ffcc44",
            textShadow: "2px 2px 0 #000, 0 0 20px rgba(255,204,68,0.3)",
            marginBottom: 8,
            letterSpacing: "2px",
          }}>
            SHAYAAN
          </h1>
          <div style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: "clamp(10px, 2vw, 14px)",
            color: "#c8a96e",
            marginBottom: 40,
            letterSpacing: "1px",
          }}>
            Level Up IRL
          </div>
        </motion.div>

        {/* Current Status Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: "#3d2b1f",
            border: "2px solid #8b6914",
            borderRadius: 2,
            overflow: "hidden",
            marginBottom: 30,
            boxShadow: "0 0 0 1px #2a1f0e, 0 8px 32px rgba(0,0,0,0.8), inset 0 1px 0 rgba(200,169,110,0.1)",
          }}
        >
          {/* Panel Header */}
          <div style={{
            background: "linear-gradient(180deg, #5a3a1a, #3d2b1f)",
            borderBottom: "1px solid #8b6914",
            padding: "6px 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}>
            <Image src={`${WIKI}/Skills_icon.png`} alt="Skills" width={16} height={16} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 10,
              color: "#ffcc44",
              letterSpacing: 1,
            }}>
              Character Status
            </span>
          </div>

          <div style={{ padding: "16px 20px", background: "#2e1f0e" }}>
            {/* Current Class */}
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: 14,
              color: "#cc3333",
              marginBottom: 12,
              padding: "8px 12px",
              background: "#1a0f05",
              border: "1px solid #3d2b1f",
              borderRadius: 2,
            }}>
              You are currently: Circle K Cashier (Level 1)
            </div>

            {/* Available Class */}
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: 14,
              color: "#4caf50",
              marginBottom: 16,
              padding: "8px 12px",
              background: "#1a0f05",
              border: "1px solid #3d2b1f",
              borderRadius: 2,
            }}>
              Available class change: IBEW Journeyman (Level 99)
            </div>

            {/* Mini Skills Display */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              padding: "12px 0",
              borderTop: "1px solid #3d2b1f",
            }}>
              <div style={{ textAlign: "center" }}>
                <Image src={`${WIKI}/Construction_icon.png`} alt="Construction" width={24} height={24} unoptimized style={{ imageRendering: "pixelated" }} />
                <div style={{ fontFamily: "var(--font-osrs), monospace", fontSize: 9, color: "#ffcc44", marginTop: 4 }}>
                  1
                </div>
              </div>
              <div style={{
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 9,
                color: "#8b6914",
                display: "flex",
                alignItems: "center",
              }}>
                {"->"}
              </div>
              <div style={{ textAlign: "center" }}>
                <Image src={`${WIKI}/Max_cape.png`} alt="Max" width={24} height={24} unoptimized style={{ imageRendering: "pixelated" }} />
                <div style={{ fontFamily: "var(--font-osrs), monospace", fontSize: 9, color: "#4caf50", marginTop: 4 }}>
                  99
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* XP Bar Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            background: "#3d2b1f",
            border: "2px solid #8b6914",
            borderRadius: 2,
            overflow: "hidden",
            marginBottom: 40,
            boxShadow: "0 0 0 1px #2a1f0e, 0 8px 24px rgba(0,0,0,0.7)",
          }}
        >
          <div style={{
            background: "linear-gradient(180deg, #5a3a1a, #3d2b1f)",
            borderBottom: "1px solid #8b6914",
            padding: "5px 10px",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}>
            <Image src={`${WIKI}/Construction_icon.png`} alt="Electrician" width={14} height={14} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{ fontFamily: "var(--font-osrs), monospace", fontSize: 9, color: "#ffcc44" }}>
              Electrician
            </span>
            <span style={{ marginLeft: "auto", fontFamily: "var(--font-osrs), monospace", fontSize: 9, color: "#4caf50" }}>
              Level 1 / 99
            </span>
          </div>
          <div style={{ padding: "8px 10px", background: "#2e1f0e" }}>
            <div style={{ background: "#1a0f05", border: "1px solid #3d2b1f", borderRadius: 1, height: 12, overflow: "hidden", position: "relative" }}>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "2%" }}
                transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #1a4a07, #2d6b0e, #4caf50)",
                  borderRadius: 1,
                }}
              />
              <div style={{
                position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-osrs), monospace", fontSize: 6, color: "rgba(255,255,255,0.5)",
              }}>
                0 / 13,034,431 xp
              </div>
            </div>
            <div style={{ fontFamily: "var(--font-osrs), monospace", fontSize: 8, color: "#8b6914", marginTop: 5, textAlign: "center" }}>
              Scroll down to see the full grind
            </div>
          </div>
        </motion.div>

        {/* Stats Row - OSRS style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            background: "#3d2b1f",
            border: "2px solid #8b6914",
            borderRadius: 2,
            padding: "12px 16px",
            boxShadow: "0 0 0 1px #2a1f0e, inset 0 1px 0 rgba(200,169,110,0.1)",
          }}
        >
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            flexWrap: "wrap",
          }}>
            {[
              { num: "$0", label: "Student Debt" },
              { num: "Day 1", label: "Start Earning" },
              { num: "$100K+", label: "By Age 26" },
              { num: "5 yrs", label: "To Max Level" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: "clamp(12px, 3vw, 16px)",
                  color: "#ffcc44",
                  textShadow: "1px 1px 0 #000",
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 8,
                  color: "#8b6914",
                  marginTop: 4,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
