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
      id="hero"
      variants={container}
      initial="hidden"
      animate="show"
      className="border-b border-border py-20 px-8">
      
      <motion.div variants={item} className="text-xs text-muted-foreground mb-4">
        {"// 001 — introduction"}
      </motion.div>

      <motion.h1
        variants={item}
        className="font-display text-display text-[8vw] sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
        
        VINITHA_LAKHWANI
        <br />
        <span className="text-primary whitespace-nowrap">// FULL_STACK_DEV</span>
      </motion.h1>

      <motion.p variants={item} className="text-muted-foreground max-w-xl text-sm leading-relaxed mb-8">
        I don't have a ten-year plan, and I'm okay with that. What I do have is a habit of picking something I don't know how to build and figuring it out as I go. Since 2025, that's meant web dev, and right now it's AI tools built around problems people actually run into. Everything on this page is something that came out of that.
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