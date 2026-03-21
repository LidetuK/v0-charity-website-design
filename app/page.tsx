import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { ProgramsSection } from "@/components/programs-section"
import { ImpactSection } from "@/components/impact-section"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <ImpactSection />
      <GetInvolvedSection />
      <Footer />
    </main>
  )
}
