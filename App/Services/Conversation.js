import store from '../Stores/index';
import { login, logout } from '../Stores/User/index';
import { callAPI } from '../Shared/API';
class ConversationBehavior {

  static getConversationWithShop(shop_id) {
    return new Promise((res, rej) => {
      const { token, user } = store.getState();
      if (!token) return;

      debugger;
      callAPI('conversation/get-conversation', 'get', {
        user_id: user._id,
        shop_id
      })
        .then((response) => {
          res(response);
        })
        .catch((err) => {
          rej(err);
        })
    });
  }

  static logout() {
    const logout_action = logout()
    store.dispatch(logout_action);
  }

}

export default ConversationBehavior;