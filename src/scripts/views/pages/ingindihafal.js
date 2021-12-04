/* eslint-disable linebreak-style */
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
  },
};
export default IngindiHafal;
