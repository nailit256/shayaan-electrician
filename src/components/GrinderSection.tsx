"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GrinderSection() {
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
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#FF6B00", marginBottom: 8 }}>
          Your Superpower
        </div>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, marginBottom: 8 }}>
          The Grinder Always Wins 💪
        </h2>
        <p style={{ color: "#777", fontSize: 15 }}>
          CS punishes anyone who isn&apos;t a genius. The trades reward the grinder.
          Always have. Always will.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 28 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#0e0008",
            border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: 16,
            padding: 28,
          }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#ef4444", marginBottom: 16 }}>
            💻 CS Job Market
          </h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: 14, color: "#888", lineHeight: 2.2 }}>
            {[
              "Rewards 10x developers and Stanford PhDs",
              "LeetCode grind for every interview",
              "Competing against thousands of CS grads",
              "AI is eating entry-level coding jobs right now",
              "2.5 year job hunts are the new normal (see: Shakib)",
              "Salary negotiation is on you — no contract",
              "Can be laid off any time without notice",
            ].map((item) => (
              <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ color: "#ef4444", flexShrink: 0, marginTop: 2 }}>✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            background: "#081000",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: 16,
            padding: 28,
            boxShadow: "0 0 20px rgba(34,197,94,0.03)",
          }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#22c55e", marginBottom: 16 }}>
            ⚡ The Trades
          </h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: 14, color: "#888", lineHeight: 2.2 }}>
            {[
              "Rewards showing up and doing the work",
              "No LeetCode. No whiteboard. No ego.",
              "Arizona literally needs 5,000+ more electricians",
              "AI cannot wire a building. Ever.",
              "Pay raises are AUTOMATIC per union contract",
              "Cannot be denied a raise. Cannot be passed over.",
              "Cannot be outsourced to India or replaced by a bot",
            ].map((item) => (
              <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ color: "#22c55e", flexShrink: 0, marginTop: 2 }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Basketball analogy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.45 }}
        style={{
          background: "#0a0a14",
          border: "1px solid #1a1a2a",
          borderRadius: 14,
          padding: "24px 28px",
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          <div style={{ fontSize: 36, flexShrink: 0 }}>🏀</div>
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 800, color: "#aaa", marginBottom: 8 }}>
              Phoenix Suns Analogy
            </h4>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>
              The Suns need role players just as much as stars. A guy who shows up every game,
              plays consistent defense, hits his assignments — that player has a job for 10 years.
              You don&apos;t have to be Kevin Durant. You just have to be the guy who <em>shows up and does the work</em>.
              The trades are full of those guys making $100K. CS is full of people waiting for a callback.
            </p>
          </div>
        </div>
      </motion.div>

      {/* The grind quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.55 }}
        style={{
          textAlign: "center",
          padding: "28px",
          background: "rgba(255,107,0,0.05)",
          border: "1px solid rgba(255,107,0,0.15)",
          borderRadius: 14,
        }}
      >
        <div style={{ fontSize: 28, marginBottom: 12 }}>⚡</div>
        <p style={{ fontSize: 18, fontWeight: 700, color: "#ccc", lineHeight: 1.6, fontStyle: "italic" }}>
          &quot;If you can grind RuneScape to 99,<br />
          you can grind this to Journeyman.&quot;
        </p>
        <p style={{ fontSize: 13, color: "#555", marginTop: 12 }}>
          The only difference is one pays you $45/hr when you max out.
        </p>
      </motion.div>
    </section>
  );
}
