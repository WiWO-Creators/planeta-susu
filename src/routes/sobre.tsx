import { createFileRoute, Link } from "@tanstack/react-router";
import { faqs } from "@/data/faqs";
import { BRAND } from "@/data/brand";
import { buttonVariants } from "@/components/ui/button";

export const Route = createFileRoute("/sobre")({ component: Sobre });

function Sobre() {
  return (
    <main>
      <section className="border-b-[3px] border-ink bg-yellow">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <p className="font-display text-sm font-semibold uppercase tracking-widest">Sobre el planeta</p>
          <h1 className="mt-2 font-display text-4xl font-semibold sm:text-6xl">
            Un planeta construido con grandes preguntas
          </h1>
          <p className="mt-4 text-lg">
            Los temas más importantes del futuro no deberían sentirse lejanos. También pueden
            comenzar con una sombra, una semilla, un dibujo o un «¿por qué?» dicho en la mesa.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6">
        <section>
          <h2 className="font-display text-3xl font-semibold">Qué es</h2>
          <p className="mt-3 text-lg leading-relaxed">{BRAND.extended}</p>
          <p className="mt-3 text-lg leading-relaxed">
            No es una escuela escondida dentro de un dibujo. Es una nave que se puede explorar: cada
            misión comienza con curiosidad, atraviesa una prueba y termina con algo que puede salir
            de la pantalla.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl font-semibold">Cómo funciona una misión</h2>
          <ol className="mt-4 space-y-3">
            {[
              "Llega una señal. Algo despierta una pregunta.",
              "La tripulación explora. Cada personaje aporta una mirada.",
              "Probamos una idea. Observamos, comparamos, construimos o conversamos.",
              "Descubrimos una conexión. La respuesta también muestra sus límites.",
              "La idea sale de la pantalla.",
              "Aparece una pregunta nueva.",
            ].map((s, i) => (
              <li key={s} className="rounded-2xl border-[3px] border-ink bg-cloud px-4 py-3">
                <span className="font-display font-semibold">{i + 1}. </span>
                {s}
              </li>
            ))}
          </ol>
        </section>
        <section className="rounded-card border-[3px] border-ink bg-gadu p-6 text-cream shadow-chunky-sm">
          <h2 className="font-display text-3xl font-semibold">Manifiesto</h2>
          <p className="mt-3 text-lg leading-relaxed">{BRAND.manifesto}</p>
          <p className="mt-4 font-display text-xl font-semibold">{BRAND.signature}</p>
        </section>
        <section>
          <h2 className="font-display text-3xl font-semibold">Preguntas frecuentes</h2>
          <dl className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-card border-[3px] border-ink bg-cloud p-4">
                <summary className="cursor-pointer font-display text-lg font-semibold">{f.q}</summary>
                <p className="mt-2 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </dl>
        </section>
        <Link to="/padres" className={buttonVariants({ tone: "ink" })}>
          Entrar a la Sala de Grandes
        </Link>
      </div>
    </main>
  );
}
