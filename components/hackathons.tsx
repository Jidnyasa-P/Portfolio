"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, ExternalLink } from "lucide-react"

const hackathons = [
  {
    title: "Codemasters Solo Showdown Challenge",
    organizer: "4Excelerate",
    link: "https://experience.4excelerate.org/verifications/certificate/608070c01050d0e0-0d0407030-04040a060-1b09B4E7A-A232BeH3K9PbV8C6D781Q7F13/PATIL",
  },
  {
    title: "Hacksprint (36 hrs hackathon)",
    organizer: "MMCOE",
    link: "https://certificate.givemycertificate.com/c/a978da0c-8225-4a21-82b9-4b3c65d33384",
  },
  {
    title: "Hackazards",
    organizer: "World's Largest Hackathon",
    link: "#",
  },
]

export default function Hackathons() {
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
        <h2 className="text-3xl font-bold mb-4">Hackathons and Coding Challenges</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-foreground/80">
          Competitions and challenges where I've applied my skills under pressure.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {hackathons.map((hackathon) => (
          <motion.div key={hackathon.title} variants={fadeIn}>
            <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-md hover:border-purple-500/50 dark:hover:border-purple-400/50">
              <CardHeader>
                <div className="mb-2 text-purple-500 dark:text-purple-400">
                  <Trophy className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{hackathon.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">Organized by {hackathon.organizer}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a href={hackathon.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
