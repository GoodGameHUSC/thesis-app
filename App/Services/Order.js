class OrderBehavior {

  static makeOrder(data) {
    return new Promise((res, rej) => {
      setTimeout(() => res(true), 1000)
    });
  }
}

export default OrderBehavior;