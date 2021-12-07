/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
import { ingindihafalIdb } from '../../data/ingindihafal-doa';
import { createDoaItemTemplate } from '../templates/template-creator';

const IngindiHafal = {
  async render() {
    return `
        <h2 tabindex="0" id="title-page">Ingin dihafal</h2>
        <form id='searchForm' class="d-flex search-bar">
          <input id='inputDoa' type="search" placeholder="Masukan Doa" aria-label="Cari Doa">
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
export default IngindiHafal;
