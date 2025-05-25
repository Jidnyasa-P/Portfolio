"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Globe, Search, Book, Cloud, ShoppingBag, Map } from "lucide-react"

const projects = [
  {
    title: "LanguaLive – Language Translation App",
    description: "A cross-platform app supporting real-time text and voice translation using Groq API.",
    icon: <Globe className="h-10 w-10" />,
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/Jidnyasa-P/Hackazards_LanguaLive.git",
  },
  {
    title: "Plan My Voyage – Travel & Tourism Analytics",
    description: "A travel website using Tableau and Firebase to visualize tourism trends and plan budgets.",
    icon: <Map className="h-10 w-10" />,
    technologies: ["HTML", "CSS", "JavaScript", "Tableau", "Firebase"],
    github: "https://github.com/Jidnyasa-P/PlanMyVoyage.git",
  },
  {
    title: "PawPalace – Pet Marketplace",
    description: "A HackSprint project for adopting and shopping for pets online with real-time listings.",
    icon: <ShoppingBag className="h-10 w-10" />,
    technologies: ["HTML", "CSS", "Tailwind CSS", "Firebase"],
    github: "https://github.com/Jidnyasa-P/Hacksprintv6.o_W02_TechTrio.git",
  },
  {
    title: "ClimaVista – Real-Time Weather App",
    description: "A Python-based weather app using OpenWeather API with real-time city or coordinate-based search.",
    icon: <Cloud className="h-10 w-10" />,
    technologies: ["Python", "Tkinter"],
    github: "https://github.com/Jidnyasa-P/ClimaVista.git",
  },
  {
    title: "Recipe Hunter – Recipe Finder Website",
    description: "Ingredient-based recipe search with filtering, login, and a rating system.",
    icon: <Search className="h-10 w-10" />,
    technologies: ["HTML", "CSS", "JavaScript", "Spoonacular API"],
    github: "https://github.com/Jidnyasa-P/RECIPE-HUNTER.git",
  },
  {
    title: "Budget Travel eBook – AI-Powered Guide",
    description: "AI-prompt engineered travel guide published on Amazon KDP.",
    icon: <Book className="h-10 w-10" />,
    technologies: ["Prompt Engineering", "KDP"],
    link: "https://www.amazon.com/dp/B0F1H6S1GT",
    isAmazon: true,
  },
]

export default function Projects() {
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
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-foreground/80">
          Here are some of the projects I&apos;ve worked on. Each project has helped me develop different skills and
          solve unique challenges.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={fadeIn}>
            <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-md hover:border-purple-500/50 dark:hover:border-purple-400/50">
              <CardHeader>
                <div className="mb-4 text-purple-500 dark:text-purple-400">{project.icon}</div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground dark:bg-accent/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.isAmazon ? project.link : project.github} target="_blank" rel="noopener noreferrer">
                    {project.isAmazon ? (
                      <>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View on Amazon
                      </>
                    ) : (
                      <>
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </>
                    )}
                  </a>
                </Button>
                {!project.isAmazon && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
