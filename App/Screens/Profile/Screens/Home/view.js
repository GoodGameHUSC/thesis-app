import BasicInfo from './Components/BasicInfo';
import OrderMenu from './Components/OrderMenu';
import ProfileMenu from './Components/ProfileMenu';
import ShopMenu from './Components/ShopMenu';
import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import UserBehavior from 'App/Services/User';


export default class ProfileHomeUI extends React.Component {

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
    return <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={this.refresh} />
      }
    >
      <BasicInfo />
      <OrderMenu />
      <ShopMenu />
      <ProfileMenu />
    </ScrollView>
  }
}