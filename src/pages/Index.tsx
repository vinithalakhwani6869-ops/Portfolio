import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import LineCounter from "@/components/LineCounter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LineCounter />
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:pl-10">
        {/* Sidebar */}
        <div className="hidden lg:block lg:col-span-2">
          <Sidebar />
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden border-b border-border p-4 flex items-center justify-between sticky top-0 bg-background z-40">
          <span className="font-display text-display font-bold">VL</span>
          <div className="flex items-center gap-2 text-xs">
            <span className="status-pulse" />
            <span className="text-primary">Available</span>
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
