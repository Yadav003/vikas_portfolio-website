import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Yadav003/", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/vikas-kumar001", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vikask54522@gmail.com", label: "Email" },
  ];

  return (
    <footer ref={ref} className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-accent/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/5 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <a href="#" className="text-2xl font-bold inline-block">
              Vikas<span className="text-accent">.</span>
            </a>
            <p className="text-primary-foreground/70 text-sm mt-2 max-w-xs">
              Frontend Developer | Building the web, one component at a time.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll to top */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/30"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="border-t border-primary-foreground/20 mt-8 pt-8"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <p className="text-sm text-primary-foreground/70 flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} Vikas Kumar. Designed & Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-accent fill-accent inline" />
            </motion.span>{" "}
            in India
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
