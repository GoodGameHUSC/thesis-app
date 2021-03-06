import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NormalHeaderOption, HeaderWithoutShadow } from 'App/Screens/Component/Header/NormaHeader';
import AddressSetting from './Addresses/index';
import ProfileHomeScreen from './Home/index';
import SettingScreen from './Setting/index';
import Helpers from 'App/Theme/Helpers';
import React from 'react';
import UploadProduct from './UploadProduct';
import OrderHistoryScreen from './OrderHistory/index';
import SubmitRateScreen from './SubmitRate/index';
import ManageProduct from 'App/Screens/Profile/ManageProduct/index';
import ShopOrderScreen from 'App/Screens/Profile/ShopOrder/index';
import CreateShop from 'App/Screens/Profile/CreateShop/index';

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
        options={HeaderWithoutShadow('Lịch sử mua hàng')}
      />

      <Stack.Screen name="ShopOrder" component={ShopOrderScreen}
        options={HeaderWithoutShadow('Quản lý đơn hàng')}
      />

      <Stack.Screen name="CreateShop" component={CreateShop}
        options={NormalHeaderOption('Tạo Cửa Hàng Của Bạn')}
      />
      <Stack.Screen name="UploadProduct" component={UploadProduct}
        options={NormalHeaderOption('Đăng bán sản phẩm')}
      />

      <Stack.Screen name="Address" component={AddressSetting}
        options={NormalHeaderOption('Địa chỉ của bạn')}
      />

      <Stack.Screen name="ManageProduct" component={ManageProduct}
        options={NormalHeaderOption('Quản lý sản phẩm')}
      />

      <Stack.Screen name="ManageShop" component={AddressSetting}
        options={NormalHeaderOption('Quản lý cửa hàng')}
      />

      <Stack.Screen name="Setting" component={SettingScreen}
        options={NormalHeaderOption('Cài đặt')}
      />

      <Stack.Screen name="SubmitRate"
        component={SubmitRateScreen}
        options={NormalHeaderOption("Đánh giá sản phẩm")}
      />

    </Stack.Navigator>
  )
}