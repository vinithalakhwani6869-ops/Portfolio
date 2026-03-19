import { useState, useEffect } from "react";

const LineCounter = () => {
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const line = Math.max(1, Math.floor(scrollPercent * 500));
      setLineCount(line);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 h-screen w-10 border-r border-border bg-background z-50 hidden lg:flex flex-col items-center pt-4">
      {Array.from({ length: 30 }, (_, i) => {
        const lineNum = lineCount + i;
        return (
          <div
            key={i}
            className={`text-[10px] leading-[20px] ${
              i === 0 ? "text-primary" : "text-muted-foreground/40"
            }`}
          >
            {lineNum}
          </div>
        );
      })}
    </div>
  );
};

export default LineCounter;
