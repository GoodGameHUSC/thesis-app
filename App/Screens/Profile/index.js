import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NormalHeaderOption } from 'App/Screens/Component/Header/NormaHeader';
import AddressSetting from 'App/Screens/Profile/Addresses/index';
import ProfileHomeScreen from 'App/Screens/Profile/Home/index';
import SettingScreen from 'App/Screens/Profile/Setting/index';
import Helpers from 'App/Theme/Helpers';
import React from 'react';

const Stack = createStackNavigator();

export default function ProfileScreen() {

  return (
    <Stack.Navigator
      screenOptions={{
        title: null,
        headerStyle: Helpers.headerStyle,
        gestureDirection: 'vertical',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="Index" component={ProfileHomeScreen}
        options={{
          headerTransparent: true,
        }}
      />

      <Stack.Screen name="Address" component={AddressSetting}
        options={NormalHeaderOption('Địa chỉ của bạn')}
      />

      <Stack.Screen name="Setting" component={SettingScreen}
        options={NormalHeaderOption('Cài đặt')}
      />
    </Stack.Navigator>
  )
}