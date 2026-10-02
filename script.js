// Sample ice cream menu data
const menuItems = [
  { name: "Vanilla Delight", description: "Classic creamy vanilla made with fresh milk.", price: 120, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr6aV9Fs1V9nJMpg9nvFZ_xnhIQZPkL7QL8xNavWOIg&s=10" },
  { name: "Chocolate Heaven", description: "Rich chocolate ice cream topped with choco chips.", price: 150, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamNdFb_1z7icvc9caUt6POjD2j-8r6fdhcQTXDo-GGA&s=10" },
  { name: "Strawberry Bliss", description: "Fresh strawberry flavor with real fruit chunks.", price: 140, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwrGHDuHdzNqPUawaitWZHCRuWkgFxP62bHhDirqjzA&s=10" },
  { name: "Mango Magic", description: "Seasonal mango ice cream bursting with flavor.", price: 160, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIp5G7SlBLS9puGMHnvBqP_VHTwAL44hUxa9cUNtX-Ag&s=10" },
  { name: "Black Currant", description: "Sweet blackcurrant with crunchy bits.", price: 170, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSlSpse28EdfeCaHXOK6lL9npxxL0tYk3kPYQubKceA&s=10" }
];

const container = document.querySelector('.menu-container');
const cartCount = document.getElementById('cart-count');
const messageBox = document.getElementById('message-box'); // New message area

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Render cards dynamically
menuItems.forEach((item, index) => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="card-content">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="price">₹${item.price}</div>
      <button onclick="addToCart(${index})">Add to Cart</button>
    </div>
  `;

  container.appendChild(card);
});

// Add to cart function
function addToCart(index) {
  cart.push(menuItems[index]);
  localStorage.setItem('cart', JSON.stringify(cart));
  cartCount.textContent = cart.length;

  // Show success message
  showMessage(`${menuItems[index].name} added to cart successfully!`);
}

// Go to cart page
function goToCart() {
  window.location.href = "cart.html"; // corrected from "card.html"
}

// Update cart count on page load
cartCount.textContent = cart.length;

// Function to show temporary message
function showMessage(msg) {
  messageBox.textContent = msg;
  messageBox.style.display = "block";

  setTimeout(() => {
    messageBox.style.display = "none";
  }, 2000); // hide after 2 seconds
}
