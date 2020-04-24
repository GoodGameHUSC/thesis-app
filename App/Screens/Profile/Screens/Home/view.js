import React from 'react';
import { View, ScrollView } from 'react-native';
import OrderMenu from 'App/Screens/Profile/Components/OrderMenu';
import RequireLogin from 'App/Screens/Profile/Components/RequestLogin';
import ProfileMenu from 'App/Screens/Profile/Components/ProfileMenu';
import ShopMenu from 'App/Screens/Profile/Components/ShopMenu';


export default class ProfileHomeUI extends React.Component {
  render() {
    return <ScrollView>
      <RequireLogin />
      <OrderMenu />
      <ShopMenu />
      <ProfileMenu />
    </ScrollView>
  }
}