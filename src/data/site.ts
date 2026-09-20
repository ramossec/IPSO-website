// ===== Dados de configuração global do site IPSO =====
// Altere o telefone / links de redes sociais aqui.
// Dados cadastrais conforme Receita Federal (CNPJ 66.894.621/0001-74).

export const siteConfig = {
  name: "IPSO",
  legalName:
    "IPSO - Instituto Paina de Saúde Ocupacional Sociedade Unipessoal Ltda",
  tradeName: "IPSO Instituto Paina de Saúde Ocupacional",
  tagline: "Consultoria em Medicina e Segurança do Trabalho",
  cnpj: "66.894.621/0001-74",

  // Telefone fixo cadastrado na Receita Federal.
  phone: "(19) 9745-9888",
  phoneHref: "tel:+551997459888",
  email: "atendimento@ipsoocupacional.com.br",

  // Número de WhatsApp no formato internacional (somente dígitos).
  whatsappNumber: "5519996901029",
  whatsappDisplay: "+55 19 99690-1029",
  whatsappMessage:
    "Olá, vim do site gostaria de um orçamento",

  instagram: "https://www.instagram.com/ipso.ocupacional/",
  areaCliente: "https://sistema.grosafety.com.br/groweb/login",

  address: {
    street: "Rua Professor Hugo Sarmento, 134",
    district: "Centro",
    city: "São João da Boa Vista",
    state: "SP",
    zip: "13870-030",
    mapsUrl:
      "https://www.google.com/maps?q=Rua+Professor+Hugo+Sarmento,+134,+Centro,+S%C3%A3o+Jo%C3%A3o+da+Boa+Vista,+SP,+13870-030&output=embed",
  },
};

/** Monta a URL do WhatsApp com mensagem pré-definida. */
export function whatsappLink(
  message: string = siteConfig.whatsappMessage
): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
