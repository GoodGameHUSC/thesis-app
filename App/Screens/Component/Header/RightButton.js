import Colors from 'App/Theme/Colors';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function RightButton({
  iconName,
  iconStyle,
  containerStyle,
  onPress
}) {
  return (
    <View style={[style.iconContainer, containerStyle]} >
      <Icon name={iconName} style={[style.button, iconStyle]} onPress={onPress} />
    </View>
  )
}

const style = {
  button: {
    color: Colors.redOrange,
    fontSize: 22,
  },
  iconContainer: {
    padding: 5,
    paddingRight: 10
  },
}