import Layout from "../components/Layout"
import Link from "next/link"
import { ExternalLink, Twitter, Linkedin, Mail, GithubIcon } from "lucide-react"

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="py-12 md:py-16">
        <div className="max-w-4xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Hello, Human/Bot</h1>
          <p className="text-lg md:text-xl mb-4 md:mb-6">
            I'm a Full Stack Web Developer passionate about building innovative digital experiences.
          </p>
          <p className="text-sm md:text-base mb-4 md:mb-6">
            With a deep interest in tech research and AI, I'm constantly exploring new technologies and methodologies. I
            have a natural curiosity that drives me to continuously learn and expand my knowledge. When I'm not coding,
            you'll find me reading about various topics, from technology to philosophy.
          </p>
        </div>
      </section>

      {/* Skills and Tools Section */}
      <section id="skills" className="mb-12 md:mb-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Skills & Tools</h2>

        <div className="space-y-8 md:space-y-12">
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 border-b pb-2">Frontend Development</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              I specialize in building responsive, accessible, and performant user interfaces using modern web
              technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "SAAS", "HTML/CSS", "JavaScript"].map((skill) => (
                <span
                  key={skill}
                  className="bg-secondary text-secondary-foreground px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 border-b pb-2">Backend Development</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              I build robust, scalable, and secure server-side applications and APIs to power modern web applications.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "Python", "Django", "PostgreSQL", "MySQL", "MongoDB", "REST APIs",].map((skill) => (
                <span
                  key={skill}
                  className="bg-secondary text-secondary-foreground px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 border-b pb-2">AI/LLMs</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              I'm exploring the intersection of web development and artificial intelligence to create smarter
              applications.
            </p>
            <div className="flex flex-wrap gap-2">
              {["OpenAI API", "Anthropic API", "Model Context Proctocol", "AI Agents", "Retrieval-Augmented Generation (RAG)", "Vector Databases", "Embeddings"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 border-b pb-2">Tools & Practices</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              I leverage modern development tools and practices to ensure high-quality, maintainable code.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Git", "GitHub", "GitLab", "Docker", "Monitoring", "Clean Code", "CI/CD", "Testing", "Agile", "Vercel", "AWS"].map((skill) => (
                <span
                  key={skill}
                  className="bg-secondary text-secondary-foreground px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-12 md:mb-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Projects</h2>
        <ul className="space-y-4 md:space-y-6">
          <li className="border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-medium mb-2">Project Name 1</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              A full-stack application that demonstrates modern web development practices and technologies. This project
              showcases responsive design, server-side rendering, and database integration.
            </p>
            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
              {["React", "Node.js", "PostgreSQL"].map((tech) => (
                <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:underline flex items-center text-xs md:text-sm">
                <GithubIcon size={14} className="mr-1 md:size-[16px]" />
                View Code
              </a>
              <a href="#" className="text-primary hover:underline flex items-center text-xs md:text-sm">
                <ExternalLink size={14} className="mr-1 md:size-[16px]" />
                Live Demo
              </a>
            </div>
          </li>

          <li className="border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-medium mb-2">Project Name 2</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              An AI-powered application that leverages machine learning to provide intelligent insights. Features
              include natural language processing, content generation, and personalized recommendations.
            </p>
            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
              {["Next.js", "OpenAI API", "Vercel"].map((tech) => (
                <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:underline flex items-center text-xs md:text-sm">
                <GithubIcon size={14} className="mr-1 md:size-[16px]" />
                View Code
              </a>
              <a href="#" className="text-primary hover:underline flex items-center text-xs md:text-sm">
                <ExternalLink size={14} className="mr-1 md:size-[16px]" />
                Live Demo
              </a>
            </div>
          </li>

          <li className="border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-medium mb-2">Project Name 3</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              A real-time collaboration tool that allows teams to work together seamlessly. Includes features like
              document editing, commenting, and version history.
            </p>
            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
              {["React", "Socket.io", "MongoDB"].map((tech) => (
                <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:underline flex items-center text-xs md:text-sm">
                <GithubIcon size={14} className="mr-1 md:size-[16px]" />
                View Code
              </a>
              <a href="#" className="text-primary hover:underline flex items-center text-xs md:text-sm">
                <ExternalLink size={14} className="mr-1 md:size-[16px]" />
                Live Demo
              </a>
            </div>
          </li>
        </ul>

        <div className="text-center mt-6 md:mt-8">
          <Link href="#" className="text-primary hover:underline flex items-center justify-center text-sm md:text-base">
            View All Projects
            <ExternalLink size={14} className="ml-1 md:size-[16px]" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t pt-6">
        <div className="flex justify-center space-x-6 md:space-x-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 md:p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} className="md:size-[24px]" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 md:p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} className="md:size-[24px]" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 md:p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="md:size-[24px]" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-2 md:p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={20} className="md:size-[24px]" />
          </a>
        </div>
      </section>
    </Layout>
  )
}

