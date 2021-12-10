/* eslint-disable linebreak-style */
import Beranda from '../views/pages/beranda';
import IngindiHafal from '../views/pages/ingindihafal';
import SudahdiHafal from '../views/pages/sudahdihafal';
import Detail from '../views/pages/detail';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/ingindihafal': IngindiHafal,
  '/sudahdihafal': SudahdiHafal,
  '/show/{id_doa}': Detail,
};
export default routes;
