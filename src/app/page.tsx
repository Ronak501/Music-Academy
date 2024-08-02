import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
    </main>
  );
}
