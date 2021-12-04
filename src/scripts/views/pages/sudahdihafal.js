/* eslint-disable linebreak-style */
import { sudahdihafalIdb } from '../../data/ingindihafal-doa';
import { createDoaItemTemplate } from '../templates/template-creator';

const SudahdiHafal = {
  async render() {
    return `
        <h2 tabindex="0" id="title-page">Sudah dihafal</h2>
        <form id='searchForm' class="d-flex search-bar">
          <input id='inputDoa' type="search" placeholder="Masukan Doa" aria-label="Cari Doa">
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
  },
};
export default SudahdiHafal;
