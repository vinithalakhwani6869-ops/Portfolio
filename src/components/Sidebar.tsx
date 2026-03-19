import { Terminal, Cpu, Globe, GitBranch, Github, Linkedin, Mail } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="border-r border-border p-6 flex flex-col justify-between h-screen sticky top-0">
      <div className="space-y-8">
        {/* Logo / Name */}
        <div>
          <div className="text-xs text-muted-foreground mb-1">// system</div>
          <h2 className="font-display text-display text-lg font-bold tracking-tight">VL</h2>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          <a href="#projects" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
            <Terminal size={14} />
            <span>projects</span>
          </a>
          <a href="#stack" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
            <Cpu size={14} />
            <span>stack</span>
          </a>
          <a href="#services" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
            <Globe size={14} />
            <span>services</span>
          </a>
          <a href="#contact" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
            <GitBranch size={14} />
            <span>contact</span>
          </a>
        </nav>

        {/* Status */}
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">// status</div>
          <div className="flex items-center gap-2 text-xs">
            <span className="status-pulse" />
            <span className="text-primary">Available</span>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-3">
        <div className="text-xs text-muted-foreground">// connect</div>
        <div className="flex gap-3">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={16} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="mailto:vinithalakhwani6869@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
