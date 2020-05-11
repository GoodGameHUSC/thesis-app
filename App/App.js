import React, { Component } from 'react';
import RootScreen from './Screens/RootScreen';
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'
import store from './Stores';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

// const Tab = createBottomTabNavigator();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    )
  }
}
