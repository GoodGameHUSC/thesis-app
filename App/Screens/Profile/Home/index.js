import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserBehavior from '../../../Services/User';
import Colors from 'App/Theme/Colors';
import React from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import BasicInfo from './Components/BasicInfo';
import OrderMenu from './Components/OrderMenu';
import ShopMenu from '../Shop/ShopMenu';
const Tab = createMaterialTopTabNavigator();

export default class ProfileHomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  refresh = () => {
    return UserBehavior.refresh();
  }

  render() {
    const { refreshing } = this.state;
    return <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={this.refresh} />
      }
    >
      <BasicInfo />

      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.magazineBlue,
          labelStyle: { fontSize: 14, fontWeight: 'bold' },
          style: {
            backgroundColor: 'white',
            position: 'relative',
            shadowOpacity: 0,
            elevation: 0,
            borderBottomWidth: 0,
          },

        }}
        swipeEnabled={false}
      >
        <Tab.Screen name="Buy" options={{
          tabBarLabel: 'Mua Hàng',
        }} component={OrderMenu} />

        <Tab.Screen name="Sell" options={{
          tabBarLabel: 'Bán Hàng',
        }} component={ShopMenu} />
      </Tab.Navigator>
      {/* <OrderMenu />
      <ShopMenu /> */}
    </ScrollView>
  }
}