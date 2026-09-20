import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "home" },
  { to: "/resources", label: "resources" },
  { to: "/roadmaps", label: "roadmaps" },
  { to: "/tunisia", label: "tunisia corner" },
  { to: "/tips", label: "tips & guides" },
];

export default function Navbar({ route }: { route: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [route]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
          aria-label="Main navigation"
        >
          <a
            href="#/"
            className="group flex items-center gap-0.5 font-mono text-base font-bold tracking-tight"
          >
            <span className="text-green">&gt;</span>
            <span className="text-text transition-colors group-hover:text-accent">
              tundev
            </span>
            <span className="caret ml-0.5 inline-block h-4 w-2 bg-accent" />
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => {
              const active = route === l.to;
              return (
                <li key={l.to}>
                  <a
                    href={`#${l.to}`}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-md px-3 py-2 font-mono text-[13px] transition-colors ${
                      active
                        ? "text-accent"
                        : "text-muted hover:bg-surface2 hover:text-text"
                    }`}
                  >
                    {active && <span className="mr-1 text-faint">/</span>}
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* mobile toggle */}
          <button
            className="grid size-10 place-items-center rounded-md text-muted transition-colors hover:bg-surface2 hover:text-text md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </header>

      {/* mobile menu — sibling of <header> on purpose: `fixed` inside a
          backdrop-blurred element breaks the containing block, which was
          turning the menu background transparent */}
      {open && (
        <div
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-bg md:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          {/* faint editor-grid texture to match the body */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(139 148 158 / 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgb(139 148 158 / 0.045) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <ul className="relative flex flex-col gap-1 px-6 py-8">
            <li className="mb-4 font-mono text-xs text-faint">
              {"// navigation"}
            </li>
            {LINKS.map((l, i) => {
              const active = route === l.to;
              return (
                <li
                  key={l.to}
                  className="animate-fade-up"
                  style={{ animationDelay: `${i * 55}ms` }}
                >
                  <a
                    href={`#${l.to}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center rounded-lg border px-4 py-4 font-mono text-lg ${
                      active
                        ? "border-accent/30 bg-surface2 text-accent"
                        : "border-border bg-surface text-muted hover:text-text"
                    }`}
                  >
                    <span className="mr-3 text-faint">0{i + 1}</span>
                    {l.label}
                  </a>
                </li>
              );
            })}
            <li className="mt-8 text-center font-mono text-[11px] leading-relaxed text-faint">
              <span className="text-green">$</span> pick one. the other tabs
              will wait.
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
