# Argelado

Site da Argelado, dedicado à instalação de ar-condicionado em Canoas, Rio Grande do Sul. O projeto apresenta a empresa, explica os serviços e direciona solicitações de orçamento ao WhatsApp (51) 99366-7248.

## Tecnologias

- TanStack Start com renderização no servidor e roteamento por arquivos.
- React 19 e TypeScript em modo estrito.
- Vite 7, Tailwind CSS 4 e CSS responsivo com identidade visual própria.
- Lucide para ícones e Google Fonts para as famílias Manrope e DM Sans.
- Hospedagem Netlify e Netlify Image CDN para imagens responsivas em WebP.

## Desenvolvimento local

Requisitos: Node.js 22, pnpm e Netlify CLI.

```bash
pnpm install
netlify dev --port 8889
```

Acesse `http://localhost:8889`. A CLI fornece o ambiente Netlify, incluindo a entrega de imagens. O comando de produção configurado em `netlify.toml` é executado pelo pipeline de implantação.

## Páginas

- `/`: apresentação, serviços, diferenciais, etapas, atendimento em Canoas e dúvidas frequentes.
- `/servicos/instalacao-split-canoas`: instalação de aparelhos split.
- `/servicos/instalacao-residencial-canoas`: instalação para casas e apartamentos.
- `/servicos/instalacao-comercial-canoas`: instalação para espaços comerciais.
- `/guia/instalacao-ar-condicionado`: orientações para preparar o pedido de instalação.
- `/privacidade`: explicação do fluxo de informações.
- `/sitemap.xml` e `/robots.txt`: arquivos de descoberta para mecanismos de busca.

## Orçamentos

O diálogo de orçamento organiza nome, bairro, tipo de imóvel e informações sobre o aparelho. Após preencher os campos, o visitante recebe um link para revisar e enviar sua mensagem no WhatsApp. Não há armazenamento de leads, envio automático de mensagens, banco de dados ou formulário de coleta no servidor. Os links diretos de WhatsApp e telefone também estão disponíveis.

## SEO local

As páginas possuem títulos e descrições próprios, URLs canônicas, idioma `pt-BR`, hierarquia de títulos e links internos. O conteúdo destaca instalação de ar-condicionado em Canoas de forma contextual. Foram incluídos dados estruturados de empresa HVAC, serviços e navegação. Endereço físico, avaliações, certificações, valores e horários não foram inventados.

A URL pública é centralizada em `src/lib/site.ts`. Ao conectar um domínio próprio, configure a variável pública `VITE_SITE_URL` com a URL HTTPS principal, sem barra final, e publique novamente. Isso atualiza as URLs canônicas, os dados estruturados e o sitemap. Essa variável deve conter apenas a URL pública do site, nunca credenciais.

Após a publicação, cadastre o domínio no Google Search Console e envie `/sitemap.xml`. A verificação da propriedade depende do acesso do responsável ao domínio ou à conta do Google. O site não inclui rastreamento de visitantes. A estrutura de SEO não representa garantia de indexação, posicionamento ou exibição de resultados enriquecidos. Para complementar os dados comerciais, use apenas um endereço real autorizado e mantenha as informações da empresa consistentes.

## Conteúdo e imagem

Dados de contato, descrições de serviços e perguntas frequentes ficam em `src/lib/site.ts`. A imagem de ambiente foi gerada para este projeto pelo Netlify AI Gateway, é explicitamente ilustrativa e não representa um trabalho realizado pela empresa. O arquivo está em `public/img/ambiente-argelado.png` e é entregue pelo Netlify Image CDN. Não existe integração de IA em tempo de execução nem necessidade de chave de IA para usar o site.

## Verificação

Os arquivos e as referências foram revisados sem executar build, testes ou servidor local durante a criação. A instalação e a validação de produção ficam a cargo do pipeline automático da plataforma.
