import { APIRequest } from './Axios'

export const useAPICreator = (path_uri, on_success = null, method = "get", default_params = {}, ) => {
  if (!path_uri) throw new Error("Require path_uri");
  return (params = default_params, callback) => {
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

