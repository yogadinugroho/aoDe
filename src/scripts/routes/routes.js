/* eslint-disable linebreak-style */
import Beranda from '../views/pages/beranda';
import DetailDoa from '../views/pages/detail-doa';

const routes = {
  '/': Beranda, // default page
  beranda: Beranda,
  '/show/{id_doa}': DetailDoa,
};
export default routes;
