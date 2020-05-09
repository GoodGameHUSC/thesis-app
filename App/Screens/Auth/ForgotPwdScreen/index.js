import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../../Theme/Colors';
import { ButtonControl, TextInputControl } from '../../Component/UIElement';


export default function ForgotPasswordScreen({ route, navigation }) {
  const [value, onChangeText] = useState('');
  function confirmSendEmail() {

  }
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'space-between', paddingBottom: 30 }}>
      <View style={{ paddingHorizontal: 10 }}>
        <View style={{ marginTop: 20 }}></View>
        <TextInputControl
          placeholder="Địa chỉ email của tài khoản"
          style={styles.text_input}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <View style={{ marginTop: 20 }}></View>
      </View>
      <ButtonControl
        onPress={confirmSendEmail}
        type="active"
        title="Lấy lại mật khẩu"
      />
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
