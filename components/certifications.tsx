"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink } from "lucide-react"

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

export default function Certifications() {
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
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-foreground/80">
          Professional certifications and achievements that validate my skills and knowledge.
        </p>
      </motion.div>

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
    </div>
  )
}
