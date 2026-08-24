import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/SiteShell";
import appCss from "../styles.css?url";

const APP_NAME = "Planeta Susu | Ciencia, creatividad y futuro para niños";
const APP_DESC =
  "Historias, juegos y misiones sobre ciencia, ecología, matemáticas, programación, arte y valores para niñas, niños y familias curiosas.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: APP_DESC },
      { name: "theme-color", content: "#FFD000" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
  notFoundComponent: LostPlanet,
});

function RootDocument() {
  return (
    <html lang="es" suppressHydrationWarning className="antialiased">
      <head>
        <HeadContent />
      </head>
      <body className="bg-cream text-ink">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function LostPlanet() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
      <img src="/characters/gadu.webp" alt="Gadú sorprendido" className="h-52 w-auto bob" />
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-gadu">
        Coordenada 404
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
        Esta coordenada todavía no existe
      </h1>
      <p className="mt-4 max-w-md text-lg text-ink-soft">
        Puede que la página haya cambiado de órbita o que alguien haya escrito una dirección del
        futuro. Regresa a la nave o aprovecha el error para inventar qué debería existir aquí.
      </p>
      <a
        href="/"
        className="chunky mt-8 inline-flex min-h-12 items-center rounded-full bg-yellow px-6 font-display text-lg font-semibold text-ink transition-transform duration-150 ease-out active:translate-y-[3px] active:shadow-chunky-sm"
      >
        Volver al inicio
      </a>
    </main>
  );
}
