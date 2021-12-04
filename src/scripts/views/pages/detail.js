/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import DoaSource from '../../data/doa-source';
import UrlParser from '../../routes/url-parser';
import { createDetailDoaItemTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div class="doa-list-detail" id="doa-list-detail"></div>
    `;
  },

  async afterRender() {
    //   skiplink

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const doa = await DoaSource.detailDoa(url.id);
    const doaContainer = document.querySelector('#doa-list-detail');
    doaContainer.innerHTML = createDetailDoaItemTemplate(doa);
    // responsiveVoice.setDefaultRate(0.1); not supported in arabic
    const buttonLafal = document.querySelector('.btn-voice');
    buttonLafal.addEventListener('click', () => {
      if (responsiveVoice.isPlaying()) {
        responsiveVoice.cancel();
      } else {
        responsiveVoice.speak(document.getElementById('txt-lafal').textContent, 'Arabic Male');
      }
    });
  },
};

export default Detail;
