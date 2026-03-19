import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-8">
      <div className="text-xs text-muted-foreground mb-6">{"// 005 — EOF"}</div>
      <h2 className="font-display text-display text-2xl md:text-3xl font-bold mb-6">GET_IN_TOUCH</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        className="max-w-lg"
      >
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          Looking for a developer to bring your ideas to life?
          I'm open to freelance projects, collaborations, and
          full-time opportunities. Let's build something great.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:vinithalakhwani6869@gmail.com"
            className="btn-keycap text-xs inline-flex items-center gap-2"
          >
            <Mail size={14} />
            SEND_EMAIL
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>© 2026 VINITHA_LAKHWANI</span>
            <span className="flex items-center gap-2">
              <span className="status-pulse" />
              System operational
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
