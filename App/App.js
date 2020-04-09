import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import createStore from 'App/Stores'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import RootScreen from './Containers/Root/RootScreen'

const { store, persistor } = createStore()

export default class App extends Component {
  render() {
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
       */
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    )
  }
}
