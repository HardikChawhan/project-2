document.addEventListener('DOMContentLoaded', function () {
    fetch('https://raw.githubusercontent.com/HardikChawhan/project-2/master/data/custom.json')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('product-container');
            
            data.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'item features-image'

                productItem.innerHTML = `
                    <div class="item-wrapper">
                        <div class="item-img">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="item-content">
                            <h5 class="item-title"><strong>${product.name}</strong></h5>
                            <h6 class="item-subtitle">${product.price}</h6>
                            <p class="item-text">${product.description}</p>
                            <div class="size">
                                <select id="size-${product.size}" name="sizes">
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                            </div>
                            <div class="item-footer">
                                <a onclick="sendWhatsAppMessage('${product.name}','size-${product.size}')" class="btn item-btn btn-style">Buy Now</a>
                            </div>
                        </div>
                    </div>
                `;

                productContainer.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error fetching the product data:', error));
});