import RNAsyncStorage from '@react-native-community/async-storage';

export default class AsyncStore {

  static VAR = {
    AUTH_CREDENTIAL: '@AUTH_CREDENTIAL',
    USER: '@USER'
  }
  static async storeData(key, value) {
    try {
      const storeData = typeof value == 'object' ? JSON.stringify(value) : value
      console.log(JSON.stringify(value));
      await RNAsyncStorage.setItem(key, storeData)
    } catch (e) {
      throw e;
    }
  }
  static async getData(key) {
    try {
      const value = await RNAsyncStorage.getItem(key)
      if (value == null) return value;
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    } catch (e) {
      throw e;
    }
  }
}

export function useAsyncStorage(key) {
  return [
    () => AsyncStore.getData(key),
    (key, value) => AsyncStore.storeData(key, value)
  ]
}