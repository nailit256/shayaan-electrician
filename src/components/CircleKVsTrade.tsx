"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CircleKVsTrade() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
    { year: "Year 5", pay: "$45–55/hr", cumulative: "$315,000+", note: "JOURNEYMAN. Max level. For life." },
  ];

  return (
    <section style={{ padding: "70px 20px", maxWidth: 960, margin: "0 auto" }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: 44 }}
      >
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#FF6B00", marginBottom: 8 }}>
          The Math
        </div>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, marginBottom: 8 }}>
          Circle K vs. The Trade
        </h2>
        <p style={{ color: "#777", fontSize: 15 }}>
          Let&apos;s talk numbers. Same 5 years. Completely different outcomes.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {/* Circle K side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: "#141414",
            border: "1px solid #2a2a2a",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          <div style={{
            background: "linear-gradient(135deg, #1a0a0a, #141414)",
            padding: "20px 24px",
            borderBottom: "1px solid #2a2a2a",
          }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>🏪</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#ef4444", marginBottom: 4 }}>
              Circle K Path
            </h3>
            <p style={{ fontSize: 13, color: "#666" }}>The current trajectory</p>
          </div>

          <div style={{ padding: "20px 24px" }}>
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
                  padding: "10px 0",
                  borderBottom: i < circleKYears.length - 1 ? "1px solid #1a1a1a" : "none",
                  gap: 10,
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: i === 5 ? "#ef4444" : "#ccc" }}>{row.year}</div>
                  <div style={{ fontSize: 12, color: "#555", marginTop: 2 }}>{row.note}</div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 13, color: "#ef4444", fontWeight: 700 }}>{row.pay}</div>
                  {i > 0 && <div style={{ fontSize: 11, color: "#444", marginTop: 2 }}>Total: {row.cumulative}</div>}
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{
            padding: "16px 24px",
            background: "rgba(239,68,68,0.06)",
            borderTop: "1px solid rgba(239,68,68,0.15)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#ef4444" }}>$149,700</div>
            <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>5-year total. Skill gained: <em>making slushies.</em></div>
          </div>
        </motion.div>

        {/* Electrician side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#0c1000",
            border: "1px solid rgba(255,215,0,0.2)",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 0 30px rgba(255,215,0,0.04)",
          }}
        >
          <div style={{
            background: "linear-gradient(135deg, #1a1a00, #0c1000)",
            padding: "20px 24px",
            borderBottom: "1px solid rgba(255,215,0,0.1)",
          }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>⚡</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#FFD700", marginBottom: 4 }}>
              Electrician Path
            </h3>
            <p style={{ fontSize: 13, color: "#666" }}>The path you could start this week</p>
          </div>

          <div style={{ padding: "20px 24px" }}>
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
                  padding: "10px 0",
                  borderBottom: i < tradeYears.length - 1 ? "1px solid #1a1a00" : "none",
                  gap: 10,
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: i === 5 ? "#FFD700" : "#ccc" }}>{row.year}</div>
                  <div style={{ fontSize: 12, color: "#555", marginTop: 2 }}>{row.note}</div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 13, color: i === 5 ? "#FFD700" : "#22c55e", fontWeight: 700 }}>{row.pay}</div>
                  {i > 0 && <div style={{ fontSize: 11, color: "#444", marginTop: 2 }}>Total: {row.cumulative}</div>}
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{
            padding: "16px 24px",
            background: "rgba(34,197,94,0.06)",
            borderTop: "1px solid rgba(34,197,94,0.15)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#FFD700" }}>$315,000+</div>
            <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>5-year total. Skill gained: <em>Journeyman card for life.</em></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          textAlign: "center",
          marginTop: 24,
          padding: "18px 24px",
          background: "rgba(255,215,0,0.05)",
          border: "1px solid rgba(255,215,0,0.15)",
          borderRadius: 12,
          fontSize: 15,
        }}
      >
        <span style={{ color: "#FFD700", fontWeight: 700, fontSize: 20 }}>$165,000+ difference</span>
        <span style={{ color: "#aaa" }}> in 5 years. That&apos;s a house down payment in Arizona. That&apos;s your 20s sorted.</span>
      </motion.div>
    </section>
  );
}
