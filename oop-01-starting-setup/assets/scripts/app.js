// THIS CLASS IS THE BLUEPRINT FOR THE ITEM - WHAT IT LOOKS LIKE
class Product {
  // */*/* THESE 'FIELDS' ARE NOT REQUIRED SINCE VALUES ARE ASSIGNED IN THE CONSTRUCTOR  *\*\*
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

// BASE CLASS FOR OUTPUTTING PARTS OF THE WEBPAGE - CLASSES!!
class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

// INHERITANCE from another class. Need to use KEYWORD 'EXTENDS'. CAN ONLY INHERIT FROM ONE CLASS.
class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>` 
    // toFixed(2) limits output to 2 decimal points
  }
  // Reduction logic
  get totalAmount() {
    const sum = this.items.reduce((prevValue, currItem) => 
      prevValue + currItem.price, 
      0
    );
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems; // refers to the SETTER.
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart'); // adding the placeholder for the cart.
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
    `;    
    this.totalOutput = cartEl.querySelector('h2')
  }
}

// THIS CLASS CONTAINS THE LOGIC TO CREATE AND RENDER EACH ITEM
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() { // logic to add the specific item to the cart.
    App.addProductToCart(this.product);
  }

  render() { // responsible for rendering a single item
    const prodEl = document.createElement('li'); // Create an 'li' element 
    prodEl.className = "product-item"; // for styling from CSS
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" >
        <div class="product-item__content"> 
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add To Cart</button>
        </div>
      </div>
      `;
    const addCardButton = prodEl.querySelector('button'); // logic to add the item by clicking the button.
    addCardButton.addEventListener('click', this.addToCart.bind(this)); // must bind 'this' to the eventListener
    return prodEl;
  }
}

// THIS CLASS IS THE LIST OF PRODUCTS
class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'A soft pillow',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://images.unsplash.com/photo-1556484207-00956c1b4847?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
      'A beautiful carpet you might like',
      89.99
    ),
    new Product(
      'A Throw',
      'https://images.unsplash.com/photo-1600369672770-985fd30004eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80',
      'A comfortable throw for you living room',
      39.99
    )
  ];

  constructor() {}

  render() {
    const prodList = document.createElement('ul'); // Create a list of products
    prodList.className = 'product-list'; // for styling from CSS
    for (const prod of this.products) { // to render each product in the list.
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render(); // creating the prodEl from the ProductItem class.
      prodList.append(prodEl); // connecting the ProductItem Class to the ProductList class.
      console.log('prodEl - ', prodEl); // console log
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app'); // Reference to place where element will be displayed on page.
    
    this.cart = new ShoppingCart('app'); // adding the shopping cart to the page and updating the cart.
    this.cart.render();
    const productList = new ProductList(); // instantiate the class by doing this.
    const prodListEl = productList.render(); // renders the product list

    renderHook.append(prodListEl);
    console.log('prodList -', prodListEl); // console log
  }
}

// STATIC CLASSES - used to share functionality or data across interfaces or classes.
// MUST USE KEYWORD 'STATIC' AND ONLY REFERS TO CLASS - LIKE A PRIVATE PROPERTY.
class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();


// */*/*/ NOTES *\*\*\*

// When to use classes:
//   1. Does not replace Object Literals.
//     a. Great for genenal data grouping, objects you only create once.
//     b.Quick and easy to create.
//   2. Classes are great for recreating the same type of object over and over again.
//     a. More overhead initially but, easy object duplication threafter.