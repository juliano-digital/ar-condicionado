import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { X, Check, ArrowUpRight } from "lucide-react";
import { W as WhatsAppIcon } from "./SiteLayout-C3W_vo6-.js";
import { w as whatsappUrl } from "./router-B5lmiyBN.js";
const emptyDraft = { name: "", neighborhood: "", property: "Casa", equipment: "Já tenho o ar-condicionado", details: "" };
function QuoteDialog({ open, onClose }) {
  const dialogRef = useRef(null);
  const [error, setError] = useState("");
  const [preparedLink, setPreparedLink] = useState("");
  const [draft, setDraft] = useState(emptyDraft);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (open) {
      setError("");
      setPreparedLink("");
      setDraft(emptyDraft);
      dialog?.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        dialog?.close();
        document.body.style.overflow = previousOverflow;
      };
    }
    dialog?.close();
  }, [open]);
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const neighborhood = String(data.get("neighborhood") || "").trim();
    if (!name || !neighborhood) {
      setError("Preencha seu nome e bairro para preparar a mensagem.");
      return;
    }
    const currentDraft = { name, neighborhood, property: String(data.get("property")), equipment: String(data.get("equipment")), details: String(data.get("details") || "").trim() };
    setDraft(currentDraft);
    const message = `Olá, Argelado! Meu nome é ${name} e gostaria de um orçamento.
Bairro em Canoas: ${neighborhood}
Tipo de imóvel: ${currentDraft.property}
Equipamento: ${currentDraft.equipment}
Detalhes: ${currentDraft.details || "Gostaria de conversar sobre a instalação."}`;
    setError("");
    setPreparedLink(whatsappUrl(message));
  }
  return /* @__PURE__ */ jsxs("dialog", { ref: dialogRef, className: "quote-dialog", onCancel: onClose, onClick: (event) => {
    if (event.target === event.currentTarget) onClose();
  }, "aria-labelledby": "quote-title", children: [
    /* @__PURE__ */ jsx("button", { className: "dialog-close", type: "button", onClick: onClose, "aria-label": "Fechar orçamento", children: /* @__PURE__ */ jsx(X, { size: 21 }) }),
    /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "UM PASSO PARA MAIS CONFORTO" }),
    /* @__PURE__ */ jsxs("h2", { id: "quote-title", children: [
      "Vamos falar do",
      /* @__PURE__ */ jsx("br", {}),
      "seu ambiente?"
    ] }),
    preparedLink ? /* @__PURE__ */ jsxs("div", { className: "quote-success", role: "status", children: [
      /* @__PURE__ */ jsx("span", { className: "success-icon", children: /* @__PURE__ */ jsx(Check, {}) }),
      /* @__PURE__ */ jsx("h3", { children: "Sua mensagem está pronta." }),
      /* @__PURE__ */ jsx("p", { children: "Continue no WhatsApp para enviar as informações à Argelado. O pedido só é enviado quando você confirma a mensagem no aplicativo." }),
      /* @__PURE__ */ jsxs("a", { className: "button button-primary", href: preparedLink, target: "_blank", rel: "noopener noreferrer", children: [
        /* @__PURE__ */ jsx(WhatsAppIcon, {}),
        " Continuar no WhatsApp ",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "text-button", type: "button", onClick: () => setPreparedLink(""), children: "Editar informações" })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { className: "dialog-intro", children: "Conte o básico. A gente continua a conversa no WhatsApp." }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "form-grid", children: [
          /* @__PURE__ */ jsxs("label", { children: [
            "Seu nome",
            /* @__PURE__ */ jsx("input", { name: "name", defaultValue: draft.name, required: true, maxLength: 80, autoComplete: "given-name", placeholder: "Como podemos te chamar?" })
          ] }),
          /* @__PURE__ */ jsxs("label", { children: [
            "Bairro em Canoas",
            /* @__PURE__ */ jsx("input", { name: "neighborhood", defaultValue: draft.neighborhood, required: true, maxLength: 100, autoComplete: "address-level3", placeholder: "Em qual bairro você está?" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-grid", children: [
          /* @__PURE__ */ jsxs("label", { children: [
            "Tipo de imóvel",
            /* @__PURE__ */ jsxs("select", { name: "property", defaultValue: draft.property, children: [
              /* @__PURE__ */ jsx("option", { children: "Casa" }),
              /* @__PURE__ */ jsx("option", { children: "Apartamento" }),
              /* @__PURE__ */ jsx("option", { children: "Espaço comercial" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("label", { children: [
            "Sobre o aparelho",
            /* @__PURE__ */ jsxs("select", { name: "equipment", defaultValue: draft.equipment, children: [
              /* @__PURE__ */ jsx("option", { children: "Já tenho o ar-condicionado" }),
              /* @__PURE__ */ jsx("option", { children: "Ainda não comprei" }),
              /* @__PURE__ */ jsx("option", { children: "Quero instalar mais de um aparelho" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "Algum detalhe? ",
          /* @__PURE__ */ jsx("span", { className: "optional", children: "(opcional)" }),
          /* @__PURE__ */ jsx("textarea", { name: "details", defaultValue: draft.details, rows: 3, maxLength: 1e3, placeholder: "Modelo, BTUs ou informações sobre o ambiente..." })
        ] }),
        error && /* @__PURE__ */ jsx("p", { className: "form-error", role: "alert", children: error }),
        /* @__PURE__ */ jsxs("button", { className: "button button-primary", type: "submit", children: [
          /* @__PURE__ */ jsx(WhatsAppIcon, {}),
          " Preparar meu orçamento ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "form-note", children: [
          "Os dados não são armazenados neste site. A mensagem é enviada por você no WhatsApp. ",
          /* @__PURE__ */ jsx("a", { href: "/privacidade", children: "Saiba mais." })
        ] })
      ] })
    ] })
  ] });
}
export {
  QuoteDialog as Q
};
