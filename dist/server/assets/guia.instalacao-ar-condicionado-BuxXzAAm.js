import { jsxs, jsx } from "react/jsx-runtime";
import { w as whatsappUrl, a as siteUrl, u as url } from "./router-B5lmiyBN.js";
import { ChevronRight, ClipboardCheck, ArrowUpRight } from "lucide-react";
import { S as SiteLayout, W as WhatsAppIcon } from "./SiteLayout-C3W_vo6-.js";
import "@tanstack/react-router";
import "react";
function InstallationGuide() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: siteUrl
    }, {
      "@type": "ListItem",
      position: 2,
      name: "Guia de instalação",
      item: url
    }]
  };
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxs("main", { id: "conteudo", className: "container", children: [
      /* @__PURE__ */ jsxs("nav", { className: "breadcrumb", "aria-label": "Localização", children: [
        /* @__PURE__ */ jsx("a", { href: "/", children: "Início" }),
        /* @__PURE__ */ jsx(ChevronRight, { size: 13 }),
        /* @__PURE__ */ jsx("span", { children: "Guia de instalação" })
      ] }),
      /* @__PURE__ */ jsxs("header", { className: "article-header", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "INFORMAÇÃO PARA UMA BOA ESCOLHA" }),
        /* @__PURE__ */ jsx("h1", { children: "O que saber antes de instalar seu ar-condicionado." }),
        /* @__PURE__ */ jsx("p", { children: "A instalação começa antes de o aparelho chegar à parede. Este guia ajuda você a organizar as informações, tirar dúvidas e conversar sobre o seu ambiente com a Argelado, em Canoas." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "article-body", children: [
        /* @__PURE__ */ jsxs("article", { className: "article-sections", children: [
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { children: "1. Reúna os dados do equipamento" }),
            /* @__PURE__ */ jsx("p", { children: "Se você já comprou o aparelho, tenha em mãos a marca, o modelo e a capacidade em BTUs. Uma foto da etiqueta ou da embalagem ajuda a identificar o equipamento. Guarde também o manual para consultar as condições de instalação e garantia do fabricante." })
          ] }),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { children: "2. Mostre como é o ambiente" }),
            /* @__PURE__ */ jsx("p", { children: "Fotos ajudam na conversa inicial. Registre a parede onde imagina instalar a unidade interna, o local previsto para a unidade externa e a infraestrutura existente. Conte se há dificuldade de acesso, restrições de horário ou outras particularidades do imóvel." })
          ] }),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { children: "3. Converse sobre o equipamento antes da compra" }),
            /* @__PURE__ */ jsx("p", { children: "Se você ainda não comprou o ar-condicionado, conte como o espaço é utilizado e quais são as características do ambiente. Tenha as medidas do cômodo e informe os equipamentos presentes. Confirme as especificações do fabricante e solicite uma avaliação apropriada, em vez de escolher por uma regra genérica." })
          ] }),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { children: "4. Confira as regras do condomínio" }),
            /* @__PURE__ */ jsx("p", { children: "Em apartamentos e imóveis comerciais, confirme onde a unidade externa pode ficar, se há restrições para a fachada e quais horários permitem a realização do serviço. Se houver um padrão de instalação definido pelo condomínio, compartilhe essas informações antes de pedir o orçamento." })
          ] }),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { children: "5. Entenda o que está incluído no orçamento" }),
            /* @__PURE__ */ jsx("p", { children: "O valor da instalação depende das condições do serviço. Antes de aprovar, confirme:" }),
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: "Quais equipamentos e ambientes fazem parte do pedido." }),
              /* @__PURE__ */ jsx("li", { children: "Quais materiais estão incluídos e se há serviços adicionais." }),
              /* @__PURE__ */ jsx("li", { children: "Como serão avaliados os pontos elétricos, a tubulação e a drenagem." }),
              /* @__PURE__ */ jsx("li", { children: "Quais são as condições de acesso às unidades." }),
              /* @__PURE__ */ jsx("li", { children: "O agendamento e a previsão de duração do serviço." })
            ] }),
            /* @__PURE__ */ jsx("p", { children: "Não presuma que alterações na infraestrutura já estejam incluídas. Combine o escopo antes da execução." })
          ] }),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { children: "6. Consulte o manual e uma avaliação técnica" }),
            /* @__PURE__ */ jsx("p", { children: "As condições de instalação variam conforme o equipamento e o imóvel. Este guia reúne informações para o atendimento e não substitui o manual do fabricante nem uma avaliação técnica." })
          ] }),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { children: "Instalação de ar-condicionado em Canoas" }),
            /* @__PURE__ */ jsxs("p", { children: [
              "A Argelado atende pedidos para ",
              /* @__PURE__ */ jsx("a", { href: "/servicos/instalacao-residencial-canoas", children: "casas e apartamentos" }),
              ", ",
              /* @__PURE__ */ jsx("a", { href: "/servicos/instalacao-comercial-canoas", children: "espaços comerciais" }),
              " e ",
              /* @__PURE__ */ jsx("a", { href: "/servicos/instalacao-split-canoas", children: "instalação de aparelhos split" }),
              ". Envie seu bairro e as informações do ambiente pelo WhatsApp para iniciar a conversa."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("aside", { className: "article-aside", children: [
          /* @__PURE__ */ jsx(ClipboardCheck, { size: 26 }),
          /* @__PURE__ */ jsxs("h2", { children: [
            "Já tem as",
            /* @__PURE__ */ jsx("br", {}),
            "informações?"
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Envie o modelo do aparelho, seu bairro em Canoas e fotos do ambiente. Vamos conversar sobre a instalação." }),
          /* @__PURE__ */ jsxs("a", { className: "button button-primary", href: whatsappUrl("Olá, Argelado! Li o guia de instalação e gostaria de pedir um orçamento para meu ambiente em Canoas."), target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsx(WhatsAppIcon, {}),
            " Pedir orçamento ",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(schema)
    } })
  ] });
}
export {
  InstallationGuide as component
};
