import {
  ArrowUpRight,
  BarChart3,
  CloudCog,
  FlaskConical,
  Gamepad2,
  LayoutTemplate,
  Layers,
  Server,
  Shield,
  Smartphone,
} from "lucide-react";
import { Reveal, SectionHead } from "../components/bits";

const ROADMAPS = [
  {
    icon: LayoutTemplate,
    title: "frontend",
    path: "frontend",
    desc: "HTML, CSS, JavaScript, React — the part of the internet users actually see.",
    meta: "entry: friendly · jobs: plenty",
    color: "#58a6ff",
  },
  {
    icon: Server,
    title: "backend",
    path: "backend",
    desc: "APIs, databases, auth — everything that happens behind the curtain.",
    meta: "entry: steady · jobs: plenty",
    color: "#3fb950",
  },
  {
    icon: Layers,
    title: "full-stack",
    path: "full-stack",
    desc: "Both sides of the wire. Slower to start, terrifying to compete with later.",
    meta: "entry: marathon · jobs: growing",
    color: "#bc8cff",
  },
  {
    icon: Shield,
    title: "cybersecurity",
    path: "cyber-security",
    desc: "Learn to think like an attacker so you can defend like a professional.",
    meta: "entry: steep · very cool",
    color: "#f85149",
  },
  {
    icon: BarChart3,
    title: "data analyst",
    path: "data-analyst",
    desc: "SQL, spreadsheets, dashboards — turning chaos into 'so here's the decision'.",
    meta: "entry: friendly · math: light",
    color: "#d29922",
  },
  {
    icon: FlaskConical,
    title: "data scientist",
    path: "ai-data-scientist",
    desc: "Stats, Python, machine learning. Math-heavy, but the ceiling is high.",
    meta: "entry: heavy · math: yes",
    color: "#f778ba",
  },
  {
    icon: Smartphone,
    title: "mobile dev",
    path: "flutter",
    desc: "Flutter, Android, iOS — apps people actually hold in their hands.",
    meta: "entry: fun · instant results",
    color: "#39c5cf",
  },
  {
    icon: Gamepad2,
    title: "game dev",
    path: "game-developer",
    desc: "Engines, physics, shaders. Suffering, but the extremely fun kind.",
    meta: "entry: wild · sleep: optional",
    color: "#ffa657",
  },
  {
    icon: CloudCog,
    title: "devops & cloud",
    path: "devops",
    desc: "CI/CD, Docker, Kubernetes — the people who keep the internet alive.",
    meta: "entry: sturdy · respect: earned",
    color: "#7ee787",
  },
];

export default function Roadmaps() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <Reveal>
        <SectionHead
          kicker="roadmap.sh --list-all"
          title="Choose your class."
          sub="Every card below is a full skill tree, maintained by the roadmap.sh community. They built the maps — we just pinned them to the wall."
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-8 rounded-xl border border-border bg-surface px-5 py-4">
          <p className="font-mono text-sm leading-relaxed text-muted">
            <span className="text-red">!</span>{" "}
            <span className="text-text">rule #1 of roadmaps:</span> pick exactly
            one. We've all tried running two at once. It doesn't work — you just
            end up lost in picturesque, high-resolution detail.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ROADMAPS.map((r, i) => (
          <Reveal key={r.title} delay={(i % 3) * 80}>
            <a
              href={`https://roadmap.sh/${r.path}`}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 acc-card"
              style={{ "--acc": r.color } as React.CSSProperties}
            >
              <div className="flex items-start justify-between">
                <div
                  className="grid size-12 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                  style={{
                    color: r.color,
                    backgroundColor: `color-mix(in oklab, ${r.color} 12%, transparent)`,
                  }}
                >
                  <r.icon className="size-6" />
                </div>
                <span className="font-mono text-xs text-faint">
                  path_0{i + 1}
                </span>
              </div>

              <h3 className="mt-5 font-mono text-lg font-bold tracking-tight">
                {r.title}
              </h3>
              <p className="mt-1 font-mono text-[11px] text-faint">
                roadmap.sh/{r.path}
              </p>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {r.desc}
              </p>

              <p className="mt-4 font-mono text-[11px]" style={{ color: r.color }}>
                {r.meta}
              </p>

              <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 font-mono text-xs text-muted transition-colors group-hover:text-text">
                view roadmap
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mx-auto mt-16 max-w-xl text-center font-mono text-sm leading-relaxed text-faint">
          {"// feeling overwhelmed by choice? pick the one that sounds the"}
          <br className="hidden sm:block" />
          {"// most fun. motivation beats strategy in the long run."}
        </p>
      </Reveal>
    </div>
  );
}
