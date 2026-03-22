"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function StatBar({ label, value, color = "#FF6B00" }: { label: string; value: number; color?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontFamily: "monospace", fontSize: 12, color: "#aaa" }}>{label}</span>
        <span style={{ fontFamily: "monospace", fontSize: 12, color }}>
          {value >= 99 ? "MAX" : value}
        </span>
      </div>
      <div style={{ background: "#1a1a1a", borderRadius: 3, height: 8, overflow: "hidden" }}>
        <motion.div
          initial={{ width: "0%" }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          style={{
            height: "100%",
            background: value >= 99 ? `linear-gradient(90deg, ${color}, #FFD700)` : color,
            borderRadius: 3,
            boxShadow: value >= 99 ? `0 0 8px ${color}` : "none",
          }}
        />
      </div>
    </div>
  );
}

export default function CharacterSheet() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "70px 20px", maxWidth: 960, margin: "0 auto" }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#FF6B00", marginBottom: 8 }}>
            Your Stats
          </div>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, marginBottom: 8 }}>
            Character Sheet
          </h2>
          <p style={{ color: "#777", fontSize: 15 }}>
            Every player has a build. This is yours.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}>
          {/* Current build */}
          <div style={{
            background: "#141414",
            border: "1px solid #252525",
            borderRadius: 16,
            padding: 28,
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
              paddingBottom: 16,
              borderBottom: "1px solid #252525",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: "rgba(100,100,100,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, border: "1px solid #333",
              }}>👤</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>Shayaan</div>
                <div style={{ fontSize: 12, color: "#777" }}>Current Class: Circle K Cashier (Lvl 2)</div>
              </div>
            </div>

            <div style={{
              background: "rgba(239,68,68,0.06)",
              border: "1px solid rgba(239,68,68,0.15)",
              borderRadius: 8,
              padding: "10px 14px",
              marginBottom: 16,
              fontSize: 13,
              color: "#ef4444",
            }}>
              ⚠️ Current path leads to: CS grad with no experience, competing against 10,000 other CS grads
            </div>

            <StatBar label="Work Ethic" value={99} color="#FF6B00" />
            <StatBar label="Consistency" value={99} color="#FF6B00" />
            <StatBar label="Grind XP" value={99} color="#FFD700" />
            <StatBar label="Coding Skills" value={22} color="#3b82f6" />
            <StatBar label="Book Smarts" value={48} color="#a855f7" />
            <StatBar label="Street Smart" value={85} color="#22c55e" />
            <StatBar label="Tech Awareness" value={72} color="#3b82f6" />

            <div style={{ marginTop: 16, padding: "10px 14px", background: "#1a1a1a", borderRadius: 8, fontFamily: "monospace", fontSize: 12, color: "#666" }}>
              Special Trait: &quot;The Grinder&quot; — Earns 2x XP from repetitive tasks. Immune to burnout from physical labor. Never quits.
            </div>
          </div>

          {/* Proposed build */}
          <div style={{
            background: "#0f1200",
            border: "1px solid rgba(255,215,0,0.25)",
            borderRadius: 16,
            padding: 28,
            boxShadow: "0 0 30px rgba(255,215,0,0.05)",
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
              paddingBottom: 16,
              borderBottom: "1px solid rgba(255,215,0,0.15)",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: "rgba(255,215,0,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, border: "1px solid rgba(255,215,0,0.25)",
              }}>⚡</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18, color: "#FFD700" }}>Shayaan</div>
                <div style={{ fontSize: 12, color: "#888" }}>Proposed Class: IBEW Journeyman (Lvl 99)</div>
              </div>
            </div>

            <div style={{
              background: "rgba(34,197,94,0.06)",
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: 8,
              padding: "10px 14px",
              marginBottom: 16,
              fontSize: 13,
              color: "#22c55e",
            }}>
              ✅ This build rewards your ACTUAL stats — grind XP + work ethic + consistency = auto-win
            </div>

            <StatBar label="Work Ethic" value={99} color="#FF6B00" />
            <StatBar label="Consistency" value={99} color="#FF6B00" />
            <StatBar label="Grind XP" value={99} color="#FFD700" />
            <StatBar label="Electrical Knowledge" value={5} color="#FFD700" />
            <StatBar label="Required Intelligence" value={55} color="#a855f7" />
            <StatBar label="Physical Ability" value={80} color="#22c55e" />
            <StatBar label="Tech Hybrid (RARE)" value={72} color="#3b82f6" />

            <div style={{ marginTop: 16, padding: "10px 14px", background: "#161600", borderRadius: 8, fontFamily: "monospace", fontSize: 12, color: "#888" }}>
              Rare Trait Unlocked: &quot;Tech-Trade Hybrid&quot; — One of only ~3% of electricians with CS knowledge. Value multiplier: 2.5x in industrial/automation roles.
            </div>
          </div>
        </div>

        <div style={{
          textAlign: "center",
          marginTop: 24,
          padding: "18px 24px",
          background: "#141414",
          borderRadius: 12,
          border: "1px solid #252525",
          fontSize: 15,
          color: "#aaa",
        }}>
          💡 <strong style={{ color: "#FFD700" }}>The key insight:</strong> The electrician path is the only career where your <em>actual</em> max-level stats — work ethic, consistency, grind — are exactly what determine success. CS rewards people with stats you don&apos;t have. Trades reward stats you already have maxed out.
        </div>
      </motion.div>
    </section>
  );
}
