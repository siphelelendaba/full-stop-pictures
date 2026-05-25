import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]",
      ].join(" ")}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center" aria-label="Full Stop Pictures">
          {transparent ? (
            <span className="font-extrabold tracking-display text-white text-lg md:text-xl">
              FULL STOP<span className="text-crimson">.</span>
              <span className="ml-2 font-light tracking-[0.15em] text-white/90">PICTURES</span>
            </span>
          ) : (
            <img src={logoDark} alt="Full Stop Pictures" className="h-7 md:h-8 w-auto" />
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  "text-[11px] font-semibold tracking-eyebrow uppercase transition-colors",
                  transparent
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/70 hover:text-crimson",
                  active && (transparent ? "text-white" : "text-crimson"),
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="bg-crimson text-white text-[11px] font-semibold tracking-eyebrow uppercase px-5 py-3 hover:bg-rose-brand transition-colors"
          >
            Get in touch
          </Link>
        </nav>

        <button
          className={[
            "md:hidden p-2 -mr-2",
            transparent ? "text-white" : "text-foreground",
          ].join(" ")}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 text-sm font-semibold tracking-eyebrow uppercase text-foreground/80 hover:text-crimson"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}