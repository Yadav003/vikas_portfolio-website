import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vikask54522@gmail.com",
    href: "mailto:vikask54522@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6284867288",
    href: "tel:+916284867288",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Yadav003/", label: "GitHub", color: "hover:bg-gray-800" },
  { icon: Linkedin, href: "https://linkedin.com/in/vikas-kumar001", label: "LinkedIn", color: "hover:bg-blue-600" },
  { icon: Mail, href: "mailto:vikask54522@gmail.com", label: "Email", color: "hover:bg-red-600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const whatsappMessage = `Hello! I'm ${formData.name}\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
      const whatsappNumber = "916284867288";
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new window
      window.open(whatsappUrl, "_blank");
      
      toast({
        title: "Redirecting to WhatsApp!",
        description: "You'll be taken to WhatsApp to send your message.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open WhatsApp. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-card">
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
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4"
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    variants={itemVariants}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300"
                    >
                      <info.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-primary mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-background rounded-xl border border-border ${social.color} hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-xl"
            >
              <h3 className="text-xl font-semibold text-primary mb-6">
                Send a Message
              </h3>
              
              <div className="space-y-5">
                <div className="relative">
                  <motion.label
                    htmlFor="name"
                    animate={{
                      y: focusedField === "name" || formData.name ? -24 : 0,
                      scale: focusedField === "name" || formData.name ? 0.85 : 1,
                      color: focusedField === "name" ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
                    }}
                    className="absolute left-4 top-3 origin-left transition-all pointer-events-none bg-background px-1"
                  >
                    Your Name
                  </motion.label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="input-animated pt-4"
                  />
                </div>

                <div className="relative">
                  <motion.label
                    htmlFor="email"
                    animate={{
                      y: focusedField === "email" || formData.email ? -24 : 0,
                      scale: focusedField === "email" || formData.email ? 0.85 : 1,
                      color: focusedField === "email" ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
                    }}
                    className="absolute left-4 top-3 origin-left transition-all pointer-events-none bg-background px-1"
                  >
                    Your Email
                  </motion.label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="input-animated pt-4"
                  />
                </div>

                <div className="relative">
                  <motion.label
                    htmlFor="message"
                    animate={{
                      y: focusedField === "message" || formData.message ? -24 : 0,
                      scale: focusedField === "message" || formData.message ? 0.85 : 1,
                      color: focusedField === "message" ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
                    }}
                    className="absolute left-4 top-3 origin-left transition-all pointer-events-none bg-background px-1"
                  >
                    Your Message
                  </motion.label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="input-animated pt-4 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-accent to-primary text-white py-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-70 shadow-lg hover:shadow-xl hover:shadow-accent/30"
                >
                  <motion.span
                    animate={{ x: isSubmitting ? 100 : 0, opacity: isSubmitting ? 0 : 1 }}
                    className="flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </motion.span>
                  
                  {isSubmitting && (
                    <motion.span
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </motion.span>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
