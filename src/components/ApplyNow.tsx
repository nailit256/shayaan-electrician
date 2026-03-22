"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  { label: "⭐ Apply to PEJATC (IBEW 640)", url: "https://secure2.tradeschoolinc.com/v5/pejatc-org/login/accountCreate.php", primary: true },
  { label: "PEJATC Requirements", url: "https://pejatc.org/how-to-apply/", primary: false },
  { label: "IEC Arizona (Non-Union)", url: "https://iecaz.org/apprenticeship", primary: false },
  { label: "City of Phoenix Apprentice", url: "https://www.phoenix.gov/administration/departments/hr/careers/apprenticeships/electrician-apprentice.html", primary: false },
  { label: "TSMC Apprenticeship (2026)", url: "https://www.tsmc.com/static/abouttsmcaz/apprenticeship.htm", primary: false },
  { label: "TSMC Electrical Technician Job", url: "https://careers.tsmc.com/en_US/careers/JobDetail/Construction-Electrical-Technician/18527", primary: false },
  { label: "Indeed: Entry Level Electrician", url: "https://www.indeed.com/q-electrician-entry-level-l-phoenix,-az-jobs.html", primary: false },
  { label: "ZipRecruiter: No Experience", url: "https://www.ziprecruiter.com/Jobs/No-Experience-Electrician-Helper/-in-Phoenix,AZ", primary: false },
  { label: "IBEW 640 Open Jobs", url: "https://www.ibew640.com/openjobs/", primary: false },
  { label: "IBEW Practice Test (Free)", url: "https://www.jobtestprep.com/free-ibew-practice-test", primary: false },
  { label: "All AZ Apprenticeships (PDF)", url: "https://des.az.gov/sites/default/files/Registered-Apprenticeship-Program-List.pdf", primary: false },
];

export default function ApplyNow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "70px 20px 90px", maxWidth: 800, margin: "0 auto" }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: 44 }}
      >
        <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 900, marginBottom: 12 }}>
          Ready to <span style={{ color: "#FFD700" }}>Level Up</span>?
        </h2>
        <p style={{ color: "#777", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
          Every link you need is right here. Start with the PEJATC application — that&apos;s
          the main quest. Everything else is side quests that boost your odds.
        </p>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 10,
        marginBottom: 36,
      }}>
        {links.map((link, i) => (
          <motion.a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
            whileHover={{ scale: 0.98 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 18px",
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              background: link.primary ? "#FFD700" : "#141414",
              color: link.primary ? "#000" : "#ccc",
              border: link.primary ? "none" : "1px solid #252525",
              gridColumn: link.primary ? "1 / -1" : "auto",
              transition: "border-color 0.2s",
            }}
          >
            {link.label} →
          </motion.a>
        ))}
      </div>

      {/* Final message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          textAlign: "center",
          padding: "32px 28px",
          background: "linear-gradient(135deg, #0c0c00, #0a0600)",
          border: "1px solid rgba(255,215,0,0.15)",
          borderRadius: 16,
          boxShadow: "0 0 40px rgba(255,215,0,0.04)",
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 14 }}>🔱</div>
        <p style={{ fontSize: 18, fontWeight: 700, color: "#FFD700", lineHeight: 1.6, marginBottom: 14 }}>
          &quot;If you can grind to 99, you can grind to Journeyman.&quot;
        </p>
        <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
          This page was built specifically for you, Shayaan. Not a template.
          Not a generic career guide. Every word was chosen because someone believes
          in you enough to put in the work.
        </p>
        <p style={{ fontSize: 14, color: "#555", marginTop: 14 }}>
          Arizona needs you. The grind starts now. ⚡
        </p>
        <div style={{
          marginTop: 20,
          fontSize: 11,
          fontFamily: "monospace",
          color: "#333",
        }}>
          Built with 🔱 by Shopto · March 2026 · Links verified March 2026
        </div>
      </motion.div>
    </section>
  );
}
