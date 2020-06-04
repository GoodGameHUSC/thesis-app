import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Completed from 'App/Screens/Profile/OrderHistory/Page/Completed';
import Delivering from 'App/Screens/Profile/OrderHistory/Page/Delivering';
import WaitingDelivery from 'App/Screens/Profile/OrderHistory/Page/WaitingDelivery';
import WaitingInvoice from 'App/Screens/Profile/OrderHistory/Page/WaitingInvoice';
import UserBehavior from 'App/Services/User';
import Colors from 'App/Theme/Colors';
import React from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
const Tab = createMaterialTopTabNavigator();

export default class OrderHistoryScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  refresh = () => {
    UserBehavior.refresh();
  }

  render() {
    const { refreshing } = this.state;
    return <View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={this.refresh} />
        }
      >
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: Colors.magazineBlue,
            labelStyle: {
              fontSize: 10,
              fontWeight: 'bold'
            },
            style: {
              backgroundColor: 'white',
              position: 'relative',
              shadowOpacity: 0,
              elevation: 0,
              borderBottomWidth: 0,
            },

          }}
          scrollEnabled={true}
          lazy={true}
        >
          <Tab.Screen name="Buy"
            options={{
              tabBarLabel: 'Chưa thanh toán',

            }}
            component={WaitingInvoice}
          />

          <Tab.Screen name="Sell"
            options={{
              tabBarLabel: 'Chờ vận chuyển',
            }}
            component={WaitingDelivery}
          />

          <Tab.Screen name="Sell2"
            options={{
              tabBarLabel: 'Đang giao hàng',
            }}
            component={Delivering}

          />
          <Tab.Screen
            name="Sel3"
            options={{
              tabBarLabel: 'Đã Hoàn Thành',
            }} component={Completed}

          />
        </Tab.Navigator>


        {/* <OrderMenu />
      <ShopMenu /> */}
      </ScrollView>
    </View>
  }
}