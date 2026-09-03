import { Check, FlaskConical, Heart, Lightbulb, ListTodo, Sparkles } from "lucide-react";
import { useState } from "react";
import type { WiwoBlock } from "@wiwo/contract";
import { Speech } from "@/components/characters/Figure";
import { Button } from "@/components/ui/button";
import { articleBlocks, articleHost, articleLesson, articleQuiz } from "@/data/catalog";
import type { Article, Quiz as QuizItem } from "@/data/types";
import type { CharacterSlug } from "@/data/characters";
import { blockHost, blockList, blockText } from "@/lib/blocks";
import { ding } from "@/lib/utils";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

/**
 * Responsabilidad: dibujar una lección —sus bloques y su pregunta— dentro del
 * mundo al que pertenece.
 * Usado por: routes/explora/$tema.tsx.
 * NO hace: no busca la lección ni sabe qué mundo la contiene.
 *
 * Los bloques llegan en la forma abierta del contrato, así que cada campo se
 * lee con tolerancia: un bloque de una clase que este sitio no dibuja se saltea
 * en vez de romper la página.
 */

const toneIcon = {
  tip: Lightbulb,
  wow: Sparkles,
  care: Heart,
};

export function LessonView({ lesson, topicSlug }: { lesson: Article; topicSlug: string }) {
  const quiz = articleQuiz(lesson);
  const slug = articleLesson(lesson);
  return (
    <article className="space-y-5">
      <header>
        <h3 className="font-display text-3xl font-semibold">{lesson.title}</h3>
      </header>
      {articleBlocks(lesson).map((b, i) => (
        <Block key={i} block={b} />
      ))}
      {quiz ? (
        <Quiz
          item={quiz}
          completeId={`lesson:${topicSlug}:${slug}`}
          badge={`leccion-${slug}`}
          friend={articleHost(lesson)}
        />
      ) : null}
    </article>
  );
}

function Block({ block }: { block: WiwoBlock }) {
  if (block.type === "say") {
    return <Speech who={blockHost(block) ?? "susu"}>{blockText(block)}</Speech>;
  }
  if (block.type === "text") {
    return (
      <div>
        {blockText(block, "title") ? (
          <h4 className="font-display text-xl font-semibold">{blockText(block, "title")}</h4>
        ) : null}
        <p className="mt-2 text-lg leading-relaxed text-ink-soft">{blockText(block, "body")}</p>
      </div>
    );
  }
  if (block.type === "list") {
    return (
      <div className="rounded-card border-[3px] border-ink bg-cloud p-5 shadow-chunky-sm">
        <h4 className="flex items-center gap-2 font-display text-xl font-semibold">
          <ListTodo className="size-5" /> {blockText(block, "title")}
        </h4>
        <ul className="mt-3 space-y-2">
          {blockList(block, "items").map((it) => (
            <li key={it} className="flex gap-2 text-base sm:text-lg">
              <span className="mt-2 size-2 shrink-0 rounded-full bg-gadu" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (block.type === "try") {
    return (
      <div className="rounded-card border-[3px] border-ink bg-mint p-5 text-ink shadow-chunky-sm">
        <h4 className="flex items-center gap-2 font-display text-xl font-semibold">
          <FlaskConical className="size-5" /> {blockText(block, "title")}
        </h4>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-base sm:text-lg">
          {blockList(block, "steps").map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </div>
    );
  }
  if (block.type !== "callout") return null;

  const tone = blockText(block, "tone");
  const Icon = toneIcon[tone as keyof typeof toneIcon] ?? Lightbulb;
  const bg = tone === "wow" ? "bg-yellow" : tone === "care" ? "bg-pink" : "bg-sky";
  return (
    <p
      className={cn(
        "flex gap-3 rounded-card border-[3px] border-ink p-4 text-base shadow-chunky-sm sm:text-lg",
        bg,
      )}
    >
      <Icon className="mt-0.5 size-5 shrink-0" />
      <span>{blockText(block)}</span>
    </p>
  );
}

export function Quiz({
  item,
  completeId,
  badge,
  friend,
}: {
  item: QuizItem;
  completeId: string;
  badge?: string;
  friend?: CharacterSlug;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const complete = useProgress((s) => s.complete);
  const done = useProgress((s) => s.has(completeId));
  const chosen = picked !== null ? item.options[picked] : null;

  return (
    <section className="rounded-card border-[3px] border-ink bg-cloud p-5 shadow-chunky">
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-gadu">
        Pregunta de Gadú
      </p>
      <h4 className="mt-1 font-display text-2xl font-semibold">{item.question}</h4>
      <div className="mt-4 grid gap-2">
        {item.options.map((opt, i) => {
          const isPicked = picked === i;
          const show = picked !== null;
          return (
            <button
              key={opt.text}
              type="button"
              onClick={() => {
                if (picked !== null) return;
                setPicked(i);
                ding(opt.ok);
                if (opt.ok) complete(completeId, 5, badge, friend);
              }}
              className={cn(
                "min-h-14 rounded-2xl border-[3px] border-ink px-4 py-3 text-left font-semibold transition-transform active:scale-[0.98]",
                !show && "bg-cream hover:bg-yellow",
                show && opt.ok && "bg-zizu text-ink",
                show && isPicked && !opt.ok && "bg-coral text-cloud",
                show && !opt.ok && !isPicked && "bg-cream opacity-60",
              )}
            >
              {opt.text}
            </button>
          );
        })}
      </div>
      {chosen ? (
        <p className="mt-4 flex gap-2 text-base sm:text-lg">
          {chosen.ok ? (
            <Check className="mt-1 size-5 shrink-0 text-zizu-deep" />
          ) : null}
          <span>
            {chosen.why}{" "}
            {chosen.ok || done ? (
              <strong className="font-display"> +5 estrellas</strong>
            ) : (
              " Puedes intentarlo otra vez recargando la pregunta:"
            )}
          </span>
        </p>
      ) : null}
      {picked !== null && !chosen?.ok ? (
        <Button
          tone="yellow"
          size="sm"
          className="mt-3"
          onClick={() => setPicked(null)}
        >
          Intentar de nuevo
        </Button>
      ) : null}
    </section>
  );
}
