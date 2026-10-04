# Argelado — arquitetura e convenções

## Objetivo

Site de serviços de instalação de ar-condicionado para a Argelado em Canoas, RS. O contato comercial é o WhatsApp (51) 99366-7248. A prioridade é uma apresentação confiável, conversão pelo WhatsApp, acessibilidade e SEO local sem alegações comerciais inventadas.

## Arquitetura

Aplicação TanStack Start com React 19, TypeScript estrito, Vite e o adaptador oficial da Netlify. As páginas são renderizadas no servidor. O roteamento é baseado nos arquivos de `src/routes`; a árvore de rotas é gerada pelo framework e não deve ser editada manualmente.

### Diretórios principais

- `src/routes/__root.tsx`: documento HTML, idioma, metadados globais, fontes, favicon e estado 404.
- `src/routes/index.tsx`: metadados da página inicial e componente principal.
- `src/routes/servicos.$slug.tsx`: páginas de serviços com conteúdo específico; slugs desconhecidos retornam 404.
- `src/routes/guia.instalacao-ar-condicionado.tsx`: guia editorial de preparação.
- `src/routes/privacidade.tsx`: explicação do fluxo de dados e dos recursos externos.
- `src/routes/sitemap[.]xml.ts` e `src/routes/robots[.]txt.ts`: respostas HTTP de descoberta; os colchetes preservam os pontos literais nas URLs.
- `src/components/HomePage.tsx`: apresentação inicial, acessos às páginas de cada seção e dados estruturados da empresa.
- `src/components/SectionPage.tsx`: conteúdo das páginas de serviços, diferenciais, processo, atendimento, dúvidas e contato; mantém o orçamento no navegador.
- `src/routes/servicos.index.tsx`, `por-que-argelado.tsx`, `como-funciona.tsx`, `atendimento.tsx`, `duvidas.tsx` e `contato.tsx`: rotas independentes das seções, com metadados específicos centralizados em `src/lib/site.ts`.
- `src/components/SiteLayout.tsx`: marca, navegação responsiva, rodapé, ícone WhatsApp e botão flutuante.
- `src/components/QuoteDialog.tsx`: diálogo nativo acessível para preparar uma mensagem de orçamento.
- `src/lib/site.ts`: fonte central de identidade, URL pública, telefone, links WhatsApp, serviços, FAQ e dados estruturados.
- `src/styles.css`: identidade visual, estados interativos, animações e breakpoints.
- `public/img`: ativos locais; as imagens devem ser entregues pelo Netlify Image CDN.
- `netlify.toml`: configuração do pipeline e do desenvolvimento Netlify na porta 8889.

## Decisões importantes

O formulário de orçamento não é um formulário de captura: apenas prepara uma URL WhatsApp no navegador. O visitante confirma o envio no aplicativo. Não há persistência, API de leads ou Netlify Forms. Não adicione armazenamento em memória, arquivos JSON locais ou serviços externos caso seja necessário persistir dados no futuro; leia a skill `general-database` e use as primitivas Netlify apropriadas.

A imagem da página inicial é ilustrativa, gerada pelo AI Gateway e salva no projeto. Não há IA em tempo de execução. Não apresente essa imagem como foto de um serviço executado.

`VITE_SITE_URL` é uma configuração pública opcional para o domínio principal. A URL padrão corresponde ao domínio Netlify do projeto. Sitemap, robots, dados estruturados e URLs canônicas usam essa fonte única.

Não foram incluídos endereço, preços, avaliações, horários, certificações ou garantias não fornecidos pela empresa. A marcação `HVACBusiness` utiliza a área de atendimento real, sem inventar um endereço para obter resultados enriquecidos. Não adicione `og:image`: a plataforma fornece a imagem de compartilhamento.

## Convenções

- Escreva conteúdo e interface em português brasileiro; mantenha `lang="pt-BR"`.
- Use componentes PascalCase, funções camelCase, importações `@/` e importações de tipos explícitas.
- Preserve a paleta de verdes naturais, fundo claro, tipografia Manrope/DM Sans e tokens CSS.
- Mantenha um H1 por página, títulos e descrições específicos, links internos e URLs canônicas.
- Centralize mudanças de dados comerciais em `src/lib/site.ts`.
- Preserve foco visível, rótulos de formulário, navegação por teclado e redução de movimento.
- Links externos em nova aba devem incluir `rel="noopener noreferrer"`.
- Não inclua segredos no código, variáveis públicas ou documentação.
- Não adicione rastreamento ou serviços de terceiros sem considerar as informações de privacidade.

## Execução e validação

Use `pnpm install` e `netlify dev --port 8889` para desenvolvimento quando permitido. O ambiente de criação da plataforma valida a implantação automaticamente; não execute comandos locais de build, testes, TypeScript ou servidor nesse fluxo. Revise código e referências por leitura. Não crie commits ou branches sem solicitação.
