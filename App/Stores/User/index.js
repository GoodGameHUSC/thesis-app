import { createAction, createReducer } from '@reduxjs/toolkit'

const INIT_STATE = {
  user: null,
  token: null
};

export const login = createAction('user_login')
export const logout = createAction('user_logout')
export const setUser = createAction('user_setUser')

// Reducer
const userReducer = createReducer(INIT_STATE, {
  [login]: (state, action) => {
    const data = action.payload;
    return {
      ...state,
      user: data.user,
      token: data.token
    }
  },
  [logout]: (state, action) => {
    return {
      ...state,
      ...INIT_STATE
    }
  },
  [setUser]: (state, action) => {
    const data = action.payload;
    return {
      ...state,
      user: data.user,
    }
  },
})

export default userReducer;