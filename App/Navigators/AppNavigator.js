import ExampleScreen from 'App/Screens/Example/ExampleScreen';
import SplashScreen from 'App/Screens/SplashScreen/SplashScreen';
import React from 'react';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import TabBar from './TabBar';

const iconStyle = {
  size: 20,
  marginBottom: 0
}

//https://oblador.github.io/react-native-vector-icons/
const navigationConfig = {
  home: {
    screen: ExampleScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <IconAnt name="home" color={tintColor} {...iconStyle} />
      )
    }
  },
  cart: {
    screen: SplashScreen,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: ({ tintColor }) => (
        <IconFeather name="shopping-bag" color={tintColor} {...iconStyle} />
      )
    }
  },

  feeds: {
    screen: SplashScreen,
    navigationOptions: {
      tabBarLabel: 'Feeds',
      tabBarIcon: ({ tintColor }) => (
        <IconFeather name="rss" color={tintColor} {...iconStyle} />
      )
    }
  },
  chat: {
    screen: SplashScreen,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => (
        <IconFeather name="message-square" color={tintColor} {...iconStyle} />
      )
    }
  },

  profile: {
    screen: SplashScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <IconFeather name="user" color={tintColor} {...iconStyle} />
      )
    }
  },



};


const splashConfig = {
  initialRouteName: 'home',
  headerMode: 'none',
  tabBarComponent: props => <TabBar {...props} />,

};


const AppNavigator = createBottomTabNavigator(navigationConfig, splashConfig)

export default createAppContainer(AppNavigator)
