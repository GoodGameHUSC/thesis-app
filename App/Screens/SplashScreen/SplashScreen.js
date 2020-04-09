import { Helpers } from 'App/Theme';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './SplashScreenStyle';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          {/* You will probably want to insert your logo here */}
          <Text>LOGO</Text>
          <Icon name="ios-person" size={30} color="#4F8EF7" />
        </View>
      </View>
    )
  }
}
