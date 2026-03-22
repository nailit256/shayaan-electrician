"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const WIKI = "https://oldschool.runescape.wiki/images";

const quests = [
  {
    id: 1,
    title: "Apply for Electrician Helper Jobs",
    difficulty: "Easy",
    xp: "+500 XP",
    timing: "This Week",
    desc: "No experience needed. $16-20/hr to start. This is your foot in the door. Apply to 10+ jobs on Indeed and ZipRecruiter. Some will call back within days.",
    links: [
      { label: "Indeed - Entry Level Electrician", url: "https://www.indeed.com/q-electrician-entry-level-l-phoenix,-az-jobs.html" },
      { label: "ZipRecruiter - No Experience Helper", url: "https://www.ziprecruiter.com/Jobs/No-Experience-Electrician-Helper/-in-Phoenix,AZ" },
    ],
  },
  {
    id: 2,
    title: "Create a PEJATC TradeSchool Account",
    difficulty: "Easy",
    xp: "+1,000 XP",
    timing: "This Week",
    desc: "Go to the PEJATC application portal and create your account. This is the official IBEW Local 640 apprenticeship for Maricopa County. Application deadline is September 15, 2026 for the January 2027 class. $40 fee. Have your ASU transcripts ready (college algebra satisfies the math requirement).",
    links: [
      { label: "Create Account & Apply", url: "https://secure2.tradeschoolinc.com/v5/pejatc-org/login/accountCreate.php", primary: true },
      { label: "Full Requirements", url: "https://pejatc.org/how-to-apply/" },
    ],
  },
  {
    id: 3,
    title: "Walk into IEC Arizona (Non-Union)",
    difficulty: "Medium",
    xp: "+750 XP",
    timing: "This Month",
    desc: "Independent Electrical Contractors in Tempe. Walk-in only - no phone apps. Monday or Wednesday, 10am-11:30am or 1pm-3pm. 4-year program, get placed with a contractor immediately.",
    links: [
      { label: "IEC Arizona Info", url: "https://iecaz.org/apprenticeship" },
    ],
  },
  {
    id: 4,
    title: "Study for the Aptitude Test",
    difficulty: "Medium",
    xp: "+1,500 XP",
    timing: "Before Applying",
    desc: "The IBEW aptitude test is math (fractions, decimals, basic algebra) + reading comprehension. You took algebra at ASU - this should be easy. Practice anyway to max your score.",
    links: [
      { label: "Free IBEW Practice Test", url: "https://www.jobtestprep.com/free-ibew-practice-test" },
    ],
  },
  {
    id: 5,
    title: "Bookmark TSMC Apprenticeship Page",
    difficulty: "Easy",
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
    xp: "+250 XP",
    timing: "When Ready",
    desc: "The AZ Department of Economic Security maintains a full PDF of every registered apprenticeship in the state. There are dozens beyond IBEW - APS, city programs, specialty trades.",
    links: [
      { label: "All AZ Programs (PDF)", url: "https://des.az.gov/sites/default/files/Registered-Apprenticeship-Program-List.pdf" },
    ],
  },
];

export default function QuestLog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggleQuest = (id: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleExpand = (id: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section style={{
      background: "#1a0d05",
      borderTop: "2px solid #8b6914",
      borderBottom: "2px solid #8b6914",
      padding: "60px 20px",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }} ref={ref}>
        {/* Section Header - Quest List Style */}
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
            <Image src={`${WIKI}/Quest_point_icon.png`} alt="Quest" width={20} height={20} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 10,
              color: "#ffcc44",
              letterSpacing: 1,
            }}>
              Quest List
            </span>
          </div>
          <div style={{ padding: "14px 18px", background: "#2e1f0e", textAlign: "center" }}>
            <h2 style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: "clamp(10px, 2vw, 14px)",
              color: "#ffcc44",
              marginBottom: 10,
            }}>
              How to Start - Right Now
            </h2>
            <p style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 8,
              color: "#c8a96e",
            }}>
              {completed.size} / {quests.length} quests completed. Click to check them off.
            </p>
          </div>
        </motion.div>

        {/* Quest List */}
        <div style={{
          background: "#3d2b1f",
          border: "2px solid #8b6914",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 0 0 1px #2a1f0e, 0 4px 20px rgba(0,0,0,0.6)",
        }}>
          {quests.map((quest, i) => (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              style={{
                borderBottom: i < quests.length - 1 ? "1px solid #3d2b1f" : "none",
                background: completed.has(quest.id) ? "rgba(76,175,80,0.05)" : "#2e1f0e",
              }}
            >
              {/* Quest Row */}
              <div
                style={{
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  cursor: "pointer",
                  userSelect: "none",
                }}
                onClick={() => toggleExpand(quest.id)}
              >
                {/* Quest Status Indicator */}
                <div
                  onClick={(e) => { e.stopPropagation(); toggleQuest(quest.id); }}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 2,
                    border: `1px solid ${completed.has(quest.id) ? "#4caf50" : "#8b6914"}`,
                    background: completed.has(quest.id) ? "#4caf50" : "#1a0f05",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 8,
                    color: "#1a0f05",
                    flexShrink: 0,
                    cursor: "pointer",
                  }}
                >
                  {completed.has(quest.id) && "+"}
                </div>

                {/* Quest Title */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 7,
                    color: completed.has(quest.id) ? "#4caf50" : "#ffcc44",
                    textDecoration: completed.has(quest.id) ? "line-through" : "none",
                    opacity: completed.has(quest.id) ? 0.7 : 1,
                  }}>
                    {quest.title}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 6,
                    padding: "2px 6px",
                    background: quest.difficulty === "Easy" ? "rgba(76,175,80,0.15)" : "rgba(255,204,68,0.15)",
                    color: quest.difficulty === "Easy" ? "#4caf50" : "#ffcc44",
                    borderRadius: 2,
                    border: `1px solid ${quest.difficulty === "Easy" ? "rgba(76,175,80,0.3)" : "rgba(255,204,68,0.3)"}`,
                  }}>
                    {quest.difficulty}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 6,
                    padding: "2px 6px",
                    background: "rgba(255,204,68,0.1)",
                    color: "#ffcc44",
                    borderRadius: 2,
                    border: "1px solid rgba(255,204,68,0.2)",
                  }}>
                    {quest.xp}
                  </span>
                </div>
              </div>

              {/* Expanded Quest Details */}
              {expanded.has(quest.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.2 }}
                  style={{
                    padding: "0 14px 14px",
                    marginLeft: 24,
                  }}
                >
                  <div style={{
                    background: "#1a0f05",
                    border: "1px solid #3d2b1f",
                    borderRadius: 2,
                    padding: "10px 12px",
                    marginBottom: 10,
                  }}>
                    <div style={{
                      fontFamily: "var(--font-osrs), monospace",
                      fontSize: 6,
                      color: "#8b6914",
                      marginBottom: 6,
                    }}>
                      Timing: {quest.timing}
                    </div>
                    <p style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 11,
                      color: "#c8a96e",
                      lineHeight: 1.6,
                    }}>
                      {quest.desc}
                    </p>
                  </div>

                  {/* Reward Links */}
                  <div style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 6,
                    color: "#8b6914",
                    marginBottom: 8,
                  }}>
                    Rewards:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {quest.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          padding: "6px 12px",
                          borderRadius: 2,
                          fontFamily: "var(--font-osrs), monospace",
                          fontSize: 6,
                          textDecoration: "none",
                          background: "primary" in link && link.primary ? "#ffcc44" : "linear-gradient(180deg, #5a3a1a, #3d2b1f)",
                          color: "primary" in link && link.primary ? "#1a0f05" : "#ffcc44",
                          border: "1px solid #8b6914",
                          transition: "all 0.2s",
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: 16,
            background: "#3d2b1f",
            border: "2px solid #8b6914",
            borderRadius: 2,
            padding: "12px 16px",
          }}
        >
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
          }}>
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 7,
              color: "#c8a96e",
            }}>
              Quest Progress
            </span>
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 7,
              color: "#ffcc44",
            }}>
              {completed.size} / {quests.length}
            </span>
          </div>
          <div style={{
            background: "#1a0f05",
            border: "1px solid #3d2b1f",
            borderRadius: 1,
            height: 12,
            overflow: "hidden",
          }}>
            <div
              style={{
                width: `${(completed.size / quests.length) * 100}%`,
                height: "100%",
                background: completed.size === quests.length
                  ? "linear-gradient(90deg, #2d6b0e, #4caf50, #a3e635)"
                  : "linear-gradient(90deg, #1a4a07, #2d6b0e, #4caf50)",
                borderRadius: 1,
                transition: "width 0.5s ease",
                boxShadow: completed.size === quests.length ? "0 0 8px rgba(76,175,80,0.8)" : "none",
              }}
            />
          </div>
          {completed.size === quests.length && (
            <div style={{
              textAlign: "center",
              marginTop: 10,
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 8,
              color: "#ffcc44",
            }}>
              ALL QUESTS COMPLETE! Your journey to Journeyman begins!
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
