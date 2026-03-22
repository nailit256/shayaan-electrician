"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const WIKI = "https://oldschool.runescape.wiki/images";

const companies = [
  { name: "TSMC", investment: "$65 Billion", location: "Chandler, AZ", note: "30 min from Laveen. World's most advanced chip fab. Needs thousands of electricians for construction + operations.", icon: `${WIKI}/Mining_icon.png` },
  { name: "Intel", investment: "$20B+", location: "Chandler (Ocotillo)", note: "Major fab expansion. Intel Foundry is hiring trade workers at scale.", icon: `${WIKI}/Smithing_icon.png` },
  { name: "Microsoft", investment: "$3.3B data centers", location: "Phoenix Metro", note: "Massive data center expansion. Data centers eat power. Power requires electricians.", icon: `${WIKI}/Magic_icon.png` },
  { name: "Google", investment: "Multiple campuses", location: "Mesa, AZ", note: "Google's cloud infrastructure requires full-time electrical maintenance crews.", icon: `${WIKI}/Runecraft_icon.png` },
  { name: "Amazon (AWS)", investment: "Billion+", location: "Phoenix Metro", note: "AWS has multiple zones in Arizona. Each requires hundreds of electricians to build and maintain.", icon: `${WIKI}/Crafting_icon.png` },
  { name: "Meta", investment: "Data centers", location: "Mesa + Surprise", note: "AI training data centers. Massive power demands. Non-stop electrical work.", icon: `${WIKI}/Herblore_icon.png` },
];

export default function ArizonaBoom() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{
      background: "#1a0d05",
      borderTop: "2px solid #8b6914",
      borderBottom: "2px solid #8b6914",
      padding: "60px 20px",
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }} ref={ref}>
        {/* Section Header - World Map Style */}
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
            <Image src={`${WIKI}/Agility_icon.png`} alt="World" width={20} height={20} unoptimized style={{ imageRendering: "pixelated" }} />
            <span style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: 10,
              color: "#ffcc44",
              letterSpacing: 1,
            }}>
              World Map
            </span>
          </div>
          <div style={{ padding: "14px 18px", background: "#2e1f0e", textAlign: "center" }}>
            <h2 style={{
              fontFamily: "var(--font-osrs), monospace",
              fontSize: "clamp(10px, 2vw, 14px)",
              color: "#ffcc44",
              marginBottom: 10,
            }}>
              Arizona Is On Fire
            </h2>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: 14,
              color: "#c8a96e",
              lineHeight: 1.6,
            }}>
              Laveen, AZ is sitting at the center of the biggest construction boom in American history.
              Someone has to wire all of this. That someone can be you.
            </p>
          </div>
        </motion.div>

        {/* Zone Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 14,
        }}>
          {companies.map((co, i) => (
            <motion.div
              key={co.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              style={{
                background: "#3d2b1f",
                border: "2px solid #8b6914",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 0 0 1px #2a1f0e, 0 4px 16px rgba(0,0,0,0.5)",
              }}
            >
              {/* Zone Header */}
              <div style={{
                background: "linear-gradient(180deg, #5a3a1a, #3d2b1f)",
                borderBottom: "1px solid #8b6914",
                padding: "6px 10px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}>
                <Image src={co.icon} alt={co.name} width={14} height={14} unoptimized style={{ imageRendering: "pixelated" }} />
                <span style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 7,
                  color: "#ffcc44",
                }}>
                  You have entered: {co.name} Zone
                </span>
              </div>

              <div style={{ padding: "12px", background: "#2e1f0e" }}>
                {/* Investment */}
                <div style={{
                  fontFamily: "var(--font-osrs), monospace",
                  fontSize: 10,
                  color: "#ffcc44",
                  marginBottom: 8,
                }}>
                  {co.investment}
                </div>

                {/* Location Tag */}
                <div style={{
                  display: "inline-block",
                  background: "#1a0f05",
                  border: "1px solid #3d2b1f",
                  borderRadius: 2,
                  padding: "4px 8px",
                  marginBottom: 10,
                }}>
                  <span style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 6,
                    color: "#8b6914",
                  }}>
                    Location: {co.location}
                  </span>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 11,
                  color: "#c8a96e",
                  lineHeight: 1.6,
                  marginBottom: 10,
                }}>
                  {co.note}
                </p>

                {/* Zone Stats */}
                <div style={{
                  background: "#1a0f05",
                  border: "1px solid #3d2b1f",
                  borderRadius: 2,
                  padding: "6px 10px",
                }}>
                  <div style={{
                    fontFamily: "var(--font-osrs), monospace",
                    fontSize: 6,
                    color: "#4caf50",
                  }}>
                    Danger level: None | Skill req: Electrician 40+ | Reward: $45-55/hr
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TSMC Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            marginTop: 20,
            background: "#3d2b1f",
            border: "2px solid rgba(255,204,68,0.4)",
            borderRadius: 2,
            padding: "16px 20px",
            textAlign: "center",
          }}
        >
          <Image src={`${WIKI}/Construction_icon.png`} alt="Construction" width={28} height={28} unoptimized style={{ imageRendering: "pixelated", marginBottom: 10 }} />
          <div style={{
            fontFamily: "var(--font-osrs), monospace",
            fontSize: 10,
            color: "#ffcc44",
            marginBottom: 10,
          }}>
            Laveen Is Literally 30 Minutes from TSMC
          </div>
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: 13,
            color: "#c8a96e",
            lineHeight: 1.7,
          }}>
            The most advanced semiconductor factory in the Western Hemisphere is being built 30 minutes from your parents&apos; house.
            They are paying premium wages to electricians who help wire it.
            This is a once-in-a-generation opportunity to be in the right place at the right time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
