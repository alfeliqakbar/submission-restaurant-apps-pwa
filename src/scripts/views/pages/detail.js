import RestaurantAppsSource from '../../data/restaurantapps-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantList = await RestaurantAppsSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurantList);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurantList.id,
        pictureId: restaurantList.pictureId,
        name: restaurantList.name,
        address: restaurantList.address,
        city: restaurantList.city,
        rating: restaurantList.rating,
        categories: restaurantList.categories,
        description: restaurantList.description,
        menu: restaurantList.menu,
        reviews: restaurantList.customerReviews,
      },
    });
  },
};

export default Detail;
