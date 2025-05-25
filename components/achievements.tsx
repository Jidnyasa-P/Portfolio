"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, BookOpen, Trophy } from "lucide-react"

type AchievementType = "certifications" | "courses" | "hackathons"

const certifications = [
  {
    title: "Python Fundamentals",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1MVnmfXSXMouqmG6HGciu78zZhxiin-Em/view?usp=drive_link",
  },
  {
    title: "DSA Busted 2.0",
    issuer: "GDSC MMCOE",
    link: "https://drive.google.com/file/d/13AltHOCsnIjAGwHtIaO4smaTNbu1nKB2/view?usp=drive_link",
  },
  {
    title: "IIP Certified",
    issuer: "IIT Bombay",
    link: "https://drive.google.com/file/d/1pOcKhfp759rIRR7DVA7TxceoYA7F_EF3/view?usp=drive_link",
  },
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft Certified",
    link: "https://drive.google.com/file/d/1j6ELP25ZEfE33EwmL4U7VGknJ3wW5w7N/view?usp=drive_link",
  },
  {
    title: "Ramanujan National Maths Olympiad",
    issuer: "Special Appreciation",
    link: "https://drive.google.com/file/d/1c2F_4YSHDwWSkwHMOIDLm4xuIBhC4nfi/view?usp=drive_link",
  },
  {
    title: "Learn MySQL",
    issuer: "YouAccel",
    link: "https://youaccel.com/certificate_verification.php?certificate_number=44061340",
  },
  {
    title: "TechnoPhilia Quiz",
    issuer: "Round 1 Team Lead",
    link: "https://certificate.givemycertificate.com/c/b4534d43-cb14-41c1-a228-ac0a8119bc1b",
  },
  {
    title: "ISOCSEA & IMOCSEA Olympiad",
    issuer: "Silver & Bronze Medal",
    link: "#",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    link: "https://api.badgr.io/public/assertions/Dp6XJm5jTdKCT1eTav6ECg",
  },
]

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

export default function Achievements() {
  const [activeType, setActiveType] = useState<AchievementType>("certifications")

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

  const getDescription = () => {
    switch (activeType) {
      case "certifications":
        return "Professional certifications and achievements that validate my skills and knowledge."
      case "courses":
        return "Continuous learning through various courses and educational programs."
      case "hackathons":
        return "Competitions and challenges where I've applied my skills under pressure."
      default:
        return ""
    }
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
        <h2 className="text-3xl font-bold mb-4">Achievements & Education</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-foreground/80 mb-8">{getDescription()}</p>

        <div className="flex justify-center space-x-4 mb-8">
          <Button
            variant={activeType === "certifications" ? "default" : "outline"}
            onClick={() => setActiveType("certifications")}
            className="min-w-[120px]"
          >
            Certifications
          </Button>
          <Button
            variant={activeType === "courses" ? "default" : "outline"}
            onClick={() => setActiveType("courses")}
            className="min-w-[120px]"
          >
            Courses
          </Button>
          <Button
            variant={activeType === "hackathons" ? "default" : "outline"}
            onClick={() => setActiveType("hackathons")}
            className="min-w-[180px]"
          >
            Hackathons & Challenges
          </Button>
        </div>
      </motion.div>

      {activeType === "certifications" && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={fadeIn}>
              <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-md hover:border-purple-500/50 dark:hover:border-purple-400/50">
                <CardHeader>
                  <div className="mb-2 text-purple-500 dark:text-purple-400">
                    <Award className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/80">Issued by {cert.issuer}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" asChild>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeType === "courses" && (
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
      )}

      {activeType === "hackathons" && (
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
      )}
    </div>
  )
}
