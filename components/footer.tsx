import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70">&copy; {currentYear} Jidnyasa Patil. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Jidnyasa-P"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-purple-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jidnyasa-patil-02a668344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-purple-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:jidnyasapatil019@gmail.com"
              className="text-foreground/70 hover:text-purple-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/Jidnyasa_19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-purple-500 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://medium.com/@jidnyasapatil019"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-purple-500 transition-colors"
              aria-label="Medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
