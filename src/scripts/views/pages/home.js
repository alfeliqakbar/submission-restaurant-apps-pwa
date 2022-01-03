import RestaurantAppsSource from '../../data/restaurantapps-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="jumbotron">
        <div class="hero-wrapper">
          <h2 class="hero-title">WELL SERVED!</h2>
          <p class="hero-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>
      <section id="maincontent" class="menu">
        <h2 class="menu-title">Explore Menu</h1>
        <hr>
        <div class="menu-list">
        
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const list = await RestaurantAppsSource.restaurantList();
    const listContainer = document.querySelector('.menu-list');
    list.forEach((data) => {
      listContainer.innerHTML += createRestaurantItemTemplate(data);
    });
  },
};

export default Home;
