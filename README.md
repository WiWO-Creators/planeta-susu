# Planeta Susu

Sitio para peques y grandes: historias, minijuegos, ciencia, arte y cuidado.

Stack: TanStack Start + Vite + Nitro (preset Vercel) + Tailwind v4.

## Local

```bash
npm ci
npm run dev
```

Abre `http://localhost:8080`.

## Subir a Vercel

1. Entra a [vercel.com/new](https://vercel.com/new).
2. Importa este repo de GitHub.
3. Framework: **Other** (ya viene en `vercel.json`).
4. Build command: `npm run build`.
5. Node: **22**.
6. Variable de entorno (Production + Preview):

   `VITE_AUTH_ENABLED` = `false`

7. Deploy. Cada push a `main` publica solo.

No hace falta base de datos ni login.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Preview local |
| `npm run build` | Build de producción |
| `npm run typecheck` | TypeScript |

## Notas

- Auth y Postgres están apagados a propósito.
- El álbum y las estrellas se guardan en el dispositivo.
