import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Compass, Flame, Heart, Home, Menu, Puzzle, Sparkles, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Logo } from "@/components/brand/Logo";
import { nav } from "@/data/nav";
import { BRAND } from "@/data/brand";
import { characters } from "@/data/characters";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    void Promise.resolve(useProgress.persist.rehydrate()).then(() => {
      useProgress.getState().checkin();
      useProgress.getState().syncMissions();
    });
  }, []);

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-yellow focus:px-4 focus:py-2"
      >
        Saltar al contenido
      </a>
      <Header />
      <div id="contenido" className="flex-1 pb-24 md:pb-0">
        {children}
      </div>
      <Footer />
      <BottomNav />
    </div>
  );
}

function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const stars = useProgress((s) => s.stars);
  const streak = useProgress((s) => s.streak);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:h-[4.5rem] sm:px-6">
        <Logo />
        <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.slice(1).map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-full px-3 py-2 font-display text-sm font-semibold transition-colors",
                  active ? "bg-yellow text-ink" : "text-ink-soft hover:bg-yellow/50 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          {streak > 1 ? (
            <Link
              to="/misiones"
              className="hidden min-h-10 items-center gap-1 rounded-full border-[3px] border-ink bg-orange px-3 font-display text-sm font-semibold sm:inline-flex"
              aria-label={`Racha de ${streak} días`}
            >
              <Flame className="size-4" strokeWidth={2.4} />
              <span className="tabular-nums">{streak}</span>
            </Link>
          ) : null}
          <Link
            to="/album"
            className="chunky-sm inline-flex min-h-10 items-center gap-1.5 rounded-full bg-yellow px-3 font-display text-sm font-semibold"
            aria-label={`${stars} estrellas conseguidas`}
          >
            <Sparkles className="size-4" strokeWidth={2.4} />
            <span className="tabular-nums">{stars}</span>
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border-[3px] border-ink bg-cloud lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t-[3px] border-ink bg-cloud px-4 py-3 lg:hidden" aria-label="Móvil">
          <ul className="grid gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="flex min-h-12 items-center rounded-2xl px-3 font-display text-lg font-semibold hover:bg-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const items = [
    { to: "/", label: "Casa", icon: Home },
    { to: "/explora", label: "Explora", icon: Compass },
    { to: "/juegos", label: "Jugar", icon: Puzzle },
    { to: "/personajes", label: "Amigos", icon: Heart },
    { to: "/padres", label: "Grandes", icon: BookOpen },
  ] as const;
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t-[3px] border-ink bg-cream/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
      aria-label="Inferior"
    >
      <ul className="grid grid-cols-5 px-1 py-1">
        {items.map((item) => {
          const active =
            item.to === "/"
              ? pathname === "/"
              : pathname === item.to || pathname.startsWith(`${item.to}/`);
          const Icon = item.icon;
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-0.5 rounded-2xl font-display text-[11px] font-semibold",
                  active ? "bg-yellow text-ink" : "text-ink-soft",
                )}
              >
                <Icon className="size-5" strokeWidth={2.4} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-[3px] border-ink bg-ink text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-20 pattern-chars mix-blend-screen" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="white" />
          <p className="mt-4 max-w-md text-base text-cream/80">
            {BRAND.tagline}
            <br />
            {BRAND.signature}
          </p>
          <div className="mt-5 flex items-end">
            {characters.map((c) => (
              <img key={c.slug} src={c.portrait} alt="" className="h-14 w-auto object-contain object-bottom" />
            ))}
          </div>
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-yellow">Explorar</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/explora" className="hover:text-yellow">
                Territorios
              </Link>
            </li>
            <li>
              <Link to="/juegos" className="hover:text-yellow">
                Juegos
              </Link>
            </li>
            <li>
              <Link to="/misiones" className="hover:text-yellow">
                Misiones
              </Link>
            </li>
            <li>
              <Link to="/personajes" className="hover:text-yellow">
                Tripulación
              </Link>
            </li>
            <li>
              <Link to="/juguetes" className="hover:text-yellow">
                Taller de la nave
              </Link>
            </li>
            <li>
              <Link to="/preguntas" className="hover:text-yellow">
                Grandes preguntas
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-yellow">Confianza</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/padres" className="hover:text-yellow">
                Sala de Grandes
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-yellow">
                Sobre el planeta
              </Link>
            </li>
            <li>
              <Link to="/accesibilidad" className="hover:text-yellow">
                Accesibilidad
              </Link>
            </li>
            <li>
              <Link to="/privacidad" className="hover:text-yellow">
                Privacidad
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-yellow">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="relative border-t border-cream/15 px-4 py-4 text-center text-xs text-cream/55">
        Contenido para disfrutar con curiosidad y, cuando una actividad lo indique, con acompañamiento
        de una persona adulta. {BRAND.signature} {BRAND.close}
      </p>
    </footer>
  );
}
