import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

describe('Showing all favorite movies', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no movies have been liked', () => {
    it('should ask for the favorite movies', () => {
      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });

      expect(favoriteRestaurant.getAllRestaurant).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no movies have been liked', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        expect(document.querySelectorAll('.movie-item__not__found').length)
          .toEqual(1);

        done();
      });

      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurant.getAllRestaurant.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });
    });
  });

  describe('When favorite movies exist', () => {
    it('should show the movies', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        expect(document.querySelectorAll('.menu-item').length).toEqual(2);
        done();
      });

      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurant.getAllRestaurant.and.returnValues([
        {
          id: 11, title: 'A', vote_average: 3, overview: 'Sebuah film A',
        },
        {
          id: 22, title: 'B', vote_average: 4, overview: 'Sebuah film B',
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });
    });
  });
});
