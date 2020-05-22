import userReducer from './User';
import cartReducer from './Cart';

const rootReducer = {
  user: userReducer,
  carts: cartReducer
}

export default rootReducer;