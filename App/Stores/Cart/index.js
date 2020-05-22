import { createAction, createReducer } from '@reduxjs/toolkit'

const INIT_STATE = {};

export const add_product = createAction('add_product')
export const remove_product = createAction('remove_product')
export const increment = createAction('increment')
export const decrement = createAction('decrement')
// https://reactjs.org/docs/update.html
const removeKey = (key, { [key]: _, ...rest }) => rest;
// Reducer
const cartReducer = createReducer(INIT_STATE, {
  [add_product]: (state, action) => {
    const data = action.payload;
    if (state[data._id]) {
      return { ...state, [data._id]: { product: data, amount: state[data._id].amount + 1 } }
    }
    else return { ...state, [data._id]: { product: data, amount: 1 } }
  },
  [remove_product]: (state, action) => {
    const id = action.payload;
    const newData = removeKey(id, state)
    return newData;
  },
  [increment]: (state, action) => {
    const id = action.payload;
    const newState = { ...state };
    newState[id] = { ...state[id], amount: state[id].amount + 1 }
    return newState;
    // if (state[id]) {
    //   return { ...state, [id]: { ...state[id], amount: state[id].amount + 1 } }
    // }
  },
  [decrement]: (state, action) => {
    const id = action.payload;
    const newState = { ...state };
    newState[id] = { ...state[id], amount: state[id].amount == 1 ? 1 : state[id].amount - 1 }
    return newState;
  },
})

export default cartReducer;