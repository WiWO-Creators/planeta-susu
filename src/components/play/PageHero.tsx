import { characterMap, type CharacterSlug } from "@/data/characters";
import { cn } from "@/lib/utils";

export function PageHero({
  title,
  scene,
  who,
  kicker,
}: {
  title: string;
  scene?: string;
  who?: CharacterSlug;
  kicker?: string;
}) {
  const host = who ? characterMap[who] : null;
  return (
    <section
      className="relative overflow-hidden border-b-[3px] border-ink"
      style={!scene && host ? { background: `${host.color}44` } : undefined}
    >
      {scene ? (
        <div className="absolute inset-0">
          <img src={scene} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/75 to-transparent" />
        </div>
      ) : null}
      <div className="relative mx-auto flex max-w-6xl items-end gap-3 px-4 pb-5 pt-12 sm:gap-5 sm:px-6 sm:pt-14">
        {host ? (
          <img src={host.portrait} alt="" className="h-24 w-auto bob object-contain sm:h-36" />
        ) : null}
        <div className="pb-1">
          {kicker ? <p className="font-display text-base font-semibold sm:text-lg">{kicker}</p> : null}
          <h1 className={cn("font-display text-4xl font-semibold sm:text-6xl")}>{title}</h1>
        </div>
      </div>
    </section>
  );
}