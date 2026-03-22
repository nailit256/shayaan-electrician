import type { Metadata } from "next";
import "./globals.css";
import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-osrs",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shayaan — Time to Level Up ⚡",
  description: "A personalized career guide built just for Shayaan. The electrician path in Arizona is the best move you can make right now.",
  openGraph: {
    title: "Shayaan — Time to Level Up ⚡",
    description: "The IBEW apprenticeship is a RuneScape skill grind. Max out your Electrician skill and earn $100K+ by 26.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${pressStart.variable}`}>
        {children}
      </body>
    </html>
  );
}
