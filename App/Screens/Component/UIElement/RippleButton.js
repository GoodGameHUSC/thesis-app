import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function RippleButton({ style, onPress, icon_name }) {
  return <View style={{ padding: 0, borderRadius: 40, backgroundColor: 'transparent', overflow: 'hidden' }}>
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('grey', true)}
      delayPressIn={0}
      useForeground={true}
      onPress={onPress}
    >
      <View style={{ padding: 5, borderRadius: 40, backgroundColor: 'transparent' }}>
        <Icon name={icon_name} style={[styles.backButton, style]} />
      </View>
    </TouchableNativeFeedback>
  </View>
}

const styles = {
  backButton: {
    // color: Colors.redOrange,
    fontSize: 24,
    // marginLeft: 10
  },
}