import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <section id="home" className="py-16 md:py-24">
          <Hero />
        </section>

        <section id="about" className="py-16 md:py-24">
          <About />
        </section>

        <section id="skills" className="py-16 md:py-24">
          <Skills />
        </section>

        <section id="projects" className="py-16 md:py-24">
          <Projects />
        </section>

        <section id="achievements" className="py-16 md:py-24">
          <Achievements />
        </section>

        <section id="resume" className="py-16 md:py-24">
          <Resume />
        </section>

        <section id="contact" className="py-16 md:py-24">
          <Contact />
        </section>
      </div>

      <Footer />
      <Toaster />
    </main>
  )
}
