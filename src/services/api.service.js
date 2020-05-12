import axios from 'axios';

const BASE_URL = 'https://5e9d060b0fd0b50016f74a5e.mockapi.io/show/v1';

axios.defaults.baseURL = `${BASE_URL}`;
axios.defaults.timeout = 60 * 1000;

const handleError = (error) => {
  const {response} = error || {};
  if (response) {
    const {status, data} = response;

    if (status === 401) {
      console.log('Request API fail with status 401');
    }

    return data;
  }

  return null;
};
const preprocessResponse = (result) => {
  const {message, data} = result || {};
  if (message === 'success') {
    return data;
  }
  return result;
};
export default class RequestAPIService {
  static getHeader() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }
  static get(url, params) {
    const header = this.getHeader();
    return axios
      .get(url, {
        headers: header,
        params,
      })
      .then((data) => {
        return data.data;
      })
      .then((data) => {
        return preprocessResponse(data);
      })
      .catch((e) => {
        throw handleError(e);
      });
  }
}
