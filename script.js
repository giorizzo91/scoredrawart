
async function loadProducts() {
  const response = await fetch('products.json');
  const products = await response.json();

  const container = document.getElementById('products');

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <a class="btn" href="${product.link}" target="_blank">Buy Now</a>
      </div>
    `;

    container.appendChild(card);
  });
}

loadProducts();
