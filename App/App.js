import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'App/Screens/SplashScreen/SplashScreen';
import createStore from 'App/Stores';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import RootScreen from './Screens/RootScreen';
const { store, persistor } = createStore()

const Tab = createBottomTabNavigator();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    )
  }
}
