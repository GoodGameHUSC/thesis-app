import { callAPI } from 'App/Shared/API';

class OrderBehavior {

  static async makeOrder(data) {
    const { address, payment_method, ship_method, cart, user } = data;

    const orders = Object.values(cart).map((element) => {

      // TODO: change it
      const subtotal = element.product.real_price * element.amount * (1 + ship_method.percent);
      const tax = Math.round(subtotal * 0.1)
      const total = Math.round((subtotal + tax) / 100) * 100;

      debugger;
      return {
        product_id: element.product._id,
        shop_id: element.product.shop?._id,
        feature: 'Cỡ lớn',
        amount: element.amount,
        notes: "Giao hàng nhẹ tay",
        bill: {
          total,
          tax,
          subtotal,
          bill_detail: {
            price: element.product.real_price * element.amount,
            ship_fee: ship_method.percent * element.product.real_price * element.amount,
          }
        }
      }
    });

    debugger;
    const requestData = {
      address,
      orders,
      ship_method,
      payment_method
    }
    const response = await callAPI('order/create-order', 'post', requestData)
    return response;

  }

  static loadOrder(status = null) {
    return new Promise((res, rej) => {
      setTimeout(async () => {
        const data = await callAPI('order/all', 'get', { status })
        return res(data);
      }, 1000)
    });

  }

  static loadOrderOfShop(status = null) {
    return new Promise((res, rej) => {
      setTimeout(async () => {
        const data = await callAPI('order/of-user-shop', 'get', { status })
        return res(data);
      }, 1000)
    });

  }
}

export default OrderBehavior;