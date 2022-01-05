import { createRestaurantItemTemplate } from '../../templates/template-creator'

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <div id="maincontent" class="menu content">
        <input id="query" type="text">
        <h2 class="content__heading menu-title">Favorite Restaurant</h2>
        <hr>
          <div id="movies" class="movies menu-list">
            
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
    this.showFavoriteRestaurant(restaurant)
  }

  showFavoriteRestaurant(restaurant =  []){
    let html;
    if (restaurant.length) {
      html = restaurant.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '')
    }else{
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('movies').innerHTML = html;

    document.getElementById('movies').dispatchEvent(new Event('movies:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="movie-item__not__found movies__not__found">Tidak ada film untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
