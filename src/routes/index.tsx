import { createFileRoute, Link } from "@tanstack/react-router";
import { Figure } from "@/components/characters/Figure";
import { Photo } from "@/components/ui/photo";
import { buttonVariants } from "@/components/ui/button";
import { characters, characterMap, type CharacterSlug } from "@/data/characters";
import { territories } from "@/data/territories";
import { cn } from "@/lib/utils";
import { Radar } from "@/components/play/Radar";

export const Route = createFileRoute("/")({ component: Home });

const delays = [0, 1, 2, 3, 4] as const;

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b-[3px] border-ink sky-play">
        <div className="relative mx-auto max-w-5xl px-4 pb-6 pt-8 text-center sm:px-6 sm:pt-10">
          <img
            src="/brand/logo-ink.png"
            alt="Planeta Susu"
            className="pop-in mx-auto w-full max-w-[12rem] sm:max-w-[16rem]"
          />
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-6xl">¿Jugamos?</h1>
          <p className="mt-2 font-display text-lg sm:text-xl">Toca. Mira. Prueba.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/juegos" className={cn(buttonVariants({ tone: "ink", size: "lg" }), "press min-w-36")}>
              Jugar
            </Link>
            <Link to="/aventuras" className={cn(buttonVariants({ tone: "gadu", size: "lg" }), "press min-w-36")}>
              Cuentos
            </Link>
            <Link to="/juguetes" className={cn(buttonVariants({ tone: "cream", size: "lg" }), "press min-w-36")}>
              Radar
            </Link>
          </div>
          <div className="relative mt-8 overflow-hidden rounded-blob border-[3px] border-ink shadow-chunky">
            <Photo src="/characters/group-fun.webp" alt="La tripulación lista para despegar" ratio="wide" />
          </div>
        </div>
        <div className="relative border-t-[3px] border-ink bg-cream">
          <p className="pt-4 text-center font-display text-xl font-semibold">Toca un amigo</p>
          <div className="mx-auto flex max-w-5xl snap-x gap-3 overflow-x-auto px-4 py-4 sm:grid sm:grid-cols-5 sm:overflow-visible sm:px-6">
            {characters.map((c, i) => (
              <div key={c.slug} className="w-28 shrink-0 snap-center sm:w-auto">
                <Figure slug={c.slug} delay={delays[i]} height="h-28 sm:h-36" label />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-cloud">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6">
          <Door to="/juegos" who="gadu" title="Jugar" color="bg-yellow" />
          <Door to="/aventuras" who="margarel" title="Cuentos" color="bg-margarel text-cream" />
          <Door to="/explora" who="zizu" title="Explorar" color="bg-zizu text-cream" />
          <Door to="/padres" who="susu" title="Grandes" color="bg-ink text-cream" />
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
                  className="card-press overflow-hidden rounded-card border-[3px] border-ink bg-cloud shadow-chunky-sm"
                >
                  <div
                    className="flex aspect-square items-end justify-center px-2 pt-4"
                    style={{ background: `${host.color}40` }}
                  >
                    <img
                      src={host.portrait}
                      alt={host.name}
                      className="h-[88%] w-auto object-contain object-bottom"
                    />
                  </div>
                  <p className="border-t-[3px] border-ink p-2 text-center font-display text-base font-semibold leading-tight sm:text-lg">
                    {host.nameAccent}
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
  who,
  title,
  color,
}: {
  to: "/juegos" | "/aventuras" | "/explora" | "/padres";
  who: CharacterSlug;
  title: string;
  color: string;
}) {
  const c = characterMap[who];
  return (
    <Link
      to={to}
      className={cn(
        "card-press overflow-hidden rounded-card border-[3px] border-ink shadow-chunky-sm",
        color,
      )}
    >
      <div
        className="flex aspect-[4/3] items-end justify-center px-3 pt-4"
        style={{ background: `${c.color}33` }}
      >
        <img
          src={c.portrait}
          alt=""
          className="h-[92%] w-auto object-contain object-bottom"
        />
      </div>
      <p className="p-4 text-center font-display text-3xl font-semibold">{title}</p>
    </Link>
  );
}
