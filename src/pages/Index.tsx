import Sidebar, { SidebarContent } from "@/components/Sidebar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Sidebar */}
        <div className="hidden lg:block lg:col-span-2">
          <Sidebar />
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden border-b border-border p-4 flex items-center justify-between sticky top-0 bg-background z-40">
          <a href="#hero" className="font-display text-display font-bold hover:text-primary transition-colors">VL</a>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="status-pulse" />
              <span className="text-primary">Available</span>
            </div>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-1 hover:text-primary transition-colors">
                  <Menu size={20} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 border-r border-border w-64">
                <SidebarContent onNavItemClick={() => setIsMenuOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Main Content */}
        <main className="lg:col-span-10">
          <Hero />
          <ProjectGrid />
          <TechStack />
          <Services />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;
