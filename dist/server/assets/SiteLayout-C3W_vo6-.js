import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { MapPin, Phone, ArrowUpRight, X, Menu, Snowflake } from "lucide-react";
import { p as phone, d as phoneHref, s as sectionPages, w as whatsappUrl } from "./router-B5lmiyBN.js";
function WhatsAppIcon({ className = "" }) {
  return /* @__PURE__ */ jsxs("svg", { className, width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("path", { d: "M20.5 11.7a8.6 8.6 0 0 1-12.8 7.5L3 20.5l1.3-4.6a8.6 8.6 0 1 1 16.2-4.2Z" }),
    /* @__PURE__ */ jsx("path", { d: "M8.4 7.8c-.6.2-.9 1-.7 1.8.7 2.7 2.8 4.8 5.5 5.6.8.2 1.6-.1 1.9-.7l.5-1-2.3-1.1-.8.8a7.3 7.3 0 0 1-2.9-2.9l.7-.8-1.1-2.3-.8.6Z" })
  ] });
}
function Brand({ inverse = false }) {
  return /* @__PURE__ */ jsxs("a", { href: "/", className: `brand${inverse ? " brand-inverse" : ""}`, "aria-label": "Argelado — início", children: [
    /* @__PURE__ */ jsx("span", { className: "brand-symbol", children: /* @__PURE__ */ jsx(Snowflake, { size: 26, strokeWidth: 1.65 }) }),
    /* @__PURE__ */ jsxs("span", { children: [
      "argelado",
      /* @__PURE__ */ jsx("span", { className: "brand-dot", children: "." })
    ] })
  ] });
}
function SiteLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname.replace(/\/$/, "") });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("a", { className: "skip-link", href: "#conteudo", children: "Pular para o conteúdo" }),
    /* @__PURE__ */ jsx("div", { className: "announcement", children: /* @__PURE__ */ jsxs("div", { className: "container announcement-inner", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx(MapPin, { size: 13 }),
        " Canoas, Rio Grande do Sul"
      ] }),
      /* @__PURE__ */ jsx("span", { children: "O conforto que você procura, pertinho de você." }),
      /* @__PURE__ */ jsxs("a", { href: phoneHref, children: [
        /* @__PURE__ */ jsx(Phone, { size: 12 }),
        phone
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("header", { className: "site-header", children: [
      /* @__PURE__ */ jsxs("div", { className: "container header-inner", children: [
        /* @__PURE__ */ jsx(Brand, {}),
        /* @__PURE__ */ jsx("nav", { className: "desktop-nav", "aria-label": "Navegação principal", children: sectionPages.slice(0, 4).map((page) => /* @__PURE__ */ jsx("a", { href: page.path, "aria-current": pathname === page.path ? "page" : void 0, children: page.id === "duvidas" ? "Dúvidas" : page.label }, page.id)) }),
        /* @__PURE__ */ jsxs("a", { className: "button button-small header-contact", href: "/contato", "aria-current": pathname === "/contato" ? "page" : void 0, children: [
          /* @__PURE__ */ jsx(WhatsAppIcon, {}),
          " Fale com a gente ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "menu-toggle", type: "button", "aria-label": menuOpen ? "Fechar menu" : "Abrir menu", "aria-expanded": menuOpen, "aria-controls": "mobile-menu", onClick: () => setMenuOpen(!menuOpen), children: menuOpen ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {}) })
      ] }),
      menuOpen && /* @__PURE__ */ jsxs("nav", { id: "mobile-menu", className: "mobile-nav", "aria-label": "Navegação móvel", children: [
        /* @__PURE__ */ jsx("a", { href: "/", onClick: () => setMenuOpen(false), "aria-current": pathname === "" ? "page" : void 0, children: "Início" }),
        sectionPages.map((page) => /* @__PURE__ */ jsx("a", { href: page.path, onClick: () => setMenuOpen(false), "aria-current": pathname === page.path ? "page" : void 0, children: page.label }, page.id)),
        /* @__PURE__ */ jsx("a", { href: "/guia/instalacao-ar-condicionado", onClick: () => setMenuOpen(false), children: "Guia de instalação" }),
        /* @__PURE__ */ jsxs("a", { href: whatsappUrl(), target: "_blank", rel: "noopener noreferrer", children: [
          "Conversar pelo WhatsApp ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
        ] })
      ] })
    ] }),
    children,
    /* @__PURE__ */ jsx("footer", { className: "site-footer", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-top", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Brand, { inverse: true }),
          /* @__PURE__ */ jsxs("p", { children: [
            "O clima muda lá fora.",
            /* @__PURE__ */ jsx("br", {}),
            "O conforto fica aqui dentro."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "footer-links", children: [
          /* @__PURE__ */ jsx("span", { children: "Explore" }),
          sectionPages.map((page) => /* @__PURE__ */ jsx("a", { href: page.path, children: page.label }, page.id)),
          /* @__PURE__ */ jsx("a", { href: "/guia/instalacao-ar-condicionado", children: "Guia de instalação" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "footer-links", children: [
          /* @__PURE__ */ jsx("span", { children: "Vamos conversar" }),
          /* @__PURE__ */ jsxs("a", { href: whatsappUrl(), target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsx(WhatsAppIcon, {}),
            " ",
            phone
          ] }),
          /* @__PURE__ */ jsxs("a", { href: phoneHref, children: [
            /* @__PURE__ */ jsx(Phone, { size: 16 }),
            " Ligar para a Argelado"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "footer-location", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 16 }),
            " Canoas, RS"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-bottom", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Argelado. Todos os direitos reservados."
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Instalação de ar-condicionado em Canoas, RS." }),
        /* @__PURE__ */ jsx("a", { href: "/privacidade", children: "Privacidade" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("a", { className: "floating-whatsapp", href: whatsappUrl(), target: "_blank", rel: "noopener noreferrer", "aria-label": "Conversar com a Argelado pelo WhatsApp", children: /* @__PURE__ */ jsx(WhatsAppIcon, {}) })
  ] });
}
export {
  SiteLayout as S,
  WhatsAppIcon as W
};
