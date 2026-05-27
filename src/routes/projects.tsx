import { createFileRoute } from "@tanstack/react-router";
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
    href: "https://www.dropbox.com/t/coSxwiVw4pK5fzTn",
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
      {/* Produced by Siphesihle Ndaba */}
      <section className="bg-ink text-white pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
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
                        Watch on Dropbox
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