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
      const response = await fetch(API_ENDPOINT.detailDoa(id));
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      alert(error);
    }
  }
}
export default DoaSource;
