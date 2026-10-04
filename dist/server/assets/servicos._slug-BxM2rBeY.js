import { jsxs, jsx } from "react/jsx-runtime";
import { ChevronRight, ArrowUpRight, MapPin } from "lucide-react";
import { S as SiteLayout, W as WhatsAppIcon } from "./SiteLayout-C3W_vo6-.js";
import { R as Route, a as siteUrl, w as whatsappUrl, c as services } from "./router-B5lmiyBN.js";
import "react";
import "@tanstack/react-router";
function ServicePage() {
  const service = Route.useLoaderData();
  const url = `${siteUrl}/servicos/${service.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "Service",
      name: service.title,
      description: service.description,
      url,
      areaServed: {
        "@type": "City",
        name: "Canoas"
      },
      provider: {
        "@id": `${siteUrl}/#empresa`,
        "@type": "HVACBusiness",
        name: "Argelado",
        telephone: "+55-51-99366-7248",
        url: siteUrl
      }
    }, {
      "@type": "BreadcrumbList",
      itemListElement: [{
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteUrl
      }, {
        "@type": "ListItem",
        position: 2,
        name: "Nossos serviços",
        item: `${siteUrl}/servicos`
      }, {
        "@type": "ListItem",
        position: 3,
        name: service.label,
        item: url
      }]
    }]
  };
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxs("main", { id: "conteudo", className: "container", children: [
      /* @__PURE__ */ jsxs("nav", { className: "breadcrumb", "aria-label": "Localização", children: [
        /* @__PURE__ */ jsx("a", { href: "/", children: "Início" }),
        /* @__PURE__ */ jsx(ChevronRight, { size: 13 }),
        /* @__PURE__ */ jsx("a", { href: "/servicos", children: "Nossos serviços" }),
        /* @__PURE__ */ jsx(ChevronRight, { size: 13 }),
        /* @__PURE__ */ jsx("span", { "aria-current": "page", children: service.label })
      ] }),
      /* @__PURE__ */ jsxs("header", { className: "article-header", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "ARGELADO · CANOAS, RS" }),
        /* @__PURE__ */ jsx("h1", { children: service.title }),
        /* @__PURE__ */ jsx("p", { children: service.intro }),
        /* @__PURE__ */ jsxs("a", { className: "button button-primary", href: whatsappUrl(`Olá, Argelado! Tenho interesse em ${service.title.toLowerCase()} e gostaria de um orçamento.`), target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx(WhatsAppIcon, {}),
          " Solicitar orçamento ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "article-body", children: [
        /* @__PURE__ */ jsxs("div", { className: "article-sections", children: [
          service.sections.map((section) => /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { children: section.title }),
            /* @__PURE__ */ jsx("p", { children: section.text })
          ] }, section.title)),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { children: "Antes de agendar" }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Reúna as informações do aparelho e do imóvel e confira o ",
              /* @__PURE__ */ jsx("a", { href: "/guia/instalacao-ar-condicionado", children: "guia de preparação para a instalação" }),
              ". Se precisar esclarecer algum detalhe, fale diretamente com a Argelado."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("aside", { className: "article-aside", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 24 }),
          /* @__PURE__ */ jsxs("h2", { children: [
            "Seu ambiente.",
            /* @__PURE__ */ jsx("br", {}),
            "Nossa conversa."
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Atendimento em Canoas, RS. Envie seu bairro e as informações do aparelho pelo WhatsApp para começar." }),
          /* @__PURE__ */ jsxs("a", { className: "button button-primary", href: whatsappUrl(), target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsx(WhatsAppIcon, {}),
            " Falar com a Argelado"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "article-related", children: [
        /* @__PURE__ */ jsx("h2", { children: "Outras soluções para o seu espaço" }),
        /* @__PURE__ */ jsx("div", { className: "article-related-links", children: services.filter((other) => other.slug !== service.slug).map((other) => /* @__PURE__ */ jsxs("a", { href: `/servicos/${other.slug}`, children: [
          other.label,
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
        ] }, other.slug)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(schema)
    } })
  ] });
}
export {
  ServicePage as component
};
