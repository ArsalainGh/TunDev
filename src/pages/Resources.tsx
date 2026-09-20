import { useState } from "react";
import { ArrowUpRight, Sparkles, Mail } from "lucide-react";
import { SectionHead } from "../components/bits";
import {
  CATEGORY_INFO,
  CATEGORY_ORDER,
  RESOURCES,
  type Category,
  type Resource,
} from "../data/resources";

type Filter = Category | "all";

const SUB_LABELS: Record<string, string> = {
  ai: "ai tool",
  slides: "slides",
  editor: "editor",
  notes: "notes",
};

function ResourceCard({ r, color, index }: { r: Resource; color: string; index: number }) {
  return (
    <a
      href={r.url}
      target={r.url.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group animate-fade-up flex flex-col rounded-xl border border-border border-l-2 bg-surface p-5 acc-card"
      style={
        {
          "--acc": color,
          borderLeftColor: `color-mix(in oklab, ${color} 65%, transparent)`,
          animationDelay: `${Math.min(index, 8) * 45}ms`,
        } as React.CSSProperties
      }
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold leading-snug text-text transition-colors">
          {r.title}
        </h3>
        <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text" />
      </div>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{r.desc}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {r.sub && (
          <span
            className="rounded-md px-2 py-1 font-mono text-[10px]"
            style={{
              color,
              backgroundColor: `color-mix(in oklab, ${color} 12%, transparent)`,
            }}
          >
            {SUB_LABELS[r.sub] ?? r.sub}
          </span>
        )}
        {r.meta && (
          <span className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-faint">
            {r.meta}
          </span>
        )}
        {r.url === "#" && (
          <span className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-faint">
            todo: add link
          </span>
        )}
      </div>
    </a>
  );
}

export default function Resources() {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = CATEGORY_ORDER.reduce<Record<Category, number>>((acc, c) => {
    acc[c] = RESOURCES.filter((r) => r.category === c).length;
    return acc;
  }, {} as Record<Category, number>);

  const visible = filter === "all" ? CATEGORY_ORDER : [filter];

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <SectionHead
        kicker="ls ./resources --curated"
        title="The stash."
        sub="Every channel, book, tool and repo here was used by an actual student before it made the list. If it's here, it earned its spot."
      />

      {/* filter pills */}
      <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter resources">
        {(["all", ...CATEGORY_ORDER] as Filter[]).map((f) => {
          const active = filter === f;
          const color = f === "all" ? "#e6edf3" : CATEGORY_INFO[f].color;
          const label = f === "all" ? "all" : CATEGORY_INFO[f].label;
          const count = f === "all" ? RESOURCES.length : counts[f];
          return (
            <button
              key={f}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 font-mono text-xs transition-all ${
                active
                  ? "border-transparent text-bg"
                  : "border-border bg-surface text-muted hover:border-border-strong hover:text-text"
              }`}
              style={active ? { backgroundColor: color } : undefined}
            >
              {label}
              <span className={active ? "opacity-70" : "text-faint"}>
                {" "}· {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* grouped sections */}
      <div key={filter} className="mt-14 space-y-16">
        {visible.map((cat) => {
          const items = RESOURCES.filter((r) => r.category === cat);
          const info = CATEGORY_INFO[cat];
          return (
            <section key={cat} aria-label={info.label}>
              <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 className="font-mono text-xl font-bold tracking-tight">
                  <span style={{ color: info.color }}>##</span> {info.label}
                </h2>
                <p className="font-mono text-xs text-faint">
                  {"// "}
                  {info.blurb}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((r, i) => (
                  <ResourceCard key={r.title} r={r} color={info.color} index={i} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* missing something */}
      <div className="mt-20 flex flex-col items-center gap-3 rounded-xl border border-border bg-surface px-6 py-10 text-center">
        <Sparkles className="size-5 text-amber" />
        <p className="max-w-md text-sm leading-relaxed text-muted">
          Missing something obvious? A channel that saved your semester, a book
          that rewired your brain?{" "}
          <span className="text-text">This list is crowd-sourced.</span>
        </p>
        <a
          href="mailto:arsalaing@gmail.com"
          className="mt-1 inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline"
        >
          <Mail className="size-3.5" />
          send us your gem
        </a>
      </div>
    </div>
  );
}
