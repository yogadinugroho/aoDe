import API_ENDPOINT from '../globals/api-endpoint';

class doaSource {
  static async listDoa() {
    const response = await fetch(API_ENDPOINT.LIST_DOA);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async detailDoa(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_DOA(id));
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default doaSource;
