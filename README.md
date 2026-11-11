# projeto-2

Projeto base em **Next.js 16** (App Router) com **TypeScript** e **TailwindCSS 4**, criado com `create-next-app`.

## Tech Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | Next.js 16.4 (App Router, Turbopack) |
| UI | React 19.3, TailwindCSS 4 |
| Linguagem | TypeScript 5 |
| Lint | ESLint 9 + `eslint-config-next` |

Convenções do projeto (documentadas em [CLAUDE.md](CLAUDE.md)): Server Components por padrão, mutações via Server Actions, shadcn/ui para primitivos, React Hook Form + Zod para validação. Essas bibliotecas ainda **não** estão instaladas.

## Pré-requisitos

- Node.js 20 ou superior
- npm

## Começando

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). A página inicial está em `app/page.tsx` e atualiza automaticamente ao salvar.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento (porta 3000) |
| `npm run build` | Build de produção |
| `npm run start` | Executa o build de produção |
| `npm run lint` | Executa o ESLint |
| `npm run type-check` | Verifica tipos com `tsc --noEmit` |

Após uma série de mudanças, rode `npm run type-check && npm run lint`.

## Estrutura de pastas

```
app/              Rotas, layouts e estilos globais (App Router)
actions/          Server Actions (mutações)
components/       Componentes de feature
components/ui/    Primitivos reutilizáveis (shadcn/ui)
lib/              Helpers, clients e configurações
types/            Tipos globais e schemas Zod compartilhados
public/           Arquivos estáticos
```

Alias de import: `@/*` aponta para a raiz do projeto (sem pasta `src/`).

## Configuração

`next.config.ts` habilita `cacheComponents` e `partialPrefetching`, e registra o loader `@tailwindcss/turbopack` para arquivos `.css`.

Variáveis de ambiente: copie `.env.example` para `.env.local` (quando existir). Use `NEXT_PUBLIC_*` apenas para valores seguros no client; segredos ficam em Server Actions ou Route Handlers.

## Observações

- Os tipos de rota (`LayoutProps`, `PageProps`) são gerados pelo Next. Se o `type-check` reclamar deles, rode `npx next typegen` ou `npm run dev`.
- Esta versão do Next.js tem mudanças de API em relação às anteriores. Consulte a documentação local em `node_modules/next/dist/docs/` antes de escrever código (veja [AGENTS.md](AGENTS.md)).

## Branches e commits

- Branches: `feat/`, `fix/`, `chore/` + descrição em kebab-case
- Commits em inglês, no imperativo: `add OAuth callback handler`
