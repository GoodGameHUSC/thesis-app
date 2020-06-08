import axios from 'axios'
import store from '../Stores/index';
const baseAPI = 'http://192.168.1.196:8001/api/';
// const baseAPI = 'http://192.168.0.117:8001/api/';

export const Axios = axios.create({
  baseURL: baseAPI
})

export const APIRequest = {
  /**
   * 
   */
  async get(url, params) {
    let queryString = convertToQueryString(params);
    url = url + "?" + queryString;

    return Axios.get(url, config());
  },

  /**
   * 
   */
  async put(url, params) {
    return new Promise((res, rej) => {
      try {
        let response = Axios.put(url, params)
        return res(response);
      } catch (error) {
        rej(error)
      }
    });
  },

  /**
  * 
  */
  async post(url, params) {
    return new Promise((res, rej) => {
      try {
        let response = Axios.post(url, params, config())
        return res(response);
      } catch (error) {
        rej(error)
      }
    });
  },

  /**
   * 
   */
  async delete(url) {
    return new Promise((res, rej) => {
      try {
        let response = Axios.delete(url)
        return res(response);
      } catch (error) {
        rej(error)
      }
    });
  }

}

function config() {
  if (store.getState().user.token)
    return {
      headers: { Authorization: `${store.getState().user.token.access_token}` }
    };
  return {};
}

function convertToQueryString(params) {
  if (typeof params == 'string') return params;
  let paramString = ""
  Object.keys(params).map(key => {
    if (params[key] !== "") {
      paramString += key + "=" + params[key] + "&";
    }
  });
  return paramString;
}