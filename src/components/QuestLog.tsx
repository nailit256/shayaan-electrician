"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const quests = [
  {
    id: 1,
    title: "Apply for Electrician Helper Jobs",
    difficulty: "Easy",
    diffColor: "#22c55e",
    xp: "+500 XP",
    timing: "This Week",
    desc: "No experience needed. $16–20/hr to start. This is your foot in the door. Apply to 10+ jobs on Indeed and ZipRecruiter. Some will call back within days.",
    links: [
      { label: "Indeed — Entry Level Electrician", url: "https://www.indeed.com/q-electrician-entry-level-l-phoenix,-az-jobs.html" },
      { label: "ZipRecruiter — No Experience Helper", url: "https://www.ziprecruiter.com/Jobs/No-Experience-Electrician-Helper/-in-Phoenix,AZ" },
    ],
  },
  {
    id: 2,
    title: "Create a PEJATC TradeSchool Account",
    difficulty: "Easy",
    diffColor: "#22c55e",
    xp: "+1,000 XP",
    timing: "This Week",
    desc: "Go to the PEJATC application portal and create your account. This is the official IBEW Local 640 apprenticeship for Maricopa County. Application deadline is September 15, 2026 for the January 2027 class. $40 fee. Have your ASU transcripts ready (college algebra satisfies the math requirement).",
    links: [
      { label: "⭐ Create Account & Apply", url: "https://secure2.tradeschoolinc.com/v5/pejatc-org/login/accountCreate.php" },
      { label: "Full Requirements", url: "https://pejatc.org/how-to-apply/" },
    ],
  },
  {
    id: 3,
    title: "Walk into IEC Arizona (Non-Union)",
    difficulty: "Medium",
    diffColor: "#FFD700",
    xp: "+750 XP",
    timing: "This Month",
    desc: "Independent Electrical Contractors in Tempe. Walk-in only — no phone apps. Monday or Wednesday, 10am–11:30am or 1pm–3pm. 4-year program, get placed with a contractor immediately.",
    links: [
      { label: "IEC Arizona Info", url: "https://iecaz.org/apprenticeship" },
    ],
  },
  {
    id: 4,
    title: "Study for the Aptitude Test",
    difficulty: "Medium",
    diffColor: "#FFD700",
    xp: "+1,500 XP",
    timing: "Before Applying",
    desc: "The IBEW aptitude test is math (fractions, decimals, basic algebra) + reading comprehension. You took algebra at ASU — this should be easy. Practice anyway to max your score.",
    links: [
      { label: "Free IBEW Practice Test", url: "https://www.jobtestprep.com/free-ibew-practice-test" },
    ],
  },
  {
    id: 5,
    title: "Bookmark TSMC Apprenticeship Page",
    difficulty: "Easy",
    diffColor: "#22c55e",
    xp: "+250 XP",
    timing: "Now + Check Monthly",
    desc: "TSMC is launching a Technician Apprenticeship Program with applications opening in 2026. They also have a Construction Electrical Technician role open RIGHT NOW. Being at a chip fab is the bleeding edge of the trade.",
    links: [
      { label: "TSMC Apprenticeship", url: "https://www.tsmc.com/static/abouttsmcaz/apprenticeship.htm" },
      { label: "TSMC Electrical Technician Job", url: "https://careers.tsmc.com/en_US/careers/JobDetail/Construction-Electrical-Technician/18527" },
    ],
  },
  {
    id: 6,
    title: "Call IBEW 640 Union Hall",
    difficulty: "Medium",
    diffColor: "#FFD700",
    xp: "+500 XP",
    timing: "This Week",
    desc: "Call (602) 264-4506 and ask about current wait times and openings. Even better: show up in person at 5808 N 7th St, Phoenix. Being proactive makes a strong impression.",
    links: [
      { label: "IBEW 640 Open Jobs", url: "https://www.ibew640.com/openjobs/" },
      { label: "IBEW 640 Homepage", url: "https://www.ibew640.com/" },
    ],
  },
  {
    id: 7,
    title: "Check City of Phoenix Apprenticeship",
    difficulty: "Easy",
    diffColor: "#22c55e",
    xp: "+750 XP",
    timing: "This Month",
    desc: "The City of Phoenix has its own electrician apprenticeship. Government stability, city benefits, pension. Work on airports, water treatment plants, public infrastructure.",
    links: [
      { label: "City of Phoenix Apprentice Info", url: "https://www.phoenix.gov/administration/departments/hr/careers/apprenticeships/electrician-apprentice.html" },
    ],
  },
  {
    id: 8,
    title: "Browse All AZ Apprenticeship Programs",
    difficulty: "Easy",
    diffColor: "#22c55e",
    xp: "+250 XP",
    timing: "When Ready",
    desc: "The AZ Department of Economic Security maintains a full PDF of every registered apprenticeship in the state. There are dozens beyond IBEW — APS, city programs, specialty trades.",
    links: [
      { label: "All AZ Programs (PDF)", url: "https://des.az.gov/sites/default/files/Registered-Apprenticeship-Program-List.pdf" },
    ],
  },
];

export default function QuestLog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const toggleQuest = (id: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section style={{
      background: "linear-gradient(180deg, #0D0D0D, #0a0800, #0D0D0D)",
      borderTop: "1px solid #252525",
      borderBottom: "1px solid #252525",
      padding: "70px 20px",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 44 }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#FFD700", marginBottom: 8 }}>
            Your Quest Log
          </div>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, marginBottom: 8 }}>
            How to Start — Right Now
          </h2>
          <p style={{ color: "#777", fontSize: 15 }}>
            {completed.size} / {quests.length} quests completed. Click to check them off.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {quests.map((quest, i) => (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              style={{
                background: completed.has(quest.id) ? "rgba(34,197,94,0.04)" : "#141414",
                border: `1px solid ${completed.has(quest.id) ? "rgba(34,197,94,0.2)" : "#252525"}`,
                borderRadius: 14,
                overflow: "hidden",
                transition: "all 0.3s",
              }}
            >
              <div
                onClick={() => toggleQuest(quest.id)}
                style={{
                  padding: "18px 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                {/* Checkbox */}
                <div style={{
                  width: 26, height: 26, borderRadius: 6,
                  border: `2px solid ${completed.has(quest.id) ? "#22c55e" : "#333"}`,
                  background: completed.has(quest.id) ? "rgba(34,197,94,0.15)" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  fontSize: 14,
                  transition: "all 0.2s",
                }}>
                  {completed.has(quest.id) && "✓"}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{
                    fontWeight: 700,
                    fontSize: 15,
                    color: completed.has(quest.id) ? "#555" : "#ddd",
                    textDecoration: completed.has(quest.id) ? "line-through" : "none",
                    transition: "all 0.2s",
                  }}>
                    Quest {quest.id}: {quest.title}
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 6, flexWrap: "wrap" }}>
                    <span style={{
                      fontSize: 10, fontWeight: 700, fontFamily: "monospace",
                      padding: "2px 8px", borderRadius: 999,
                      background: `${quest.diffColor}15`, color: quest.diffColor,
                      border: `1px solid ${quest.diffColor}30`,
                    }}>
                      {quest.difficulty}
                    </span>
                    <span style={{
                      fontSize: 10, fontWeight: 700, fontFamily: "monospace",
                      padding: "2px 8px", borderRadius: 999,
                      background: "rgba(255,215,0,0.08)", color: "#FFD700",
                      border: "1px solid rgba(255,215,0,0.2)",
                    }}>
                      {quest.xp}
                    </span>
                    <span style={{
                      fontSize: 10, fontWeight: 700, fontFamily: "monospace",
                      padding: "2px 8px", borderRadius: 999,
                      background: "rgba(255,255,255,0.04)", color: "#777",
                      border: "1px solid #252525",
                    }}>
                      {quest.timing}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description & links */}
              <div style={{
                padding: "0 22px 18px",
                paddingLeft: 62,
              }}>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, marginBottom: 12 }}>
                  {quest.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {quest.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "7px 14px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 600,
                        textDecoration: "none",
                        background: link.label.includes("⭐") ? "#FFD700" : "rgba(255,107,0,0.12)",
                        color: link.label.includes("⭐") ? "#000" : "#FF6B00",
                        border: link.label.includes("⭐") ? "none" : "1px solid rgba(255,107,0,0.25)",
                        transition: "opacity 0.2s",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            marginTop: 28,
            background: "#141414",
            border: "1px solid #252525",
            borderRadius: 12,
            padding: "16px 20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontFamily: "monospace", fontSize: 12, color: "#888" }}>Quest Progress</span>
            <span style={{ fontFamily: "monospace", fontSize: 12, color: "#FFD700" }}>
              {completed.size} / {quests.length}
            </span>
          </div>
          <div style={{ background: "#1a1a1a", borderRadius: 4, height: 10, overflow: "hidden" }}>
            <div
              style={{
                width: `${(completed.size / quests.length) * 100}%`,
                height: "100%",
                background: completed.size === quests.length
                  ? "linear-gradient(90deg, #22c55e, #FFD700)"
                  : "linear-gradient(90deg, #FF6B00, #FFD700)",
                borderRadius: 4,
                transition: "width 0.5s ease",
                boxShadow: "0 0 8px rgba(255,215,0,0.3)",
              }}
            />
          </div>
          {completed.size === quests.length && (
            <div style={{ textAlign: "center", marginTop: 12, fontFamily: "monospace", fontSize: 14, color: "#FFD700" }}>
              🏆 ALL QUESTS COMPLETE! Your journey to Journeyman begins!
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
