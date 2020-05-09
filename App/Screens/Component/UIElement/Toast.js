import { AlertIOS, Platform, ToastAndroid } from 'react-native';

export default class Toast {

  static show(message) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT)
    } else {
      AlertIOS.alert(message);
    }
  }
}


