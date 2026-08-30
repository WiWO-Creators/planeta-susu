import { Link, useRouterState } from "@tanstack/react-router";
import { Flame, Sparkles } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import { Logo } from "@/components/brand/Logo";
import { SparkleField } from "@/components/play/Magic";
import { BRAND } from "@/data/brand";
import { characters } from "@/data/characters";
import { rankFor } from "@/data/ranks";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

const PLAY_FOOTER = ["/padres", "/sobre", "/privacidad", "/contacto", "/accesibilidad"];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const showFooter = PLAY_FOOTER.some((p) => pathname === p || pathname.startsWith(`${p}/`));

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
      <Hud />
      <SparkleField />
      <div id="contenido" className="flex-1 pb-28">
        {children}
      </div>
      {showFooter ? <Footer /> : null}
      <GameDock />
    </div>
  );
}

function Hud() {
  const stars = useProgress((s) => s.stars);
  const streak = useProgress((s) => s.streak);
  const rank = rankFor(stars).current.name;

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-yellow">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-3 sm:h-16 sm:px-6">
        <Logo />
        <p className="hidden font-display text-sm font-semibold sm:block">{rank}</p>
        <div className="ml-auto flex items-center gap-2">
          {streak > 1 ? (
            <Link
              to="/misiones"
              className="inline-flex min-h-10 items-center gap-1 rounded-full border-[3px] border-ink bg-orange px-2.5 font-display text-sm font-semibold"
              aria-label={`Racha de ${streak} días`}
            >
              <Flame className="size-4" strokeWidth={2.4} />
              <span className="tabular-nums">{streak}</span>
            </Link>
          ) : null}
          <Link
            to="/album"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full border-[3px] border-ink bg-cream px-3 font-display text-sm font-semibold shadow-chunky-sm"
            aria-label={`${stars} estrellas`}
          >
            <Sparkles className="size-4" strokeWidth={2.4} />
            <span className="tabular-nums">{stars}</span>
          </Link>
          <Link
            to="/padres"
            className="hidden min-h-10 items-center rounded-full px-2 font-display text-xs font-semibold text-ink-soft sm:inline-flex"
          >
            Grandes
          </Link>
        </div>
      </div>
    </header>
  );
}

function GameDock() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const items = [
    { to: "/", label: "Casa", face: "/characters/susu.webp" },
    { to: "/juegos", label: "Jugar", face: "/characters/gadu.webp" },
    { to: "/aventuras", label: "Cuentos", face: "/characters/margarel.webp" },
    { to: "/explora", label: "Mundo", face: "/characters/zizu.webp" },
    { to: "/personajes", label: "Amigos", face: "/characters/vector.webp" },
  ] as const;
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t-[3px] border-ink bg-cream pb-[env(safe-area-inset-bottom)]"
      aria-label="Juego"
    >
      <ul className="mx-auto grid max-w-2xl grid-cols-5 px-1 py-1">
        {items.map((item) => {
          const active =
            item.to === "/"
              ? pathname === "/"
              : pathname === item.to || pathname.startsWith(`${item.to}/`);
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                className={cn(
                  "flex min-h-[4.5rem] flex-col items-center justify-center gap-0.5 rounded-2xl font-display text-xs font-semibold sm:text-sm",
                  active ? "bg-yellow text-ink" : "text-ink-soft",
                )}
              >
                <img src={item.face} alt="" className={cn("h-9 w-auto object-contain sm:h-10", active && "bob")} />
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
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <Logo variant="white" />
          <p className="mt-4 max-w-md text-base text-cream/80">
            {BRAND.tagline}
            <br />
            {BRAND.signature}
          </p>
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
        <div className="flex items-end">
          {characters.map((c) => (
            <img key={c.slug} src={c.portrait} alt="" className="h-14 w-auto object-contain object-bottom" />
          ))}
        </div>
      </div>
    </footer>
  );
}