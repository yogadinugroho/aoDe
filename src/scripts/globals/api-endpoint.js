import CONFIG from './config';

const API_ENDPOINT = {
  LIST_DOA: `${CONFIG.BASE_URL}/all`,
  SPESIFIK_DOA: (keywords) => `${CONFIG.BASE_URL}/search/${keywords}`,
  DETAIL_DOA: (id) => `${CONFIG.BASE_URL}/show/${id}`,
};

export default API_ENDPOINT;
