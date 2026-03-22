"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const WIKI = "https://oldschool.runescape.wiki/images";

const links = [
  { label: "Apply to PEJATC (IBEW 640)", url: "https://secure2.tradeschoolinc.com/v5/pejatc-org/login/accountCreate.php", primary: true },
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
    <section style={{ padding: "60px 20px 80px", maxWidth: 800, margin: "0 auto" }} ref={ref}>
      {/* Section Header - Bank Style */}
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
          <Image src={`${WIKI}/Coins_10000.png`} alt="Bank" width={20} height={20} unoptimized style={{ imageRendering: "pixelated" }} />
          <span style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: 10,
            color: "#ffcc44",
            letterSpacing: 1,
          }}>
            Bank
          </span>
        </div>
        <div style={{ padding: "14px 18px", background: "#2e1f0e", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: "clamp(10px, 2vw, 14px)",
            color: "#ffcc44",
            marginBottom: 10,
          }}>
            Your Rewards Await
          </h2>
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: 14,
            color: "#c8a96e",
            lineHeight: 1.6,
          }}>
            Every link you need is right here. Start with the PEJATC application - that&apos;s the main quest. Everything else is side quests that boost your odds.
          </p>
        </div>
      </motion.div>

      {/* Bank Slots Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          background: "#3d2b1f",
          border: "2px solid #8b6914",
          borderRadius: 2,
          padding: "14px",
          marginBottom: 20,
          boxShadow: "0 0 0 1px #2a1f0e, 0 4px 20px rgba(0,0,0,0.6)",
        }}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 8,
        }}>
          {links.map((link, i) => (
            <motion.a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.03 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 12px",
                borderRadius: 2,
                fontFamily: "var(--font-osrs), monospace",
                fontSize: 6,
                textDecoration: "none",
                textAlign: "center",
                background: link.primary
                  ? "linear-gradient(180deg, #ffcc44, #c8a96e)"
                  : "#1a0f05",
                color: link.primary ? "#1a0f05" : "#c8a96e",
                border: link.primary
                  ? "2px solid #ffcc44"
                  : "1px solid #3d2b1f",
                boxShadow: link.primary
                  ? "0 0 15px rgba(255,204,68,0.3)"
                  : "none",
                gridColumn: link.primary ? "1 / -1" : "auto",
                transition: "all 0.2s",
              }}
            >
              {link.primary && (
                <Image
                  src={`${WIKI}/Quest_point_icon.png`}
                  alt=""
                  width={14}
                  height={14}
                  unoptimized
                  style={{ imageRendering: "pixelated", marginRight: 8 }}
                />
              )}
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Withdraw All Button */}
      <motion.a
        href="https://secure2.tradeschoolinc.com/v5/pejatc-org/login/accountCreate.php"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          display: "block",
          background: "linear-gradient(180deg, #5a3a1a, #3d2b1f)",
          border: "2px solid #8b6914",
          borderRadius: 2,
          padding: "14px 20px",
          textAlign: "center",
          textDecoration: "none",
          marginBottom: 24,
          boxShadow: "0 0 0 1px #2a1f0e",
        }}
      >
        <span style={{
          fontFamily: "var(--font-osrs), monospace",
          fontSize: 10,
          color: "#ffcc44",
        }}>
          WITHDRAW ALL - Start Your Journey
        </span>
      </motion.a>

      {/* Final Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          background: "#3d2b1f",
          border: "2px solid rgba(255,204,68,0.4)",
          borderRadius: 2,
          padding: "20px",
          textAlign: "center",
          boxShadow: "0 0 30px rgba(255,204,68,0.05)",
        }}
      >
        <Image
          src={`${WIKI}/Max_cape.png`}
          alt="Max Cape"
          width={32}
          height={32}
          unoptimized
          style={{ imageRendering: "pixelated", marginBottom: 14 }}
        />
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: 16,
          color: "#ffcc44",
          lineHeight: 1.6,
          fontStyle: "italic",
          marginBottom: 14,
        }}>
          &quot;If you can grind to 99, you can grind to Journeyman.&quot;
        </p>
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: 13,
          color: "#c8a96e",
          lineHeight: 1.7,
          maxWidth: 500,
          margin: "0 auto",
        }}>
          This page was built specifically for you, Shayaan. Not a template.
          Not a generic career guide. Every word was chosen because someone believes
          in you enough to put in the work.
        </p>
        <p style={{
          fontFamily: "var(--font-osrs), monospace",
          fontSize: 8,
          color: "#8b6914",
          marginTop: 16,
        }}>
          Arizona needs you. The grind starts now.
        </p>
        <div style={{
          marginTop: 20,
          fontFamily: "var(--font-osrs), monospace",
          fontSize: 6,
          color: "#3d2b1f",
        }}>
          Built by Shopto | March 2026 | Links verified March 2026
        </div>
      </motion.div>
    </section>
  );
}
