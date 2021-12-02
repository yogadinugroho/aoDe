import DoaSource from '../../data/doa-source';
import UrlParser from '../../routes/url-parser';
import { createDetailDoaItemTemplate } from '../templates/template-creator';

const DetailDoa = {
  async render() {
    return `
        <div class="doa-list-detail" id="doa-list-detail"></div>
    `;
  },

  async afterRender() {
    //   skiplink
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#mainContent').focus();
    });

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const doa = await DoaSource.detailDoa(url.id);
    const doaContainer = document.querySelector('#doa-list-detail');
    doaContainer.innerHTML = createDetailDoaItemTemplate(doa);
  },
};

export default DetailDoa;
