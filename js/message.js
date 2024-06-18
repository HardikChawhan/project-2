function sendWhatsAppMessage(productName) {
    // WhatsApp number
    const whatsappNumber = "917038012077";  // Note: Removed the "+" sign

    // Construct message with product details
    const message = "Hi, I'm interested in buying this product:\n" + productName;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Construct WhatsApp URL
    const whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodedMessage;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
}