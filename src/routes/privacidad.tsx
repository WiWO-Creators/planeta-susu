import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({ component: Page });

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-display text-sm font-semibold uppercase tracking-widest">Confianza</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">Tus datos también necesitan cuidado</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed">
        <p>
          La navegación infantil de Planeta Susu funciona sin crear una cuenta. No pedimos nombre
          completo, escuela, dirección, teléfono ni ubicación precisa.
        </p>
        <p>
          Las estrellas y pegatinas se guardan en este dispositivo. Si borras los datos del
          navegador, el álbum se vacía. No se envían a un servidor.
        </p>
        <p>
          El Club de las Grandes Preguntas y cualquier correo requieren una persona adulta. Un
          envío no implica publicación.
        </p>
        <p>
          No usamos los contenidos infantiles para vender productos. Si algún día hay una
          colaboración, se identificará antes de comenzar.
        </p>
      </div>
    </main>
  );
}
