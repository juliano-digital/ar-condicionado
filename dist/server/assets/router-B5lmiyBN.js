import { createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
const siteUrl = "https://calm-lily-e671e8.netlify.app".replace(/\/$/, "");
const siteName = "Argelado | Instalação de Ar-Condicionado em Canoas, RS";
const siteDescription = "Instalação de ar-condicionado split em Canoas, RS. Soluções para casas, apartamentos e empresas. Fale com a Argelado e solicite seu orçamento pelo WhatsApp.";
const phone = "(51) 99366-7248";
const phoneHref = "tel:+5551993667248";
const sectionPages = [
  { id: "servicos", path: "/servicos", label: "Nossos serviços", title: "Serviços de instalação de ar-condicionado em Canoas", description: "Conheça as soluções da Argelado para instalação de ar-condicionado split em casas, apartamentos e empresas em Canoas, RS." },
  { id: "por-que-argelado", path: "/por-que-argelado", label: "Por que Argelado?", title: "Por que escolher a Argelado em Canoas?", description: "Conheça a forma de atendimento da Argelado: conversa sobre seu ambiente, clareza no orçamento e cuidado com a instalação em Canoas." },
  { id: "como-funciona", path: "/como-funciona", label: "Como funciona", title: "Como solicitar sua instalação de ar-condicionado", description: "Saiba como reunir as informações do aparelho, solicitar um orçamento pelo WhatsApp e combinar sua instalação com a Argelado em Canoas." },
  { id: "duvidas", path: "/duvidas", label: "Dúvidas frequentes", title: "Dúvidas sobre instalação de ar-condicionado em Canoas", description: "Tire suas dúvidas sobre orçamento, infraestrutura, equipamentos e agendamento de instalação de ar-condicionado com a Argelado." },
  { id: "atendimento", path: "/atendimento", label: "Atendimento em Canoas", title: "Atendimento de instalação de ar-condicionado em Canoas", description: "Fale com a Argelado para consultar o atendimento no seu bairro em Canoas, RS, e informar as necessidades da sua casa ou empresa." },
  { id: "contato", path: "/contato", label: "Contato e orçamento", title: "Contato e orçamento de instalação com a Argelado", description: "Entre em contato com a Argelado pelo WhatsApp (51) 99366-7248 e prepare sua mensagem de orçamento para instalação de ar-condicionado em Canoas." }
];
function sectionHead(sectionId) {
  const page = sectionPages.find((page2) => page2.id === sectionId);
  const title2 = `${page.title} | Argelado`;
  const url2 = `${siteUrl}${page.path}`;
  return {
    meta: [{ title: title2 }, { name: "description", content: page.description }, { property: "og:title", content: title2 }, { property: "og:description", content: page.description }, { property: "og:url", content: url2 }],
    links: [{ rel: "canonical", href: url2 }]
  };
}
function whatsappUrl(message = "Olá, Argelado! Gostaria de um orçamento para instalação de ar-condicionado em Canoas.") {
  return `https://wa.me/5551993667248?text=${encodeURIComponent(message)}`;
}
const services = [
  {
    slug: "instalacao-split-canoas",
    label: "Instalação de split",
    title: "Instalação de ar-condicionado split em Canoas",
    description: "O conforto começa na instalação. Planejamento do local, atenção ao acabamento e orientação para o seu equipamento.",
    intro: "Uma boa instalação de ar-condicionado split começa com a avaliação do ambiente. A Argelado atende em Canoas, RS, e conversa com você para entender o equipamento, a infraestrutura disponível e o melhor caminho para a instalação.",
    sections: [
      { title: "Cada ambiente pede uma avaliação", text: "A posição das unidades interna e externa, o trajeto da tubulação e o ponto de drenagem precisam ser avaliados antes do serviço. Envie fotos do ambiente e o modelo do equipamento pelo WhatsApp para iniciar a conversa." },
      { title: "O que entra no orçamento?", text: "O escopo depende do modelo do aparelho e das condições do local. Distância entre as unidades, acesso à área externa e materiais necessários são pontos que podem alterar o orçamento. Confirme os itens incluídos antes de agendar." },
      { title: "Já comprou seu ar-condicionado?", text: "Informe a marca, o modelo e a capacidade em BTUs. Se ainda não escolheu o aparelho, explique como é o ambiente para conversar sobre as informações necessárias antes da compra. As condições de instalação devem seguir as orientações do fabricante." }
    ]
  },
  {
    slug: "instalacao-residencial-canoas",
    label: "Para sua casa",
    title: "Instalação de ar-condicionado residencial em Canoas",
    description: "Mais conforto no quarto, na sala ou no home office. Uma instalação pensada para a rotina da sua casa.",
    intro: "Quarto, sala ou home office: cada espaço tem suas particularidades. A Argelado realiza instalação de ar-condicionado em residências em Canoas, com uma conversa inicial para avaliar o ambiente e definir o serviço necessário.",
    sections: [
      { title: "Casas e apartamentos", text: "Em casas, é importante avaliar o acesso ao local da unidade externa e o trajeto da instalação. Em apartamentos, consulte também as regras do condomínio para a fachada, a varanda e os horários permitidos para o serviço." },
      { title: "Prepare o ambiente para a instalação", text: "Envie fotos da parede onde pretende instalar o aparelho, do local da unidade externa e da infraestrutura existente. Informe se o imóvel já possui tubulação ou ponto elétrico destinado ao ar-condicionado." },
      { title: "Agendamento combinado com você", text: "O agendamento é definido após a análise das informações e a confirmação do orçamento. A duração do serviço depende das condições do imóvel, do acesso e das características do equipamento." }
    ]
  },
  {
    slug: "instalacao-comercial-canoas",
    label: "Para sua empresa",
    title: "Instalação de ar-condicionado comercial em Canoas",
    description: "Um ambiente agradável para quem trabalha e para quem chega. Instalação para escritórios, lojas e pequenos negócios.",
    intro: "Um ambiente confortável faz parte da experiência de quem trabalha e de quem visita seu negócio. A Argelado atende pedidos de instalação de ar-condicionado em espaços comerciais em Canoas, RS.",
    sections: [
      { title: "Escritórios, lojas e espaços de atendimento", text: "Conte como o espaço é utilizado, quantas pessoas costumam frequentá-lo e quais equipamentos deseja instalar. Essas informações ajudam a organizar a avaliação e a conversar sobre as necessidades do serviço." },
      { title: "Planejamento para a rotina do negócio", text: "A instalação precisa considerar o acesso às áreas de trabalho, os horários de funcionamento e as condições do imóvel. Combine o agendamento e os detalhes do serviço antes da execução." },
      { title: "Um orçamento com escopo definido", text: "Informe a quantidade e os modelos dos aparelhos, envie imagens da infraestrutura e descreva os locais de instalação. Materiais, acesso e condições de execução são avaliados para elaborar a proposta." }
    ]
  }
];
const faqs = [
  { question: "Vocês fazem instalação de ar-condicionado em Canoas?", answer: "Sim. A Argelado atende em Canoas, Rio Grande do Sul, com instalação de ar-condicionado para casas, apartamentos e espaços comerciais. Envie seu bairro pelo WhatsApp para combinar os detalhes do atendimento." },
  { question: "Quanto custa instalar um ar-condicionado?", answer: "O valor depende do modelo do aparelho, da distância entre as unidades, da infraestrutura existente, dos materiais e das condições de acesso. Envie fotos do local e os dados do equipamento para solicitar um orçamento adequado ao seu caso." },
  { question: "Quais informações preciso enviar para pedir um orçamento?", answer: "Informe seu bairro em Canoas, o tipo de imóvel, a marca e o modelo do aparelho, a capacidade em BTUs e se já existe infraestrutura. Fotos da parede e do local da unidade externa também ajudam na avaliação." },
  { question: "É possível instalar ar-condicionado em apartamento?", answer: "Sim, desde que as condições do imóvel permitam. Antes do agendamento, confira com o condomínio as regras para instalação da unidade externa, alterações na fachada e horários de serviço. A infraestrutura também precisa ser avaliada." },
  { question: "Quanto tempo leva a instalação?", answer: "O tempo varia conforme a infraestrutura, o acesso, a distância entre as unidades e as características do aparelho. A previsão é combinada após a avaliação do serviço, junto com o agendamento." },
  { question: "Ainda não comprei o aparelho. Posso falar com vocês?", answer: "Pode. Conte como é o ambiente e o que você precisa. Antes da compra, vale conversar sobre a infraestrutura disponível, as condições de instalação e as especificações do equipamento." }
];
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${siteUrl}/#empresa`,
  name: "Argelado",
  description: siteDescription,
  url: siteUrl,
  telephone: "+55-51-99366-7248",
  areaServed: { "@type": "City", name: "Canoas", containedInPlace: { "@type": "State", name: "Rio Grande do Sul" } },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Instalação de ar-condicionado em Canoas",
    itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title, url: `${siteUrl}/servicos/${service.slug}`, areaServed: "Canoas, RS" } }))
  }
};
const Route$c = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: siteName
      },
      {
        name: "description",
        content: siteDescription
      },
      {
        property: "og:title",
        content: siteName
      },
      {
        property: "og:description",
        content: siteDescription
      },
      {
        property: "og:type",
        content: "website"
      },
      { property: "og:site_name", content: "Argelado" },
      { property: "og:locale", content: "pt_BR" },
      {
        name: "twitter:card",
        content: "summary_large_image"
      }
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;450;500;550;600;650;700&family=Manrope:wght@400;500;600;650;700;750;800&display=swap" }
    ]
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => /* @__PURE__ */ jsxs("main", { className: "not-found", children: [
    /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "ARGELADO · CANOAS, RS" }),
    /* @__PURE__ */ jsx("h1", { children: "Este caminho não existe." }),
    /* @__PURE__ */ jsx("p", { children: "Mas o caminho para um ambiente mais confortável está aqui." }),
    /* @__PURE__ */ jsx("a", { className: "button button-primary", href: "/", children: "Voltar para o início" })
  ] })
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$9 = () => import("./index-DuB4lfGt.js");
const Route$b = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: siteName
    }, {
      name: "description",
      content: siteDescription
    }, {
      property: "og:url",
      content: siteUrl
    }],
    links: [{
      rel: "canonical",
      href: `${siteUrl}/`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./atendimento-6Cmk-5QP.js");
const Route$a = createFileRoute("/atendimento")({
  head: () => sectionHead("atendimento"),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./como-funciona-Du_1q6gC.js");
const Route$9 = createFileRoute("/como-funciona")({
  head: () => sectionHead("como-funciona"),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./contato-DiDwTbkt.js");
const Route$8 = createFileRoute("/contato")({
  head: () => sectionHead("contato"),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./duvidas-BYdv3S8t.js");
const Route$7 = createFileRoute("/duvidas")({
  head: () => sectionHead("duvidas"),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./por-que-argelado-BKTMK36Q.js");
const Route$6 = createFileRoute("/por-que-argelado")({
  head: () => sectionHead("por-que-argelado"),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./privacidade-Cc7TAUHV.js");
const title$1 = "Privacidade | Argelado";
const description$1 = "Saiba como as informações usadas no pedido de orçamento da Argelado são encaminhadas pelo WhatsApp e como entrar em contato.";
const Route$5 = createFileRoute("/privacidade")({
  head: () => ({
    meta: [{
      title: title$1
    }, {
      name: "description",
      content: description$1
    }, {
      property: "og:title",
      content: title$1
    }, {
      property: "og:description",
      content: description$1
    }, {
      property: "og:url",
      content: `${siteUrl}/privacidade`
    }],
    links: [{
      rel: "canonical",
      href: `${siteUrl}/privacidade`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const Route$4 = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () => new Response(`User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } })
    }
  }
});
const Route$3 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = ["/", ...sectionPages.map((page) => page.path), ...services.map((service) => `/servicos/${service.slug}`), "/guia/instalacao-ar-condicionado", "/privacidade"];
        const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${siteUrl}${path}</loc></url>`).join("")}</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
      }
    }
  }
});
const url = `${siteUrl}/guia/instalacao-ar-condicionado`;
const $$splitComponentImporter$2 = () => import("./guia.instalacao-ar-condicionado-BuxXzAAm.js");
const title = "Instalação de ar-condicionado: o que saber antes de agendar | Argelado";
const description = "Vai instalar ar-condicionado em Canoas? Saiba quais informações reunir, como preparar o ambiente e o que conferir antes de aprovar o orçamento.";
const Route$2 = createFileRoute("/guia/instalacao-ar-condicionado")({
  head: () => ({
    meta: [{
      title
    }, {
      name: "description",
      content: description
    }, {
      property: "og:title",
      content: title
    }, {
      property: "og:description",
      content: description
    }, {
      property: "og:url",
      content: url
    }],
    links: [{
      rel: "canonical",
      href: url
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./servicos.index-CPmvg7Rd.js");
const Route$1 = createFileRoute("/servicos/")({
  head: () => sectionHead("servicos"),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./servicos._slug-BxM2rBeY.js");
const Route = createFileRoute("/servicos/$slug")({
  loader: ({
    params
  }) => {
    const service = services.find((service2) => service2.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) return {};
    const title2 = `${loaderData.title} | Argelado`;
    const description2 = `${loaderData.description} Atendimento em Canoas, RS. Solicite um orçamento à Argelado pelo WhatsApp.`;
    const url2 = `${siteUrl}/servicos/${loaderData.slug}`;
    return {
      meta: [{
        title: title2
      }, {
        name: "description",
        content: description2
      }, {
        property: "og:title",
        content: title2
      }, {
        property: "og:description",
        content: description2
      }, {
        property: "og:url",
        content: url2
      }],
      links: [{
        rel: "canonical",
        href: url2
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$b.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const AtendimentoRoute = Route$a.update({
  id: "/atendimento",
  path: "/atendimento",
  getParentRoute: () => Route$c
});
const ComoFuncionaRoute = Route$9.update({
  id: "/como-funciona",
  path: "/como-funciona",
  getParentRoute: () => Route$c
});
const ContatoRoute = Route$8.update({
  id: "/contato",
  path: "/contato",
  getParentRoute: () => Route$c
});
const DuvidasRoute = Route$7.update({
  id: "/duvidas",
  path: "/duvidas",
  getParentRoute: () => Route$c
});
const PorQueArgeladoRoute = Route$6.update({
  id: "/por-que-argelado",
  path: "/por-que-argelado",
  getParentRoute: () => Route$c
});
const PrivacidadeRoute = Route$5.update({
  id: "/privacidade",
  path: "/privacidade",
  getParentRoute: () => Route$c
});
const RobotsDottxtRoute = Route$4.update({
  id: "/robots.txt",
  path: "/robots.txt",
  getParentRoute: () => Route$c
});
const SitemapDotxmlRoute = Route$3.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$c
});
const GuiaInstalacaoArCondicionadoRoute = Route$2.update({
  id: "/guia/instalacao-ar-condicionado",
  path: "/guia/instalacao-ar-condicionado",
  getParentRoute: () => Route$c
});
const ServicosIndexRoute = Route$1.update({
  id: "/servicos/",
  path: "/servicos/",
  getParentRoute: () => Route$c
});
const ServicosSlugRoute = Route.update({
  id: "/servicos/$slug",
  path: "/servicos/$slug",
  getParentRoute: () => Route$c
});
const rootRouteChildren = {
  IndexRoute,
  AtendimentoRoute,
  ComoFuncionaRoute,
  ContatoRoute,
  DuvidasRoute,
  PorQueArgeladoRoute,
  PrivacidadeRoute,
  RobotsDottxtRoute,
  SitemapDotxmlRoute,
  GuiaInstalacaoArCondicionadoRoute,
  ServicosSlugRoute,
  ServicosIndexRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  siteUrl as a,
  businessSchema as b,
  services as c,
  phoneHref as d,
  faqs as f,
  phone as p,
  router as r,
  sectionPages as s,
  url as u,
  whatsappUrl as w
};
