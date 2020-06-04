import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NormalHeaderOption, HeaderWithoutShadow } from 'App/Screens/Component/Header/NormaHeader';
import AddressSetting from './Addresses/index';
import ProfileHomeScreen from './Home/index';
import SettingScreen from './Setting/index';
import Helpers from 'App/Theme/Helpers';
import React from 'react';
import UploadProduct from './UploadProduct';
import OrderHistoryScreen from './OrderHistory/index';

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

      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen}
        options={HeaderWithoutShadow('Lịch sử đơn hàng')}
      />

      <Stack.Screen name="UploadProduct" component={UploadProduct}
        options={NormalHeaderOption('Đăng bán sản phẩm')}
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