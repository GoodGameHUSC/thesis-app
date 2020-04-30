import React, { Component } from 'react';
import RootScreen from './Screens/RootScreen';
import { YellowBox } from 'react-native'



YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

// const Tab = createBottomTabNavigator();
export default class App extends Component {
  render() {
    return (
      <RootScreen />
    )
  }
}
