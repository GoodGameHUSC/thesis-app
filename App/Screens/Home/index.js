import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Helpers from 'App/Theme/Helpers';
import React from 'react';
import Colors from '../../Theme/Colors';
import HomeSearchHeader from './Component/HomeSearchHeader';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen/';


const Stack = createStackNavigator();
export default function HomeScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: null,
        // headerShown: false,
        headerStyle: Helpers.headerStyle,
        gestureDirection: 'vertical',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="Root.Home" component={HomeScreen}
        options={{
          headerTransparent: true,
          headerStyle: {
            height: 50,
          },
          headerLeft: () => <HomeSearchHeader />,
          headerRight: null,
        }}
      />

      <Stack.Screen name="Search" component={SearchScreen}
        options={{
          headerTransparent: true,
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  )
}


const style = {
  searchButton: {
    color: Colors.redOrange,
    fontSize: 22,
  },
  searchContainer: {
    padding: 5,
    paddingRight: 10
  },
}