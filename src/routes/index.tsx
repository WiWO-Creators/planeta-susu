import { createFileRoute, Link } from "@tanstack/react-router";
import { Figure } from "@/components/characters/Figure";
import { Photo } from "@/components/ui/photo";
import { buttonVariants } from "@/components/ui/button";
import { characters } from "@/data/characters";
import { territories } from "@/data/territories";
import { games } from "@/data/games";
import { storyCover } from "@/data/stories";
import { cn } from "@/lib/utils";
import { Radar } from "@/components/play/Radar";

export const Route = createFileRoute("/")({ component: Home });

const delays = [0, 1, 2, 3, 4] as const;

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b-[3px] border-ink bg-yellow">
        <div className="pointer-events-none absolute inset-0 doodle-dots opacity-25" />
        <div className="relative mx-auto max-w-5xl px-4 pb-6 pt-8 text-center sm:px-6 sm:pt-10">
          <img
            src="/brand/logo-ink.png"
            alt="Planeta Susu"
            className="pop-in mx-auto w-full max-w-[12rem] sm:max-w-[16rem]"
          />
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-6xl">¿Jugamos?</h1>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/juegos" className={buttonVariants({ tone: "ink", size: "lg" })}>
              Jugar
            </Link>
            <Link to="/aventuras" className={buttonVariants({ tone: "gadu", size: "lg" })}>
              Cuentos
            </Link>
            <Link to="/juguetes" className={buttonVariants({ tone: "cream", size: "lg" })}>
              Radar
            </Link>
          </div>
          <div className="relative mt-8 overflow-hidden rounded-blob border-[3px] border-ink shadow-chunky">
            <Photo src="/characters/group-fun.webp" alt="La tripulación lista para despegar" ratio="wide" />
          </div>
        </div>
        <div className="relative border-t-[3px] border-ink bg-cream">
          <div className="mx-auto flex max-w-5xl snap-x gap-3 overflow-x-auto px-4 py-4 sm:grid sm:grid-cols-5 sm:overflow-visible sm:px-6">
            {characters.map((c, i) => (
              <div key={c.slug} className="w-28 shrink-0 snap-center sm:w-auto">
                <Figure slug={c.slug} delay={delays[i]} height="h-24 sm:h-32" label />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-cloud">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6">
          <Door to="/juegos" img={games[0]?.cover ?? "/scenes/fiesta-estrellas.jpg"} title="Jugar" color="bg-yellow" />
          <Door to="/aventuras" img={storyCover["arboles-secretos"]} title="Cuentos" color="bg-margarel text-cream" />
          <Door to="/explora" img="/scenes/bosque-red.jpg" title="Explorar" color="bg-zizu text-cream" />
          <Door to="/padres" img="/scenes/sala-grandes.jpg" title="Grandes" color="bg-ink text-cream" />
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-gadu text-cream">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">Toca el radar</h2>
          <div className="mt-6">
            <Radar />
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Con un amigo</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {territories.map((t) => {
              const host = characters.find((c) => c.slug === t.host)!;
              return (
                <Link
                  key={t.slug}
                  to="/explora/$tema"
                  params={{ tema: t.topic }}
                  className="lift overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm"
                >
                  <div className="relative">
                    <Photo src={t.cover} ratio="square" />
                    <img
                      src={host.portrait}
                      alt=""
                      className="absolute bottom-0 right-0 h-16 w-auto object-contain sm:h-20"
                    />
                  </div>
                  <p className="p-2 text-center font-display text-base font-semibold leading-tight sm:text-lg">
                    {host.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function Door({
  to,
  img,
  title,
  color,
}: {
  to: "/juegos" | "/aventuras" | "/explora" | "/padres";
  img: string;
  title: string;
  color: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "lift overflow-hidden rounded-card border-[3px] border-ink shadow-chunky-sm",
        color,
      )}
    >
      <Photo src={img} ratio="card" />
      <p className="p-4 text-center font-display text-3xl font-semibold">{title}</p>
    </Link>
  );
}
