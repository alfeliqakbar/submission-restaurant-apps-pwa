import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger-button'),
  drawer: document.querySelector('.nav-links'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// console.log(dataJson.restaurants);
// const navButton = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');
// const openicon = document.querySelector('.bar-icon');
// const closeicon = document.querySelector('.close-icon');
// const menulist = document.querySelector('.menu-list');

// const toggle = () => {
//   navLinks.classList.toggle('show-nav-links');
//   if (navLinks.classList.contains('show-nav-links')) {
//     // navLinks.classList.toggle("show-nav-links")
//     openicon.style.display = 'none';
//     closeicon.style.display = 'block';
//   } else {
//     // navLinks.classList.toggle("show-nav-links")
//     openicon.style.display = 'block';
//     closeicon.style.display = 'none';
//   }
// };

// navButton.addEventListener('click', toggle);

// menulist.innerHTML = '';
// dataJson.restaurants.forEach((item) => {
//   const {
//     name, pictureId, description, rating, city,
//   } = item;
//   const menuItem = document.createElement('article');
//   menuItem.setAttribute('class', 'menu-item');

//   menuItem.innerHTML = `
//         <img class="menu-item-img" src="${pictureId}" alt="gambar ${name}">
//         <div class="menu-item-content">
//             <p class="menu-item-rating">Rating: ${rating}</p>
//             <h3 class="menu-item-title"><a href="#">${name}</a></h3>
//             <p class="menu-item-description">${description}</p>
//         </div>
//         `;
//   menulist.appendChild(menuItem);
// });
