/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/all`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/show/${id}`,
  SEARCH: (keywords) => `${CONFIG.BASE_URL}/search/${keywords}`,
};
export default API_ENDPOINT;
