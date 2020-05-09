import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import IconFeather from 'react-native-vector-icons/Feather';
import ChatScreenStack from './Chat';
import HomeScreen from './Home';
import NewFeedsStack from './NewFeeds/index';
import ProductDetail from './ProductDetail';
import ProfileScreen from './Profile';
import SearchScreenStack, { SearchRouteName } from './Search';
import CategoryStack from './Category';
import AuthStack from './Auth';

const Tab = createBottomTabNavigator();

class RootScreen extends Component {
  componentDidMount() {
    // this.props.startup()
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: { fontSize: 12 },
            style: tabBarStyle,
            activeTintColor: 'red',
            // inactiveTintColor: 'blue',
            showIcon: true,
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({ color }) => {
              return <IconFeather name="home" color={color} {...iconStyle} />
            },
          }} />

          <Tab.Screen name="Cart" component={NewFeedsStack} options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color }) => (
              <IconFeather name="shopping-bag" color={color} {...iconStyle} />
            )
          }} />
          <Tab.Screen name="NewFeeds" component={NewFeedsStack} options={{
            tabBarLabel: 'Feeds',
            tabBarIcon: ({ color }) => (
              <IconFeather name="rss" color={color} {...iconStyle} />
            )
          }} />
          <Tab.Screen name="Chats" component={ChatScreenStack} options={{
            tabBarLabel: 'Chats',
            tabBarIcon: ({ color }) => (
              <IconFeather name="message-square" color={color} {...iconStyle} />
            )
          }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <IconFeather name="user" color={color} {...iconStyle} />
            )
          }} />

          {/* Non-display from tab bar */}
          <Tab.Screen name="ProductDetail" component={ProductDetail} options={{
            tabBarButton: (routeName, onPress) => {
              return null;
            },
            tabBarVisible: false
          }} />

          <Tab.Screen name={SearchRouteName._} component={SearchScreenStack} options={{
            tabBarButton: (routeName, onPress) => {
              return null;
            },
            tabBarVisible: false
          }} />

          <Tab.Screen name={"Category"} component={CategoryStack} options={{
            tabBarButton: (routeName, onPress) => {
              return null;
            },
            tabBarVisible: false
          }} />
          <Tab.Screen name={"Auth"} component={AuthStack} options={{
            tabBarButton: (routeName, onPress) => {
              return null;
            },
            tabBarVisible: false
          }} />

        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

export default RootScreen

const iconStyle = {
  size: 20,
  marginBottom: 0
}
const tabBarStyle = {
  backgroundColor: 'white',
  position: 'relative',
  padding: 8,
  // ios
  shadowOpacity: 0.1,
  shadowRadius: 2,
  shadowOffset: {
    height: 0,
    width: 0
  },
  // android
  borderTopWidth: 0,
  elevation: 10,
}