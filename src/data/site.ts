// ===== Dados de configuração global do site IPSO =====
// Altere o telefone / links de redes sociais aqui.

export const siteConfig = {
  name: "IPSO",
  tagline: "Consultoria em Medicina e Segurança do Trabalho",

  // Número de WhatsApp no formato internacional (somente dígitos).
  whatsappNumber: "5511963010000",
  whatsappMessage:
    "Olá, vim do site gostaria de um orçamento",

  instagram: "https://www.instagram.com/ipso.ocupacional/",
  areaCliente: "https://sistema.grosafety.com.br/groweb/login",

  address: {
    street: "Rua Exemplo, 123, Sala 4",
    district: "Centro",
    city: "São Bernardo do Campo",
    state: "SP",
    mapsUrl:
      "https://www.google.com/maps?q=Sao+Bernardo+do+Campo,+SP&output=embed",
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