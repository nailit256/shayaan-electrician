import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
