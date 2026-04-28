import beautifulLogo from "@/assets/beautifulthing-logo.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-foreground">
      {/* Video layer — locked, no interaction, no link access */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        onContextMenu={(e) => e.preventDefault()}
      >
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "100vw",
            height: "56.25vw",
            minHeight: "100vh",
            minWidth: "177.77vh",
          }}
          src="https://www.youtube-nocookie.com/embed/X_M3-NQIaV4?autoplay=1&mute=1&loop=1&playlist=X_M3-NQIaV4&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0&autohide=1"
          title=""
          frameBorder={0}
          allow="autoplay; encrypted-media"
          referrerPolicy="no-referrer"
          tabIndex={-1}
          aria-hidden="true"
        />
        {/* Full-coverage shield: blocks clicks, hover, right-click, and any YouTube UI bleed */}
        <div
          className="absolute inset-0 z-10"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          style={{ background: "transparent" }}
        />
        {/* Subtle dark overlay for text legibility */}
        <div className="absolute inset-0 z-20 bg-foreground/40" />
      </div>

      {/* Foreground content */}
      <div className="relative z-30 h-full flex flex-col">
        <nav className="flex items-center justify-between px-6 md:px-12 py-6">
          <img src={beautifulLogo} alt="beautifulthing" className="h-7 md:h-9 w-auto invert brightness-0 contrast-100 opacity-90" style={{ filter: "invert(1) brightness(2)" }} />
          <div className="hidden md:flex gap-10 text-xs tracking-[0.25em] uppercase text-background/80">
            <a href="#overview" className="hover:text-background transition">Overview</a>
            <a href="#strategy" className="hover:text-background transition">Strategy</a>
            <a href="#timeline" className="hover:text-background transition">Timeline</a>
            <a href="#investment" className="hover:text-background transition">Investment</a>
          </div>
        </nav>

        <div className="flex-1 flex items-center px-6 md:px-12 pb-20">
          <div className="space-y-8 animate-fade-up max-w-3xl text-background">
            <div className="text-xs tracking-[0.35em] uppercase text-background/70">A Proposal · 2026</div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05]">
              A brand,<br/>
              <em className="font-light">not just</em><br/>
              a product.
            </h1>
            <p className="text-lg text-background/80 max-w-md font-light leading-relaxed">
              A high-converting, emotionally driven one-product Shopify experience.
              Built for elegance. Engineered for growth.
            </p>
            <div className="flex flex-wrap gap-10 pt-4 text-sm">
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-background/60 mb-1">Platform</div>
                <div className="font-serif text-xl">Shopify</div>
              </div>
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-background/60 mb-1">Timeline</div>
                <div className="font-serif text-xl">3–4 Weeks</div>
              </div>
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-background/60 mb-1">Type</div>
                <div className="font-serif text-xl">One-Product Brand</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.35em] uppercase text-background/60">
          Scroll
        </div>
      </div>
    </section>
  );
}
