import {
  ArrowUpRight,
  AtSign,
  Mail,
  MessagesSquare,
  Users,
} from "lucide-react";
import { Reveal, SectionHead, TerminalWindow } from "../components/bits";

/* ── facebook communities — TODO: verify/replace links ── */
const FB_GROUPS = [
  {
    name: "التوانسة الي يحبوا البرمجة 🇹🇳 - Tunisian Developers & IT Geeks",
    members: "135.4K members",
    desc: "✨ مجتمع التّوانسة إلي يحبّوا البرمجة ✨\n\nمرحبا بيك في عائلتنا 🎉 شكون آحنا وعلاش نعملو في هذا؟ أحنا مجموعة من المبرمجين والمطّورين التوّانسة تلمّينا في مجتمع واحد باش نشاركو خبرتنا مع بعضنا، نصنعو محتوى باللّهجة التونسية ونزيدو في تونس حتّى ب شوي! 💖",
    url: "https://www.facebook.com/groups/group.tpl/",
  },
  {
    name: "Le bon développeur 🇹🇳 المبرمج المناسب",
    members: "210.0K members", // TODO: verify
    desc: " Bienvenue dans Le bon développeur 🇹🇳 المبرمج المناسب, une communauté en ligne dédiée aux développeurs en Tunisie. Ce groupe est destiné à tous les développeurs, débutants ou expérimentés, qui cherchent à améliorer leurs compétences et à partager leurs connaissances.",
    url: "https://www.facebook.com/share/g/1Jv5f2uqrL/",
  },
];

/* ── discord communities — TODO: add real invite links ── */
const DISCORDS = [
  {
    name: "Tunisian Dev Hangout",
    members: "~2k members", // TODO: verify
    desc: "The chill server: homework help, memes, and a very active #show-your-project channel.",
    url: "#", // TODO: invite link(never ba5el wlh)
  },
];

/* ── accounts to follow ── */
const ACCOUNTS = [
  {
    name: "GoMyCode",
    handle: "@gomycode",
    desc: "Bootcamps, alumni stories and job posts. Very active, very Tunisian.",
    url: "https://gomycode.com/",
  },
  {
    name: "Startup Tunisia",
    handle: "startup.gov.tn",
    desc: "Grants, policy and the pulse of the local startup scene. Boring name, useful feed.",
    url: "https://startup.gov.tn/",
  },
  {
    name: "IEEE Tunisia Section",
    handle: "@ieeetunisia",
    desc: "Events, volunteer calls and competitions across the whole country.",
    url: "https://www.ieee.tn/",
  },
  {
    name: "GDG on the Coast",
    handle: "gdg.community.dev",
    desc: "Event announcements from the coastal chapters before anywhere else.",
    url: "https://gdg.community.dev/",
  },
];

/* ── the fun part ── */
const YOU_KNOW = [
  "your laptop has 4GB of RAM and 47 open documentation tabs. it survives.",//not me hmd 32ddr5
  "you've said 'the wifi cut mid-deploy' as an excuse. because it was true.",/*3icha ka7la wlh */
  "the family asks you to fix the printer. you fix the printer.",
  "you learned french for school, english for the docs, and darija for debugging rage.",
  "'make me an app like facebook but better' — every relative, every wedding.",
  "your drive contains a folder called 'courses_FINAL_v2_REAL.zip'.",
  "you measure progress in errors solved, not years passed. correct.",
];

function CommunityCard({
  item,
  icon: Icon,
  color,
  action = "join",
  delay = 0,
}: {
  item: { name: string; members: string; desc: string; url: string };
  icon: typeof Users;
  color: string;
  action?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <a
        href={item.url}
        target={item.url.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 acc-card"
        style={{ "--acc": color } as React.CSSProperties}
      >
        <div className="flex items-center justify-between gap-3">
          <div
            className="grid size-10 place-items-center rounded-lg"
            style={{
              color,
              backgroundColor: `color-mix(in oklab, ${color} 12%, transparent)`,
            }}
          >
            <Icon className="size-5" />
          </div>
          <span className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-faint">
            {item.members}
          </span>
        </div>
        <h3 className="mt-4 font-mono text-base font-bold tracking-tight">
          {item.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {item.desc}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-faint transition-colors group-hover:text-text">
          {action}
          <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </a>
    </Reveal>
  );
}

export default function TunisiaCorner() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <Reveal>
        <SectionHead
          kicker="ping tunisia.tn --community"
          title="Tunisia corner."
          sub="The local side of the internet. Communities and people who get the context — the 4GB laptops, the shared drive of courses, the dream of remote work in euros."
        />
      </Reveal>

      {/* ── facebook ─────────────────────────────────────── */}
      <section className="mt-16" aria-label="Facebook communities">
        <Reveal>
          <h2 className="font-mono text-xl font-bold tracking-tight">
            <span className="text-accent">##</span> facebook communities
          </h2>
          <p className="mt-1 font-mono text-xs text-faint">
            {"// yes, facebook. it's tunisia — everything happens there."}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FB_GROUPS.map((g, i) => (
            <CommunityCard
              key={g.name}
              item={g}
              icon={Users}
              color="#58a6ff"
              action="join the group"
              delay={(i % 3) * 70}
            />
          ))}
        </div>
      </section>

      {/* ── discord ──────────────────────────────────────── */}
      <section className="mt-20" aria-label="Discord communities">
        <Reveal>
          <h2 className="font-mono text-xl font-bold tracking-tight">
            <span className="text-purple">##</span> discord servers
          </h2>
          <p className="mt-1 font-mono text-xs text-faint">
            {"// where the actual 2am debugging support happens"}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DISCORDS.map((d, i) => (
            <CommunityCard
              key={d.name}
              item={d}
              icon={MessagesSquare}
              color="#bc8cff"
              action="grab an invite"
              delay={i * 70}
            />
          ))}
        </div>
        <Reveal>
          <p className="mt-4 font-mono text-[11px] text-faint">
            {"// placeholder links — drop your server invite in src/pages/TunisiaCorner.tsx"}
          </p>
        </Reveal>
      </section>

      {/* ── accounts ─────────────────────────────────────── */}
      <section className="mt-20" aria-label="Accounts to follow">
        <Reveal>
          <h2 className="font-mono text-xl font-bold tracking-tight">
            <span className="text-green">##</span> tunisian tech twitter/x & linkedin
          </h2>
          <p className="mt-1 font-mono text-xs text-faint">
            {"// follow smart people, become slightly smarter by osmosis"}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ACCOUNTS.map((a, i) => (
            <Reveal key={a.name} delay={i * 70}>
              <a
                href={a.url}
                target={a.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 acc-card"
                style={{ "--acc": "#3fb950" } as React.CSSProperties}
              >
                <AtSign className="size-5 text-green" />
                <h3 className="mt-4 font-mono text-base font-bold tracking-tight">
                  {a.name}
                </h3>
                <p className="mt-0.5 font-mono text-[11px] text-faint">
                  {a.handle}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {a.desc}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── the fun part ─────────────────────────────────── */}
      <section className="mt-24" aria-label="Tunisian dev starter pack">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="font-mono text-sm text-green">
                <span className="text-faint">$</span> grep -i "relatable"
                ./tunisian-dev.conf
              </p>
              <h2 className="mt-3 font-mono text-2xl font-bold tracking-tight sm:text-3xl">
                You know you're a Tunisian dev when…
              </h2>
            </div>

            <TerminalWindow title="zsh — tundev@tn" className="mt-10">
              <div className="p-5 font-mono text-[13px] leading-7">
                <p>
                  <span className="text-green">tundev@tn</span>
                  <span className="text-faint">:</span>
                  <span className="text-accent">~</span>
                  <span className="text-faint">$</span>{" "}
                  <span className="text-text">
                    you-know --tunisian-dev --list
                  </span>
                </p>
                {YOU_KNOW.map((line) => (
                  <p key={line} className="text-muted">
                    <span className="text-green">&gt;</span> {line}
                  </p>
                ))}
                <p>
                  <span className="text-green">tundev@tn</span>
                  <span className="text-faint">:</span>
                  <span className="text-accent">~</span>
                  <span className="text-faint">$</span>{" "}
                  <span className="caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-text" />
                </p>
              </div>
            </TerminalWindow>
          </div>
        </Reveal>
      </section>

      {/* closing */}
      <Reveal>
        <div className="mt-24 text-center">
          <p className="font-mono text-sm text-muted">
            {"// alone you debug. together you ship."}
          </p>
          <a
            href="mailto:arsalaing@gmail.com"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 font-mono text-xs text-muted transition-colors hover:border-green/50 hover:text-green"
          >
            <Mail className="size-4" />
            got a community we missed?
          </a>
        </div>
      </Reveal>
    </div>
  );
}