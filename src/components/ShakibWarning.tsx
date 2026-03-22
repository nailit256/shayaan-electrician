"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ShakibWarning() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{
      background: "linear-gradient(180deg, #0D0D0D, #0a0005, #0D0D0D)",
      borderTop: "1px solid #252525",
      borderBottom: "1px solid #252525",
      padding: "70px 20px",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#a855f7", marginBottom: 8 }}>
            Quest Log
          </div>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, marginBottom: 8 }}>
            You Already Saw What Happens
          </h2>
          <p style={{ color: "#777", fontSize: 15 }}>
            Shakib&apos;s story is real data. You watched it happen.
          </p>
        </motion.div>

        {/* Failed quest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#0e0008",
            border: "1px solid rgba(239,68,68,0.25)",
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 16,
          }}
        >
          <div style={{
            background: "linear-gradient(135deg, #1a0010, #0e0008)",
            padding: "16px 24px",
            borderBottom: "1px solid rgba(239,68,68,0.15)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <span style={{ fontSize: 20 }}>📜</span>
            <div>
              <div style={{ fontSize: 11, color: "#ef4444", fontFamily: "monospace", fontWeight: 700, letterSpacing: 1 }}>
                QUEST: THE LONG JOB HUNT
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#ef4444" }}>
                ❌ QUEST COMPLETED — 2.5 Years Later
              </div>
            </div>
          </div>

          <div style={{ padding: "24px 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 20 }}>
              {[
                { label: "Player", value: "Shakib (your brother)" },
                { label: "Build", value: "CS Masters Degree" },
                { label: "Time to complete", value: "2.5 years of applications" },
                { label: "Rejection letters", value: "Hundreds" },
                { label: "Starting salary", value: "~$70–80K (after Masters)" },
              ].map((item) => (
                <div key={item.label} style={{
                  background: "#0a0008",
                  borderRadius: 8,
                  padding: "12px 14px",
                  borderLeft: "3px solid rgba(239,68,68,0.4)",
                }}>
                  <div style={{ fontSize: 11, color: "#666", marginBottom: 4, fontFamily: "monospace" }}>{item.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#ccc" }}>{item.value}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, marginBottom: 16 }}>
              This is not a knock on Shakib. He is smart, he worked hard, he got there.
              But you watched him grind for <strong style={{ color: "#ef4444" }}>2.5 years</strong> — applications, phone screens,
              technical interviews, ghosted emails. A CS Masters and it still took that long.
              That is the CS market in 2025. Competitive doesn&apos;t even cover it.
            </p>

            <div style={{
              background: "rgba(239,68,68,0.06)",
              border: "1px solid rgba(239,68,68,0.15)",
              borderRadius: 8,
              padding: "14px 16px",
              fontFamily: "monospace",
              fontSize: 13,
              color: "#ef4444",
            }}>
              ⚠️ Warning: You are currently on the same quest. Same major. Same market. And you don&apos;t have a Masters.
            </div>
          </div>
        </motion.div>

        {/* Available quest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: "#081000",
            border: "1px solid rgba(34,197,94,0.25)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          <div style={{
            background: "linear-gradient(135deg, #0f1800, #081000)",
            padding: "16px 24px",
            borderBottom: "1px solid rgba(34,197,94,0.15)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <span style={{ fontSize: 20 }}>📜</span>
            <div>
              <div style={{ fontSize: 11, color: "#22c55e", fontFamily: "monospace", fontWeight: 700, letterSpacing: 1 }}>
                QUEST: THE GRIND TO JOURNEYMAN
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#22c55e" }}>
                ✅ AVAILABLE NOW — Start This Week
              </div>
            </div>
          </div>

          <div style={{ padding: "24px 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 20 }}>
              {[
                { label: "Player", value: "Shayaan (you)" },
                { label: "Build", value: "IBEW Apprenticeship" },
                { label: "Time to complete", value: "5 years (guaranteed)" },
                { label: "Rejection risk", value: "Low — AZ is actively hiring" },
                { label: "Starting pay", value: "$18–20/hr from DAY ONE" },
              ].map((item) => (
                <div key={item.label} style={{
                  background: "#040c00",
                  borderRadius: 8,
                  padding: "12px 14px",
                  borderLeft: "3px solid rgba(34,197,94,0.4)",
                }}>
                  <div style={{ fontSize: 11, color: "#666", marginBottom: 4, fontFamily: "monospace" }}>{item.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#ccc" }}>{item.value}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7 }}>
              The electrician path has no &quot;job hunting&quot; phase. You apply to the apprenticeship program,
              and if accepted, you are <strong style={{ color: "#22c55e" }}>employed from day one</strong>.
              No gap year. No rejection spiral. No watching the months go by.
              Arizona needs 5,000+ electricians in the next 3 years for TSMC alone.
              They want people. They want <em>you</em>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
