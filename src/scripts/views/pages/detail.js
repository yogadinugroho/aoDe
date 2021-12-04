/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import DoaSource from '../../data/doa-source';
import { ingindihafalIdb, sudahdihafalIdb } from '../../data/ingindihafal-doa';
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
    const buttonIngin = document.querySelector('.btn-ingin');
    const buttonSudah = document.querySelector('.btn-sudah');
    const ingindihafal = await ingindihafalIdb.getIngindihafal(doa.id_doa);
    if (ingindihafal !== undefined) {
      buttonIngin.classList.add('btn-ingin-actived');
    }
    const buttonInginActived = document.querySelector('.btn-ingin-actived');
    buttonIngin.addEventListener('click', async () => {
      if (buttonInginActived === null) {
        buttonSudah.classList.remove('btn-sudah-actived');
        await sudahdihafalIdb.deleteSudahdihafal(doa.id_doa);
        await ingindihafalIdb.putIngindihafal(doa);
        buttonIngin.classList.add('btn-ingin-actived');
      } else {
        buttonIngin.classList.remove('btn-ingin-actived');
        await ingindihafalIdb.deleteIngindihafal(doa.id_doa);
      }
    });
    const sudahdihafal = await sudahdihafalIdb.getSudahdihafal(doa.id_doa);
    if (sudahdihafal !== undefined) {
      buttonSudah.classList.add('btn-sudah-actived');
    }
    const buttonSudahActived = document.querySelector('.btn-sudah-actived');
    buttonSudah.addEventListener('click', async () => {
      if (buttonSudahActived === null) {
        buttonIngin.classList.remove('btn-ingin-actived');
        await sudahdihafalIdb.putSudahdihafal(doa);
        await ingindihafalIdb.deleteIngindihafal(doa.id_doa);
        buttonSudah.classList.add('btn-sudah-actived');
      } else {
        buttonSudah.classList.remove('btn-sudah-actived');
        await sudahdihafalIdb.deleteSudahdihafal(doa.id_doa);
      }
    });
  },
};

export default Detail;
