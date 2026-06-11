import { Terminal, Cpu, Globe, GitBranch, Github, Linkedin, Mail } from "lucide-react";

export const SidebarContent = ({ onNavItemClick }: { onNavItemClick?: () => void }) => {
  return (
    <div className="flex flex-col justify-between h-full p-6">
      <div className="space-y-8">
        {/* Logo / Name */}
        <div>
          <div className="text-xs text-muted-foreground mb-1">// system</div>
          <a href="#hero" className="block w-fit group" onClick={onNavItemClick}>
            <h2 className="font-display text-display text-lg font-bold tracking-tight cursor-pointer">VL</h2>
          </a>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          <a href="#projects" onClick={onNavItemClick} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
            <Terminal size={14} />
            <span>projects</span>
          </a>
          <a href="#stack" onClick={onNavItemClick} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
            <Cpu size={14} />
            <span>stack</span>
          </a>
          <a href="#services" onClick={onNavItemClick} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
            <Globe size={14} />
            <span>services</span>
          </a>
          <a href="#contact" onClick={onNavItemClick} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
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
          <a
            href="https://github.com/vinithalakhwani6869-ops"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/vinitha-lakhwani-6431a1399"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:vinithalakhwani.dev@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="border-r border-border h-screen sticky top-0">
      <SidebarContent />
    </aside>
  );
};

export default Sidebar;
