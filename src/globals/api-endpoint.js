import CONFIG from './config';

const API_ENDPOINT = {
    LIST_DOA: `${CONFIG.BASE_URL}/api`,
    SPESIFIK_DOA: (id) => `${CONFIG.BASE_URL}/api/${id}`,
}