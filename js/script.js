/**
 * ==========================================================================
 * CONFIGURAÇÃO DE LINKS OPERACIONAIS - JUJU DOCES
 * Altere apenas as URLs abaixo para gerenciar os destinos dos botões.
 * ==========================================================================
 */
const CONFIG_LINKS = {
    // IMPORTANTE: Mude o número 5511999999999 abaixo para o número real do seu WhatsApp (mantenha o 55 e o DDD)
    whatsapp: "https://wa.me/5511999999999?text=Oi!%20Vim%20pelo%20QR%20Code%20e%20quero%20meu%20desconto!",
    
    // IMPORTANTE: Cole aqui entre as aspas o link real do seu cardápio do Canva ou plataforma
    cardapio: "https://link-do-seu-cardapio-aqui.com.br"
};

/**
 * MAPEAMENTO E ATRIBUIÇÃO AUTOMÁTICA DOS DIRECIONAMENTOS
 */
document.addEventListener("DOMContentLoaded", () => {
    const btnWhatsapp = document.getElementById("btn-whatsapp");
    const btnCardapio = document.getElementById("btn-cardapio");

    if (btnWhatsapp) btnWhatsapp.href = CONFIG_LINKS.whatsapp;
    if (btnCardapio) btnCardapio.href = CONFIG_LINKS.cardapio;
});