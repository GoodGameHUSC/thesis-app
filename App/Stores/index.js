import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import devToolsEnhancer from 'remote-redux-devtools';

const store = configureStore({
  reducer: rootReducer,
  // enhancers: [devToolsEnhancer()]
})
// https://itnext.io/react-native-why-you-should-be-using-redux-persist-8ad1d68fa48b
// https://blog.reactnativecoach.com/debugging-react-native-and-redux-with-react-native-debugger-62f6ceef3033
export default store