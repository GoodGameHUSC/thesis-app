import React from 'react';
import { View, ScrollView } from 'react-native';
import OrderMenu from 'App/Screens/Profile/Components/OrderMenu';
import BasicInfo from 'App/Screens/Profile/Components/BasicInfo';
import ProfileMenu from 'App/Screens/Profile/Components/ProfileMenu';
import ShopMenu from 'App/Screens/Profile/Components/ShopMenu';


export default class ProfileHomeUI extends React.Component {

  render() {
    return <ScrollView>
      <BasicInfo />
      <OrderMenu />
      <ShopMenu />
      <ProfileMenu />
    </ScrollView>
  }
}