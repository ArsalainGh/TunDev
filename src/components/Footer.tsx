import { Star, FolderGit2, Link2, ArrowUpRight } from "lucide-react";

/* ── project + author links ── */
const GITHUB_PROFILE = "https://github.com/ArsalainGh";
const GITHUB_REPO = "https://github.com/ArsalainGh"; // TODO: point to the tundev repo once it exists
const GITHUB_STAR = "https://github.com/ArsalainGh";
const AUTHOR = "Arsalain Gharsallaoui";

const ITEMS = [
  {
    icon: Star,
    label: "give us a star on github",
    href: GITHUB_STAR,
    color: "var(--color-amber)",
  },
  {
    icon: FolderGit2,
    label: "see the project on github",
    href: GITHUB_REPO,
    color: "var(--color-accent)",
  },
  {
    icon: Link2,
    label: `built by ${AUTHOR}`,
    href: GITHUB_PROFILE,
    color: "var(--color-green)",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-3 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3.5 lift-card"
            >
              <item.icon
                className="size-4 shrink-0"
                style={{ color: item.color }}
              />
              <span className="truncate font-mono text-xs text-muted transition-colors group-hover:text-text">
                {item.label}
              </span>
              <ArrowUpRight className="ml-auto size-3.5 shrink-0 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-center">
          <p className="font-mono text-xs text-faint">
            <span className="text-green">$</span> uptime --since 2am
          </p>
          <p className="font-mono text-xs text-faint">
            © {new Date().getFullYear()} tundev · hand-rolled at 2am somewhere in
            tunisia · no cookies, no tracking, no nonsense
          </p>
        </div>
      </div>
    </footer>
  );
}
