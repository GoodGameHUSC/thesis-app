import { callAPI } from 'App/Shared/API';

class OrderBehavior {

  static async makeOrder(data) {
    try {
      const { address, payment_method, ship_method, cart, user } = data;

      const orders = Object.values(cart).map((element) => {

        // TODO: change it
        const subtotal = element.product.price * element.amount + 20000;
        const tax = Math.round(subtotal * 0.1)
        const total = subtotal + tax;

        return {
          product_id: element.product._id,
          shop_id: element.shop?._id || '5ea8f91a632821087002234b',
          feature: 'Cỡ lớn',
          amount: element.amount,
          notes: "Giao hàng nhẹ tay",
          bill: {
            total,
            tax,
            subtotal,
            bill_detail: {
              price: element.product.price * element.amount,
              ship_fee: 20000,
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
    } catch (error) {
      Promise.reject(error);
    }
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