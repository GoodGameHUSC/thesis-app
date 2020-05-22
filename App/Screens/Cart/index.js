import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HeaderTitle from 'App/Screens/Component/Header/HeaderTitle';
import Helpers from 'App/Theme/Helpers';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../Theme/Colors';
import CartIndexScreen from './Home/index';
import OrderScreen from './Order/index';


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