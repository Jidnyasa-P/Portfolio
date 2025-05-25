"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"

export default function Resume() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-foreground/80">
          Download my resume to know more about my academic and professional journey.
        </p>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20">
          <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <FileText className="h-12 w-12 text-purple-500 dark:text-purple-400 mr-4" />
              <div>
                <h3 className="text-xl font-medium">My Resume</h3>
                <p className="text-foreground/70">Updated May 2024</p>
              </div>
            </div>

            <Button className="w-full md:w-auto" asChild>
              <a
                href="https://drive.google.com/file/d/16sJ1_8Zml3a3oe6nYEDAx-kQGrNUpRop/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="mt-12 text-center"
      >
        <p className="text-foreground/70">
          Feel free to reach out if you have any questions about my experience or qualifications.
        </p>
      </motion.div>
    </div>
  )
}
