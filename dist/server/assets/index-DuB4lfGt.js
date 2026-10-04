import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowUpRight, Check, Snowflake, Wind, ShieldCheck, Wrench, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { S as SiteLayout, W as WhatsAppIcon } from "./SiteLayout-C3W_vo6-.js";
import { Q as QuoteDialog } from "./QuoteDialog-CHgNOnd7.js";
import { s as sectionPages, b as businessSchema } from "./router-B5lmiyBN.js";
import "@tanstack/react-router";
function HomePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxs("main", { id: "conteudo", children: [
      /* @__PURE__ */ jsxs("section", { className: "hero container", children: [
        /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
          /* @__PURE__ */ jsxs("div", { className: "location-pill", children: [
            /* @__PURE__ */ jsx("span", { className: "status-dot" }),
            /* @__PURE__ */ jsx("span", { children: "CONFORTO COM ENDEREÇO: CANOAS, RS" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { children: [
            "Ar-condicionado",
            /* @__PURE__ */ jsx("br", {}),
            "bem instalado.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { children: "Vida mais leve." })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "hero-description", children: [
            "Seu ambiente na temperatura certa, sem complicação. Instalação de ar-condicionado em ",
            /* @__PURE__ */ jsx("strong", { children: "Canoas" }),
            " para sua casa ou empresa, com atenção em cada detalhe."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hero-actions", children: [
            /* @__PURE__ */ jsxs("button", { className: "button button-primary", type: "button", onClick: () => setQuoteOpen(true), children: [
              /* @__PURE__ */ jsx(WhatsAppIcon, {}),
              " Pedir meu orçamento ",
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
            ] }),
            /* @__PURE__ */ jsxs("a", { className: "hero-services-link", href: "/servicos", children: [
              "Conhecer os serviços ",
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hero-reassurance", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx(Check, { size: 15 }),
              " Orçamento personalizado"
            ] }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx(Check, { size: 15 }),
              " Atendimento local"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hero-bottom-note", children: [
            /* @__PURE__ */ jsx("span", { className: "mini-snowflake", children: /* @__PURE__ */ jsx(Snowflake, { size: 22 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Mais conforto. Menos preocupação." }),
              /* @__PURE__ */ jsx("span", { children: "Da primeira conversa à instalação." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hero-visual", children: [
          /* @__PURE__ */ jsx("img", { className: "hero-image", src: "/.netlify/images?url=/img/ambiente-argelado.png&w=928&fm=webp&q=85", srcSet: "/.netlify/images?url=/img/ambiente-argelado.png&w=480&fm=webp&q=85 480w, /.netlify/images?url=/img/ambiente-argelado.png&w=720&fm=webp&q=85 720w, /.netlify/images?url=/img/ambiente-argelado.png&w=928&fm=webp&q=85 928w", sizes: "(max-width: 760px) 92vw, (min-width: 1500px) 586px, 48vw", alt: "Ambiente residencial com ar-condicionado split, sofá e iluminação natural, ilustrando o conforto de uma boa instalação", width: 928, height: 1152, fetchPriority: "high" }),
          /* @__PURE__ */ jsxs("div", { className: "visual-top-label", children: [
            /* @__PURE__ */ jsx("span", { className: "status-dot" }),
            " O seu lugar de ficar bem."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "comfort-card", children: [
            /* @__PURE__ */ jsx("span", { className: "comfort-icon", children: /* @__PURE__ */ jsx(Wind, { size: 27 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { children: "O CLIMA CERTO, TODOS OS DIAS" }),
              /* @__PURE__ */ jsx("strong", { children: "Conforto que se sente." })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "comfort-check", children: /* @__PURE__ */ jsx(Check, { size: 15 }) })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "photo-credit", children: "Imagem ilustrativa de ambiente." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "trust-strip", "aria-label": "Diferenciais", children: /* @__PURE__ */ jsxs("div", { className: "container trust-inner", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx(ShieldCheck, {}),
          " Cuidado na instalação"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx(Wrench, {}),
          " Atenção ao acabamento"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx(MessageCircle, {}),
          " Contato direto, sem complicação"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx(MapPin, {}),
          " Aqui em Canoas"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "section container page-overview", children: [
        /* @__PURE__ */ jsxs("div", { className: "section-heading", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "CONHEÇA A ARGELADO" }),
            /* @__PURE__ */ jsxs("h2", { children: [
              "Seu próximo passo",
              /* @__PURE__ */ jsx("br", {}),
              "para um ambiente melhor."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Cada assunto tem seu espaço.",
            /* @__PURE__ */ jsx("br", {}),
            "Escolha por onde começar."
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "page-overview-grid", children: sectionPages.map((page, index) => /* @__PURE__ */ jsxs("a", { className: "page-overview-card", href: page.path, children: [
          /* @__PURE__ */ jsxs("span", { className: "eyebrow", children: [
            "0",
            index + 1
          ] }),
          /* @__PURE__ */ jsx("h3", { children: page.label }),
          /* @__PURE__ */ jsx("p", { children: page.description }),
          /* @__PURE__ */ jsxs("span", { className: "text-link", children: [
            "Explorar ",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
          ] })
        ] }, page.id)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "guide-banner container", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "ANTES DE INSTALAR" }),
          /* @__PURE__ */ jsx("h3", { children: "Um pouco de informação. Uma escolha melhor." }),
          /* @__PURE__ */ jsx("p", { children: "Veja o que considerar antes da instalação do seu ar-condicionado." })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "/guia/instalacao-ar-condicionado", className: "text-link", children: [
          "Ler o guia ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(QuoteDialog, { open: quoteOpen, onClose: () => setQuoteOpen(false) }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(businessSchema) } })
  ] });
}
const SplitComponent = HomePage;
export {
  SplitComponent as component
};
