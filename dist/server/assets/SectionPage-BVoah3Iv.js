import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronRight, Wind, Home, Building2, ArrowUpRight, ClipboardCheck, BadgeCheck, Leaf, MapPin, Plus, Snowflake } from "lucide-react";
import { S as SiteLayout, W as WhatsAppIcon } from "./SiteLayout-C3W_vo6-.js";
import { Q as QuoteDialog } from "./QuoteDialog-CHgNOnd7.js";
import { s as sectionPages, c as services, w as whatsappUrl, f as faqs, p as phone, d as phoneHref } from "./router-B5lmiyBN.js";
const serviceIcons = [Wind, Home, Building2];
function SectionPage({ sectionId }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const page = sectionPages.find((page2) => page2.id === sectionId);
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxs("main", { id: "conteudo", className: "section-page", children: [
      /* @__PURE__ */ jsxs("nav", { className: "breadcrumb container", "aria-label": "Localização", children: [
        /* @__PURE__ */ jsx("a", { href: "/", children: "Início" }),
        /* @__PURE__ */ jsx(ChevronRight, { size: 13 }),
        /* @__PURE__ */ jsx("span", { "aria-current": "page", children: page.label })
      ] }),
      sectionId === "servicos" && /* @__PURE__ */ jsxs("section", { id: "servicos", className: "services-section section container", children: [
        /* @__PURE__ */ jsxs("div", { className: "section-heading", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "SOLUÇÕES PARA O SEU AMBIENTE" }),
            /* @__PURE__ */ jsxs("h1", { children: [
              "Cada espaço, um jeito",
              /* @__PURE__ */ jsx("br", {}),
              "de ficar mais confortável."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Da sala de casa ao seu local de trabalho.",
            /* @__PURE__ */ jsx("br", {}),
            "Encontre a instalação que faz sentido para você."
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "services-grid", children: services.map((service, index) => {
          const Icon = serviceIcons[index];
          return /* @__PURE__ */ jsxs("a", { className: `service-card service-card-${index}`, href: `/servicos/${service.slug}`, children: [
            /* @__PURE__ */ jsxs("div", { className: "service-card-top", children: [
              /* @__PURE__ */ jsx("span", { className: "service-icon", children: /* @__PURE__ */ jsx(Icon, { size: 27, strokeWidth: 1.6 }) }),
              /* @__PURE__ */ jsxs("span", { className: "card-number", children: [
                "0",
                index + 1
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "service-kicker", children: index === 0 ? "O BÁSICO BEM-FEITO" : index === 1 ? "SEU REFÚGIO, MAIS AGRADÁVEL" : "CONFORTO TAMBÉM É TRABALHO" }),
              /* @__PURE__ */ jsx("h3", { children: service.label }),
              /* @__PURE__ */ jsx("p", { children: service.description })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "service-card-link", children: [
              "Conhecer o serviço ",
              /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 19 }) })
            ] })
          ] }, service.slug);
        }) })
      ] }),
      sectionId === "por-que-argelado" && /* @__PURE__ */ jsx("section", { id: "por-que-argelado", className: "why-section", children: /* @__PURE__ */ jsxs("div", { className: "container why-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "why-title", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "É BOM CONTAR COM QUEM ESTÁ PERTO" }),
          /* @__PURE__ */ jsxs("h1", { children: [
            "Instalar é só o começo.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsxs("span", { children: [
              "O cuidado faz",
              /* @__PURE__ */ jsx("br", {}),
              "a diferença."
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Na Argelado, cada instalação começa com uma conversa. Entendemos o seu espaço para combinar uma solução, sem promessas genéricas e sem surpresas no escopo." }),
          /* @__PURE__ */ jsxs("a", { href: whatsappUrl(), target: "_blank", rel: "noopener noreferrer", className: "text-link", children: [
            "Vamos conversar ",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 19 })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "why-features", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(ClipboardCheck, { size: 23 }) }),
            /* @__PURE__ */ jsxs("section", { children: [
              /* @__PURE__ */ jsx("h3", { children: "Seu ambiente vem primeiro" }),
              /* @__PURE__ */ jsx("p", { children: "Avaliamos as informações do local e do equipamento antes de definir o serviço." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(BadgeCheck, { size: 23 }) }),
            /* @__PURE__ */ jsxs("section", { children: [
              /* @__PURE__ */ jsx("h3", { children: "Clareza do início ao fim" }),
              /* @__PURE__ */ jsx("p", { children: "O orçamento e os detalhes da instalação são combinados antes do agendamento." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Leaf, { size: 23 }) }),
            /* @__PURE__ */ jsxs("section", { children: [
              /* @__PURE__ */ jsx("h3", { children: "Cuidado com o seu espaço" }),
              /* @__PURE__ */ jsx("p", { children: "Atenção ao posicionamento do aparelho, à infraestrutura e ao acabamento." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(MapPin, { size: 23 }) }),
            /* @__PURE__ */ jsxs("section", { children: [
              /* @__PURE__ */ jsx("h3", { children: "Atendimento de verdade, em Canoas" }),
              /* @__PURE__ */ jsx("p", { children: "Contato direto pelo WhatsApp para tirar dúvidas e organizar a sua instalação." })
            ] })
          ] })
        ] })
      ] }) }),
      sectionId === "como-funciona" && /* @__PURE__ */ jsxs("section", { id: "como-funciona", className: "section container process-section", children: [
        /* @__PURE__ */ jsxs("div", { className: "section-heading", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "SIMPLES, DO JEITO QUE DEVE SER" }),
            /* @__PURE__ */ jsxs("h1", { children: [
              "Do primeiro “oi”",
              /* @__PURE__ */ jsx("br", {}),
              "ao seu novo clima."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "button button-outline", type: "button", onClick: () => setQuoteOpen(true), children: [
            "Começar agora ",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "process-grid", children: [
          /* @__PURE__ */ jsxs("div", { className: "process-step", children: [
            /* @__PURE__ */ jsx("span", { className: "step-number", children: "01" }),
            /* @__PURE__ */ jsx("h3", { children: "Conte o que você precisa" }),
            /* @__PURE__ */ jsx("p", { children: "Fale com a gente pelo WhatsApp. Envie seu bairro, o modelo do aparelho e fotos do ambiente." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "process-step", children: [
            /* @__PURE__ */ jsx("span", { className: "step-number", children: "02" }),
            /* @__PURE__ */ jsx("h3", { children: "Receba seu orçamento" }),
            /* @__PURE__ */ jsx("p", { children: "Conversamos sobre as condições do local e combinamos o escopo e o valor do serviço." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "process-step", children: [
            /* @__PURE__ */ jsx("span", { className: "step-number", children: "03" }),
            /* @__PURE__ */ jsx("h3", { children: "Combine a instalação" }),
            /* @__PURE__ */ jsx("p", { children: "Com o orçamento aprovado, definimos o agendamento e os detalhes para atender você." })
          ] })
        ] })
      ] }),
      sectionId === "atendimento" && /* @__PURE__ */ jsxs("section", { className: "local-section container", children: [
        /* @__PURE__ */ jsxs("div", { className: "local-content", children: [
          /* @__PURE__ */ jsxs("span", { className: "eyebrow", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 14 }),
            " DE CANOAS, PARA CANOAS"
          ] }),
          /* @__PURE__ */ jsxs("h1", { children: [
            "Seu conforto tem",
            /* @__PURE__ */ jsx("br", {}),
            "atendimento local."
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Precisa instalar um ar-condicionado em Canoas, RS? A Argelado conecta você à solução para sua casa ou empresa. Envie seu bairro e conte sobre o ambiente para iniciar o atendimento." }),
          /* @__PURE__ */ jsxs("a", { href: whatsappUrl("Olá, Argelado! Moro em Canoas e gostaria de confirmar o atendimento no meu bairro."), className: "text-link", target: "_blank", rel: "noopener noreferrer", children: [
            "Consultar atendimento no meu bairro ",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "local-art", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx("div", { className: "local-ring ring-one" }),
          /* @__PURE__ */ jsx("div", { className: "local-ring ring-two" }),
          /* @__PURE__ */ jsx("div", { className: "local-ring ring-three" }),
          /* @__PURE__ */ jsx("span", { className: "local-pin", children: /* @__PURE__ */ jsx(MapPin, { size: 32, strokeWidth: 1.7 }) }),
          /* @__PURE__ */ jsxs("div", { className: "local-map-label", children: [
            /* @__PURE__ */ jsx("strong", { children: "Canoas" }),
            /* @__PURE__ */ jsx("span", { children: "Rio Grande do Sul" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "map-coordinate", children: "29°55′ S · 51°11′ O" })
        ] })
      ] }),
      sectionId === "duvidas" && /* @__PURE__ */ jsxs("section", { id: "duvidas", className: "section container faq-section", children: [
        /* @__PURE__ */ jsxs("div", { className: "faq-heading", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "PODE PERGUNTAR" }),
          /* @__PURE__ */ jsxs("h1", { children: [
            "Menos dúvidas.",
            /* @__PURE__ */ jsx("br", {}),
            "Mais tranquilidade."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "O que você precisa saber antes",
            /* @__PURE__ */ jsx("br", {}),
            "de instalar seu ar-condicionado."
          ] }),
          /* @__PURE__ */ jsxs("a", { className: "text-link", href: whatsappUrl("Olá, Argelado! Tenho uma dúvida sobre instalação de ar-condicionado."), target: "_blank", rel: "noopener noreferrer", children: [
            "Tenho outra dúvida ",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "faq-list", children: faqs.map((faq) => /* @__PURE__ */ jsxs("details", { children: [
          /* @__PURE__ */ jsxs("summary", { children: [
            faq.question,
            /* @__PURE__ */ jsx(Plus, { size: 19 })
          ] }),
          /* @__PURE__ */ jsx("p", { children: faq.answer })
        ] }, faq.question)) })
      ] }),
      sectionId === "contato" && /* @__PURE__ */ jsxs("section", { className: "final-cta container", children: [
        /* @__PURE__ */ jsx("div", { className: "cta-snowflake", "aria-hidden": "true", children: /* @__PURE__ */ jsx(Snowflake, {}) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "MAIS CONFORTO ESTÁ A UMA CONVERSA" }),
          /* @__PURE__ */ jsxs("h1", { children: [
            "Vamos deixar o seu",
            /* @__PURE__ */ jsx("br", {}),
            "ambiente mais agradável?"
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Conte com a Argelado para instalar seu ar-condicionado em Canoas." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "final-cta-action", children: [
          /* @__PURE__ */ jsxs("button", { className: "button button-light", type: "button", onClick: () => setQuoteOpen(true), children: [
            /* @__PURE__ */ jsx(WhatsAppIcon, {}),
            " Quero meu orçamento ",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
          ] }),
          /* @__PURE__ */ jsx("span", { children: "Direto no WhatsApp. Sem complicação." })
        ] })
      ] }),
      sectionId === "contato" && /* @__PURE__ */ jsxs("p", { className: "contact-details container", children: [
        "Prefere ligar? ",
        /* @__PURE__ */ jsx("a", { href: phoneHref, children: phone }),
        ". A mensagem de orçamento é preparada no navegador; você confirma o envio no WhatsApp."
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "article-related container", children: [
        /* @__PURE__ */ jsx("h2", { children: "Continue explorando" }),
        /* @__PURE__ */ jsxs("div", { className: "article-related-links", children: [
          sectionPages.filter((other) => other.id !== sectionId).map((other) => /* @__PURE__ */ jsxs("a", { href: other.path, children: [
            other.label,
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
          ] }, other.id)),
          /* @__PURE__ */ jsxs("a", { href: "/guia/instalacao-ar-condicionado", children: [
            "Guia de instalação",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(QuoteDialog, { open: quoteOpen, onClose: () => setQuoteOpen(false) })
  ] });
}
export {
  SectionPage as S
};
