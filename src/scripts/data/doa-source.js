/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api-endpoint';

class DoaSource {
  static async allDoa() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      alert(error);
    }
  }

  static async detailDoa(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.data[0];
    } catch (error) {
      alert(error);
    }
  }

  static async searchDoa(keywords) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH(keywords));
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      alert(error);
    }
  }
}
export default DoaSource;
