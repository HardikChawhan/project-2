function sendWhatsAppMessage(productName , sizeDropdownID) {
    const whatsappNumber = "917038012077"; 

    const size = document.getElementById(sizeDropdownID).value;

    const message = `Hi, I'm interested in buying this product:\n${productName} \nSize: ${size}`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodedMessage;

    window.open(whatsappUrl, '_blank');
}