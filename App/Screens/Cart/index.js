import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Helpers from 'App/Theme/Helpers';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../Theme/Colors';
import AddressChangeScreen from './Address/index';
import CartIndexScreen from './Home/index';
import OrderScreen from './Order/index';
import ShipMethodScreen from './ShipMethod/index';
import ResultsScreen from './Results/index';


const Stack = createStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: null,
        headerStyle: Helpers.headerStyle,
        gestureDirection: 'vertical',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="Index" component={CartIndexScreen}
        options={
          ({ navigation, route }) => ({
            headerTitleStyle: {
              fontSize: 18
            },
            headerTintColor: Colors.seaRock,
            headerTitle: 'Giỏ Hàng',
            headerRight: () => (
              <View style={style.searchContainer} >
                <Icon name="arrow-right" style={style.searchButton} onPress={() => navigation.navigate('Cart', { screen: 'Order' })} />
              </View>
            ),
          })}
      />

      <Stack.Screen name="Order" component={OrderScreen}
        options={{
          headerTitleStyle: {
            fontSize: 18
          },
          headerTintColor: Colors.seaRock,
          headerTitle: 'Xác Nhận Đặt Hàng',
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen name="Address" component={AddressChangeScreen}
        options={{
          headerTitleStyle: {
            fontSize: 18
          },
          headerTintColor: Colors.seaRock,
          headerTitle: 'Chọn địa chỉ nhận hàng',
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen name="ShipMethod" component={ShipMethodScreen}
        options={{
          headerTitleStyle: {
            fontSize: 18
          },
          headerTintColor: Colors.seaRock,
          headerTitle: 'Chọn địa chỉ nhận hàng',
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen name="Result" component={ResultsScreen}
        options={{
          headerTitleStyle: {
            fontSize: 18
          },
          headerTintColor: Colors.seaRock,
          headerTitle: 'Đơn Hàng Thành Công',
          headerTitleAlign: 'center',
          headerLeft: null,
          // headerTransparent: true
          // header: null
        }}
      />

    </Stack.Navigator>
  )
}


const style = {
  searchButton: {
    color: Colors.grey,
    fontSize: 26,
  },
  searchContainer: {
    padding: 5,
    paddingRight: 10
  },
}