import { createFileRoute } from "@tanstack/react-router";
import { CurtainLoader } from "@/components/CurtainLoader";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import websenseLogo from "@/assets/websense-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Steve jensen" },
      { name: "description", content: "The Websense" },
    ],
  }),
});

const benefits = [
  { t: "Visually Immersive", d: "A brand experience that feels intentional, premium, and cinematic." },
  { t: "Single Hero Focus", d: "Every pixel built around one product, one promise, one feeling." },
  { t: "Conversion Engineered", d: "Mobile-first flows, sticky CTAs, and trust at every scroll." },
  { t: "Built to Scale", d: "A foundation ready for SEO, social, and influencer growth." },
];

const pages = [
  "Homepage · Emotion-Driven", "Product Page · Conversion-Focused", "About · Mission-Driven",
  "Contact", "FAQ", "Privacy Policy", "Terms & Conditions", "Shipping Policy", "Returns & Refunds",
];

const technical = [
  "Domain connection", "Shopify configuration", "Payment gateway setup", "Shipping rules",
  "Tax configuration", "Legal pages", "Checkout optimization", "Branded email notifications",
];

const seo = [
  { t: "On-Page SEO", items: ["Keyword research", "Optimized titles & meta", "URL structure", "Image alt text", "Schema markup", "Internal linking"] },
  { t: "Technical SEO", items: ["Speed optimization", "Mobile performance", "Sitemap submission", "Search Console setup", "Analytics setup", "SSL security"] },
  { t: "Content SEO", items: ["Blog architecture", "Problem-based article", "Transformation article", "How It Works article", "Comparison article", "Authority building"] },
];

const timeline = [
  { w: "Week 1", t: "Foundation", d: "Strategy session, branding direction, Shopify setup, wireframes." },
  { w: "Week 2", t: "Design", d: "Homepage and product page design, content writing, SEO structure." },
  { w: "Week 3", t: "Build", d: "Full site development, technical setup, testing and optimization." },
  { w: "Week 4", t: "Launch", d: "Revisions, social integration, final QA, and go-live." },
];

const oneLiners = [
  "This isn't just a product. It's a reminder.",
  "Because you deserve better.",
  "For the version of you that refuses to settle.",
  "Small thing. Big shift.",
  "Made for who you're becoming.",
  "Confidence starts here.",
];

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <CurtainLoader />
      <Hero />

      {/* Overview */}
      <Section id="overview" eyebrow="01 · Project Overview" title="A brand movement, not a product page.">
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed font-light">
          We will develop a high-converting, emotionally driven one-product Shopify store that reflects
          elegance, trust, storytelling, and premium brand positioning. The architecture mirrors the
          quiet luxury of beautifulthing.co — where restraint is the loudest statement.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {benefits.map((b, i) => (
            <div key={i} className="border-t border-foreground/15 pt-6">
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">0{i+1}</div>
              <h3 className="font-serif text-2xl mb-3">{b.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Strategy */}
      <Section id="strategy" eyebrow="02 · Website Strategy" title="A single product. A complete world.">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-6">
              A one-product store works when the brand story is strong, the emotional triggers are
              clear, the design feels premium, and the messaging speaks directly to the customer's
              identity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              We design every section to feel inevitable — as if the product was always meant to exist.
            </p>
          </div>
          <div className="space-y-1">
            {pages.map((p, i) => (
              <div key={i} className="flex items-baseline gap-6 py-4 border-b border-foreground/10">
                <span className="font-serif text-sm text-muted-foreground w-8">0{i+1}</span>
                <span className="font-serif text-xl">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Homepage breakdown */}
      <Section eyebrow="03 · Homepage Architecture" title="Eight emotional moments.">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {[
            ["Hero", "Cinematic visual, emotional headline, decisive CTA."],
            ["Why It Matters", "Pain points and aspirations, named clearly."],
            ["Product Benefits", "Three to five visual benefits — emotional and functional."],
            ["Social Proof", "UGC testimonials, before and after, ratings."],
            ["Founder Story", "Authentic, mission-driven, human."],
            ["Product Highlight", "Premium mockups, features explained visually."],
            ["FAQ", "Objections removed. Trust earned."],
            ["Final CTA", "Join the movement."],
          ].map(([t, d], i) => (
            <div key={i}>
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">{String(i+1).padStart(2,"0")}</div>
              <h3 className="font-serif text-2xl md:text-3xl mb-2">{t}</h3>
              <p className="text-muted-foreground font-light">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Design Direction - dark */}
      <Section eyebrow="04 · Design Direction" title="Quiet. Considered. Confident." dark>
        <div className="grid md:grid-cols-3 gap-12 mt-8">
          {[
            ["Typography", "Elegant serif headlines, restrained sans body."],
            ["Palette", "Neutral, warm, timeless. No noise."],
            ["Spacing", "Generous. Luxurious. Unhurried."],
            ["Imagery", "Cinematic, emotional, premium."],
            ["Motion", "Subtle reveals. Nothing performative."],
            ["Mobile", "Designed thumb-first, top to bottom."],
          ].map(([t, d], i) => (
            <div key={i} className="border-t border-background/20 pt-6">
              <h3 className="font-serif text-2xl mb-3">{t}</h3>
              <p className="text-background/70 font-light">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical */}
      <Section eyebrow="05 · Technical Setup" title="Every detail handled.">
        <div className="grid md:grid-cols-2 gap-x-16">
          {technical.map((t, i) => (
            <div key={i} className="flex items-baseline gap-4 py-5 border-b border-foreground/10">
              <span className="font-serif text-sm text-muted-foreground">{String(i+1).padStart(2,"0")}</span>
              <span className="text-lg font-light">{t}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* SEO */}
      <Section eyebrow="06 · SEO Foundation" title="Built for organic growth.">
        <div className="grid md:grid-cols-3 gap-12">
          {seo.map((s, i) => (
            <div key={i}>
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">0{i+1}</div>
              <h3 className="font-serif text-3xl mb-6">{s.t}</h3>
              <ul className="space-y-3">
                {s.items.map((it, j) => (
                  <li key={j} className="text-muted-foreground font-light border-b border-foreground/10 pb-3">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Social */}
      <Section eyebrow="07 · Social Media" title="Organic. Intentional. Influencer-ready." dark>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-3xl mb-6">Setup</h3>
            <ul className="space-y-3 text-background/80 font-light">
              <li>· Bio optimization with emotional hook</li>
              <li>· Instagram Shop integration</li>
              <li>· Facebook Shop sync</li>
              <li>· Meta Commerce connection</li>
              <li>· TikTok Shop (where eligible)</li>
              <li>· YouTube product shelf</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-3xl mb-6">Cadence</h3>
            <ul className="space-y-3 text-background/80 font-light">
              <li>Instagram · 4–5 posts / week</li>
              <li>Facebook · 3–4 posts / week</li>
              <li>TikTok · 3–5 short videos / week</li>
              <li>YouTube · 2–4 Shorts + 1 long-form / month</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Emotional */}
      <Section eyebrow="08 · Emotional Marketing" title="Emotion sells more than features.">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-4 text-lg font-light text-muted-foreground">
            <p>We focus on identity-based marketing, transformation messaging, belonging, confidence, and personal becoming.</p>
            <p>Emotion increases loyalty, encourages sharing, makes influencer promotion natural, and drives organic word-of-mouth.</p>
          </div>
          <div className="space-y-5">
            {oneLiners.map((q, i) => (
              <p key={i} className="font-serif text-2xl md:text-3xl leading-snug border-l-2 border-foreground/30 pl-6">
                "{q}"
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section id="timeline" eyebrow="09 · Timeline" title="Three to four weeks. Start to launch.">
        <div className="grid md:grid-cols-4 gap-8">
          {timeline.map((w, i) => (
            <div key={i} className="border-t-2 border-foreground pt-6">
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">{w.w}</div>
              <h3 className="font-serif text-3xl mb-3">{w.t}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{w.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Investment */}
      <Section id="investment" eyebrow="10 · Investment" title="Transparent. Considered." dark>
        <div className="border border-background/20 p-10 md:p-16 mb-10">
          <div className="text-xs tracking-[0.3em] uppercase text-background/60 mb-3">One-Time Build</div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h3 className="font-serif text-4xl md:text-5xl max-w-xl">Website Design & Development<br/><span className="text-background/60">One-Product Shopify Store</span></h3>
            <div className="font-serif text-6xl md:text-7xl">$799.99</div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-background/20 p-10">
            <div className="text-xs tracking-[0.3em] uppercase text-background/60 mb-3">Monthly</div>
            <h3 className="font-serif text-3xl mb-2">SEO Management</h3>
            <div className="font-serif text-4xl mb-4">$350<span className="text-base text-background/60">/month</span></div>
            <p className="text-background/70 font-light">Keyword tracking, blog strategy, on-page improvements, performance monitoring.</p>
          </div>
          <div className="border border-background/20 p-10">
            <div className="text-xs tracking-[0.3em] uppercase text-background/60 mb-3">Monthly</div>
            <h3 className="font-serif text-3xl mb-2">Social Media Management</h3>
            <div className="font-serif text-4xl mb-4">$550<span className="text-base text-background/60">/month</span></div>
            <p className="text-background/70 font-light">Organic only. Facebook, Instagram, TikTok, YouTube.</p>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section eyebrow="11 · Expected Outcomes" title="Within three to six months.">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Strong brand identity",
            "Organic SEO traction",
            "Engaged community",
            "Influencer-ready structure",
            "Increased brand trust",
            "Scalable foundation",
          ].map((o, i) => (
            <div key={i} className="border-t border-foreground/15 pt-6">
              <div className="font-serif text-2xl">{o}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <section className="px-6 md:px-12 py-32 md:py-48 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-8">In Closing</div>
        <h2 className="font-serif text-4xl md:text-7xl max-w-4xl mx-auto leading-[1.1] mb-10">
          A premium one-product brand,<br/>built for long-term growth.
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light">
          Not just a Shopify store. A brand experience. An emotional connection. A conversion-focused
          system. A scalable digital foundation.
        </p>
      </section>

      <footer className="px-6 md:px-12 py-12 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={websenseLogo} alt="The Websense" className="h-10 w-auto" />
        <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          One stop solutions for all digital needs
        </div>
      </footer>
    </main>
  );
}
