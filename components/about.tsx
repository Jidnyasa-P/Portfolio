"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Code } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="container mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-foreground/80">
          I&apos;m a tech enthusiast passionate about creating innovative solutions. I enjoy working on real-world
          projects that solve practical problems and enhance user experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col justify-center"
        >
          <p className="mb-4">
            As a Computer Science student, I&apos;m constantly exploring new technologies and building projects that
            challenge me to grow. I&apos;ve worked on various projects including a language learning platform, a weather
            application, a recipe finder, and an AI-powered eBook.
          </p>

          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="mr-2 text-purple-500">•</span>
              <span>A language translation app that provides real-time text and voice translation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-purple-500">•</span>
              <span>A travel website using Tableau and Firebase to visualize tourism trends</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-purple-500">•</span>
              <span>A pet marketplace with real-time listings and adoption features</span>
            </li>
          </ul>

          <p>
            I believe in continuous learning and applying my knowledge to create meaningful solutions that make a
            positive impact.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-4"
        >
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-purple-500" />
                Academic Background
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div variants={fadeIn} className="mb-3 border-l-2 border-purple-500 pl-4">
                <h4 className="font-medium">B.Tech in Computer Engineering</h4>
                <p className="text-sm text-foreground/70">MMCOE Pune</p>
                <p className="text-xs text-foreground/60">2024 - 2028</p>
                <p className="text-xs text-foreground/80">CGPA: 9.86/10 in First Year</p>
              </motion.div>

              <motion.div variants={fadeIn} className="mb-3 border-l-2 border-blue-500 pl-4">
                <h4 className="font-medium">Higher Secondary Education (HSC)</h4>
                <p className="text-sm text-foreground/70">Arham Junior College</p>
                <p className="text-xs text-foreground/60">2022 - 2024</p>
                <p className="text-xs text-foreground/80">Grade: 80.33%</p>
              </motion.div>

              <motion.div variants={fadeIn} className="border-l-2 border-purple-500 pl-4">
                <h4 className="font-medium">Secondary Education (I.C.S.E)</h4>
                <p className="text-sm text-foreground/70">Rosary High School</p>
                <p className="text-xs text-foreground/60">2021 - 2022</p>
                <p className="text-xs text-foreground/80">Grade: 97%</p>
              </motion.div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-blue-500" />
                Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <motion.li variants={fadeIn} className="flex items-center">
                  <Code className="mr-2 h-4 w-4 text-purple-500" />
                  <span>Web Development</span>
                </motion.li>
                <motion.li variants={fadeIn} className="flex items-center">
                  <Code className="mr-2 h-4 w-4 text-purple-500" />
                  <span>Data Science</span>
                </motion.li>
                <motion.li variants={fadeIn} className="flex items-center">
                  <Code className="mr-2 h-4 w-4 text-purple-500" />
                  <span>AI & Machine Learning</span>
                </motion.li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
