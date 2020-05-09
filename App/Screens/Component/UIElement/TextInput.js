import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../../../Theme/Colors';

export default function TextInputControl(props) {

  return (<TextInput
    {...props}
    style={[styles.text_input, props.style]}
  />)
}

const styles = StyleSheet.create({
  text_input: {
    color: Colors.blackLight,
    height: 36,
    padding: 0,
    fontSize: 16,
    marginVertical: 10,
    // borderRightWidth: 1,
    // borderRightColor: Colors.lynxWhite,
    borderBottomWidth: 1,
    // fontWeight: 'bold',
    borderBottomColor: Colors.bgDark
  }
})
