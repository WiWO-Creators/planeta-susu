import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { clubQuestions } from "@/data/club";
import { characterMap } from "@/data/characters";
import { buttonVariants } from "@/components/ui/button";

export const Route = createFileRoute("/preguntas")({ component: Preguntas });

function Preguntas() {
  const [q, setQ] = useState("");
  const [adult, setAdult] = useState(false);
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!adult || q.trim().length < 8) return;
    const prev = JSON.parse(localStorage.getItem("ps-club") || "[]") as string[];
    localStorage.setItem("ps-club", JSON.stringify([...prev, q.trim()].slice(-20)));
    setSent(true);
    setQ("");
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-gadu">
        Club de las Grandes Preguntas
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-6xl">
        Las preguntas más brillantes pueden llegar desde cualquier parte
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        ¿Por qué la Luna no se cae? ¿Los peces tienen sed? El Club reúne preguntas y las convierte
        en señales para la tripulación.
      </p>
      <img
        src="/scenes/club-preguntas.jpg"
        alt="Susu y Vector frente a una gran pregunta"
        className="mt-8 w-full rounded-blob border-[3px] border-ink object-cover shadow-chunky sm:h-72"
      />

      <form onSubmit={submit} className="mt-8 rounded-card border-[3px] border-ink bg-yellow p-5 shadow-chunky-sm">
        <label className="font-display font-semibold" htmlFor="pregunta">
          Guardar mi pregunta
        </label>
        <textarea
          id="pregunta"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          rows={3}
          className="mt-2 w-full rounded-2xl border-[3px] border-ink bg-cream p-3"
          placeholder="Escribe la pregunta con ayuda de una persona adulta. Sin apellido, escuela ni dirección."
        />
        <label className="mt-3 flex items-start gap-2 text-sm">
          <input type="checkbox" checked={adult} onChange={(e) => setAdult(e.target.checked)} className="mt-1 size-4" />
          Soy una persona adulta y autorizo el envío. No prometemos publicación.
        </label>
        <button type="submit" className={buttonVariants({ tone: "ink", size: "sm" }) + " mt-4"} disabled={!adult}>
          Enviar al radar
        </button>
        {sent ? (
          <p className="mt-3 font-display font-semibold">
            La pregunta llegó al radar. Cada una ayuda a observar el mundo de otra manera.
          </p>
        ) : null}
      </form>

      <h2 className="mt-12 font-display text-3xl font-semibold">Respuestas breves</h2>
      <ul className="mt-6 space-y-4">
        {clubQuestions.map((c) => {
          const host = characterMap[c.host];
          return (
            <li key={c.q} className="rounded-card border-[3px] border-ink bg-cloud p-5">
              <div className="flex items-start gap-3">
                <img src={host.portrait} alt="" className="h-16 w-auto object-contain" />
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-widest text-ink-soft">
                    {host.name}
                  </p>
                  <h3 className="font-display text-2xl font-semibold">{c.q}</h3>
                  <p className="mt-2">{c.a}</p>
                  <p className="mt-3 font-display font-semibold">Nueva pregunta: {c.next}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
