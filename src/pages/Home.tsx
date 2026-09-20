import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Dices,
  FolderGit2,
  Camera,
  Mail,
  Map,
  MessagesSquare,
  Users,
  Wrench,
} from "lucide-react";
import { Reveal, SectionHead, TerminalWindow } from "../components/bits";
import { pickQuotes, type Quote } from "../data/resources";

/* looping typewriter for the hero kicker — types, holds, erases, repeats */
function useTypewriter(text: string) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!deleting) {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          deleting = true;
          timer = setTimeout(tick, 2600); // hold the full sentence
          return;
        }
        timer = setTimeout(tick, 30 + Math.random() * 45); // human-ish keystrokes
      } else {
        i -= 1;
        setOut(text.slice(0, i));
        if (i <= 0) {
          deleting = false;
          timer = setTimeout(tick, 600); // breathe before rewriting
          return;
        }
        timer = setTimeout(tick, 16); // deleting is always faster
      }
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [text]);
  return out;
}

/* hand-highlighted code lines for the fake editor */
const C = {
  kw: "text-[#ff7b72]",
  str: "text-[#a5d6ff]",
  num: "text-[#79c0ff]",
  fn: "text-[#d2a8ff]",
  com: "italic text-faint",
  punc: "text-muted",
  base: "text-text",
};

const CODE_LINES = [
  [<span className={C.com}>{"// welcome.ts"}</span>],
  [
    <span className={C.com}>
      {"// if you're reading this, you already started."}
    </span>,
  ],
  [],
  [
    <span className={C.kw}>const</span>,
    <span className={C.base}> you </span>,
    <span className={C.punc}>=</span>,
    <span className={C.punc}> {"{"}</span>,
  ],
  [
    <span className={C.base}>{"  from"}</span>,
    <span className={C.punc}>:</span>,
    <span className={C.str}> "Tunisia"</span>,
    <span className={C.punc}>,</span>,
  ],
  [
    <span className={C.base}>{"  feeling"}</span>,
    <span className={C.punc}>:</span>,
    <span className={C.str}> "a bit lost"</span>,
    <span className={C.punc}>,</span>,
  ],
  [
    <span className={C.base}>{"  potential"}</span>,
    <span className={C.punc}>:</span>,
    <span className={C.num}> Infinity</span>,
    <span className={C.punc}>,</span>,
    <span className={C.com}>{"   // not a bug"}</span>,
  ],
  [<span className={C.punc}>{"};"}</span>],
  [],
  [
    <span className={C.kw}>while</span>,
    <span className={C.punc}> (</span>,
    <span className={C.punc}>!</span>,
    <span className={C.base}>you.givesUp</span>,
    <span className={C.punc}>{") {"}</span>,
  ],
  [
    <span className={C.fn}>{"  learn"}</span>,
    <span className={C.punc}>(</span>,
    <span className={C.base}>oneSmallThing</span>,
    <span className={C.punc}>);</span>,
  ],
  [
    <span className={C.fn}>{"  build"}</span>,
    <span className={C.punc}>(</span>,
    <span className={C.base}>oneSmallProject</span>,
    <span className={C.punc}>);</span>,
  ],
  [
    <span className={C.base}>{"  you.confidence"}</span>,
    <span className={C.punc}>++;</span>,
  ],
  [<span className={C.punc}>{"}"}</span>],
  [],
  [
    <span className={C.com}>
      {'// no deadlines. no "10x". just progress.'}
    </span>,
  ],
];

function CodeWindow() {
  return (
    <TerminalWindow title="welcome.ts — tundev" className="w-full">
      <div className="overflow-x-auto p-5">
        <pre className="font-mono text-[13px] leading-6">
          {CODE_LINES.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-8 shrink-0 select-none pr-4 text-right text-faint/60">
                {i + 1}
              </span>
              <code className="whitespace-pre">
                {line.length ? (
                  line.map((part, j) => <span key={j}>{part}</span>)
                ) : (
                  <span>&nbsp;</span>
                )}
              </code>
            </div>
          ))}
        </pre>
      </div>
      <div className="flex items-center justify-between border-t border-border bg-surface2 px-4 py-2 font-mono text-[10px] text-faint">
        <span>main*</span>
        <span>typescript · utf-8 · you're doing fine</span>
      </div>
    </TerminalWindow>
  );
}

function Quotes() {
  const [quotes, setQuotes] = useState<Quote[]>(() => pickQuotes(4));
  const [spinKey, setSpinKey] = useState(0);

  const reroll = () => {
    setQuotes(pickQuotes(4));
    setSpinKey((k) => k + 1);
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHead
          kicker="fortune | grep motivation"
          title="Words to compile by."
          sub="Four random ones per visit. No cathedral-of-productivity quotes, we promise."
        />
        <button
          onClick={reroll}
          className="group flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent"
        >
          <Dices className="size-4 transition-transform group-hover:rotate-180" />
          re-roll
        </button>
      </div>

      <div key={spinKey} className="mt-10 grid gap-4 sm:grid-cols-2">
        {quotes.map((q, i) => (
          <figure
            key={`${q.author}-${i}`}
            className="animate-fade-up rounded-xl border border-border bg-surface p-6 lift-card"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <blockquote className="font-mono text-sm leading-relaxed text-text">
              <span className="text-faint">
                {q.style === "/*" ? "/*" : q.style}{" "}
              </span>
              <span className="text-green">"{q.text}"</span>
              <span className="text-faint">{q.style === "/*" ? " */" : ""}</span>
            </blockquote>
            <figcaption className="mt-3 font-mono text-xs text-muted">
              <span className="text-faint">{q.style === "--" ? "--" : "//"}</span>{" "}
              — {q.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

const STEPS = [
  {
    icon: Map,
    color: "var(--color-accent)",
    cmd: "cd roadmaps",
    title: "pick your path",
    desc: "One roadmap. Not five. Choose it, commit to it, ignore the rest for now.",
    href: "#/roadmaps",
    link: "see the paths",
  },
  {
    icon: Wrench,
    color: "var(--color-purple)",
    cmd: "cd resources",
    title: "grab your tools",
    desc: "Channels, books, AI tools and repos — filtered down to the stuff that works.",
    href: "#/resources",
    link: "browse the stash",
  },
  {
    icon: BookOpen,
    color: "var(--color-amber)",
    cmd: "cd tips",
    title: "learn the game",
    desc: "Advice that isn't recycled LinkedIn wisdom. Plus one chaotic Linux recommendation.",
    href: "#/tips",
    link: "read the tips",
  },
  {
    icon: Users,
    color: "var(--color-green)",
    cmd: "cd tunisia",
    title: "join the fam",
    desc: "Local groups, Discords and events. Nobody survives this degree alone.",
    href: "#/tunisia",
    link: "find your people",
  },
];

const SOCIALS = [
  { icon: MessagesSquare, label: "discord", href: "#", color: "#7289da", external: false }, // TODO: invite link
  { icon: Users, label: "facebook group", href: "#", color: "#58a6ff", external: false }, // TODO: group link
  { icon: FolderGit2, label: "github", href: "https://github.com/ArsalainGh", color: "#e6edf3", external: true },
  { icon: Camera, label: "instagram", href: "https://www.instagram.com/arsalain.gharsallaoui", color: "#f778ba", external: true },
  { icon: Mail, label: "email", href: "mailto:arsalaing@gmail.com", color: "#3fb950", external: false },
];

export default function Home() {
  const kicker = useTypewriter("for tunisian IT students who feel lost");
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      {/* ── hero ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="min-h-6 font-mono text-sm" aria-live="polite">
              <span className="text-faint">{"// "}</span>
              <span className="text-green">{kicker}</span>
              <span className="caret ml-0.5 inline-block h-3.5 w-[7px] translate-y-0.5 bg-green" />
            </p>

            <h1 className="mt-6 font-mono text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
              You're not behind.
              <br />
              <span className="text-accent">You just started.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              TunDev is a free, no-fluff hub for Tunisian IT students drowning in
              tutorials, contradictory advice, and 47 open tabs. Built by students
              who were just as lost. Yallah — let's figure it out together.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#/roadmaps"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-mono text-sm font-bold text-bg transition-colors hover:bg-sky"
              >
                pick a roadmap
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#/resources"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3.5 font-mono text-sm text-muted transition-colors hover:border-border-strong hover:text-text"
              >
                browse the stash
              </a>
            </div>

            <p className="mt-6 font-mono text-xs text-faint">
              <span className="text-green">$</span> cd ./your-future — no
              installs required · est. {year}
            </p>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "250ms" }}>
            <CodeWindow />
          </div>
        </div>
      </section>

      {/* ── why we built this ────────────────────────────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <SectionHead
              kicker="cat why-we-built-this.md"
              title="Why this exists."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Because we were there too. Sitting in lectures that explained
                everything except what we needed. Googling{" "}
                <em className="font-mono text-base not-italic text-text">
                  "is it too late to learn programming at 22"
                </em>{" "}
                at 3am. Restarting the same course for the fourth time and
                calling it "discipline".
              </p>
              <p>
                Everyone kept saying{" "}
                <span className="text-text">"just learn to code"</span> — nobody
                said where, in what order, on Tunisian internet, with a Tunisian
                budget. So we built the page we wish someone had sent us on day
                one: the good resources, the honest roadmaps, and the stuff
                nobody tells you, all in one place.
              </p>
              <p>
                No sign-ups. No paywalls. No motivational posters. Just the map
                we drew while getting lost ourselves.
              </p>
              <p className="pt-2 font-mono text-sm text-faint">
                — students from tunisia, still figuring it out{" "}
                <span className="text-green">// just like you(except I use Arch Btw)</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── how to use this ──────────────────────────────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <SectionHead
              kicker="./getting-started.sh"
              title="How to use this."
              sub="Four folders. That's the whole system. Start anywhere, but we suggest left to right."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <a
                  href={s.href}
                  className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 acc-card"
                  style={{ "--acc": s.color } as React.CSSProperties}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="grid size-11 place-items-center rounded-lg"
                      style={{
                        color: s.color,
                        backgroundColor: `color-mix(in oklab, ${s.color} 12%, transparent)`,
                      }}
                    >
                      <s.icon className="size-5" />
                    </div>
                    <span className="font-mono text-xs text-faint">
                      {s.cmd}
                    </span>
                  </div>
                  <h3 className="mt-5 font-mono text-base font-bold text-text">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-faint transition-colors group-hover:text-text">
                    {s.link}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── quotes ───────────────────────────────────────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <Quotes />
          </Reveal>
        </div>
      </section>

      {/* ── contribute ───────────────────────────────────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-sm text-green">
                <span className="text-faint">$</span> git remote add you
                https://your-ideas
              </p>
              <h2 className="mt-3 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
                Want to contribute?
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                This whole thing runs on suggestions from students like you.
                Found a gem we missed? Spotted a dead link? Wrote something
                worth sharing? Reach out anywhere:
              </p>
              <div className="mt-9 flex flex-wrap items-start justify-center gap-4">
                {SOCIALS.map((s) => {
                  const isExternal = s.href.startsWith("http");
                
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={isExternal ? "_blank" : "_self"}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex w-20 flex-col items-center gap-2.5"
                    >
                      <span className="grid size-13 place-items-center rounded-xl border border-border bg-surface p-3.5 lift-card">
                        <s.icon
                          className="size-5 transition-colors"
                          style={{ color: s.color }}
                        />
                      </span>
                      <span className="font-mono text-[11px] leading-tight text-faint transition-colors group-hover:text-text">
                        {s.label}
                      </span>
                    </a>
                  );
                })}
              </div>
              <p className="mt-8 font-mono text-xs text-faint">
                {"// the repo, the discord and the fb group are one person away"}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
