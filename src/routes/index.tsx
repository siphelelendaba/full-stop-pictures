import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Full Stop Pictures — Cinematic African Stories" },
      { name: "description", content: "A 100% black female-owned production company telling authentic African stories for global audiences." },
      { property: "og:title", content: "Full Stop Pictures" },
      { property: "og:description", content: "Cinematic African stories, by Africans." },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={hero}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/media/our-work.mov" type="video/quicktime" />
          <source src="/media/our-work.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-vignette" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 lg:px-10 pb-24 md:pb-32">
          <span className="text-[11px] font-semibold tracking-eyebrow uppercase text-white/70">
            Full Stop Pictures · Est. South Africa
          </span>
          <h1 className="mt-5 max-w-6xl text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-display leading-[0.95]">
            <span className="block whitespace-nowrap">Authentic African Stories<span className="text-crimson">.</span></span>
            <span className="block">Told boldly<span className="text-crimson">.</span></span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/75 leading-relaxed">
            A 100% black female-owned production company crafting cinematic narratives that
            celebrate women empowerment, cultural diversity and creative nuance.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 bg-crimson hover:bg-rose-brand text-white text-[12px] font-semibold tracking-eyebrow uppercase px-7 py-4 transition-colors"
            >
              View the slate <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-white text-[12px] font-semibold tracking-eyebrow uppercase px-2 py-4 border-b border-white/40 hover:border-white"
            >
              <Play size={14} /> Our story
            </Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[10px] tracking-eyebrow text-white/50 uppercase">Scroll</div>
      </section>

      {/* STATS / MARQUEE */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["100%", "Black female-owned"],
            ["Level 1", "BBBEE Scorecard"],
            ["5,000+", "Jobs to be created"],
            ["2", "Continents reached"],
          ].map(([k, v]) => (
            <div key={v} className="border-l-2 border-crimson pl-5">
              <div className="text-3xl md:text-4xl font-extrabold tracking-display">{k}</div>
              <div className="mt-2 text-xs tracking-eyebrow uppercase text-white/60">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-32">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold tracking-eyebrow uppercase text-crimson">Featured slate</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-display text-balance">
                Stories shaping the future of African cinema.
              </h2>
            </div>
            <Link to="/projects" className="text-[12px] font-semibold tracking-eyebrow uppercase text-crimson inline-flex items-center gap-2">
              All projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.title}
                to="/projects"
                className="group relative block aspect-[3/4] overflow-hidden bg-ink"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 card-vignette" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <div className="text-[10px] tracking-eyebrow uppercase text-crimson font-semibold">{p.type} · {p.genre}</div>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-display leading-tight">{p.title}</h3>
                  <p className="mt-3 text-xs text-white/70 leading-relaxed line-clamp-3">{p.synopsis}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-eyebrow uppercase text-white/80 group-hover:text-crimson transition-colors">
                    Explore <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-crimson text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 grid md:grid-cols-[2fr_1fr] gap-10 items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-display text-balance max-w-3xl">
            Partner with a studio that puts African voices first.
          </h2>
          <Link
            to="/contact"
            className="justify-self-start md:justify-self-end inline-flex items-center gap-3 bg-white text-[#b5223c] text-[12px] font-semibold tracking-eyebrow uppercase px-7 py-4 hover:bg-white/90"
          >
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
