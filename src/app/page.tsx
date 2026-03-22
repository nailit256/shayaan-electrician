"use client";

import Hero from "@/components/Hero";
import CharacterSheet from "@/components/CharacterSheet";
import RuneScapeSection from "@/components/RuneScapeSection";
import CircleKVsTrade from "@/components/CircleKVsTrade";
import ShakibWarning from "@/components/ShakibWarning";
import MinecraftSection from "@/components/MinecraftSection";
import PokemonSection from "@/components/PokemonSection";
import GrinderSection from "@/components/GrinderSection";
import ArizonaBoom from "@/components/ArizonaBoom";
import TwoFutures from "@/components/TwoFutures";
import QuestLog from "@/components/QuestLog";
import ApplyNow from "@/components/ApplyNow";

export default function Home() {
  return (
    <main>
      <Hero />
      <CharacterSheet />
      <RuneScapeSection />
      <CircleKVsTrade />
      <ShakibWarning />
      <MinecraftSection />
      <PokemonSection />
      <GrinderSection />
      <ArizonaBoom />
      <TwoFutures />
      <QuestLog />
      <ApplyNow />
    </main>
  );
}
