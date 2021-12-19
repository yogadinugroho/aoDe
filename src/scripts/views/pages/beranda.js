/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
import DoaSource from '../../data/doa-source';
import doa2 from '../../data/doa';
import { createDoaItemTemplate } from '../templates/template-creator';

/* eslint-disable linebreak-style */
const Beranda = {
  async render() {
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('title-doa').focus();
    });
    return `
        <div class="top-banner"><div class="hero"><img width="100%" class="img-fluid" src="/images/aodeHero.jpg" alt="hero image"></div></div>
        <h2 tabindex="0" class="title__doa" id="doa">Doa-Doa</h2>
        <form id='searchForm' class="d-flex search-bar">
          <input id='inputDoa' autocomplete="off" type="search" placeholder="masukan nama doa" aria-label="">
          <button id='buttonSearch' class="btn btn-outline-success" type="button">Cari</button>
        </form>
        <div class="doa-list"></div>
        `;
  },
  async afterRender() {
    const doaContainer = document.querySelector('.doa-list');
    doa2.forEach((doa) => {
      doaContainer.innerHTML += createDoaItemTemplate(doa);
    });
    const searchForm = document.querySelector('#searchForm');
    const buttonSearch = document.querySelector('#buttonSearch');
    const keywordsDoa = document.querySelector('#inputDoa');
    buttonSearch.addEventListener('click', async () => {
      if (keywordsDoa.value === '') {
        doaContainer.innerHTML = '';
        doa2.forEach((doa) => {
          doaContainer.innerHTML += createDoaItemTemplate(doa);
        });
      } else {
        const filterredDoa = await DoaSource.searchDoa(keywordsDoa.value);
        doaContainer.innerHTML = '';
        filterredDoa.forEach((doa) => {
          doaContainer.innerHTML += createDoaItemTemplate(doa);
        });
      }
    });
    searchForm.addEventListener('submit', async () => {
      if (keywordsDoa.value === '') {
        doaContainer.innerHTML = '';
        doa2.forEach((doa) => {
          doaContainer.innerHTML += createDoaItemTemplate(doa);
        });
      } else {
        const filterredDoa = await DoaSource.searchDoa(keywordsDoa.value);
        doaContainer.innerHTML = '';
        filterredDoa.forEach((doa) => {
          doaContainer.innerHTML += createDoaItemTemplate(doa);
        });
      }
    });
  },
};
export default Beranda;
