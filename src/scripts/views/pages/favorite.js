import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurant/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate()
    // return `
    // <section id="maincontent" class="menu">
    // <h2 class="menu-title">Favorite Restaurant</h1>
    // <hr>
    // <div id="movies" class="menu-list">
    
    // </div>
    // </section>
    // `;
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
    // const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    // const restaurantContainer = document.querySelector('.menu-list');
    // restaurant.forEach((data) => {
    //   restaurantContainer.innerHTML += createRestaurantItemTemplate(data);
    // });
  },
};

export default Favorite;
