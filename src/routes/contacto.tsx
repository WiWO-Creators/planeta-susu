import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contacto")({ component: Page });

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-display text-sm font-semibold uppercase tracking-widest">Confianza</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">Hola, nave</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed">
        <p>
          Este sitio es una primera versión editorial de Planeta Susu. Para prensa, escuelas o una
          corrección, usa el Club de las Grandes Preguntas con acompañamiento adulto o deja una
          nota en este dispositivo.
        </p>
        <p>
          No respondemos a niñas o niños sin una persona adulta. No solicitamos fotos, escuelas ni
          datos de contacto infantiles.
        </p>
        <p className="font-display font-semibold">Pregunta. Prueba. Crea. Cuida. Nos vemos en Planeta Susu.</p>
      </div>
    </main>
  );
}
