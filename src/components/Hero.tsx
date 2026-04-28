import beautifulLogo from "@/assets/beautifulthing-logo.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 z-10">
        <img src={beautifulLogo} alt="beautifulthing" className="h-7 md:h-9 w-auto" />
        <div className="hidden md:flex gap-10 text-xs tracking-[0.25em] uppercase text-foreground/70">
          <a href="#overview">Overview</a>
          <a href="#strategy">Strategy</a>
          <a href="#timeline">Timeline</a>
          <a href="#investment">Investment</a>
        </div>
      </nav>

      <div className="flex-1 grid lg:grid-cols-2 gap-12 items-center px-6 md:px-12 pb-16 pt-8">
        <div className="space-y-8 animate-fade-up">
          <div className="text-xs tracking-[0.35em] uppercase text-muted-foreground">A Proposal · 2026</div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground">
            A brand,<br/>
            <em className="font-light">not just</em><br/>
            a product.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md font-light leading-relaxed">
            A high-converting, emotionally driven one-product Shopify experience.
            Built for elegance. Engineered for growth.
          </p>
          <div className="flex flex-wrap gap-8 pt-4 text-sm">
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-1">Platform</div>
              <div className="font-serif text-xl">Shopify</div>
            </div>
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-1">Timeline</div>
              <div className="font-serif text-xl">3–4 Weeks</div>
            </div>
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-1">Investment</div>
              <div className="font-serif text-xl">$799.99</div>
            </div>
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-sm shadow-2xl bg-foreground">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/X_M3-NQIaV4?autoplay=1&mute=1&loop=1&playlist=X_M3-NQIaV4&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1"
            title="Branding"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
