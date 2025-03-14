import Hero from "@/components/hero"
import Services from "@/components/services"
import HowWeThinkTeaser from "@/components/how-we-think-teaser"
import ProjectCTA from "@/components/project-cta"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="how-we-think">
        <HowWeThinkTeaser />
      </div>
      <ProjectCTA />
      <div id="contact">
        <Contact />
      </div>
    </main>
  )
}

