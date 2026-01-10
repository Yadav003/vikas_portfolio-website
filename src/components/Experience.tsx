import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

const experiences = [
  {
    type: "education",
    icon: GraduationCap,
    title: "B.Tech in Computer Science",
    organization: "University Graduate",
    period: "2020 - 2024",
    description: "Focused on software development, data structures, algorithms, and web technologies. Participated in coding competitions and technical projects.",
    highlights: ["Data Structures & Algorithms", "Web Development", "Database Management"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    type: "experience",
    icon: Briefcase,
    title: "Frontend Developer",
    organization: "Project-Based Work",
    period: "2023 - Present",
    description: "Developed multiple web applications including government portals, e-commerce platforms, and interactive tools. Worked with cross-functional requirements and delivered production-ready code.",
    highlights: ["React & Angular Development", "API Integration", "Responsive Design"],
    color: "from-purple-500 to-pink-500",
  },
  {
    type: "achievement",
    icon: Award,
    title: "Self-Driven Projects",
    organization: "Personal Portfolio",
    period: "Ongoing",
    description: "Continuously building and improving personal projects to stay updated with latest technologies. Focus on practical problem-solving and clean code practices.",
    highlights: ["6+ Complete Projects", "Multiple Tech Stacks", "Problem-Solving Focus"],
    color: "from-orange-500 to-amber-500",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1 bg-accent/10 rounded-full"
          >
            Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4"
          >
            Experience & <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            My learning path and professional experiences that shaped my development skills.
          </motion.p>
        </motion.div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent origin-top"
            style={{ transform: "translateX(-50%)" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
                  >
                    <div className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}>
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg`}>
                        <exp.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <h3 className="text-lg font-semibold text-primary">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.organization}
                        </p>
                      </div>
                    </div>

                    <p className={`text-muted-foreground mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                      {exp.highlights.map((highlight) => (
                        <motion.span
                          key={highlight}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline point */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                  className="absolute left-4 md:left-1/2 top-6 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2"
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center border-4 border-background shadow-lg`}>
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                </motion.div>

                {/* Period badge */}
                <div className={`hidden md:flex flex-1 items-center ${
                  index % 2 === 0 ? "justify-start pl-12" : "justify-end pr-12"
                }`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.6 }}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full"
                  >
                    <Calendar size={14} className="text-accent" />
                    <span className="text-sm font-medium text-secondary-foreground">
                      {exp.period}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
