/* eslint-disable linebreak-style */
import { sudahdihafalIdb } from '../../data/ingindihafal-doa';
import { createDoaItemTemplate } from '../templates/template-creator';

const SudahdiHafal = {
  async render() {
    return `
        <h2 tabindex="0">Doa-doa yang Sudah dihafal</h2>
        <div class="doa-list"></div>
    `;
  },
  async afterRender() {
    const doa2 = await sudahdihafalIdb.getAllSudahdihafal();
    const doaContainer = document.querySelector('.doa-list');
    doa2.forEach((doa) => {
      doaContainer.innerHTML += createDoaItemTemplate(doa);
    });
  },
};
export default SudahdiHafal;
