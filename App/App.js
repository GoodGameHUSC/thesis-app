import React, { Component } from 'react';
import RootScreen from './Screens/RootScreen';
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'
import store from './Stores';
import socket, { startSocketIO } from 'App/Shared/WebSocket';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

console.disableYellowBox = true;
// const Tab = createBottomTabNavigator();
export default class App extends Component {

  componentDidMount() {
    if (!socket.connected) {
      startSocketIO();
    }
  }
  render() {
    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    )
  }
}
