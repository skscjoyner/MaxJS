const productList = {
  products: [
    {
      title: 'A Pillow',
      imageUrl: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: '19.99',
      description: 'A soft pillow'
    },
    {
      title: 'A Carpet',
      imageUrl: 'https://images.unsplash.com/photo-1556484207-00956c1b4847?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
      price: '89.99',
      description: 'A beautiful carpet you might like'
    }
  ],
  render() {
    const renderHook = document.getElementById('app'); // Reference to place where element will be displayed on page.
    const prodList = document.createElement('ul'); // list of products
    prodList.className = 'product-list'; // for styling from CSS
    for (const prod of this.products) { // to render each product
      const prodEl = document.createElement('li'); // 
      prodEl.className = "product-item"; // for styling from CSS
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}" >
        <div class="product-item__content"> 
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add To Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
      console.log('prodEl - ', prodEl);
    }
    renderHook.append(prodList);
    console.log('prodList -', prodList);
  }
};

productList.render();