import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Helpers from 'App/Theme/Helpers';
import React from 'react';
import Colors from '../../Theme/Colors';
import HomeScreen from './HomeScreen';
import SearchHeader from './HomeScreen/Component/SearchHeader';


const Stack = createStackNavigator();
export const SearchRouteName = {
  _: 'Search',
  Home: 'Home'
}
export default function SearchScreenStack() {

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
      <Stack.Screen name={SearchRouteName.Home} component={HomeScreen}
        options={{
          headerTransparent: true,
          headerStyle: {
            height: 50,
          },
          headerLeft: () => <SearchHeader />,
          headerRight: null,
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