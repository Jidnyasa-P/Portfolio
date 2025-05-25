"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [state, handleSubmit] = useForm("movdbzrk")

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

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/Jidnyasa-P",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/jidnyasa-patil-02a668344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:jidnyasapatil019@gmail.com",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/Jidnyasa_19",
    },
  ]

  return (
    <div className="container mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-foreground/80">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card>
            <CardContent className="p-6">
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertTitle className="text-green-800 dark:text-green-400">Message sent!</AlertTitle>
                    <AlertDescription className="text-green-700 dark:text-green-300">
                      Thank you for reaching out. I'll get back to you soon.
                    </AlertDescription>
                  </Alert>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="Your email" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  {state.errors && (
                    <Alert className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900">
                      <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                      <AlertTitle className="text-red-800 dark:text-red-400">Error</AlertTitle>
                      <AlertDescription className="text-red-700 dark:text-red-300">
                        There was a problem submitting your form. Please try again.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full" disabled={state.submitting}>
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col justify-center"
        >
          <motion.div variants={fadeIn} className="mb-8">
            <h3 className="text-xl font-medium mb-4">Let&apos;s Connect</h3>
            <p className="text-foreground/80 mb-6">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your
              vision.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg border border-border hover:border-purple-500/50 hover:bg-accent transition-colors duration-300 dark:hover:border-purple-400/50"
                  whileHover={{ x: 5 }}
                  variants={fadeIn}
                >
                  <div className="mr-3 text-purple-500 dark:text-purple-400">{link.icon}</div>
                  <span>{link.name}</span>
                </motion.a>
              ))}

              <motion.a
                href="https://medium.com/@jidnyasapatil019"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg border border-border hover:border-purple-500/50 hover:bg-accent transition-colors duration-300 dark:hover:border-purple-400/50"
                whileHover={{ x: 5 }}
                variants={fadeIn}
              >
                <div className="mr-3 text-purple-500 dark:text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
                  </svg>
                </div>
                <span>Medium Blog</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <p className="text-foreground/70 italic">I typically respond within 24 hours.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
