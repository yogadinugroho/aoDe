/* eslint-disable linebreak-style */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
import doa2 from './doa';

class DoaSource {
  static searchDoa(keyword) {
    return new Promise((resolve, reject) => {
      const filteredDoa = doa2.filter((doa) => doa.nama.toUpperCase().includes(keyword.toUpperCase()));
      if (filteredDoa.length) {
        resolve(filteredDoa);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }

  static async detailDoa(id) {
    return new Promise((resolve, reject) => {
      const filteredDoa = doa2.filter((doa) => doa.id === id);
      if (filteredDoa.length) {
        resolve(filteredDoa[0]);
      } else {
        reject(`${id} is not found`);
      }
    });
  }
}
export default DoaSource;
