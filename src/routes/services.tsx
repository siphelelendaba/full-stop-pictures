import { createFileRoute } from "@tanstack/react-router";
import {
  Clapperboard,
  PenTool,
  Video,
  Film,
  Music,
  Share2,
  CalendarDays,
  Camera,
  Newspaper,
  User,
  Aperture,
  Lightbulb,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Full Stop Pictures" },
      { name: "description", content: "Creative production, videography, photography, events and consulting services by Full Stop Pictures." },
      { property: "og:title", content: "Services — Full Stop Pictures" },
      { property: "og:description", content: "Full-service production, design, photography and consulting." },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { label: "Creative Production", Icon: Clapperboard },
  { label: "Graphic Design", Icon: PenTool },
  { label: "Videography (Long & Short Form)", Icon: Video },
  { label: "Films", Icon: Film },
  { label: "Music Videos", Icon: Music },
  { label: "Social Media Content", Icon: Share2 },
  { label: "Events", Icon: CalendarDays },
  { label: "Photography", Icon: Camera },
  { label: "Editorials", Icon: Newspaper },
  { label: "Headshots", Icon: User },
  { label: "Studio Shoots", Icon: Aperture },
  { label: "Consulting", Icon: Lightbulb },
];

function ServicesPage() {
  const collage = [
    "/services/img1.jpg",
    "/services/img2.jpg",
    "/services/img3.jpg",
    "/services/img4.jpg",
    "/services/img5.jpg",
    "/services/img6.jpg",
    "/services/img7.jpg",
    "/services/img8.jpg",
    "/services/img9.jpg",
    "/services/img10.jpg",
  ];
  return (
    <section className="relative bg-ink text-white min-h-screen overflow-hidden">
      {/* Background photo collage */}
      <div aria-hidden className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 grid-rows-2 opacity-80">
        {collage.map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(20,18,40,0.55) 0%, rgba(20,18,40,0.45) 40%, rgba(20,18,40,0.65) 100%)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-36 pb-24 md:pt-44 md:pb-32">
        <span className="text-[11px] font-semibold tracking-eyebrow uppercase text-crimson">What we do</span>
        <h1 className="mt-5 max-w-4xl text-5xl md:text-7xl font-extrabold tracking-display text-balance leading-[1]">
          Services<span className="text-crimson">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
          From concept to final cut — a full-service creative studio for film, brand and culture.
        </p>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ label, Icon }) => (
            <div
              key={label}
              className="group bg-ink/80 backdrop-blur-md p-8 flex items-center gap-5 hover:bg-crimson/90 transition-colors"
            >
              <Icon size={32} className="text-crimson group-hover:text-white shrink-0" />
              <div className="text-lg font-extrabold tracking-display leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}