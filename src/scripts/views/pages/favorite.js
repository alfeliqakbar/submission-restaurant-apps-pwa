import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section id="maincontent" class="menu">
    <h2 class="menu-title">Favorite Restaurant</h1>
    <hr>
    <div class="menu-list">
    
    </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('.menu-list');
    restaurant.forEach((data) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(data);
    });
  },
};

export default Favorite;
