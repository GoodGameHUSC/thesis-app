import { createStackNavigator } from '@react-navigation/stack';
import HeaderTitle from 'App/Screens/Component/Header/HeaderTitle';
import ProfileHomeScreen from 'App/Screens/Profile/Screens/Home/index';
import Helpers from 'App/Theme/Helpers';
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import RightButton from '../Component/Header/RightButton';
const Stack = createStackNavigator();

export default function ProfileScreen() {

  return (
    <Stack.Navigator
      screenOptions={{
        title: null,
        headerStyle: Helpers.headerStyle,
      }}
    >
      <Stack.Screen name="Profile.Home" component={ProfileHomeScreen}
        options={{
          headerLeft: () => <HeaderTitle iconName={''} title={'Tài khoản của tôi'} />,
          headerRight: () => <RightButton iconName={'log-out'} onPress={() => (
            Alert.alert(
              "Shopping Me thông báo",
              "Bạn có chắc chắn muốn đăng xuất ?",
              [
                {
                  text: "Huỷ bỏ",
                  onPress: () => console.log("Cancel Pressed"),
                },
                { text: "Đồng ý", onPress: () => console.log("OK Pressed"), style: "cancel" }
              ],
              { cancelable: true }
            ))
          } />,
        }}
      />
    </Stack.Navigator>
  )
}