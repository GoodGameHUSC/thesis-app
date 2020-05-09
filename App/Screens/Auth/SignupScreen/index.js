import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../Theme/Colors';
const Tab = createMaterialTopTabNavigator();
export default function SignupScreen({ route, navigation }) {
  return (

    <View>
      <Text>Signup Progress</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  logo: {
    height: 150,
    width: 150,
  },
})
