var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: "#prev",
        prevEl: "#next",
    },
});

const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

cartIcon.addEventListener('click', () => cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener('click', () => cartTab.classList.remove('cart-tab-active'));
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('mobile-menu-active'));

let productList = [];

const showCards = () => {

    productList.forEach(product => {

        const orderCard = document.createEliment('div');
        orderCard.classList.add('order-card');

        orderCard.innerHTML = `
        <div class="card-image">
              <img src="${product.image}">
        </div>
        <h4>${product.name}</h4>
        <h4 class="price">${product.price}</h4>
        <a href="#" class="btn">Add to Card</a>`;

        cardList.appendChild(orderCard);

        const cardBtn = orderCard.querySelector('.card-btn');
        cardBtn.addEventListener('click', (e)=> {
            e.preventDefault();
            alert('hello')
        })
    })
}

const initApp = () => {
    fetch('products.json')
        .then(response => response.json())

        .then(data => {
            productList = data;
            console.log (showCards);
        })
}

initApp();

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".order-card", {
  ...scrollRevealOption,
  delay: 500,
});