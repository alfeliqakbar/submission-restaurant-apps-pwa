import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAppsSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantSearch(search) {
    const response = await fetch(API_ENDPOINT.SEARCH(search));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async restaurantAddReview() {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW);
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }

  static async restaurantImages(pictureId) {
    const response = await fetch(API_ENDPOINT.IMAGE_SMALL(pictureId));
    return response;
  }
}

export default RestaurantAppsSource;
