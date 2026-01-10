import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Rocket, BookOpen, Users, Code, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Code,
    title: "Strong Fundamentals",
    description: "Deep understanding of core web technologies - HTML, CSS, JavaScript, and modern frameworks.",
  },
  {
    icon: Rocket,
    title: "Requirement to Reality",
    description: "I can take business requirements and convert them into working, user-friendly interfaces.",
  },
  {
    icon: BookOpen,
    title: "Clean & Readable Code",
    description: "I write code that other developers can easily understand, maintain, and build upon.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Comfortable working in teams, following code reviews, and collaborating on complex projects.",
  },
  {
    icon: HeartHandshake,
    title: "Learns & Adapts Fast",
    description: "Quick to pick up new technologies and adapt to different project requirements.",
  },
  {
    icon: CheckCircle,
    title: "Delivery Focused",
    description: "I understand deadlines and work efficiently to deliver quality work on time.",
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
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const WhyHireMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
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
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1 bg-accent/20 rounded-full"
          >
            Why Choose Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 mb-4"
          >
            Why You Should <span className="text-accent">Hire Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Beyond technical skills, here's what I bring to your team.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:border-accent/50 hover:bg-primary-foreground/15 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="p-3 bg-accent/20 rounded-xl w-fit mb-4 group-hover:bg-accent/30 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300"
              >
                <reason.icon className="w-6 h-6 text-accent" />
              </motion.div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
          >
            <span>Let's Work Together</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Rocket size={18} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMe;
