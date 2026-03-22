"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MinecraftSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "70px 20px", maxWidth: 900, margin: "0 auto" }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: 44 }}
      >
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#22c55e", marginBottom: 8 }}>
          Builder Mode: Real Life
        </div>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, marginBottom: 8 }}>
          You Already Build Worlds 🧱
        </h2>
        <p style={{ color: "#777", fontSize: 15 }}>
          You&apos;ve put hundreds of hours into Minecraft. You already know what it feels like to build something and step back and say — <em>I made that.</em>
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#141414",
            border: "1px solid #252525",
            borderRadius: 16,
            padding: 28,
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 14 }}>🎮</div>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#ccc", marginBottom: 10 }}>Minecraft</h3>
          <ul style={{ listStyle: "none", padding: 0, color: "#777", fontSize: 14, lineHeight: 2 }}>
            <li>🏠 Build a house — takes hours</li>
            <li>🔌 Wire redstone circuits for automation</li>
            <li>🗺️ Every new world is a blank map</li>
            <li>😢 Server resets and it&apos;s gone forever</li>
            <li>💰 Pay: $0/hr</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            background: "linear-gradient(135deg, #081400, #0a1000)",
            border: "1px solid rgba(34,197,94,0.25)",
            borderRadius: 16,
            padding: 28,
            boxShadow: "0 0 20px rgba(34,197,94,0.04)",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 14 }}>⚡</div>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#22c55e", marginBottom: 10 }}>Real-World Electrician</h3>
          <ul style={{ listStyle: "none", padding: 0, color: "#777", fontSize: 14, lineHeight: 2 }}>
            <li>🏗️ Wire a building — takes weeks</li>
            <li>🔌 Wire real automation systems (PLCs)</li>
            <li>🗺️ Every job site is a new map</li>
            <li>🏛️ Drive past it for the <strong style={{ color: "#22c55e" }}>rest of your life</strong></li>
            <li>💰 Pay: <strong style={{ color: "#FFD700" }}>$20–55/hr</strong></li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          marginTop: 24,
          padding: "22px 28px",
          background: "rgba(34,197,94,0.05)",
          border: "1px solid rgba(34,197,94,0.15)",
          borderRadius: 14,
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 16, color: "#aaa", lineHeight: 1.8 }}>
          &quot;That hospital on Baseline Road? I wired that.&quot;<br />
          &quot;That data center in Chandler? I wired that.&quot;<br />
          &quot;That TSMC chip fab that makes the processors in your phone? <strong style={{ color: "#22c55e" }}>I wired that.</strong>&quot;
        </p>
        <p style={{ fontSize: 14, color: "#555", marginTop: 12 }}>
          Permanence. Legacy. And they paid you for every hour of it.
        </p>
      </motion.div>
    </section>
  );
}
