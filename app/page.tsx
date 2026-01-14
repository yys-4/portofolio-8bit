import { HeroSection } from "@/components/hero-section";
import { SkillsInventory } from "@/components/skills-inventory";
import { QuestLog } from "@/components/quest-log";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="pixel-cursor">
      <HeroSection />
      <SkillsInventory />
      <QuestLog />
      <ContactSection />
    </main>
  );
}
