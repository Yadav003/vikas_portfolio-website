import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Target, Zap, Download } from "lucide-react";
import vikasImg from "../assets/vikas_img.jpg";
import resumePdf from "../assets/Vikas_Resume.pdf";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing readable, maintainable code that scales",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex problems into simple solutions",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "User-Focused",
    description: "Building interfaces people actually want to use",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Adapting quickly to new technologies and challenges",
    color: "from-green-500 to-emerald-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative shapes */}
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-3xl transform -rotate-6"
              />
              <motion.div
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 bg-secondary rounded-3xl transform rotate-3 border border-border"
              />
              
              {/* Profile placeholder */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-card rounded-3xl overflow-hidden h-full flex items-center justify-center border border-border shadow-2xl"
              >
                <div className="text-center p-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-36 h-36 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-accent to-primary rounded-full p-1 mb-4 shadow-lg"
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-card">
                      <img
                        src={vikasImg}
                        alt="Vikas Kumar"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-primary">Vikas Kumar</h3>
                  <p className="text-muted-foreground">Software Engineer</p>
                  
                  <motion.a
                    href={resumePdf}
                    download="Vikas_Kumar_Resume.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-colors"
                  >
                    <Download size={16} />
                    Download Resume
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1 bg-accent/10 rounded-full"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6"
            >
              Passionate about building{" "}
              <span className="gradient-text">impactful web experiences</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-muted-foreground mb-8"
            >
              <p>
                I'm a B.Tech Computer Science graduate with hands-on experience 
                in frontend and web development. My journey started with curiosity 
                about how websites work, and it has grown into a passion for 
                creating seamless digital experiences.
              </p>
              <p>
                Over the past years, I've worked on real-world projects ranging 
                from government web applications to e-commerce platforms. I believe 
                in writing clean code, understanding business requirements, and 
                delivering solutions that actually make a difference.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                reading about software architecture, or working on side projects 
                that challenge my problem-solving skills.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 bg-background rounded-xl border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-primary text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
