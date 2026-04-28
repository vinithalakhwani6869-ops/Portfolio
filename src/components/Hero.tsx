import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] as const } }
};

const Hero = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="border-b border-border py-20 px-8">
      
      <motion.div variants={item} className="text-xs text-muted-foreground mb-4">
        {"// 001 — introduction"}
      </motion.div>

      <motion.h1
        variants={item}
        className="font-display text-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
        
        VINITHA_LAKHWANI
        <br />
        <span className="text-primary">// FULL_STACK_DEV</span>
      </motion.h1>

      <motion.p variants={item} className="text-muted-foreground max-w-xl text-sm leading-relaxed mb-8">
        I'm a developer figuring things out one project at a time — mostly working with ERB and Rails right now, with a few AI side projects in the mix. I care about code that's readable, things that actually work, and picking up whatever the next build needs. Open to freelance website work too.
      </motion.p>

      <motion.div variants={item} className="flex gap-4 flex-wrap">
        <a href="#projects" className="btn-keycap text-xs">
          VIEW_PROJECTS →
        </a>
        <a href="#contact" className="btn-keycap text-xs border-primary text-primary hover:bg-primary hover:text-background">
          GET_IN_TOUCH
        </a>
      </motion.div>
    </motion.section>);

};

export default Hero;