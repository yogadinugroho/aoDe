/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
import { sudahdihafalIdb } from '../../data/ingindihafal-doa';
import { createDoaItemTemplate } from '../templates/template-creator';

const SudahdiHafal = {
  async render() {
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('title-doa').focus();
    });
    return `
        <h2 tabindex="0" id="title-page">Sudah dihafal</h2>
        <form id='searchForm' class="d-flex search-bar">
          <input id='inputDoa' type="search" autocomplete="off" placeholder="masukkan nama doa" aria-label="">
          <button id='buttonSearch' class="btn btn-outline-success" type="button">Cari</button>
        </form>
        <div class="doa-list"></div>
    `;
  },
  async afterRender() {
    const doa2 = await sudahdihafalIdb.getAllSudahdihafal();
    const doaContainer = document.querySelector('.doa-list');
    doa2.forEach((doa) => {
      doaContainer.innerHTML += createDoaItemTemplate(doa);
    });
    const searchForm = document.querySelector('#searchForm');
    const queryDoa = document.querySelector('#inputDoa');
    const buttonSearch = document.querySelector('#buttonSearch');
    buttonSearch.addEventListener('click', async () => {
      const filteredDoa = sudahdihafalIdb.searchSudahdihafal(queryDoa.value);
      doaContainer.innerHTML = '';
      (await filteredDoa).forEach((doa) => {
        doaContainer.innerHTML += createDoaItemTemplate(doa);
      });
    });
    searchForm.addEventListener('submit', async () => {
      const filteredDoa = sudahdihafalIdb.searchSudahdihafal(queryDoa.value);
      doaContainer.innerHTML = '';
      (await filteredDoa).forEach((doa) => {
        doaContainer.innerHTML += createDoaItemTemplate(doa);
      });
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
export default SudahdiHafal;
