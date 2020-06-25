import store from '../Stores/index';
import { login, logout, setUser } from '../Stores/User/index';
import { callAPI } from '../Shared/API';
import { Toast } from 'App/Screens/Component/UIElement';
class UserBehavior {

  static login(login_response = {}) {
    const user = login_response.user;
    const token = login_response.token;
    const login_action = login({ user, token })
    store.dispatch(login_action);
  }

  static refresh() {
    const { token } = store.getState().user;
    console.log(token)
    if (!token) return;
    debugger;
    callAPI('profile/me', 'get')
      .then((response) => {
        const setUserAction = setUser(response.data)
        store.dispatch(setUserAction);
      })
      .catch((err) => {
        Toast.show(err);
      })
  }

  static logout() {
    const logout_action = logout()
    store.dispatch(logout_action);
  }

}

export default UserBehavior;