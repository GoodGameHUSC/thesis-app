import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import UserBehavior from 'App/Services/User';
import { callAPI } from 'App/Shared/API';
import { ButtonControl, TextInputControl, Toast } from '../../../Component/UIElement';
import { useDispatch } from 'react-redux'

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
        // dispatch(loginRedux({ payload: { user: res.data.user } }))
        UserBehavior.login(res.data);
        Toast.show("Login Success")
        navigation.navigate("Profile")
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
