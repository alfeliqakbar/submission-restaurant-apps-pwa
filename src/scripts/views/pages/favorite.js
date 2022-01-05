import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurant/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate()
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
