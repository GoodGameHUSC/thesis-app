import { Helpers } from 'App/Theme';
import React from 'react';
import { Image, View } from 'react-native';
import { BarIndicator } from 'react-native-indicators';
import logo from '../../Assets/Images/screens/ic_launcher_white.png';
import Colors from '../../Theme/Colors';
import styles from './SplashScreenStyle';
export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container, { backgroundColor: Colors.yellowTint }]}>
        <View style={[Helpers.center, styles.logo]}>
          <Image source={logo} style={[Helpers.imageFluid]} />

          <BarIndicator color='white' count={15} size={15} />
        </View>
      </View>
    )
  }
}
