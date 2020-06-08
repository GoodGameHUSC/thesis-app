import store from 'App/Stores/index';

export default class Navigator {
  static async restrict(navigation) {
    const user = store.getState().user.user;
    if (!user && navigation) navigation.navigate('Auth', { screen: "Index", params: { message: 'Vui lòng đăng nhập để tiếp tục' } })
  }

  static navigate(navigation, page, config) {

  }

  static navigateAuth(navigation, page, config = {}) {
    const user = store.getState().user.user;
    if (!user && navigation) navigation.navigate('Auth', { screen: "Index", params: { message: 'Vui lòng đăng nhập để tiếp tục' } })
    else navigation.navigate(page, config)
  }
}