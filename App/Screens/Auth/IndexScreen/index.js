import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../../../Theme/Colors';
import Login from './Login';
import Signup from './Signup';
const Tab = createMaterialTopTabNavigator();
export default function AuthIndex({ route, navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.magazineBlue,
        labelStyle: { fontSize: 12, fontWeight: 'bold' },
        style: {
          backgroundColor: 'white',
          position: 'relative',
          shadowOpacity: 0,
          elevation: 0,
          borderBottomWidth: 0,

        },
        showIcon: true,
        labelStyle: {
          // color: 'red',
          fontWeight: 'bold'
        },
        indicatorStyle: {
          width: 70,
          marginLeft: 65,
        }
      }}
    >
      <Tab.Screen name="Login" options={{
        tabBarLabel: 'Đăng nhập',
      }} component={Login} />
      <Tab.Screen name="Signup" options={{
        tabBarLabel: 'Đăng ký',
      }} component={Signup} />
    </Tab.Navigator>
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
