/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-alert */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const {
  DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME_1, OBJECT_STORE_NAME_2,
} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME_1, { keyPath: 'id' });
    database.createObjectStore(OBJECT_STORE_NAME_2, { keyPath: 'id' });
  },
});

const ingindihafalIdb = {
  async searchIngindihafal(query) {
    const doa2 = await this.getAllIngindihafal();
    return new Promise((resolve, reject) => {
      const filtereddoa = doa2.filter((doa) => doa.nama.toUpperCase().includes(query.toUpperCase()));
      if (filtereddoa.length) {
        resolve(filtereddoa);
      } else {
        reject(`${query} is not found`);
      }
    });
  },
  async getIngindihafal(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME_1, id);
  },
  async getAllIngindihafal() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME_1);
  },
  async putIngindihafal(doa) {
    if (!doa.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME_1, doa);
  },
  async deleteIngindihafal(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME_1, id);
  },
};
const sudahdihafalIdb = {
  async searchSudahdihafal(query) {
    const doa2 = await this.getAllSudahdihafal();
    return new Promise((resolve, reject) => {
      const filtereddoa = doa2.filter((doa) => doa.nama.toUpperCase().includes(query.toUpperCase()));
      if (filtereddoa.length) {
        resolve(filtereddoa);
      } else {
        reject(`${query} is not found`);
      }
    });
  },
  async getSudahdihafal(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME_2, id);
  },
  async getAllSudahdihafal() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME_2);
  },
  async putSudahdihafal(doa) {
    if (!doa.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME_2, doa);
  },
  async deleteSudahdihafal(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME_2, id);
  },
};
export {
  ingindihafalIdb,
  sudahdihafalIdb,
};
