import { motion } from "framer-motion";

const stackItems = [
  { category: "Backend", items: ["Python", "Firebase", "REST APIs"] },
  { category: "Frontend", items: ["HTML5", "CSS3", "TailwindCSS", "JavaScript", "React", "Vite"] },
  { category: "Tools", items: ["Git / GitHub", "VS Code", "Google Colab","npm"] },
  { category: "Currently Learning", items: ["Backend Development", "Cybersecurity", "Cloud computing"] },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1] as const } },
};

const TechStack = () => {
  return (
    <section id="stack" className="border-b border-border py-16 px-8">
      <div className="text-xs text-muted-foreground mb-6">{"// 003 — dependencies"}</div>
      <h2 className="font-display text-display text-2xl md:text-3xl font-bold mb-10">THE_STACK</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stackItems.map((stack) => (
          <motion.div key={stack.category} variants={item}>
            <h3 className="text-xs text-primary mb-4 uppercase">{`> ${stack.category}`}</h3>
            <ul className="space-y-2">
              {stack.items.map((tech) => (
                <li key={tech} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-border">├─</span>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
