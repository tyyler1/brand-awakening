import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  dark = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`px-6 md:px-12 py-24 md:py-32 ${dark ? "bg-foreground text-background" : ""}`}
    >
      <div className="max-w-6xl mx-auto">
        {eyebrow && (
          <div className={`text-xs tracking-[0.35em] uppercase mb-6 ${dark ? "text-background/60" : "text-muted-foreground"}`}>
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="font-serif text-4xl md:text-6xl mb-12 max-w-3xl leading-[1.1]">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
