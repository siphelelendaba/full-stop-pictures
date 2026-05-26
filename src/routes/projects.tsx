import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ExternalLink, Play } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Full Stop Pictures" },
      { name: "description", content: "Explore the Full Stop Pictures slate of films and series." },
      { property: "og:title", content: "Projects — Full Stop Pictures" },
      { property: "og:description", content: "A slate of cinematic African stories." },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

type Clip = {
  title: string;
  kind: string;
  embed?: string;
  video?: string;
  href: string | null;
};

const sipheClips: Clip[] = [
  {
    title: "Lil'th",
    kind: "Instagram Reel",
    embed: "https://www.instagram.com/reel/DJ88KsttHjD/embed",
    href: "https://www.instagram.com/reel/DJ88KsttHjD/",
  },
  {
    title: "Jitney",
    kind: "Featurette",
    href: "https://we.tl/t-WQ1gHRFLS4Zxy6UO",
  },
  {
    title: "Our Work",
    kind: "Showreel",
    video: "/media/our-work.mov",
    href: null,
  },
];

function ProjectsPage() {
  return (
    <>
      <section className="bg-ink text-white pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <span className="text-[11px] font-semibold tracking-eyebrow uppercase text-crimson">Project slates</span>
          <h1 className="mt-5 max-w-5xl text-5xl md:text-7xl font-extrabold tracking-display text-balance leading-[1]">
            The slate<span className="text-crimson">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            Six commercially viable, culturally rich projects developed for global VOD platforms
            and free-to-air partners.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-32 space-y-28 md:space-y-40">
          {projects.map((p, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={p.title}
                className={[
                  "grid gap-10 md:gap-16 items-center md:grid-cols-2",
                  reverse ? "md:[&>:first-child]:order-2" : "",
                ].join(" ")}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute left-0 top-6 bg-crimson text-white text-[10px] tracking-eyebrow uppercase font-semibold px-4 py-2">
                    {p.type}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold tracking-eyebrow uppercase text-crimson">
                    {String(idx + 1).padStart(2, "0")} · {p.genre}
                  </div>
                  <h2 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-display text-balance leading-[1]">
                    {p.title}
                  </h2>

                  <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6 text-sm">
                    <div>
                      <dt className="text-[10px] tracking-eyebrow uppercase text-foreground/50">Duration</dt>
                      <dd className="mt-1 font-semibold">{p.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] tracking-eyebrow uppercase text-foreground/50">Genre</dt>
                      <dd className="mt-1 font-semibold">{p.genre}</dd>
                    </div>
                  </dl>

                  <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80">
                    {p.synopsis}
                  </p>

                  <div className="mt-6 flex gap-3">
                    <span className="text-[10px] tracking-eyebrow uppercase text-foreground/50 mt-1">Impact</span>
                    <p className="text-sm leading-relaxed text-foreground/70 flex-1">{p.impact}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Produced by Siphesihle Ndaba */}
      <section className="bg-ink text-white border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-32">
          <span className="text-[11px] font-semibold tracking-eyebrow uppercase text-crimson">Selected work</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-display text-balance leading-[1]">
            Produced by Siphesihle Ndaba<span className="text-crimson">.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
            A curated reel of recent productions led by our founder &amp; CEO.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {sipheClips.map((c) => (
              <div key={c.title} className="group">
                <div className="relative aspect-[9/16] overflow-hidden bg-black border border-white/10">
                  {c.video ? (
                    <video
                      src={c.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : c.embed ? (
                    <iframe
                      src={c.embed}
                      title={c.title}
                      loading="lazy"
                      allow="encrypted-media"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    <a
                      href={c.href ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#2c2a4c] to-[#1a1830] hover:from-crimson hover:to-rose-brand transition-colors"
                    >
                      <Play size={48} className="text-white" />
                      <span className="text-[11px] tracking-eyebrow uppercase font-semibold">
                        Watch via WeTransfer
                      </span>
                    </a>
                  )}
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-display">{c.title}</h3>
                    <div className="mt-1 text-[10px] tracking-eyebrow uppercase text-crimson font-semibold">
                      {c.kind}
                    </div>
                  </div>
                  {c.href && (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${c.title}`}
                      className="mt-1 text-white/60 hover:text-white"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}