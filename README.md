# Argelado

Site da Argelado, empresa de instalação de ar-condicionado em Canoas, Rio Grande do Sul. Os pedidos de orçamento são preparados no navegador e enviados pelo visitante via WhatsApp (51) 99366-7248.

## Tecnologias

- TanStack Start e React com pré-renderização estática das páginas.
- TypeScript em modo estrito e Vite.
- Tailwind CSS 4, estilos responsivos próprios e ícones Lucide.
- Arquivos estáticos compatíveis com hospedagem compartilhada, sem servidor Node.js em produção.

## Desenvolvimento

Requisitos: Node.js 22 ou superior e npm.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build e publicação na Hostinger

```bash
npm ci
npm run build
```

O build pré-renderiza as rotas e grava o site em `dist/client`, incluindo HTML, assets, `robots.txt` e sitemap. Publique **o conteúdo de `dist/client`** no diretório público do domínio na Hostinger (normalmente `public_html`). Não publique `dist/server`, `node_modules` ou os arquivos-fonte como raiz do site. A hospedagem compartilhada serve apenas os arquivos gerados; o build precisa ser executado antes da publicação.

O domínio canônico é centralizado em `src/lib/site-config.ts`. Se o domínio mudar, atualize esse valor e o endereço do sitemap em `public/robots.txt` antes de gerar o build.

## Páginas

- `/`: apresentação, serviços, diferenciais e atendimento em Canoas.
- `/servicos`: visão geral dos serviços.
- `/servicos/instalacao-split-canoas`, `/servicos/instalacao-residencial-canoas` e `/servicos/instalacao-comercial-canoas`.
- `/por-que-argelado`, `/como-funciona`, `/atendimento`, `/duvidas` e `/contato`.
- `/guia/instalacao-ar-condicionado` e `/privacidade`.
- `/sitemap.xml` e `/robots.txt`.

## Orçamentos e privacidade

O formulário prepara uma mensagem com os dados informados e abre o WhatsApp para revisão e envio pelo visitante. O site não armazena leads nem envia mensagens automaticamente. A imagem principal é ilustrativa e fica em `public/img/ambiente-argelado.png`; não depende de CDN ou serviço de imagens da hospedagem.

O site não inclui rastreamento de visitantes. As fontes são carregadas pelo Google Fonts, que pode receber solicitações do navegador para entregar esses arquivos. O conteúdo não inventa endereço físico, avaliações, preços, certificações ou horários.

## Verificação

```bash
npm run typecheck
npm run build
```

O build falha se alguma página vinculada não puder ser pré-renderizada.
