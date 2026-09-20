import { useEffect, useRef, type ReactNode } from "react";

/* Fade-in-on-scroll wrapper. Adds .is-visible via IntersectionObserver. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* Section heading with a terminal-style kicker line. */
export function SectionHead({
  kicker,
  title,
  sub,
  center = false,
}: {
  kicker: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="font-mono text-sm text-green">
        <span className="text-faint">$</span> {kicker}
      </p>
      <h2 className="mt-3 font-mono text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 max-w-2xl leading-relaxed text-muted ${
            center ? "mx-auto" : ""
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* Fake editor / terminal window chrome. */
export function TerminalWindow({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface2 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-faint">{title}</span>
      </div>
      {children}
    </div>
  );
}
