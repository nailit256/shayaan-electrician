"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const companies = [
  { name: "TSMC", emoji: "🏭", investment: "$65 Billion", location: "Chandler, AZ", note: "30 min from Laveen. World's most advanced chip fab. Needs thousands of electricians for construction + operations." },
  { name: "Intel", emoji: "🔵", investment: "$20B+", location: "Chandler (Ocotillo)", note: "Major fab expansion. Intel Foundry is hiring trade workers at scale." },
  { name: "Microsoft", emoji: "🟦", investment: "$3.3B data centers", location: "Phoenix Metro", note: "Massive data center expansion. Data centers eat power. Power requires electricians." },
  { name: "Google", emoji: "🔴", investment: "Multiple campuses", location: "Mesa, AZ", note: "Google's cloud infrastructure requires full-time electrical maintenance crews." },
  { name: "Amazon (AWS)", emoji: "📦", investment: "Billion+", location: "Phoenix Metro", note: "AWS has multiple zones in Arizona. Each requires hundreds of electricians to build and maintain." },
  { name: "Meta", emoji: "🔵", investment: "Data centers", location: "Mesa + Surprise", note: "AI training data centers. Massive power demands. Non-stop electrical work." },
];

export default function ArizonaBoom() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{
      background: "linear-gradient(180deg, #0D0D0D, #080a00, #0D0D0D)",
      borderTop: "1px solid #252525",
      borderBottom: "1px solid #252525",
      padding: "70px 20px",
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 44 }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#FFD700", marginBottom: 8 }}>
            Right Place. Right Time.
          </div>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, marginBottom: 8 }}>
            Arizona Is On Fire 🔥
          </h2>
          <p style={{ color: "#777", fontSize: 15, maxWidth: 580, margin: "0 auto" }}>
            Laveen, AZ is sitting at the center of the biggest construction boom in American history.
            Someone has to wire all of this. That someone can be you.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
        }}>
          {companies.map((co, i) => (
            <motion.div
              key={co.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              style={{
                background: "#0f1100",
                border: "1px solid rgba(255,215,0,0.12)",
                borderRadius: 14,
                padding: "22px",
                transition: "border-color 0.2s",
              }}
              whileHover={{ borderColor: "rgba(255,215,0,0.3)" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 24 }}>{co.emoji}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15 }}>{co.name}</div>
                  <div style={{ fontSize: 12, color: "#FFD700", fontWeight: 700 }}>{co.investment}</div>
                </div>
              </div>
              <div style={{
                fontSize: 11,
                fontFamily: "monospace",
                color: "#555",
                marginBottom: 8,
                background: "#0a0c00",
                padding: "4px 8px",
                borderRadius: 4,
                display: "inline-block",
              }}>
                📍 {co.location}
              </div>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>
                {co.note}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            marginTop: 28,
            background: "rgba(255,215,0,0.06)",
            border: "1px solid rgba(255,215,0,0.2)",
            borderRadius: 14,
            padding: "24px 28px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 8 }}>🗺️</div>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#FFD700", marginBottom: 8 }}>
            Laveen Is Literally 30 Minutes from TSMC
          </h3>
          <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7 }}>
            The most advanced semiconductor factory in the Western Hemisphere is being built 30 minutes from your parents&apos; house.
            They are paying premium wages to electricians who help wire it.
            This is a once-in-a-generation opportunity to be in the right place at the right time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
