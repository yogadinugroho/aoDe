/* eslint-disable linebreak-style */

import DoaSource from '../../data/doa-source';
import createDoaItemTemplate from '../templates/template-creator';

const Beranda = {
  async render() {
    return `
        <div class="hero">
          <div class="hero_inner"></div>
        </div>

        <div class="content">
          <h2 class="content__heading" align="center">Daftar Doa-Doa</h2>
          <div id="restaurants" class="restaurants"></div>
        </div>
        `;
  },
  async afterRender() {
    // skiplink element
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#mainContent').focus();
    });

    const restaurants = await DoaSource.allDoa();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createDoaItemTemplate(restaurant);
    });
  },
};
export default Beranda;
