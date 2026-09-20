/* ────────────────────────────────────────────────────────────────
   tundev · curated data
   Every entry here was chosen to be genuinely useful. Placeholders
   are marked with url: "#" and a TODO — swap them before shipping.
   ──────────────────────────────────────────────────────────────── */

export type Category =
  | "youtube"
  | "books"
  | "tools"
  | "platforms"
  | "creators"
  | "repos";

export interface Resource {
  title: string;
  desc: string;
  url: string;
  category: Category;
  sub?: string; // toolbox subcategory: ai | slides | editor | notes
  meta?: string; // e.g. "free pdf", "~50k members"
}

export const CATEGORY_ORDER: Category[] = [
  "youtube",
  "books",
  "tools",
  "platforms",
  "creators",
  "repos",
];

export const CATEGORY_INFO: Record<
  Category,
  { label: string; color: string; blurb: string }
> = {
  youtube: {
    label: "youtube channels",
    color: "#f85149",
    blurb: "channels that respect your time",
  },
  books: {
    label: "books",
    color: "#d29922",
    blurb: "worth the paper (or the pdf)",
  },
  tools: {
    label: "the toolbox",
    color: "#bc8cff",
    blurb: "ai, slides, editors, notes",
  },
  platforms: {
    label: "platforms",
    color: "#3fb950",
    blurb: "where the actual learning happens",
  },
  creators: {
    label: "tunisian creators & orgs",
    color: "#ffa657",
    blurb: "local people worth following",
  },
  repos: {
    label: "github repos",
    color: "#58a6ff",
    blurb: "star them before you need them",
  },
};

export const RESOURCES: Resource[] = [
  /* ── youtube ─────────────────────────────────────────────── */
  {
    title: "freeCodeCamp.org",
    desc: "Entire courses, free, zero clickbait. The 4-hour videos are actually worth the 4 hours.",
    url: "https://www.youtube.com/@freecodecamp",
    category: "youtube",
    meta: "full courses",
  },
  {
    title: "Fireship",
    desc: "Tech explained in 100 seconds, then explained properly. Dangerously efficient.",
    url: "https://www.youtube.com/@Fireship",
    category: "youtube",
    meta: "quick + deep",
  },
  {
    title: "The Net Ninja",
    desc: "Playlist-based courses that go step by step without skipping the 'obvious' parts.",
    url: "https://www.youtube.com/@NetNinja",
    category: "youtube",
  },
  {
    title: "Traversy Media",
    desc: "Brad has been carrying students through web dev since before it was cool.",
    url: "https://www.youtube.com/@TraversyMedia",
    category: "youtube",
  },
  {
    title: "Programming with Mosh",
    desc: "Structured, calm, beginner-proof. The free content alone is a full semester.",
    url: "https://www.youtube.com/@programmingwithmosh",
    category: "youtube",
  },
  {
    title: "Theo · t3.gg",
    desc: "The honest, slightly salty take on the industry. Save this one for when you're past the basics.",
    url: "https://www.youtube.com/@t3dotgg",
    category: "youtube",
    meta: "advanced-ish",
  },
  {
    title: "CS50",
    desc: "Harvard's legendary intro to CS. Watch lecture 0 even if you skip everything else.",
    url: "https://www.youtube.com/@cs50",
    category: "youtube",
  },

  /* ── books ───────────────────────────────────────────────── */
  {
    title: "Eloquent JavaScript",
    desc: "The JS book. Teaches you to think, not just to copy-paste.",
    url: "https://eloquentjavascript.net/",
    category: "books",
    meta: "marijn haverbeke · free online",
  },
  {
    title: "You Don't Know JS",
    desc: "JavaScript, but you actually understand it afterwards. Awkward gaps included.",
    url: "https://github.com/getify/You-Dont-Know-JS",
    category: "books",
    meta: "kyle simpson · free on github",
  },
  {
    title: "Automate the Boring Stuff",
    desc: "Python that feels useful from page one. Rename 500 files, scrape a site, feel powerful.",
    url: "https://automatetheboringstuff.com/",
    category: "books",
    meta: "al sweigart · free online",
  },
  {
    title: "Grokking Algorithms",
    desc: "Algorithms with cartoons. Finally, a data-structures book that doesn't hurt.",
    url: "#", // TODO: link to a legal purchase / library page
    category: "books",
    meta: "aditya bhargava",
  },
  {
    title: "The Pragmatic Programmer",
    desc: "Read it once a year. It somehow reads differently every single time.",
    url: "#", // TODO
    category: "books",
    meta: "hunt & thomas",
  },
  {
    title: "Clean Code",
    desc: "Read this after your first real project — that's when the pain makes the lessons stick.",
    url: "#", // TODO
    category: "books",
    meta: "robert c. martin",
  },

  /* ── tools · ai ──────────────────────────────────────────── */
  {
    title: "ChatGPT",
    desc: "Your 3am rubber duck that talks back. Ask it to explain, not to do it for you.",
    url: "https://chat.openai.com/",
    category: "tools",
    sub: "ai",
  },
  {
    title: "GitHub Copilot",
    desc: "Free for students through GitHub Education. Claim it today, thank us later.",
    url: "https://github.com/features/copilot",
    category: "tools",
    sub: "ai",
    meta: "free for students",
  },
  {
    title: "Perplexity",
    desc: "A search engine that cites its sources. Your best friend during research panic.",
    url: "https://www.perplexity.ai/",
    category: "tools",
    sub: "ai",
  },
  {
    title: "Claude",
    desc: "The calm one. Paste your chaotic code, get patient, structured feedback.",
    url: "https://claude.ai/",
    category: "tools",
    sub: "ai",
  },

  /* ── tools · slides ──────────────────────────────────────── */
  {
    title: "Canva",
    desc: "Presentations that look like you hired a designer. You didn't. Nobody has to know.",
    url: "https://www.canva.com/",
    category: "tools",
    sub: "slides",
  },
  {
    title: "Gamma",
    desc: "Describe the deck, get the deck. Slightly feels like cheating. Totally allowed.",
    url: "https://gamma.app/",
    category: "tools",
    sub: "slides",
  },

  /* ── tools · editors ─────────────────────────────────────── */
  {
    title: "VS Code",
    desc: "The default for a reason. Learn the shortcuts once; save an hour a week forever.",
    url: "https://code.visualstudio.com/",
    category: "tools",
    sub: "editor",
  },
  {
    title: "IntelliJ IDEA",
    desc: "Heavyweight, brilliant, and free with a .edu email. Java people, this is home.",
    url: "https://www.jetbrains.com/idea/",
    category: "tools",
    sub: "editor",
    meta: "free for students",
  },
  {
    title: "Neovim",
    desc: "The rabbit hole. Only enter with free time. Worth it, but we warned you.",
    url: "https://neovim.io/",
    category: "tools",
    sub: "editor",
    meta: "hard mode",
  },
  {
    title: "Zed",
    desc: "Fast, minimal, new. Keep an eye on this one — it's what VS Code felt like in 2015.",
    url: "https://zed.dev/",
    category: "tools",
    sub: "editor",
  },

  /* ── tools · notes ───────────────────────────────────────── */
  {
    title: "Notion",
    desc: "Second brain or beautiful procrastination, depending on the day. Both are fine.",
    url: "https://www.notion.so/",
    category: "tools",
    sub: "notes",
  },
  {
    title: "Obsidian",
    desc: "Local markdown notes that are yours forever. Free, offline, no subscription hostage-taking.",
    url: "https://obsidian.md/",
    category: "tools",
    sub: "notes",
  },

  /* ── platforms ───────────────────────────────────────────── */
  {
    title: "freeCodeCamp",
    desc: "Certifications, projects, and a curriculum that doesn't assume you're already a genius.",
    url: "https://www.freecodecamp.org/",
    category: "platforms",
    meta: "free certs",
  },
  {
    title: "The Odin Project",
    desc: "Full-stack and project-first. Hard. That's exactly why it works.",
    url: "https://www.theodinproject.com/",
    category: "platforms",
    meta: "our top pick",
  },
  {
    title: "Harvard CS50",
    desc: "The most famous CS intro on earth. The problem sets will hurt you lovingly.",
    url: "https://cs50.harvard.edu/x/",
    category: "platforms",
  },
  {
    title: "roadmap.sh",
    desc: "The skill trees. We link them on the roadmaps page — they actually made them.",
    url: "https://roadmap.sh/",
    category: "platforms",
  },
  {
    title: "Exercism",
    desc: "Practice exercises with free human mentoring. Criminally underrated.",
    url: "https://exercism.org/",
    category: "platforms",
  },
  {
    title: "Codewars",
    desc: "Kata grinding with a ranking system. Warning: weirdly addictive.",
    url: "https://www.codewars.com/",
    category: "platforms",
  },
  {
    title: "GitHub Education",
    desc: "The Student Developer Pack: free domains, cloud credits, Copilot. Use that .edu email.",
    url: "https://education.github.com/",
    category: "platforms",
    meta: "free for students",
  },
  {
    title: "Coursera",
    desc: "Almost any course can be audited for free. Click 'audit' — the paywall's shy cousin.",
    url: "https://www.coursera.org/",
    category: "platforms",
  },

  /* ── tunisian creators & orgs ────────────────────────────── */
  {
    title: "GoMyCode",
    desc: "Tunisia's biggest coding school. The free workshops and open events are the real value.",
    url: "https://gomycode.com/",
    category: "creators",
    meta: "tunis · global",
  },
  {
    title: "GDG Tunis",
    desc: "Google Developer Group Tunis. Talks, trainings, and a community that actually shows up.",
    url: "https://www.facebook.com/gdgtunis/",
    category: "creators",
    meta: "events",
  },
  {
    title: "GDG Sfax",
    desc: "The coastal sibling — DevFest energy and Google-tech meetups in Sfax.",
    url: "https://gdg.community.dev/",
    category: "creators",
    meta: "events",
  },
  {
    title: "IEEE student branches",
    desc: "INSAT, ENIT, ENIS… the student branches run the best hackathons and tech days. Find yours.",
    url: "https://www.ieee.tn/",
    category: "creators",
    meta: "on campus",
  },
  {
    title: "Women Techmakers Tunis",
    desc: "Google's program supporting women in tech locally. Talks, mentorship, zero gatekeeping.",
    url: "https://developers.google.com/womentechmakers",
    category: "creators",
  },
  {
    title: "Startup Tunisia",
    desc: "Not a creator — the portal for the local startup scene: grants, events, the ecosystem pulse.",
    url: "https://startup.gov.tn/",
    category: "creators",
  },

  /* ── github repos ────────────────────────────────────────── */
  {
    title: "free-programming-books",
    desc: "More free books than you have years. Search here before buying anything.",
    url: "https://github.com/EbookFoundation/free-programming-books",
    category: "repos",
  },
  {
    title: "coding-interview-university",
    desc: "The 'I'm preparing for interviews' bible. Intense, complete, free.",
    url: "https://github.com/jwasham/coding-interview-university",
    category: "repos",
  },
  {
    title: "ossu/computer-science",
    desc: "A full CS degree built from free courses. For the self-taught route, done properly.",
    url: "https://github.com/ossu/computer-science",
    category: "repos",
  },
  {
    title: "project-based-learning",
    desc: "Learn by building, in every language. The legal cure for tutorial hell.",
    url: "https://github.com/practical-tutorials/project-based-learning",
    category: "repos",
    meta: "start here",
  },
  {
    title: "developer-roadmap",
    desc: "The source of everything on our roadmaps page. Star it while you're there.",
    url: "https://github.com/kamranahmedse/developer-roadmap",
    category: "repos",
  },
  {
    title: "awesome",
    desc: "Awesome lists of awesome lists. Yes, it's lists all the way down.",
    url: "https://github.com/sindresorhus/awesome",
    category: "repos",
  },
  {
    title: "public-apis",
    desc: "Free APIs for your first projects: weather, cats, currencies — everything.",
    url: "https://github.com/public-apis/public-apis",
    category: "repos",
  },
  {
    title: "system-design-primer",
    desc: "Later-stage stuff, for when 'it works on my machine' stops being enough.",
    url: "https://github.com/donnemartin/system-design-primer",
    category: "repos",
    meta: "advanced",
  },
];

/* ── motivational quotes pool (home page picks 4 at random) ── */
export interface Quote {
  text: string;
  author: string;
  style: "//" | "#" | "/*" | "--";
}

export const QUOTES: Quote[] = [
  {
    text: "First, solve the problem. Then, write the code.",
    author: "john johnson",
    style: "//",
  },
  {
    text: "The best time to start was yesterday. The second best time is now.",
    author: "someone wiser than your excuses",
    style: "#",
  },
  {
    text: "It works on my machine.",
    author: "every developer, at some point",
    style: "/*",
  },
  {
    text: "The only way to learn a new programming language is by writing programs in it.",
    author: "dennis ritchie",
    style: "--",
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "kent beck",
    style: "//",
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "cory house",
    style: "#",
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "harold abelson",
    style: "/*",
  },
  {
    text: "Everybody should learn to program a computer, because it teaches you how to think.",
    author: "steve jobs",
    style: "--",
  },
];

export function pickQuotes(n: number): Quote[] {
  const pool = [...QUOTES];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, n);
}
