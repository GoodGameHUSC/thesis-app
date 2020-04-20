import { createStackNavigator } from '@react-navigation/stack';
import HeaderTitle from 'App/Screens/Component/Header/HeaderTitle';
import Helpers from 'App/Theme/Helpers';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../Theme/Colors';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default function HomeScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: null,
        headerStyle: Helpers.headerStyle,
      }}
    >
      <Stack.Screen name="NewFeeds.Home" component={HomeScreen}
        options={{
          headerLeft: () => <HeaderTitle iconName={'home'} title={'Shop'} />,
          headerRight: () => (
            <View style={style.searchContainer} >
              <Icon name="search" style={style.searchButton} onPress={() => alert('This is a button!')} />
            </View>
          ),
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