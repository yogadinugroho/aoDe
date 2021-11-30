/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */
import Beranda from '../views/pages/beranda.js';
import InginDihafal from '../views/pages/ingin-dihafal.js';
import SudahDihafal from '../views/pages/sudah-dihafal.js';

const routes = {
  '/': Beranda, // default page
  '/ingin-dihafal': InginDihafal,
  '/sudah-dihafal': SudahDihafal,
};
export default routes;
