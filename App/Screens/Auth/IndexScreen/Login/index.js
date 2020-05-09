import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonControl, TextInputControl, Toast } from '../../../Component/UIElement';
import AsyncStorage from '@react-native-community/async-storage';
import { callAPI } from '../../../../Shared/API';
import AsyncStore from '../../../../Shared/AsyncStorage';
export default function Login({ route, navigation }) {
  const [credential, setCredential] = useState('hung@gmail.com');
  const [password, setPassword] = useState('password');

  async function login() {
    if (!credential) { Toast.show("Vui lòng nhập tên đăng nhập/email"); return }
    if (!password) { Toast.show("Vui lòng nhập mật khẩu"); return }
    callAPI('auth/login', 'post', {
      credential,
      password
    })
      .then(async (res) => {
        await AsyncStore.storeData(AsyncStore.VAR.AUTH_CREDENTIAL, res.data.token)
        await AsyncStore.storeData(AsyncStore.VAR.USER, res.data.user)
        Toast.show("Login Success")
        navigation.navigate("Home")
      })
      .catch((err) => {
        Toast.show(err.message)
      })
  }

  function forgotPassword() {
    navigation.navigate("Auth", {
      screen: 'ForgotPassword'
    })
  }
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'space-between', paddingBottom: 30 }}>
      <View style={{ paddingHorizontal: 10, }}>
        <View style={{ marginTop: 10 }}></View>
        <TextInputControl
          placeholder="Tên đăng nhập/Email"
          style={styles.text_input}
          onChangeText={text => setCredential(text)}
          value={credential}
        />
        <TextInputControl
          placeholder="Mật khẩu"
          style={styles.text_input}
          onChangeText={text => setPassword(text)}
          value={password}
          textContentType="password"
          passwordRules={true}
          secureTextEntry={true}
        />
        <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
          <ButtonControl
            onPress={forgotPassword}
            title="Quên mật khẩu?"
            type="transparent"
            styleBtn={{ elevation: 0, width: 160, }}
            styleText={{ textAlign: 'right', fontSize: 14 }}
          />
        </View>
        <View style={{ marginTop: 20, }}></View>
      </View>
      <ButtonControl
        onPress={login}
        title="Đăng Nhập"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: Colors.white,
  // },
  // text_input: {
  //   color: Colors.blackLight,
  //   height: 36,
  //   padding: 0,
  //   fontSize: 16,
  //   marginVertical: 10,
  //   // borderRightWidth: 1,
  //   // borderRightColor: Colors.lynxWhite,
  //   borderBottomWidth: 1,
  //   // fontWeight: 'bold',
  //   borderBottomColor: Colors.darkGrey
  // }
})
