import { APIRequest } from './Axios'

export const useAPICreator = (path_uri, on_success = null, method = "get", default_params = {}, ) => {
  if (!path_uri) throw new Error("Require path_uri");
  return (params = default_params, callback) => {
    params = { ...default_params, ...params };
    if (method == 'get') return APIRequest.get(path_uri, params)
      .then(response => {
        if (on_success) on_success(response.data);
        if (callback) callback(response.data);
        return response.data
      })
      .catch(err => {
        return err;
      })
    else return APIRequest.post(path_uri, params)
      .then(response => {
        if (on_success) on_success(response.data);
        if (callback) callback(response.data);
        return response.data
      })
      .catch(err => {
        return err;
      })
  }
}

export const useAPIOnceTime = (path_uri, method = "get") => {
  if (!path_uri) throw new Error("Require path_uri");
  return (params = {}) => {
    if (method == 'get') return APIRequest.get(path_uri, params);
    else return APIRequest.post(path_uri, params);
  }
}


export const callAPI = (path_uri, method = "get", params = {}, onSuccess = null, onFail = null) => {
  return new Promise((res, rej) => {
    if (method == 'get') return APIRequest.get(path_uri, params)
      .then(response => {
        if (onSuccess) onSuccess(response.data);
        return res(response.data)
      })
      .catch(err => {
        if (onFail) onFail(err)
        return rej(err);
      })
    else return APIRequest.post(path_uri, params)
      .then(response => {
        if (onSuccess) onSuccess(response.data);
        return res(response.data)
      })
      .catch(err => {
        if (onFail) onFail(err)
        return rej(err);
      })
  });
}