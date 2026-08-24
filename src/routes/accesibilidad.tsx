import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/accesibilidad")({ component: Page });

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-display text-sm font-semibold uppercase tracking-widest">Confianza</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">Hay más de una forma de explorar</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed">
        <p>
          Planificamos texto grande, contraste alto, botones de al menos 44 píxeles, navegación por
          teclado y respeto a «reducir movimiento» del sistema.
        </p>
        <p>
          Las historias se pueden leer en voz alta. Las misiones de 7 minutos tienen alternativa de
          bajo costo y no dependen de un gesto complejo.
        </p>
        <p>
          Si algo no se puede usar, escríbenos desde Contacto. La accesibilidad se considera desde
          el encargo editorial, no como un parche al final.
        </p>
      </div>
    </main>
  );
}
