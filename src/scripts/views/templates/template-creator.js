import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<article class="menu-item">
<picture>
  <source type="image/webp" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}">
  <source type="image/jpeg" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}">
  <img class="menu-item-img lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId
}" alt="${restaurant.name || '-'}">
</picture>
<div class="menu-item-content">
  <p class="menu-item-rating">Rating: ${restaurant.rating || '-'}</p>
  <h1 class="menu-item-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h1>
  <p class="menu-item-description">${restaurant.description}</p>
</div>
</article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="restaurant__title">${restaurant.name}</h2>
<picture>
  <source type="image/webp" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}">
  <source type="image/jpeg" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}">
  <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="${restaurant.name}" />
</picture>
<div class="restaurant__info">
  <h3>Information</h3>
  <h4>Address</h4>
  <p>${restaurant.address}</p>
  <h4>City</h4>
  <p>${restaurant.city}</p>
  <h4>Rating</h4>
  <p>${restaurant.rating}</p>
  <h4>Categories</h4>
  <p>${restaurant.categories.map((data) => data.name)}</p>
</div>
<div class="restaurant__description">
<h3>Description</h3>
<p>${restaurant.description}</p>
</div>
<div class="restaurant__menus">
  <h3>Menu</h3>
  <br/>
  <h4>Foods</h4>
  <p>${restaurant.menus.foods.map((data) => data.name)}</p>
  <br/>
  <h4>Drinks</h4>
  <p>${restaurant.menus.drinks.map((data) => data.name)}</p>
</div>
<div class="restaurant__reviews">
<h3>Reviews</h3>
<div>
${restaurant.customerReviews.map((data) => `
<p>${data.name}</p>
<p>${data.date}</p>
<p>${data.review}</p>
`).join(' <br/> ')}</div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
