import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Colors from '../../../Theme/Colors';

export default function TextInputControl(props) {

  return (
    <View style={[styles.containerStyle, props.containerStyle]}>
      <TextInput
        {...props}
        style={[styles.text_input, props.style]}
      />
      {
        (props.miniHint && !!props.value) && <Text style={styles.hintText}>{props.miniHint}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    position: 'relative',
    marginVertical: 2,
    // backgroundColor: 'red'
  },
  text_input: {
    color: Colors.blackLight,
    height: 36,
    padding: 0,
    fontSize: 16,
    marginTop: 12,
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.bgDark
  },
  hintText: { color: 'black', position: 'absolute', fontSize: 12, left: 5, color: Colors.bgDark }
})
