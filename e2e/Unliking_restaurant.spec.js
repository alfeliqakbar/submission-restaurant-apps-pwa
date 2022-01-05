const assert = require('assert');

Feature('Liking restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({I}) => {
  I.seeElement('#query');
  //I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
});

Scenario('unliking one restaurant', async ({I}) => {
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');

  I.amOnPage('/');
  
  I.seeElement('.menu-item-title a');
  const firstRestaurant = locate('.menu-item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.menu-item');
  const likedRestaurantTitle = await I.grabTextFrom('.menu-item-title');

  I.amOnPage('/#/favorite');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});