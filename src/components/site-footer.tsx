import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="gradient-ink text-white/80">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-extrabold tracking-display text-2xl text-white">
            FULL STOP<span className="text-crimson">.</span>
            <span className="ml-2 font-light tracking-[0.15em]">PICTURES</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
            A 100% black female-owned production company telling authentic African
            stories — celebrating women empowerment, cultural diversity and creative
            nuance from South Africa to the world.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold tracking-eyebrow uppercase text-white mb-4">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold tracking-eyebrow uppercase text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="tel:+27799454833" className="hover:text-white">079 945 4833</a></li>
            <li><a href="mailto:info@fullstoppictures.com" className="hover:text-white">info@fullstoppictures.com</a></li>
            <li className="text-white/60">36 Wroxham Road, Paulshof, Sandton</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Full Stop Pictures. All rights reserved.</span>
          <span>Authentic African Stories. Globally.</span>
        </div>
      </div>
    </footer>
  );
}