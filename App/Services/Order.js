import { callAPI } from 'App/Shared/API';

class OrderBehavior {

  static makeOrder(data) {
    return new Promise((res, rej) => {
      setTimeout(() => res(true), 1000)
    });
  }

  static loadOrder(status = null) {
    return new Promise((res, rej) => {
      setTimeout(async () => {
        const data = await callAPI('order/all', 'get', { status })
        return res(data);
      }, 1000)
    });

  }
}

export default OrderBehavior;