/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/all`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/show/${id}`,
};
export default API_ENDPOINT;
