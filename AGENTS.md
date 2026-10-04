# Argelado — arquitetura e convenções

## Objetivo

Site da Argelado, serviço de instalação de ar-condicionado em Canoas, RS. Prioridades: apresentação confiável, contato via WhatsApp, acessibilidade e SEO local sem alegações comerciais inventadas.

## Arquitetura

Aplicação TanStack Start com React 19 e TypeScript estrito. As rotas são pré-renderizadas durante o build para publicar arquivos estáticos em hospedagem compartilhada, sem Node.js em produção. O roteamento é baseado nos arquivos de `src/routes`; a árvore `src/routeTree.gen.ts` é gerada pelo framework e não deve ser editada manualmente.

### Diretórios e arquivos

- `src/routes/__root.tsx`: documento HTML, idioma, metadados globais e favicon.
- `src/routes`: páginas e metadados específicos de cada rota.
- `src/components/HomePage.tsx`: apresentação inicial e dados estruturados da empresa.
- `src/components/SectionPage.tsx`: conteúdo das páginas de seções.
- `src/components/SiteLayout.tsx`: marca, navegação, rodapé e contatos.
- `src/components/QuoteDialog.tsx`: diálogo acessível para preparar uma mensagem de orçamento.
- `src/lib/site.ts`: identidade, URLs, telefone, conteúdo de serviços, FAQ e dados estruturados.
- `src/lib/site-config.ts`: domínio público canônico compartilhado pelo site e pelo build.
- `src/styles.css`: identidade visual, estados interativos, animações e breakpoints.
- `public`: imagens, favicon e `robots.txt`, copiados para a saída estática.
- `vite.config.ts`: configuração Vite, pré-renderização das páginas e geração do sitemap.

## Decisões importantes

O formulário não captura nem persiste dados: apenas prepara uma URL do WhatsApp no navegador e deixa o envio sob controle do visitante. Não há API, banco de dados ou integração de IA em tempo de execução.

A imagem de ambiente é ilustrativa e está armazenada localmente em `public/img/ambiente-argelado.png`. Não dependa de CDN ou funções específicas do provedor de hospedagem.

Centralize o domínio em `src/lib/site-config.ts` e mantenha `public/robots.txt` atualizado com o mesmo endereço do sitemap.

Não invente endereço, preços, avaliações, horários, certificações ou garantias. Preserve foco visível, rótulos de formulário, navegação por teclado e links externos com `rel="noopener noreferrer"`.

## Execução e validação

- Instalação reproduzível: `npm ci`.
- Desenvolvimento: `npm run dev`.
- Checagem de tipos: `npm run typecheck`.
- Build estático: `npm run build`; a pasta publicada é `dist/client`.

Publique somente o conteúdo de `dist/client` no diretório público da Hostinger. Não publique `dist/server`, `node_modules` ou arquivos de desenvolvimento como raiz do site.
