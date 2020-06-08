import store from '../Stores/index';
import { login, logout } from '../Stores/User/index';
import { callAPI } from '../Shared/API';
class UserBehavior {

  static login(login_response = {}) {
    const user = login_response.user;
    const token = login_response.token;
    const login_action = login({ user, token })
    store.dispatch(login_action);
  }

  static refresh() {
    return new Promise((res, rej) => {
      const { token } = store.getState();
      if (!token) return;
      callAPI('auth/me', 'get')
        .then((response) => {
          debugger
        })
        .catch((err) => {
          debugger
        })
    });
  }

  static logout() {
    const logout_action = logout()
    store.dispatch(logout_action);
  }

}

export default UserBehavior;