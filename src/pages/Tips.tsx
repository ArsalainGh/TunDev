import {
  ArrowUpRight,
  BookOpen,
  Brain,
  GitBranch,
  Heart,
  MonitorPlay,
  PersonStanding,
  TriangleAlert,
} from "lucide-react";
import { Reveal, SectionHead } from "../components/bits";

/* ── youtube advice (links go to yt search — they never rot) ── */
const YT = [
  {
    title: "How to escape tutorial hell",
    desc: "The loop every beginner knows: course #12, zero projects. This is how you break out of it.",
  },
  {
    title: "How to actually learn to code (the boring secret)",
    desc: "Spoiler: it's building ugly things until they become less ugly. Nobody wants to hear it.",
  },
  {
    title: "A realistic day in the life of a software engineer",
    desc: "Less hacker-montage typing, more meetings and reading old code. Better to learn this early.",
  },
  {
    title: "Web development roadmap (current year)",
    desc: "So you can finally stop asking 'is PHP dead' in the group chat.",
  },
  {
    title: "\u201cI'm bad at math\u201d — and other myths",
    desc: "You need logic, not integrals. Watch this before you disqualify yourself for no reason.",
  },
  {
    title: "Portfolio projects that actually get replies",
    desc: "What recruiters skim, what they ignore, and what makes them click on your repo.",
  },
];

/* ── medium reads ── real articles, real links, no rot risk ── */
const MEDIUM = [
  {
    title: "Escaping Tutorial Purgatory as a Software Developer",
    desc: "How to actually use tutorials as a resource instead of a crutch you never put down.",
    href: "https://medium.com/novice-programmers-toolkit/escaping-tutorial-purgatory-as-a-software-developer-968be4c85845",
  },
  {
    title: "From Tutorial Hell to Real Projects: How to Learn Programming",
    desc: "Why hand-holding tutorials skip the exact struggle that makes things stick.",
    href: "https://medium.com/@annasaaddev/from-tutorial-hell-to-real-projects-how-to-learn-programming-85194e36277f",
  },
  {
    title: "Stop Watching Tutorials — Here's How to Actually Learn to Code",
    desc: "The 80/20 rule nobody follows: code more than you watch, not the other way around.",
    href: "https://levelup.gitconnected.com/stop-watching-tutorials-heres-how-to-actually-learn-to-code-bc1490481e48",
  },
  {
    title: "Until You Actually Code, You're Not Learning",
    desc: "One student's honest account of nearly becoming a tutorial-purgatory lifer.",
    href: "https://abbybuilds.medium.com/until-you-actually-code-youre-not-learning-107a8aced16f",
  },
  {
    title: "Cracking the Code of Imposter Syndrome as a Programmer",
    desc: "You know more than you think — a short list of ways to prove it to yourself.",
    href: "https://levelup.gitconnected.com/cracking-the-code-of-imposter-syndrome-as-a-programmer-21cfa291cd36",
  },
  {
    title: "3 Ways to Go From Tutorials to Building Your Own Projects",
    desc: "A dev who got her first job explains how she eased off the tutorial training wheels.",
    href: "https://www.freecodecamp.org/news/how-to-go-from-coding-tutorials-to-building-your-own-projects-b9ab51074980/",
  },
  {
    title: "The Balancing Act: Achieving Success Without Burning Out",
    desc: "Extra hours aren't the fix if you're pouring them into the wrong things.",
    href: "https://jaiin-maniish.medium.com/the-balancing-act-achieving-success-without-burning-out-b10773f4f55f",
  },
  {
    title: "5 Telltale Signs of Burnout and How to Beat It",
    desc: "Spot it before it's too late — the early warning signs most students brush off.",
    href: "https://jaiin-maniish.medium.com/5-telltale-signs-of-burnout-and-how-to-beat-it-d59db4849a6a",
  },
];

const ytSearch = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

export default function Tips() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <Reveal>
        <SectionHead
          kicker="man surviving-it-studies"
          title="Tips & guides."
          sub="The stuff seniors tell you after the third coffee. Videos, posts, and a few things we wrote ourselves at questionable hours."
        />
      </Reveal>

      {/* ── youtube advice ─────────────────────────────────── */}
      <section className="mt-16" aria-label="Video advice">
        <Reveal>
          <h2 className="font-mono text-xl font-bold tracking-tight">
            <span className="text-red">##</span> press play
          </h2>
          <p className="mt-1 font-mono text-xs text-faint">
            {"// 6 videos worth your bandwidth — links open a yt search, so they never die"}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {YT.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 70}>
              <a
                href={ytSearch(v.title)}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 acc-card"
                style={{ "--acc": "#f85149" } as React.CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-red/10 px-2 py-1 font-mono text-[10px] text-red">
                    <MonitorPlay className="size-3" />
                    watch
                  </span>
                  <ArrowUpRight className="size-4 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text" />
                </div>
                <h3 className="mt-4 font-semibold leading-snug text-text">
                  {v.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {v.desc}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── medium reads ───────────────────────────────────── */}
      <section className="mt-20" aria-label="Medium reads">
        <Reveal>
          <h2 className="font-mono text-xl font-bold tracking-tight">
            <span className="text-pink">##</span> read on the bus
          </h2>
          <p className="mt-1 font-mono text-xs text-faint">
            {"// 8 Medium posts worth the 5-minute read"}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MEDIUM.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 acc-card"
                style={{ "--acc": "#f778ba" } as React.CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-md bg-pink/10 px-2 py-1 font-mono text-[10px] text-pink">
                    <BookOpen className="size-3" />
                    read
                  </span>
                  <ArrowUpRight className="size-4 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text" />
                </div>
                <h3 className="mt-4 font-semibold leading-snug text-text">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── written by us ──────────────────────────────────── */}
      <section className="mt-20" aria-label="Written guides">
        <Reveal>
          <h2 className="font-mono text-xl font-bold tracking-tight">
            <span className="text-green">##</span> written by us, at 2am
          </h2>
          <p className="mt-1 font-mono text-xs text-faint">
            {"// original advice. zero ai-generated fluff. one legally required meme."}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {/* the arch card — full width, with patrick */}
          <Reveal className="lg:col-span-2">
            <article
              className="acc-card overflow-hidden rounded-xl border border-border bg-surface"
              style={{ "--acc": "#58a6ff" } as React.CSSProperties}
            >
              <div className="grid md:grid-cols-[1fr_280px]">
                <div className="p-7 sm:p-9">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-accent/10 px-2 py-1 font-mono text-[10px] text-accent">
                      meme-tier advice
                    </span>
                    <span className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-faint">
                      you have been warned
                    </span>
                  </div>
                  <h3 className="mt-4 font-mono text-2xl font-bold tracking-tight">
                    Install Arch Linux.{" "}
                    <span className="text-accent">No, really.</span>
                  </h3>

                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
                    <p>
                      Everyone will tell you not to.{" "}
                      <span className="text-text">"It breaks."</span>{" "}
                      <span className="text-text">"You'll lose a weekend."</span>{" "}
                      <span className="text-text">"Nobody needs that."</span>{" "}
                      They're right. And that's exactly why you should do it.
                    </p>
                    <p>
                      Installing Arch is a{" "}
                      <span className="text-text">controlled disaster</span>.
                      You will partition wrong. You will forget the bootloader.
                      You will sit in front of a black screen at 2am questioning
                      your degree, your choices, and the concept of time itself.
                      Then — it boots. A blank terminal that{" "}
                      <span className="text-text">you built, piece by piece</span>.
                      From that day on, your laptop stops being a mysterious
                      appliance and starts being your machine.
                    </p>
                    <p>
                      Config files, kernels, drivers, package managers — all the
                      stuff your OS course vaguely gestures at? You'll actually
                      understand it now. Painfully. Permanently.
                    </p>
                    <p>
                      Legally required disclaimer: once it works, you must say{" "}
                      <span className="font-mono text-sm text-accent">
                        "I use Arch, btw"
                      </span>{" "}
                      at least once per conversation. We don't make the rules.
                    </p>
                  </div>

                  <div className="mt-6 flex items-start gap-3 rounded-lg border border-amber/30 bg-amber/5 px-4 py-3">
                    <TriangleAlert className="mt-0.5 size-4 shrink-0 text-amber" />
                    <p className="font-mono text-xs leading-relaxed text-amber/90">
                      back up your files first. seriously. we are not liable
                      for lost semesters.
                    </p>
                  </div>
                </div>

                <figure className="relative border-t border-border md:border-l md:border-t-0">
                  <img
                    src="images/patrick.jpg"
                    alt="A smug consultant calmly sipping tea — pure Patrick Jane energy"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-bg/85 px-4 py-3 font-mono text-[11px] leading-relaxed text-muted backdrop-blur-sm">
                    <span className="text-faint">// </span>
                    you, calm and unbothered, explaining your dotfiles to
                    someone who didn't ask — patrick jane energy
                  </figcaption>
                </figure>
              </div>
            </article>
          </Reveal>

          {/* written cards */}
          <Reveal>
            <article
              className="acc-card flex h-full flex-col rounded-xl border border-border bg-surface p-7"
              style={{ "--acc": "#3fb950" } as React.CSSProperties}
            >
              <span className="w-fit rounded-md bg-green/10 px-2 py-1 font-mono text-[10px] text-green">
                escape plan
              </span>
              <h3 className="mt-4 font-mono text-lg font-bold tracking-tight">
                Tutorial hell has an exit door. It's called a project.
              </h3>
              <div className="mt-3 flex-1 space-y-3 text-sm leading-relaxed text-muted">
                <p>
                  Here's the move: pick something small and slightly stupid. A
                  site for your uni club. A grade calculator. A bot that sends
                  you the resto menu every morning.
                </p>
                <p>
                  Then build it{" "}
                  <span className="text-text">without a tutorial</span>. Google
                  only when stuck. Copy errors into the search bar like a
                  professional. And most importantly —{" "}
                  <span className="text-text">finish it</span>. A finished ugly
                  project teaches you more than ten abandoned beautiful ones.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article
              className="acc-card flex h-full flex-col rounded-xl border border-border bg-surface p-7"
              style={{ "--acc": "#bc8cff" } as React.CSSProperties}
            >
              <span className="w-fit rounded-md bg-purple/10 px-2 py-1 font-mono text-[10px] text-purple">
                career
              </span>
              <h3 className="mt-4 font-mono text-lg font-bold tracking-tight">
                Your GitHub is your CV now. Act like it.
              </h3>
              <div className="mt-3 flex-1 space-y-3 text-sm leading-relaxed text-muted">
                <p>
                  Recruiters don't read your "passionate about technology"
                  paragraph. They click your GitHub link and spend{" "}
                  <span className="text-text">90 seconds</span> there. That's
                  the whole interview pre-screening.
                </p>
                <p>
                  So: pin your 3 best repos. Write READMEs like a human —
                  what it does, a screenshot, how to run it. Real small projects
                  beat tutorial clones every single time. Yes, they can tell.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <article
              className="acc-card flex h-full flex-col rounded-xl border border-border bg-surface p-7"
              style={{ "--acc": "#d29922" } as React.CSSProperties}
            >
              <span className="w-fit rounded-md bg-amber/10 px-2 py-1 font-mono text-[10px] text-amber">
                study tech
              </span>
              <h3 className="mt-4 font-mono text-lg font-bold tracking-tight">
                Study techniques that respect your RAM.
              </h3>
              <div className="mt-3 grid gap-6 text-sm leading-relaxed text-muted sm:grid-cols-3">
                <p>
                  <span className="font-mono text-xs text-text">01 /</span>{" "}
                  Active recall: close the slides, write what you remember. It
                  feels bad because it works. Re-reading is just scrolling with
                  extra steps.
                </p>
                <p>
                  <span className="font-mono text-xs text-text">02 /</span>{" "}
                  Pomodoro, but honest: 25 minutes actually focused, 5 minutes
                  actually off. The phone goes in the other room. Yes, the other
                  room.
                </p>
                <p>
                  <span className="font-mono text-xs text-text">03 /</span>{" "}
                  Teach what you learned to a friend, a sibling, or the wall.
                  If you can't explain it simply, you haven't learned it — the
                  wall will be honest about this.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ── wellness ───────────────────────────────────────── */}
      <section className="mt-20" aria-label="Wellness">
        <Reveal>
          <article className="overflow-hidden rounded-xl border border-green/30 bg-gradient-to-br from-green/[0.07] to-transparent p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-lg bg-green/10 text-green">
                <Heart className="size-5" />
              </div>
              <div>
                <h2 className="font-mono text-xl font-bold tracking-tight">
                  Take care of the machine that runs the code.
                </h2>
                <p className="font-mono text-xs text-faint">
                  that's you, by the way. no warranty, no spare parts.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-7 md:grid-cols-3">
              <div>
                <p className="flex items-center gap-2 font-mono text-sm font-bold text-green">
                  <Brain className="size-4" /> the brain
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Burnout is not a badge of honor — it's a memory leak.
                  Imposter syndrome lies to everyone; the senior you admire
                  still googles "css center div". Rest is part of the work, not
                  a reward for finishing it.
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 font-mono text-sm font-bold text-green">
                  <PersonStanding className="size-4" /> the body
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Water before the fourth coffee. Shoulders back, screen at eye
                  level. A 10-minute walk fixes bugs your brain can't — this is
                  documented behavior.
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 font-mono text-sm font-bold text-green">
                  <GitBranch className="size-4" /> the habits
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  20-20-20 rule for your eyes: every 20 minutes, look 6 meters
                  away for 20 seconds. Ship small commits often. Progress you
                  can see beats progress you have to imagine.
                </p>
              </div>
            </div>

            <p className="mt-8 border-t border-green/20 pt-6 text-center font-mono text-sm text-muted">
              the code will still be there after your break.{" "}
              <span className="text-green">promise.</span>
            </p>
          </article>
        </Reveal>
      </section>

      {/* ── closing message ────────────────────────────────── */}
      <section className="mt-24" aria-label="Closing message">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface px-6 py-16 text-center">
            <GitBranch className="mx-auto size-5 text-faint" />
            <p className="mt-6 font-mono text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              You don't have to master it all today.
              <br />
              <span className="text-accent">You just have to show up.</span>
            </p>
            <p className="mt-6 font-mono text-xs text-faint">
              {"// end of file. go drink some water."}
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}