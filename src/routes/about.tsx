import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Full Stop Pictures" },
      { name: "description", content: "Background, company overview and the team behind Full Stop Pictures." },
      { property: "og:title", content: "About Full Stop Pictures" },
      { property: "og:description", content: "A female-led production company empowering African voices." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-ink text-white pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <span className="text-[11px] font-semibold tracking-eyebrow uppercase text-crimson">About us</span>
          <h1 className="mt-5 max-w-5xl text-5xl md:text-7xl font-extrabold tracking-display text-balance leading-[1]">
            A female-led studio<br />for African storytelling<span className="text-crimson">.</span>
          </h1>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-[11px] font-semibold tracking-eyebrow uppercase text-crimson">01 — Background</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-display text-balance">
              Our origin & approach.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Full Stop Pictures, a female-led production company founded by Siphesihle Ndaba,
              is committed to empowering and elevating the voices of African women in film and
              media. Our slate of projects encompasses innovative, high-quality, and commercially
              viable content that resonates with both local and international audiences.
            </p>
            <p>
              Our approach to content creation is rooted in a 360-degree marketing strategy
              designed to create an impactful content seeding campaign that spans across two
              continents. This strategy ensures that our projects are not only positioned for
              success on Video-on-Demand (VOD) platforms but also integrated into free-to-air
              partnerships in key markets to test market viability and audience reception. By
              leveraging digital amplification, strategic partnerships, and traditional broadcast
              channels, Full Stop Pictures ensures maximum reach, visibility, and engagement for
              its productions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <img src={aboutImg} alt="Behind the camera" width={1600} height={1000} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-[11px] font-semibold tracking-eyebrow uppercase text-crimson">02 — Company overview</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-display text-balance">
              Our mission.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                At Full Stop Pictures, our mission is to empower and elevate the diverse voices of
                African women in the film and media industry. We strive to be a beacon of
                innovation and authenticity, creating compelling narratives that reflect the rich
                cultural tapestry of our continent while illuminating the unique experiences,
                challenges, and triumphs of African women.
              </p>
              <p>
                We are dedicated to producing high-quality, commercially profitable content that
                resonates with audiences both locally and globally, celebrating the resilience and
                creativity of women. Our goal is to challenge stereotypes and break new ground in
                storytelling, providing an authentic representation of African narratives that
                inspire change and foster understanding.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}