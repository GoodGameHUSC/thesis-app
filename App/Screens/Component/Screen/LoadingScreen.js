import { ScreenHeight, ScreenWidth } from 'App/Theme/Dimension';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';


export default function LoadingScreen({ text }) {
  return <View style={styles.container}>
    <LottieView style={{ width: 250 }} source={require('../../../Assets/Images/animation/8707-loading.json')} autoPlay loop />
  </View>

}


const styles = StyleSheet.create({
  container: {
    minHeight: ScreenHeight - 150,
    width: ScreenWidth,
    justifyContent: 'center',
    alignItems: 'center'
  }
})