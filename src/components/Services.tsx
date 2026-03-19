import { motion } from "framer-motion";
import { Globe, Code, Layout } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built with clean, maintainable code. From landing pages to full web applications.",
  },
  {
    icon: Code,
    title: "ERB / Rails Development",
    description: "Server-rendered applications using Ruby on Rails with ERB templates, optimized for performance and SEO.",
  },
  {
    icon: Layout,
    title: "Frontend Implementation",
    description: "Pixel-perfect responsive interfaces from design mockups. TailwindCSS, clean HTML/CSS, accessible markup.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] } },
};

const Services = () => {
  return (
    <section id="services" className="border-b border-border py-16 px-8">
      <div className="text-xs text-muted-foreground mb-6">{"// 004 — services"}</div>
      <h2 className="font-display text-display text-2xl md:text-3xl font-bold mb-10">OPEN_FOR_WORK</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={item}
            className="border border-border p-6 hover:border-primary transition-colors"
          >
            <service.icon size={20} className="text-primary mb-4" />
            <h3 className="font-display text-display font-bold mb-3">{service.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
