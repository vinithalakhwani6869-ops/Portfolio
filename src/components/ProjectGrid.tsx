import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "live" | "wip" | "archived";
  erbSnippet: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "E-Commerce Platform",
    description: "A full-stack Rails e-commerce app with product management, cart functionality, and payment integration.",
    tags: ["Ruby on Rails", "ERB", "PostgreSQL", "Stripe"],
    status: "live",
    erbSnippet: `<%= render partial: "products/card",\n  collection: @products,\n  cached: true %>`,
  },
  {
    id: "02",
    title: "Task Management App",
    description: "Collaborative task board with real-time updates, user authentication, and role-based access.",
    tags: ["Rails", "ERB", "Hotwire", "Turbo"],
    status: "live",
    erbSnippet: `<%= turbo_stream_from @board %>\n<%= render @board.tasks\n  .order(priority: :desc) %>`,
  },
  {
    id: "03",
    title: "Portfolio Generator",
    description: "A dynamic portfolio builder that takes YAML config and generates clean, responsive sites.",
    tags: ["Ruby", "ERB", "YAML", "TailwindCSS"],
    status: "wip",
    erbSnippet: `<% @config[:sections].each do |s| %>\n  <%= render "sections/#{s[:type]}",\n    data: s[:content] %>\n<% end %>`,
  },
  {
    id: "04",
    title: "Blog Engine",
    description: "Markdown-powered blog with syntax highlighting, RSS feed, and SEO-optimized server-rendered pages.",
    tags: ["Rails", "ERB", "Markdown", "SEO"],
    status: "live",
    erbSnippet: `<article class="post">\n  <%= sanitize @post.rendered_body,\n    tags: ALLOWED_TAGS %>\n</article>`,
  },
];

const statusColors: Record<string, string> = {
  live: "text-primary",
  wip: "text-yellow-400",
  archived: "text-muted-foreground",
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] } },
};

const ProjectGrid = () => {
  const [viewMode, setViewMode] = useState<Record<string, "ui" | "source">>({});

  const toggleView = (id: string) => {
    setViewMode((prev) => ({
      ...prev,
      [id]: prev[id] === "source" ? "ui" : "source",
    }));
  };

  return (
    <section id="projects" className="border-b border-border py-16 px-8">
      <div className="text-xs text-muted-foreground mb-6">{"// 002 — latest commits"}</div>
      <h2 className="font-display text-display text-2xl md:text-3xl font-bold mb-10">PROJECTS</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item} className="project-card group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">{project.id}</span>
                <h3 className="font-display text-display font-bold text-lg">{project.title}</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs uppercase ${statusColors[project.status]}`}>
                  {project.status === "live" && <span className="status-pulse mr-1 inline-block" />}
                  {project.status}
                </span>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>

            {/* Toggle */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => toggleView(project.id)}
                className={`text-xs px-2 py-1 border transition-colors ${
                  viewMode[project.id] !== "source"
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                [View UI]
              </button>
              <button
                onClick={() => toggleView(project.id)}
                className={`text-xs px-2 py-1 border transition-colors ${
                  viewMode[project.id] === "source"
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                [View Source]
              </button>
            </div>

            {viewMode[project.id] === "source" ? (
              <pre className="text-xs text-primary bg-background border border-border p-4 overflow-x-auto">
                <code>{project.erbSnippet}</code>
              </pre>
            ) : (
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
            )}

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-primary border border-border px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectGrid;
