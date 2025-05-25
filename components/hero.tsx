"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import ParticleBackground from "./particle-background"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <ParticleBackground />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block">Hi, I&apos;m</span>
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Jidnyasa Patil
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-foreground/80">
            A Computer Science student and aspiring Full Stack Web Developer
          </h2>

          <p className="text-foreground/70 max-w-md">
            Passionate about creating innovative solutions and exploring new technologies. Recently developed
            LanguaLive, a platform for language learning.
          </p>

          <div className="flex space-x-4 pt-4">
            <Button onClick={scrollToAbout}>Explore My Work</Button>
            <Button
              variant="outline"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center overflow-hidden">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jidnyasa-lxcyPsedJCLxUKou1BJdYs8hPfnY5V.png"
                  alt="Jidnyasa Patil"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <ArrowDown className="h-6 w-6 text-foreground/70" />
      </div>
    </div>
  )
}
