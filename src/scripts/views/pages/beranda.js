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
        <div class="top-banner"><div class="hero"></div></div>
        <h2 tabindex="0">Doa-Doa</h2>
        <form id='searchForm' class="d-flex search-bar">
          <input id='inputDoa' type="search" placeholder="Masukan Doa" aria-label="">
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
    const titleDoa = document.querySelectorAll('#title-doa');
    titleDoa.forEach((title) => {
      title.addEventListener('focus', (event) => {
        event.target.parentElement.parentElement.parentElement.style.top = '-20%';
      });
    });
    titleDoa.forEach((title) => {
      title.addEventListener('blur', (event) => {
        event.target.parentElement.parentElement.parentElement.style.top = '-50%';
      });
    });
  },
};
export default Beranda;
