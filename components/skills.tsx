"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Globe, Wrench, Languages, MessageSquare, Brain, Clock, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const technicalSkills = [
  {
    title: "Programming",
    icon: <Code className="h-5 w-5" />,
    skills: ["Python", "C", "C++", "JavaScript", "PHP"],
  },
  {
    title: "Web Development",
    icon: <Globe className="h-5 w-5" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Data Analytics",
    icon: <Lightbulb className="h-5 w-5" />,
    skills: ["Excel", "MySQL", "Tableau", "Data Analysis"],
  },
  {
    title: "Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["Git", "GitHub", "Firebase", "Tkinter", "MATLAB", "Postman API", "JSON"],
  },
  {
    title: "Languages",
    icon: <Languages className="h-5 w-5" />,
    skills: ["English", "Hindi", "Marathi", "French"],
  },
]

// Update the softSkills array to add Critical Thinking
const softSkills = [
  {
    title: "Communication",
    icon: <MessageSquare className="h-5 w-5" />,
    description: "Effective verbal and written communication skills",
  },
  {
    title: "Leadership",
    icon: <Code className="h-5 w-5" />,
    description: "Experience leading teams and projects",
  },
  {
    title: "Teamwork & Collaboration",
    icon: <Code className="h-5 w-5" />,
    description: "Working effectively in diverse teams",
  },
  {
    title: "Analytical Thinking",
    icon: <Brain className="h-5 w-5" />,
    description: "Breaking down complex problems systematically",
  },
  {
    title: "Critical Thinking",
    icon: <Lightbulb className="h-5 w-5" />,
    description: "Evaluating information objectively to form reasoned judgments",
  },
  {
    title: "Problem Solving",
    icon: <Code className="h-5 w-5" />,
    description: "Finding creative solutions to challenges",
  },
  {
    title: "Time Management",
    icon: <Clock className="h-5 w-5" />,
    description: "Prioritizing tasks and meeting deadlines",
  },
]

type SkillType = "technical" | "soft"

export default function Skills() {
  const [activeSkillType, setActiveSkillType] = useState<SkillType>("technical")

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
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-foreground/80 mb-8">
          My professional skills and competencies that I bring to projects.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <Button
            variant={activeSkillType === "technical" ? "default" : "outline"}
            onClick={() => setActiveSkillType("technical")}
            className="min-w-[120px]"
          >
            Technical Skills
          </Button>
          <Button
            variant={activeSkillType === "soft" ? "default" : "outline"}
            onClick={() => setActiveSkillType("soft")}
            className="min-w-[120px]"
          >
            Soft Skills
          </Button>
        </div>
      </motion.div>

      {activeSkillType === "technical" && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {technicalSkills.map((category) => (
            <motion.div key={category.title} variants={fadeIn}>
              <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-purple-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center">
                    <span className="mr-2 text-purple-500">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-accent hover:bg-accent/80 transition-colors duration-200 dark:bg-accent/70 dark:hover:bg-accent/50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeSkillType === "soft" && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {softSkills.map((skill) => (
            <motion.div key={skill.title} variants={fadeIn}>
              <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-purple-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <span className="mr-2 text-purple-500">{skill.icon}</span>
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
