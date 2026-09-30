import { motion } from "framer-motion";
import { Reveal, RevealLines } from "./Reveal";

const designExhibits = [
  { label: "Typography System", kind: "type" },
  { label: "Interface Layout", kind: "layout" },
  { label: "Visual Hierarchy", kind: "hierarchy" },
  { label: "Responsive Behaviour", kind: "responsive" },
  { label: "Motion & Interaction", kind: "motion" },
  { label: "Information Architecture", kind: "ia" },
];

function Exhibit({ kind }: { kind: string }) {
  if (kind === "type")
    return (
      <div className="flex h-full flex-col justify-center gap-2 p-5">
        <span className="font-display text-3xl leading-none font-extrabold tracking-[-0.04em]">
          Aa
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          Display / Mono
        </span>
        <div className="mt-2 space-y-1.5">
          <div className="h-1 w-full bg-muted" />
          <div className="h-1 w-4/5 bg-muted" />
          <div className="h-1 w-1/2 bg-accent/60" />
        </div>
      </div>
    );

  if (kind === "layout")
    return (
      <div className="grid h-full grid-cols-4 grid-rows-3 gap-1 p-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className="block border border-line"
            style={{
              background:
                index === 1 || index === 6
                  ? "color-mix(in oklab, var(--accent) 22%, transparent)"
                  : "transparent",
            }}
          />
        ))}
      </div>
    );

  if (kind === "hierarchy")
    return (
      <div className="flex h-full flex-col justify-center gap-2.5 p-5">
        <div className="h-3 w-3/4 bg-foreground/80" />
        <div className="h-1.5 w-1/2 bg-steel/70" />
        <div className="h-1 w-full bg-muted" />
        <div className="h-1 w-5/6 bg-muted" />
        <div className="mt-2 h-5 w-24 border border-accent" />
      </div>
    );

  if (kind === "responsive")
    return (
      <div className="flex h-full items-end justify-center gap-2 p-5">
        {[28, 44, 66, 90].map((width, index) => (
          <div
            key={width}
            className="border border-line"
            style={{
              width: width / 2,
              height: 40 + index * 12,
              borderColor: index === 3 ? "var(--accent)" : undefined,
            }}
          />
        ))}
      </div>
    );

  if (kind === "motion")
    return (
      <div className="relative h-full overflow-hidden p-5">
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="absolute left-5 block h-px bg-accent/70"
            style={{ top: `${32 + index * 22}%`, width: "60%" }}
            animate={{ x: ["-15%", "35%", "-15%"] }}
            transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <span className="absolute bottom-4 left-5 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
          Easing
        </span>
      </div>
    );

  return (
    <div className="flex h-full flex-col justify-center gap-2 p-5">
      {[0, 1, 2].map((index) => (
        <div key={index} className="flex items-center gap-2" style={{ paddingLeft: index * 14 }}>
          <span className="h-1 w-1 bg-accent" />
          <span className="h-1 bg-muted" style={{ width: 90 - index * 18 }} />
        </div>
      ))}
    </div>
  );
}

export function Craft() {
  return (
    <section id="design" className="relative border-t border-line py-28 sm:py-40">
      <div className="zt-shell">
        <p className="zt-eyebrow mb-6 flex items-center gap-3">
          <span className="inline-block h-px w-10 bg-accent" />
          Design + Engineering
        </p>
        <RevealLines className="zt-display block" lines={["Design isn't", "decoration."]} />
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-20">
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              It's how technology becomes understandable — where considered design meets reliable
              engineering to create digital products.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="font-display text-2xl leading-tight font-extrabold tracking-[-0.02em] uppercase sm:text-4xl">
              Design <span className="text-accent">+</span> Engineering
              <span className="mt-2 block text-steel">= Digital products</span>
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {designExhibits.map((exhibit, index) => (
            <Reveal key={exhibit.label} delay={index * 0.06}>
              <div className="group h-52 bg-background transition-colors duration-500 hover:bg-surface">
                <div className="h-[calc(100%-2.5rem)]">
                  <Exhibit kind={exhibit.kind} />
                </div>
                <div className="flex h-10 items-center justify-between border-t border-line px-5">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                    {exhibit.label}
                  </span>
                  <span className="h-1 w-1 bg-accent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
