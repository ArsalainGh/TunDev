# > tundev
![Patrick Jane](./public/images/Patrick_Jane.png)
> `/ˈtuːn.dɛv/` — you're not behind. you just started.

A free, no-fluff resource hub **for Tunisian IT students who feel lost** — built by students who were just as lost. Dark, code-editor-themed, and hand-rolled at 2am with genuine care and questionable amounts of coffee.

No sign-ups. No paywalls. No motivational posters. Just the map we drew while getting lost ourselves.

---

## What's inside

| page | route | what it does |
| --- | --- | --- |
| home | `#/` | the honest intro, how to use the site, random dev quotes, contribute links |
| resources | `#/resources` | curated youtube channels, books, tools (ai / slides / editors / notes), platforms, tunisian creators, and github repos — with tag filtering |
| roadmaps | `#/roadmaps` | 9 "choose your class" cards linking to the excellent [roadmap.sh](https://roadmap.sh) skill trees |
| tips & guides | `#/tips` | video + post recommendations, original written advice (one legally-mandated arch linux meme), and a wellness card |
| tunisia corner | `#/tunisia` | local facebook groups, discord servers, events & hackathons, accounts to follow, and a highly scientific "you know you're a tunisian dev when…" list |

## Tech

Static site. No backend. No tracking.

- **React + Vite + TypeScript** (SPA with a tiny hash router — works on any static host)
- **Tailwind CSS v4** with a code-editor-inspired token theme (`#0d1117` base, `#58a6ff` / `#3fb950` / `#bc8cff` accents)
- **JetBrains Mono** for headings & code, **Inter** for body text
- **Lucide** icons
- Vanilla `IntersectionObserver` for the subtle scroll-fade reveals

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
```

Build for production:

```bash
npm run build    # outputs to dist/
npm run preview  # serve the built site locally
```

Deploy the `dist/` folder to any static host (GitHub Pages, Netlify, Vercel, a VPS you set up during your arch phase…).

## Customizing / replacing placeholders

Everything marked with a `TODO` comment is a placeholder waiting for real links:

- **social & repo links** — `src/components/Footer.tsx` and the `SOCIALS` array in `src/pages/Home.tsx`
- **author name** — `AUTHOR` in `src/components/Footer.tsx`
- **instagram post links** — the `IG` array in `src/pages/Tips.tsx`
- **discord invites** — the `DISCORDS` array in `src/pages/TunisiaCorner.tsx`
- **buy links for books** — entries with `url: "#"` in `src/data/resources.ts`

Adding a resource is one object in `src/data/resources.ts`:

```ts
{
  title: "some channel",
  desc: "one honest sentence about why it's good.",
  url: "https://…",
  category: "youtube", // youtube | books | tools | platforms | creators | repos
  meta: "optional chip", // e.g. "free online"
}
```

The filter pills, counts and grid update automatically.

## Contributing

This whole thing runs on suggestions from students like you.

1. **Fork** the repo
2. **Add** your resource / tip / community (see above — it's usually one object)
3. **Open a pull request** with one line explaining why it helped *you*

House rules:

- only add things you actually used and would send to a friend
- free (or free-for-students) stuff strongly preferred
- keep descriptions one sentence, honest, and slightly informal — that's the vibe
- no affiliate links, no sponsored placements, ever

Found a dead link? That's a contribution too. Tell us.

---

## Maintainer

**Arsalain Gharsallaoui** — [github.com/ArsalainGh](https://github.com/ArsalainGh) · [arsalaing@gmail.com](mailto:arsalaing@gmail.com)

built by students, for students · tunisia 🇹🇳-adjacent · `// no "10x developers" were consulted in the making of this site`
