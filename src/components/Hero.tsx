"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0a0600 0%, #0D0D0D 100%)",
        borderBottom: "1px solid #252525",
        padding: "80px 20px 70px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background lightning bolts */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          fontSize: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        ⚡
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-block",
            background: "rgba(255,107,0,0.12)",
            border: "1px solid rgba(255,107,0,0.35)",
            color: "#FF6B00",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: "6px 18px",
            borderRadius: 999,
            marginBottom: 24,
          }}
        >
          ⚡ A Message Built Just for Shayaan
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "clamp(38px, 7vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-1px",
          }}
        >
          Shayaan.{" "}
          <span style={{ color: "#FFD700" }}>
            It&apos;s Time to<br />Level Up.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 19, color: "#999", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.6 }}
        >
          You&apos;ve been grinding RuneScape for years. You know how to level up.
          What if the same system existed in real life — and paid you{" "}
          <span style={{ color: "#FFD700", fontWeight: 700 }}>$100K+</span> at max level?
        </motion.p>

        {/* Mini XP bar teaser */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            display: "inline-block",
            background: "#141414",
            border: "1px solid #252525",
            borderRadius: 12,
            padding: "16px 28px",
            marginBottom: 40,
            minWidth: 280,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 18 }}>⚡</span>
            <span style={{ fontFamily: "monospace", fontSize: 13, color: "#FFD700", fontWeight: 700 }}>
              Electrician
            </span>
            <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 13, color: "#FF6B00" }}>
              Level 1 / 99
            </span>
          </div>
          <div style={{ background: "#1a1a1a", borderRadius: 4, height: 14, overflow: "hidden", position: "relative" }}>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "3%" }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #4a2c00, #FF6B00, #FFD700)",
                borderRadius: 4,
                boxShadow: "0 0 10px rgba(255,215,0,0.5)",
              }}
            />
          </div>
          <p style={{ fontSize: 11, color: "#555", marginTop: 6, fontFamily: "monospace" }}>
            XP: 0 / 13,034,431 — Keep scrolling to see the full grind
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "$0", label: "Student Debt" },
            { num: "Day 1", label: "Start Earning" },
            { num: "$100K+", label: "By Age 26" },
            { num: "5 yrs", label: "To Max Level" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#FFD700" }}>{s.num}</div>
              <div style={{ fontSize: 11, color: "#666", textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
