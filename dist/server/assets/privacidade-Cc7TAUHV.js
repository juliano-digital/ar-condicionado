import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronRight } from "lucide-react";
import { S as SiteLayout } from "./SiteLayout-C3W_vo6-.js";
import { w as whatsappUrl } from "./router-B5lmiyBN.js";
import "react";
import "@tanstack/react-router";
function PrivacyPage() {
  return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("main", { id: "conteudo", className: "container", children: [
    /* @__PURE__ */ jsxs("nav", { className: "breadcrumb", "aria-label": "Localização", children: [
      /* @__PURE__ */ jsx("a", { href: "/", children: "Início" }),
      /* @__PURE__ */ jsx(ChevronRight, { size: 13 }),
      /* @__PURE__ */ jsx("span", { children: "Privacidade" })
    ] }),
    /* @__PURE__ */ jsxs("header", { className: "article-header", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "TRANSPARÊNCIA NO ATENDIMENTO" }),
      /* @__PURE__ */ jsx("h1", { children: "Sobre suas informações." }),
      /* @__PURE__ */ jsx("p", { children: "Veja como funciona o contato com a Argelado pelo site." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "article-sections privacy-body", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { children: "Pedido de orçamento" }),
        /* @__PURE__ */ jsx("p", { children: "O formulário prepara uma mensagem com seu nome, bairro, tipo de imóvel e informações sobre o equipamento. Esses dados não são enviados a um banco de dados do site e não ficam salvos no navegador. Ao continuar no WhatsApp, você revisa e envia a mensagem diretamente à Argelado." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { children: "Contato pelo WhatsApp" }),
        /* @__PURE__ */ jsx("p", { children: "Ao acessar um link de WhatsApp, você sai deste site e utiliza um serviço da Meta, sujeito às condições desse serviço. As informações que você envia à Argelado são usadas para conversar sobre o atendimento e seu pedido de orçamento. Evite enviar dados sensíveis desnecessários." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { children: "Recursos externos e funcionamento do site" }),
        /* @__PURE__ */ jsx("p", { children: "Este site não inclui ferramentas próprias de publicidade ou análise de visitantes. As fontes são carregadas pelo Google Fonts. A hospedagem e a entrega de imagens são realizadas pela Netlify. Ao acessar esses recursos, seu navegador faz solicitações aos respectivos provedores, que podem processar informações técnicas, como endereço IP, para entregar o conteúdo." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { children: "Fale sobre suas informações" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Para tirar dúvidas sobre as informações compartilhadas durante o atendimento, entre em contato com a Argelado pelo ",
          /* @__PURE__ */ jsx("a", { href: whatsappUrl("Olá, Argelado! Gostaria de conversar sobre minhas informações no atendimento."), target: "_blank", rel: "noopener noreferrer", children: "WhatsApp (51) 99366-7248" }),
          "."
        ] })
      ] })
    ] })
  ] }) });
}
export {
  PrivacyPage as component
};
