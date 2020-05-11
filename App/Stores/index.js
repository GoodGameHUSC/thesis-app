import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
})
// https://itnext.io/react-native-why-you-should-be-using-redux-persist-8ad1d68fa48b
export default store