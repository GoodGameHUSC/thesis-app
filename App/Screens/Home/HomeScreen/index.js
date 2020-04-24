import React from 'react';
import { Text, View } from 'react-native';
import CarouselBanner from 'App/Screens/Home/HomeScreen/Component/CarouselBanner';
import AppModal from 'App/Screens/Component/UIElement/Modal';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <CarouselBanner />
      </View>
    )
  }
}