import { characterMap } from "@/data/characters";
import { missionsForToday } from "@/data/missions";
import { useProgress } from "@/store/progress";
import { beep } from "@/components/games/playkit";

export function QuestBar() {
  const completed = useProgress((s) => s.completed);
  const mission = missionsForToday()[0];
  if (!mission) return null;
  const done = mission.match(completed);
  const host = characterMap[mission.host];
  return (
    <a
      href={mission.to}
      onClick={() => beep(620, 70)}
      className="mx-auto flex w-full max-w-5xl items-center gap-3 rounded-card border-[3px] border-ink bg-yellow px-3 py-2 shadow-chunky-sm"
    >
      <img src={host.portrait} alt="" className="h-12 w-auto object-contain object-bottom" />
      <div className="min-w-0 flex-1">
        <p className="font-display text-xs font-semibold uppercase tracking-wide">Misión de hoy</p>
        <p className="truncate font-display text-lg font-semibold leading-tight">{mission.title}</p>
      </div>
      <span className="shrink-0 rounded-full border-2 border-ink bg-cloud px-2 py-1 font-display text-sm font-semibold">
        {done ? "Listo" : `+${mission.stars}`}
      </span>
    </a>
  );
}
