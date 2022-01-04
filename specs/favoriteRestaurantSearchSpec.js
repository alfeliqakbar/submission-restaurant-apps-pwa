import FavoriteRestaurantSearchPresenter
  from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view';

describe('Searching movies', () => {
  let presenter;
  let favoriteRestaurant;
  let view;

  const searchRestaurant = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurant,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurant('film a');

      expect(presenter.latestQuery)
        .toEqual('film a');
    });

    it('should ask the model to search for movies', () => {
      searchRestaurant('film a');

      expect(favoriteRestaurant.searchRestaurant)
        .toHaveBeenCalledWith('film a');
    });

    it('should show the found movies', () => {
      presenter._showFoundRestaurant([{ id: 1 }]);
      expect(document.querySelectorAll('.movie').length)
        .toEqual(1);

      presenter._showFoundRestaurant([{
        id: 1,
        title: 'Satu',
      }, {
        id: 2,
        title: 'Dua',
      }]);
      expect(document.querySelectorAll('.movie').length)
        .toEqual(2);
    });

    it('should show - when the movie returned does not contain a title', (done) => {
      document.getElementById('movie-search-container').addEventListener('movies:searched:updated', () => {
        const movieTitles = document.querySelectorAll('.movie__title');
        expect(movieTitles.item(0).textContent).toEqual('-');
        done();
      });

      favoriteRestaurant.searchRestaurant.withArgs('film a').and.returnValues([
        { id: 444 },
      ]);

      searchRestaurant('film a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurant(' ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurant('    ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurant('');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurant('\t');
      expect(presenter.latestQuery.length)
        .toEqual(0);
    });

    it('should show all favorite movies', () => {
      searchRestaurant('    ');

      expect(favoriteRestaurant.getAllRestaurant)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite movies could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('movie-search-container')
        .addEventListener('movies:searched:updated', () => {
          expect(document.querySelectorAll('.movies__not__found').length)
            .toEqual(1);
          done();
        });

      favoriteRestaurant.searchRestaurant.withArgs('film a').and.returnValues([]);

      searchRestaurant('film a');
    });

    it('should not show any movie', (done) => {
      document.getElementById('movie-search-container').addEventListener('movies:searched:updated', () => {
        expect(document.querySelectorAll('.movie').length).toEqual(0);
        done();
      });

      favoriteRestaurant.searchRestaurant.withArgs('film a').and.returnValues([]);

      searchRestaurant('film a');
    });
  });
});
