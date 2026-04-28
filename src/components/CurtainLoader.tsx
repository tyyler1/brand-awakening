import { useEffect, useState } from "react";
import beautifulLogo from "@/assets/beautifulthing-logo.png";
import websenseLogo from "@/assets/websense-logo.png";

export function CurtainLoader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 5000);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-[oklch(0.97_0.008_75)] animate-curtain-left border-r border-foreground/5" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[oklch(0.97_0.008_75)] animate-curtain-right border-l border-foreground/5" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 animate-logo-fade">
        <img src={websenseLogo} alt="The Websense" className="h-24 md:h-32 w-auto" />
        <div className="text-xs tracking-[0.4em] text-muted-foreground uppercase">presents a proposal for</div>
        <img src={beautifulLogo} alt="beautifulthing" className="h-10 md:h-14 w-auto" />
      </div>
    </div>
  );
}
