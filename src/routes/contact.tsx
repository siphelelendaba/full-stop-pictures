import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Full Stop Pictures" },
      { name: "description", content: "Get in touch with Full Stop Pictures in Johannesburg." },
      { property: "og:title", content: "Contact Full Stop Pictures" },
      { property: "og:description", content: "Reach our team in Braamfontein, Johannesburg." },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const ADDRESS = "36 Wroxham Road, Paulshof, Sandton";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

function ContactPage() {
  return (
    <>
      <section className="bg-ink text-white pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <span className="text-[11px] font-semibold tracking-eyebrow uppercase text-crimson">Get in touch</span>
          <h1 className="mt-5 max-w-4xl text-5xl md:text-7xl font-extrabold tracking-display text-balance leading-[1]">
            Let's create something<br/>worth telling<span className="text-crimson">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            Whether you're a broadcaster, brand or fellow storyteller — we'd love to hear from you.
            Reach our Johannesburg studio directly via the channels below.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-3 gap-8">
          <a
            href="tel:+27799454833"
            className="group p-10 border border-border bg-background hover:bg-muted transition-colors"
          >
            <Phone className="text-crimson" size={28} />
            <div className="mt-8 text-[11px] tracking-eyebrow uppercase text-foreground/50 font-semibold">Phone</div>
            <div className="mt-2 text-2xl font-extrabold tracking-display">079 945 4833</div>
            <div className="mt-6 text-[11px] tracking-eyebrow uppercase text-crimson font-semibold">
              Tap to call →
            </div>
          </a>

          <div className="p-10 border border-border bg-background">
            <Mail className="text-crimson" size={28} />
            <div className="mt-8 text-[11px] tracking-eyebrow uppercase text-foreground/50 font-semibold">Email</div>
            <div className="mt-2 space-y-1">
              <a href="mailto:info@fullstoppictures.com" className="block text-lg font-semibold hover:text-crimson">
                info@fullstoppictures.com
              </a>
              <a href="mailto:info@siphesihlendaba.com" className="block text-lg font-semibold hover:text-crimson">
                info@siphesihlendaba.com
              </a>
            </div>
          </div>

          <div className="p-10 border border-border bg-background">
            <MapPin className="text-crimson" size={28} />
            <div className="mt-8 text-[11px] tracking-eyebrow uppercase text-foreground/50 font-semibold">Studio</div>
            <address className="mt-2 not-italic text-lg font-semibold leading-relaxed">
              36 Wroxham Road,<br />
              Paulshof,<br />
              Sandton
            </address>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-24 md:pb-32">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden border border-border bg-background">
            <iframe
              title="Full Stop Pictures location"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}