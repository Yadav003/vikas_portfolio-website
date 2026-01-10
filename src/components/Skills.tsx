import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Palette, 
  Server, 
  Wrench,
  FileCode2,
  Boxes,
  Sparkles,
  Database,
  GitBranch,
  Globe,
  Lightbulb,
  Layout
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML5", level: 95, icon: FileCode2 },
      { name: "CSS3", level: 90, icon: Palette },
      { name: "JavaScript", level: 88, icon: Sparkles },
      { name: "React", level: 85, icon: Boxes },
      { name: "Angular", level: 75, icon: Layout },
      { name: "TypeScript", level: 70, icon: Code },
    ],
  },
  {
    title: "Styling",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Tailwind CSS", level: 90, icon: Sparkles },
      { name: "Bootstrap", level: 85, icon: Layout },
      { name: "SCSS/SASS", level: 80, icon: Palette },
      { name: "Responsive Design", level: 92, icon: Globe },
    ],
  },
  {
    title: "Backend (Basics)",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 65, icon: Server },
      { name: "Express.js", level: 60, icon: Boxes },
      { name: "MongoDB", level: 55, icon: Database },
      { name: "REST APIs", level: 75, icon: Globe },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Git & GitHub", level: 85, icon: GitBranch },
      { name: "VS Code", level: 95, icon: Code },
      { name: "Figma", level: 60, icon: Palette },
      { name: "Problem Solving", level: 85, icon: Lightbulb },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
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
            My Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4"
          >
            Technologies I <span className="gradient-text">work with</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            I've spent considerable time mastering these technologies through 
            real projects and continuous learning.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-card rounded-2xl p-6 border border-border card-shine group hover:shadow-xl hover:shadow-accent/10 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.15 + skillIndex * 0.08,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.08 + 0.5 }}
                        className="text-sm font-semibold text-accent"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: categoryIndex * 0.15 + skillIndex * 0.08,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
