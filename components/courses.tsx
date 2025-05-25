"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink } from "lucide-react"

const courses = [
  {
    title: "Code in Place",
    provider: "Stanford University",
    status: "Ongoing",
    link: "#",
  },
  {
    title: "MATLAB Onramp Certificate",
    provider: "MathWorks",
    status: "Completed",
    link: "https://drive.google.com/file/d/17hb-TkVSUXFDC4uWAZWp5t-Zo-ymAL2h/view?usp=drive_link",
  },
  {
    title: "31-day DSA Challenge",
    provider: "GDSC MMCOE",
    status: "Completed",
    link: "https://drive.google.com/file/d/13AltHOCsnIjAGwHtIaO4smaTNbu1nKB2/view?usp=drive_link",
  },
  {
    title: "Learn MySQL",
    provider: "YouAccel from Udemy",
    status: "Completed",
    link: "https://youaccel.com/certificate_verification.php?certificate_number=44061340",
  },
  {
    title: "GenAI 101 with Pieces",
    provider: "Pieces",
    status: "Completed",
    link: "https://api.badgr.io/public/assertions/2N6Mb0xaSmO1TTeiivcJjQ",
  },
  {
    title: "Data Analytics Course",
    provider: "Cisco",
    status: "Completed",
    link: "https://www.credly.com/badges/c51461f6-2a70-40bb-afef-65ec71e56c47/public_url",
  },
]

export default function Courses() {
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
        <h2 className="text-3xl font-bold mb-4">Courses Completed</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-foreground/80">
          Continuous learning through various courses and educational programs.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {courses.map((course) => (
          <motion.div key={course.title} variants={fadeIn}>
            <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-md hover:border-purple-500/50 dark:hover:border-purple-400/50">
              <CardHeader>
                <div className="mb-2 text-purple-500 dark:text-purple-400">
                  <BookOpen className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">Provider: {course.provider}</p>
                <p className="text-foreground/60 mt-1">Status: {course.status}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a href={course.link} target="_blank" rel="noopener noreferrer">
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
