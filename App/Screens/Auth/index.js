import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Helpers from 'App/Theme/Helpers';
import React from 'react';
import AuthIndex from './IndexScreen';
import SignupScreen from './SignupScreen/index';
import ForgotPasswordScreen from './ForgotPwdScreen/index';


const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: null,
        // headerShown: false,
        headerStyle: Helpers.headerStyle,
        gestureDirection: 'vertical',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Index" component={AuthIndex}
        options={{
          headerTransparent: true,
          headerStyle: {
            height: 50,
          },
          headerRight: null,
        }}
      />
      <Stack.Screen name="SignUp" component={SignupScreen}
        options={{
          // headerTransparent: true,
          headerStyle: {
            height: 50,
          },
          // headerRight: null,
          headerTitle: "Chào mừng bạn đến với hopping Me"
        }}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}
        options={{
          headerTintColor: '#273c75',
          headerTitle: 'Xử lý quên mật khẩu',
          headerStyle: {
            height: 50,
          },
          headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 14,
            textTransform: 'uppercase',
          },
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  )
}
