# Plataforma Intensivista Pediátrica

Base full-stack mobile first para uma plataforma por assinatura voltada a médicos intensivistas e plantonistas pediátricos.

## Estrutura

- `apps/web`: frontend React + Vite com navegação mobile first, login, dashboard, benchmark e trilhas de patologias.
- `apps/api`: API Express com autenticação JWT, catálogo inicial de 10 patologias e métricas consolidadas.
- `packages/shared`: tipos compartilhados entre frontend e backend.

## Funcionalidades iniciais

- Autenticação com JWT.
- Dashboard com dados do usuário e benchmark agregado da plataforma.
- Catálogo inicial com 10 patologias prioritárias.
- Estrutura para conteúdos em vídeo vertical, texto e imagem.
- Navegação pensada para uso no celular, com cards, feed de conteúdo e bottom navigation.

## Credenciais de demonstração

- `ana@demo.com` / `demo123`
- `carlos@demo.com` / `demo123`

## Ambiente

Copie as variáveis de `.env.example` para `.env` quando quiser customizar:

```bash
API_PORT=3333
JWT_SECRET=troque-esta-chave-em-producao
VITE_API_URL=http://localhost:3333
```

## Execução

```bash
npm install
npm run dev:api
npm run dev:web
```

## Docker local

```bash
docker compose up --build
```

- Web: `http://localhost:8080`
- API: `http://localhost:3333`

## Deploy

### Frontend na Vercel

- Root do projeto: repositório inteiro
- Build command: `npm run build:web`
- Output directory: `apps/web/dist`
- Variável obrigatória: `VITE_API_URL=https://SUA-API.run.app`

### API no Cloud Run

- Container via `apps/api/Dockerfile`
- Variável obrigatória: `JWT_SECRET`
- A API já lê `PORT`, compatível com Cloud Run
- Build do container via `cloudbuild.api.yaml`

## Observações

- Os dados atuais são seed de demonstração para acelerar design, navegação e validação do produto.
- O conteúdo clínico está estruturado para futura curadoria médica e não substitui protocolo institucional nem revisão especializada.
