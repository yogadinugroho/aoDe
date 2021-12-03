/* eslint-disable linebreak-style */
import { ingindihafalIdb } from '../../data/ingindihafal-doa';
import { createDoaItemTemplate } from '../templates/template-creator';

const IngindiHafal = {
  async render() {
    return `
        <h2 tabindex="0">Doa-doa yang Ingin dihafal</h2>
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
