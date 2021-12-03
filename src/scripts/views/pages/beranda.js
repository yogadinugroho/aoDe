/* eslint-disable linebreak-style */
import DoaSource from '../../data/doa-source';
import { createDoaItemTemplate } from '../templates/template-creator';

/* eslint-disable linebreak-style */
const Beranda = {
  async render() {
    return `
        <div class="top-banner"><div class="hero"></div></div>
        <h2 tabindex="0">Kumpulan Doa-Doa</h2>
        <div class="doa-list"></div>
        `;
  },
  async afterRender() {
    const doa2 = await DoaSource.allDoa();
    const doaContainer = document.querySelector('.doa-list');
    doa2.forEach((doa) => {
      doaContainer.innerHTML += createDoaItemTemplate(doa);
    });
  },
};
export default Beranda;
