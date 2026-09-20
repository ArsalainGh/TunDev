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
  {
    title: "Tech With Tim",
    desc: "a self-taught developer & entrepreneur who brings you educational tech content without the fluff and noise.",
    url: "https://www.youtube.com/@TechWithTim",
    category: "youtube",
  },
  {
    title: "ForrestKnight",
    desc: "Software engineer, Linux distro hopper, Java apologist. I use arch, btw.",
    url: "https://www.youtube.com/@fknight",
    category: "youtube",
  },
  {
    title: "Low Level",
    desc: "Vuln Researcher w/ 10+ Years in Cybersecurity ",
    url: "https://www.youtube.com/@LowLevelTV",
    category: "youtube",
  },
  {
    title: "Yehia Tech",
    desc: "an engineer with over 10 years of professional experience in development, architecture, and leadership.",
    url: "https://www.youtube.com/@yehiatech",
    category: "youtube",
  },
  {
    title: "Caleb Curry",
    desc: "Programming Made Fun and Simple | High quality tutorials that are fun, educational, and easy to follow",
    url: "https://www.youtube.com/@codebreakthrough",
    category: "youtube",
  },
  {
    title: "Hello Interview",
    desc: "We help software engineering candidates prepare for their upcoming interviews.",
    url: "https://www.youtube.com/@hello_interview",
    category: "youtube",
  },
  {
    title: "NetworkChuck",
    desc: "Cybersecurity Expert | If your goals are to obtain your CCNA, CompTIA A+, CompTIA Network+...I'm here to help you with that goal in any way I can!",
    url: "https://www.youtube.com/@NetworkChuck",
    category: "youtube",
  },
  {
    title: "Chris Titus Tech",
    desc: "Linux, Windows, open source, and software development. I build tools, break things, fix them, and show you what I learned.",
    url: "https://www.youtube.com/@ChrisTitusTech",
    category: "youtube",
  },
  {
    title: "CodeSource",
    desc: "Technical video Documentaries",
    url: "https://www.youtube.com/@CodeSource",
    category: "youtube",
  },
  {
    title: "The PrimeTime",
    desc: "This is a place for all the things that are awesome on stream. ",
    url: "https://www.youtube.com/@ThePrimeTimeagen",
    category: "youtube",
  },
  {
    title: "Bro Code",
    desc: "of u know him ,Coding bootcamps HATE HIM! 🗿",
    url: "https://www.youtube.com/@BroCodez",
    category: "youtube",
  },
  {
    title: "Cloud X Berry",
    desc: "This channel is built for developers who want to learn how software, cloud infrastructure, and databases actually work in the real tech industry.",
    url: "https://www.youtube.com/@TheCloudXBerry",
    category: "youtube",
  },

  /* ── books ───────────────────────────────────────────────── */
  {
      title: "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      desc: "The practical bible for ML engineers. From linear regression to transformers, with real code.",
      url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/",
      category: "books",
      meta: "aurélien géron · 3rd edition · intermediate",
    },
    {
      title: "Deep Learning",
      desc: "The theoretical foundation of modern AI. Math-heavy, but the gold standard for understanding neural nets.",
      url: "https://www.deeplearningbook.org/",
      category: "books",
      meta: "goodfellow, bengio, courville · free online · advanced",
    },
    {
      title: "Deep Learning with Python",
      desc: "Keras creator teaches deep learning intuitively. Best first ML book if you already know Python.",
      url: "https://www.manning.com/books/deep-learning-with-python-second-edition",
      category: "books",
      meta: "françois chollet · 2nd edition · beginner",
    },
    {
      title: "Natural Language Processing with Transformers",
      desc: "Build real NLP apps with Hugging Face. Covers text classification, generation, translation, and more.",
      url: "https://transformersbook.com/",
      category: "books",
      meta: "tunstall, von werra, wolf · oreilly · intermediate",
    },
    {
      title: "Machine Learning Design Patterns",
      desc: "30 battle-tested patterns for ML in production. Data representation, training, serving, and MLOps.",
      url: "https://www.oreilly.com/library/view/machine-learning-design/9781098115777/",
      category: "books",
      meta: "lakshmanan, robinson, munn · oreilly · intermediate",
    },
    {
      title: "Clean Code",
      desc: "Teaches you to write code humans can actually read. Controversial now, but still the starting point.",
      url: "https://www.oreilly.com/library/view/clean-code/9780136083238/",
      category: "books",
      meta: "robert c. martin · prentice hall · beginner",
    },
    {
      title: "System Design Interview – An Insider's Guide",
      desc: "The book that cracked the system design interview for thousands. URL shorteners, chat systems, and more.",
      url: "https://bytebytego.com/courses/system-design-interview",
      category: "books",
      meta: "alex xu · vol 1 & 2 · intermediate",
    },
    {
      title: "Designing Data-Intensive Applications",
      desc: "The single best book on distributed systems, databases, and scalability. A masterpiece.",
      url: "https://dataintensive.net/",
      category: "books",
      meta: "martin kleppmann · oreilly · intermediate",
    },
    {
      title: "Cracking the Coding Interview",
      desc: "189 real interview problems with walkthroughs. The DSA interview survival kit.",
      url: "https://www.crackingthecodinginterview.com/",
      category: "books",
      meta: "gayle laakmann mcdowell · 6th edition · beginner",
    },
    {
      title: "Site Reliability Engineering",
      desc: "How Google runs production systems. SLIs, SLOs, error budgets, toil — the DevOps playbook.",
      url: "https://sre.google/sre-book/table-of-contents/",
      category: "books",
      meta: "beyer, jones, petoff, murphy · free online · intermediate",
    },
    {
      title: "The Phoenix Project",
      desc: "A novel about IT, DevOps, and saving a company. Makes you *feel* why DevOps matters.",
      url: "https://itrevolution.com/product/the-phoenix-project/",
      category: "books",
      meta: "gene kim, kevin behr, george spafford · beginner",
    },
    {
      title: "Kubernetes Up & Running",
      desc: "Learn K8s from the people who built it. Pods, deployments, services, and real cluster ops.",
      url: "https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/",
      category: "books",
      meta: "burns, grant, villella · 3rd edition · intermediate",
    },
    {
      title: "Operating Systems: Three Easy Pieces",
      desc: "Virtualization, concurrency, persistence. The best OS book ever written, and it's free.",
      url: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
      category: "books",
      meta: "remzi & andrea arpaci-dusseau · free online · beginner",
    },
    {
      title: "Computer Networking: A Top-Down Approach",
      desc: "HTTP, TCP, DNS, routing — explained from the app layer down. The networking bible.",
      url: "https://gaia.cs.umass.edu/kurose_ross/index.php",
      category: "books",
      meta: "kurose & ross · 8th edition · beginner",
    },
    {
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      desc: "The original Gang of Four book. 23 patterns that shaped how we talk about software design.",
      url: "https://www.oreilly.com/library/view/design-patterns-elements/0201633612/",
      category: "books",
      meta: "gamma, helm, johnson, vlissides · addison-wesley · intermediate",
    },
    {
      title: "Fundamentals of Software Architecture",
      desc: "Modern architectural thinking: trade-offs, fitness functions, and how to pick the right style.",
      url: "https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/",
      category: "books",
      meta: "mark richards & neal ford · oreilly · intermediate",
    },
    {
      title: "Test-Driven Development: By Example",
      desc: "The book that started the TDD movement. Red, green, refactor — from the man who invented it.",
      url: "https://www.oreilly.com/library/view/test-driven-development/0321146530/",
      category: "books",
      meta: "kent beck · addison-wesley · beginner",
    },
    {
      title: "Security Engineering",
      desc: "A comprehensive guide to building dependable distributed systems. Threat models, crypto, and real attacks.",
      url: "https://www.cl.cam.ac.uk/~rja14/book.html",
      category: "books",
      meta: "ross anderson · 3rd edition · free online · intermediate",
    },
    {
      title: "Distributed Systems",
      desc: "Consensus, replication, fault tolerance, and more. The academic reference that's surprisingly readable.",
      url: "https://www.distributed-systems.net/index.php/books/ds4/",
      category: "books",
      meta: "maarten van steen & andrew tanenbaum · free online · advanced",
    },
    {
      title: "The Pragmatic Programmer",
      desc: "Timeless career and craft advice. Orthogonality, tracer bullets, broken windows — essential reading.",
      url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
      category: "books",
      meta: "david thomas & andrew hunt · 20th anniversary · beginner",
    },

  /* ── tools · ai ──────────────────────────────────────────── */
  {
    title: "Claude",
    desc: "The calm one. Paste your chaotic code, get patient, structured feedback.",
    url: "https://claude.ai/",
    category: "tools",
    sub: "ai",
  },
  {
    title: "ChatGPT",
    desc: "Your 3am rubber duck that talks back. Ask it to explain, not to do it for you.",
    url: "https://chat.openai.com/",
    category: "tools",
    sub: "ai",
  },
  {
    title: "Arena.ai",
    desc: "Crowdsourced blind arena comparing LLMs side-by-side. The one benchmark models can't cheat on.",
    url: "https://arena.ai/",
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
      title: "Bytez",
      desc: "One clean API to call thousands of open-source AI models without renting and configuring your own GPUs.",
      url: "https://bytez.com/",
      category: "tools",
      sub: "ai",
  },
  {
      title: "LM Studio",
      desc: "A polished desktop GUI to search, download, and chat with local LLMs on your machine completely offline.",
      url: "https://lmstudio.ai/",
      category: "tools",
      sub: "ai",
  },
  {
      title: "Ollama",
      desc: "Run Llama 3, DeepSeek, and other open LLMs locally with a single terminal command and a simple REST API.",
      url: "https://ollama.com/",
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
  {
     title: "Napkin AI",
     desc: "Paste text or markdown, get instant visuals and diagrams. Great for tech docs and presentations.",
     url: "https://www.napkin.ai/",
     category: "tools",
     sub: "Slides",
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
  {
      title: "Antigravity",
      desc: "Python's legendary easter egg. When code gets too heavy, just import antigravity and fly.",
      url: "https://xkcd.com/353/",
      category: "tools",
      sub: "editor",
    },
  

  /* ── tools · random ───────────────────────────────────────── */
  {
      title: "Postman",
      desc: "The industry standard for designing, testing, and mocking APIs before shipping them to production.",
      url: "https://www.postman.com/",
      category: "tools",
      sub: "api",
    },
    {
      title: "Yaak",
      desc: "A blazing-fast, lightweight desktop API client for REST and GraphQL. The Rust-powered cure for Postman bloat.",
      url: "https://yaak.app/",
      category: "tools",
      sub: "api",
    },
    {
      title: "Docker",
      desc: "Packages your app and its dependencies so 'it works on my machine' finally means it works everywhere.",
      url: "https://www.docker.com/",
      category: "tools",
      sub: "devops",
  },
  {
      title: "MongoDB",
      desc: "The classic document database. Store flexible JSON-like BSON records without fighting rigid schemas upfront.",
      url: "https://www.mongodb.com/",
      category: "tools",
      sub: "database",
    },
    {
      title: "PostgreSQL",
      desc: "The gold standard open-source relational database. Rock-solid ACID compliance with power for JSON and vectors.",
      url: "https://www.postgresql.org/",
      category: "tools",
      sub: "database",
    },
    {
       title: "dbdiagram.io",
       desc: "Write simple code (DBML), get clean ER diagrams instantly. The fastest way to design a database schema.",
       url: "https://dbdiagram.io/",
       category: "tools",
       sub: "database",
     },
    {
      title: "Brave Browser",
      desc: "Fast, Chromium-based browser with native ad/tracker blocking and clean dev tools out of the box.",
      url: "https://brave.com/",
      category: "tools",
      sub: "browser",
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
  // {
  //   title: "StudyGarden",
  //   desc: "a space for learning ....",
  //   url: "https://www.studygarden.tn/",
  //   category: "platforms",
  // },
  {
    title: "DataCamp",
    desc: "a space for learning .contact Dr.Imed romdthani for free access",
    url: "https://www.datacamp.com/",
    category: "platforms",
  },
  {
    title: "YourLinuxGuide",
    desc: "A friendly, jargon-free guide to the world's most powerful operating system. Ten short topics take you from “what even is Linux?” to installing it yourself Made by Me",
    url: "https://arsalaingh.github.io/How_To_Linux/",
    category: "platforms",
  },
  {
    title: "SecureDevHub",
    desc: "A free, open-source security guide for web developers. Learn the vulnerabilities that take sites down, fix them with real code Made by Me",
    url: "https://arsalaingh.github.io/SecureDevHub/",
    category: "platforms",
  },
  
  /* ── tunisian creators & orgs ────────────────────────────── */
  {
     title: "Imen Selmi",
     desc: "AI Engineer | AI Simplification | Tech & Career Opportunities",
     url: "https://www.instagram.com/imen.selmi_/",
     category: "creators",
   },
   {
     title: "Med Ali Dridi",
     desc: "Founder @ Koyotec Digital | Tech Simplified | Linux & Engineering",
     url: "https://www.instagram.com/medaly.dridi/",
     category: "creators",
   },
   {
     title: "Mansouri Youssef",
     desc: "Full-Stack & DevOps Engineer | Web Development | Content Creator",
     url: "https://withyoussef.dev/about/",
     category: "creators",
   },
   {
     title: "Dr. Imed Romdhani",
     desc: "Associate Professor | IoT & Edge Computing | Network Protocols",
     url: "https://www.facebook.com/Dr.Imed.Romdhani.Official",
     category: "creators",
   },
   {
     title: "Mohamed Hamdi Ouardi",
     desc: "Cybersecurity Architect | SecOps Engineer | University Lecturer",
     url: "https://www.linkedin.com/in/ouardi-mohamed-hamdi/",
     category: "creators",
   },
   {
     title: "Karim Beguir",
     desc: "Co-Founder & CEO @ InstaDeep | AI Specialist | Ex-Google ML GDE",
     url: "https://www.linkedin.com/in/karim-beguir-2350161/",
     category: "creators",
   },
   {
     title: "Khormologia",
     desc: "Science & Tech Educator | Engineering Concepts | Content Creator",
     url: "https://www.instagram.com/khormologia/",
     category: "creators",
   },
   {
     title: "Maram Lahbib",
     desc: "Founder @ Mission Hired | Career Strategist | Tech Hiring Insights",
     url: "https://www.instagram.com/maram_lahbib_official/",
     category: "creators",
   },
   {
     title: "Motez Hadj Salem",
     desc: "Software Engineer | Founder @ LeadMax | Tech Content Creator",
     url: "https://www.instagram.com/motezhadjsalem/",
     category: "creators",
   },
   {
     title: "Marwen Essalah",
     desc: "Lead UX/UI Designer | Founder @ The Space | Product Design Mentor",
     url: "https://www.instagram.com/marwen.ux/",
     category: "creators",
   },
   {
     title: "Yesmine Gharbi",
     desc: "Certified Recruiter | Career Development | AI Career Coaching",
     url: "https://www.instagram.com/yesmine_gharbi/",
     category: "creators",
   },
   {
     title: "Ouerfelli Raed",
     desc: "AI Engineer | Modern Tech Insights | Coding & AI Tutorials",
     url: "https://www.instagram.com/ouerfelli_raed/",
     category: "creators",
   },
   {
     title: "Chiheb Bouzid (Zulfacode)",
     desc: "Software Engineer | Modern Web Development | Tech Content Creator",
     url: "https://www.instagram.com/chiheb_bouzid/",
     category: "creators",
   },
   {
     title: "Slim Skhab",
     desc: "Software Engineer | Tech Trends & Coding | Developer Insights",
     url: "https://www.instagram.com/chiheb_bouzid/",
     category: "creators",
   },
   {
     title: "Sabri Awani",
     desc: "Digital Creator | Career Mindset | Productivity & Personal Growth",
     url: "https://www.instagram.com/awani.sabri/",
     category: "creators",
   },
  {
    title: "GoMyCode",
    desc: "Tunisia's biggest coding school. The free workshops and open events are the real value.",
    url: "https://gomycode.com/",
    category: "creators",
    meta: "tunis · global",
  },
  {
    title: "IEEE student branches",
    desc: "INSAT, ENIT, ENIS… the student branches run the best hackathons and tech days. Find yours.",
    url: "https://www.ieee.tn/",
    category: "creators",
    meta: "on campus",
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
