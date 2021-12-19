/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
import { ingindihafalIdb } from '../../data/ingindihafal-doa';
import { createDoaItemTemplate } from '../templates/template-creator';

const IngindiHafal = {
  async render() {
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('title-doa').focus();
    });
    return `
        <h2 tabindex="0" id="title-page">Ingin dihafal</h2>
        <form id='searchForm' class="d-flex search-bar">
          <input id='inputDoa' type="search" autocomplete="off" placeholder="masukkan nama doa" aria-label="">
          <button id='buttonSearch' class="btn btn-outline-success" type="button">Cari</button>
        </form>
        <div class="doa-list"></div>
    `;
  },
  async afterRender() {
    const doa2 = await ingindihafalIdb.getAllIngindihafal();
    const doaContainer = document.querySelector('.doa-list');
    doa2.forEach((doa) => {
      doaContainer.innerHTML += createDoaItemTemplate(doa);
    });
    const searchForm = document.querySelector('#searchForm');
    const queryDoa = document.querySelector('#inputDoa');
    const buttonSearch = document.querySelector('#buttonSearch');
    buttonSearch.addEventListener('click', async () => {
      const filteredDoa = ingindihafalIdb.searchIngindihafal(queryDoa.value);
      doaContainer.innerHTML = '';
      try {
        (await filteredDoa).forEach((doa) => {
          doaContainer.innerHTML += createDoaItemTemplate(doa);
        });
      } catch (error) {
        alert(error);
      }
    });
    searchForm.addEventListener('submit', async () => {
      const filteredDoa = ingindihafalIdb.searchIngindihafal(queryDoa.value);
      doaContainer.innerHTML = '';
      try {
        (await filteredDoa).forEach((doa) => {
          doaContainer.innerHTML += createDoaItemTemplate(doa);
        });
      } catch (error) {
        alert(error);
      }
    });
  },
};
export default IngindiHafal;
