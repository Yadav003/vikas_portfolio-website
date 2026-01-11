import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Bus, Music, Gamepad2, Landmark, Video, X, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "EbusPass",
    description: "A complete multi-step bus pass application with fare calculation, document upload, and a smooth end-to-end submission flow.",
    problem: "Citizens needed an easier way to apply for bus passes without visiting offices.",
    icon: Bus,
    tech: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Multi-step form wizard", "Fare calculation logic", "Document upload", "Payment flow integration", "Form validation"],
    color: "from-blue-500 to-blue-600",
    demo: "https://ebuspass-connect.vercel.app/",
    github: "#",
  },
  {
    title: "OvalPlay",
    description: "A live gaming website featuring multiple browser games with a clean, modern UI.",
    problem: "Create a single destination where users can quickly discover and play games online.",
    icon: Gamepad2,
    tech: ["React", "TypeScript"],
    features: ["Multiple games in one place", "Fast navigation", "Mobile-friendly layout", "Clean UI/UX"],
    color: "from-fuchsia-500 to-purple-600",
    demo: "https://www.ovalplay.com/",
    github: "#",
  },
  {
    title: "Tokimoby",
    description: "A short-video platform focused on fast, scrollable content with a smooth, modern UI.",
    problem: "Deliver a lightweight and engaging short-video experience on the web.",
    icon: Video,
    tech: ["React", "TypeScript"],
    features: ["Short-video feed", "Smooth browsing experience", "Responsive UI", "Modern design"],
    color: "from-amber-500 to-orange-600",
    demo: "https://www.tokimoby.com/",
    github: "#",
  },
  {
    title: "HPRCA Job Vacancy Portal (HP Govt)",
    description: "A government website for Himachal Pradesh job vacancies and recruitment-related updates.",
    problem: "Provide an official, centralized portal for vacancy notifications and related information.",
    icon: Landmark,
    tech: ["Angular", "TypeScript"],
    features: ["Vacancy listings", "Official notifications", "User-friendly navigation", "Responsive design"],
    color: "from-cyan-500 to-blue-600",
    demo: "https://hprca.hp.gov.in/",
    github: "#",
  },
  {
    title: "Spotify Clone",
    description: "A pixel-perfect UI clone of Spotify focusing on frontend design patterns and modern UI/UX principles.",
    problem: "Learning project to master complex UI layouts and state management.",
    icon: Music,
    tech: ["CSS3", "JavaScript", "HTML5"],
    features: ["Music player UI", "Playlist management", "Responsive layout", "Dark theme", "Smooth animations"],
    color: "from-green-500 to-green-600",
    demo: "#",
    github: "https://github.com/Yadav003/Spotify-Clone-",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1 bg-accent/10 rounded-full"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Real-world applications I've built, each solving a specific problem 
            and showcasing different skills.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group bg-background rounded-2xl border border-border overflow-hidden card-shine cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header */}
              <div className={`h-36 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                />
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <project.icon className="w-16 h-16 text-white relative z-10 drop-shadow-lg" />
                </motion.div>
                
                {/* Floating particles */}
                <motion.div
                  animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"
                />
                <motion.div
                  animate={{ y: [5, -5, 5], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-6 left-6 w-2 h-2 bg-white/40 rounded-full"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* View Details */}
                <div className="flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all duration-300">
                  <span>View Details</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`h-48 bg-gradient-to-br ${selectedProject.color} p-6 flex items-center justify-center relative`}>
                <selectedProject.icon className="w-24 h-24 text-white drop-shadow-lg" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                    Problem Solved
                  </h4>
                  <p className="text-muted-foreground">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 text-sm font-medium bg-gradient-to-r ${selectedProject.color} text-white rounded-lg`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProject.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  {selectedProject.demo && selectedProject.demo !== "#" && (
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 text-white font-medium rounded-lg bg-gradient-to-r ${selectedProject.color} hover:shadow-lg transition-shadow`}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  )}

                  {selectedProject.github && selectedProject.github !== "#" && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                    >
                      <Github size={18} />
                      Source Code
                    </motion.a>
                  )}

                  {(!selectedProject.demo || selectedProject.demo === "#") &&
                    (!selectedProject.github || selectedProject.github === "#") && (
                    <div className="flex-1 py-3 text-center text-sm text-muted-foreground">
                      Links coming soon.
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
