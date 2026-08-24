import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CharacterSlug } from "@/data/characters";
import { STICKERS } from "@/data/stickers";
import { missionDayKey, missionsForToday } from "@/data/missions";

type Friendship = Record<CharacterSlug, number>;

const emptyFriends = (): Friendship => ({
  susu: 0,
  vector: 0,
  gadu: 0,
  zizu: 0,
  margarel: 0,
});

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function yesterdayKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

type ProgressState = {
  stars: number;
  badges: string[];
  completed: string[];
  stickers: string[];
  friendship: Friendship;
  streak: number;
  lastVisit: string | null;
  addStars: (n: number) => void;
  complete: (id: string, stars?: number, badge?: string, friend?: CharacterSlug) => void;
  has: (id: string) => boolean;
  see: (id: string) => void;
  befriend: (who: CharacterSlug, n?: number) => void;
  checkin: () => void;
  syncMissions: () => void;
};

function earnStickers(stars: number, completed: string[], current: string[], streak = 0) {
  const next = new Set(current);
  for (const s of STICKERS) {
    if (next.has(s.id)) continue;
    let ok = false;
    if (s.requireCount && s.requirePrefix) {
      const prefix = s.requirePrefix;
      ok = completed.filter((c) => c.startsWith(prefix)).length >= s.requireCount;
    } else if (s.requirePrefix) {
      const prefix = s.requirePrefix;
      ok = completed.some((c) => c.startsWith(prefix));
    } else if (s.requireId) {
      ok = completed.includes(s.requireId);
    } else if (s.requireStreak) {
      ok = streak >= s.requireStreak;
    } else if (s.requireStars) {
      ok = stars >= s.requireStars;
    }
    if (ok) next.add(s.id);
  }
  return [...next];
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      stars: 0,
      badges: [],
      completed: [],
      stickers: [],
      friendship: emptyFriends(),
      streak: 0,
      lastVisit: null,
      addStars: (n) =>
        set((s) => ({
          stars: s.stars + n,
          stickers: earnStickers(s.stars + n, s.completed, s.stickers, s.streak),
        })),
      complete: (id, stars = 3, badge, friend) => {
        const s = get();
        if (s.completed.includes(id)) return;
        const completed = [...s.completed, id];
        const total = s.stars + stars;
        const friendship = { ...s.friendship };
        if (friend) friendship[friend] = Math.min(5, (friendship[friend] ?? 0) + 1);
        set({
          completed,
          stars: total,
          badges: badge && !s.badges.includes(badge) ? [...s.badges, badge] : s.badges,
          friendship,
          stickers: earnStickers(total, completed, s.stickers, s.streak),
        });
      },
      has: (id) => get().completed.includes(id),
      see: (id) => {
        const s = get();
        if (s.completed.includes(id)) return;
        const completed = [...s.completed, id];
        set({ completed, stickers: earnStickers(s.stars, completed, s.stickers, s.streak) });
      },
      befriend: (who, n = 1) =>
        set((s) => ({
          friendship: {
            ...s.friendship,
            [who]: Math.min(5, (s.friendship[who] ?? 0) + n),
          },
        })),
      checkin: () => {
        const s = get();
        const today = todayKey();
        if (s.lastVisit === today) return;
        const streak = s.lastVisit === yesterdayKey() ? s.streak + 1 : 1;
        const bonus = 2;
        const completed = s.completed.includes(`checkin:${today}`)
          ? s.completed
          : [...s.completed, `checkin:${today}`];
        const stars = s.stars + bonus;
        set({
          lastVisit: today,
          streak,
          stars,
          completed,
          stickers: earnStickers(stars, completed, s.stickers, streak),
        });
      },
      syncMissions: () => {
        const day = missionDayKey();
        for (const m of missionsForToday()) {
          const id = `mission:${day}:${m.id}`;
          const s = get();
          if (!s.completed.includes(id) && m.match(s.completed)) {
            get().complete(id, m.stars, `mision-${m.id}`, m.host);
          }
        }
      },
    }),
    { name: "planeta-susu-progress", skipHydration: true },
  ),
);
