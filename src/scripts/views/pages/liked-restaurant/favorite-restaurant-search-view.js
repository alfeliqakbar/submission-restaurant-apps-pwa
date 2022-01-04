import { createRestaurantItemTemplate } from '../../templates/template-creator'

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <div id="movie-search-container">
            <input id="query" type="text">
            <div class="movie-result-container">
                <ul class="movies">
                </ul>
            </div>
        </div>
        `;
  }

  getFavoriteRestaurantTemplate() {
    return `
        <div class="content">
            <h2 class="content__heading">Your Liked Movie</h2>
            <div id="movies" class="movies">
            </div>
        </div>
      `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById("query").addEventListener("change", (event) => {
      callback(event.target.value);
    });
  }

  showRestaurant(restaurant) {
    let html;
    if (restaurant.length > 0) {
      html = restaurant.reduce(
        (carry, restaurant) =>
          carry.concat(
            `<li class="movie"><span class="movie__title">${
              restaurant.title || "-"
            }</span></li>`
          ),
        ""
      );
    } else {
      html = '<div class="movies__not__found">Restaurant tidak ditemukan</div>';
    }

    document.querySelector(".movies").innerHTML = html;

    document
      .getElementById("movie-search-container")
      .dispatchEvent(new Event("movies:searched:updated"));
  }

  showFavoriteRestaurant(restaurant =  []){
    let html;
    if (restaurant.length) {
      html = restaurant.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '')
    }else{
      html = '<div class="movie-item__not__found"></div>'
    }

    document.getElementById('movies').innerHTML = html;

    document.getElementById('movies').dispatchEvent(new Event('movies:updated'));
  }
}

export default FavoriteRestaurantSearchView;
