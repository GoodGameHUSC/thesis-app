import { ScreenWidth } from 'App/Theme/Dimension.js';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Colors from '../../../../Theme/Colors';
import { ButtonControl, TextInputControl, Toast } from '../../../Component/UIElement';
import { callAPI } from '../../../../Shared/API';

export default function Signup({ route, navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [password_confirm, setPasswordConfirm] = useState('');
  const [phone, setPhone] = useState('+84');
  // const [checkTerm, setCheckTerm] = useState('');

  const [avatarSource, setAvatarSource] = useState(require('../../../../Assets/Images/screens/man.png'));

  const options = {
    title: 'Chọn ảnh đại diện của bạn',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  function signup() {
    if (!validate()) return;

    callAPI('auth/signup', 'post', {
      username,
      email,
      password,
      password_confirm,
      phone,
      address,
      avatar: avatarSource
    })
      .then((data) => {
        console.log(data)
        Toast.show("Tài khoản của bạn đã được tạo thành công, vui lòng đăng nhập")
      })
      .catch((err) => {
        console.log(err.message)
        Toast.show(err.message)

      })
  }

  function validate() {
    if (!username) { Toast.show("Vui lòng nhập tên đăng nhập"); return false }
    if (!email) { Toast.show("Vui lòng nhập email"); return false }
    if (!phone) { Toast.show("Vui lòng nhập số điện thoại"); return false }
    if (!password) { Toast.show("Vui lòng nhập mật khẩu"); return false }
    if (!password_confirm) { Toast.show("Vui lòng xác nhận mật khẩu"); return false }
    if (password != password_confirm) { Toast.show("Vui lòng xác nhận mật khẩu"); return false }
    if (!address) { Toast.show("Vui lòng nhập địa chỉ nhận hàng"); return false }
    return true;
  }

  async function openFilePicker() {
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        setAvatarSource(source)
      }
    });
  }
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'space-between', paddingBottom: 30 }}>
      <View style={{ paddingHorizontal: 10 }}>
        <View style={{ marginTop: 10 }}></View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={openFilePicker}
          >
            <View style={{ alignItems: 'center', }}>
              <Image source={avatarSource}
                style={{ height: 70, aspectRatio: 1, borderRadius: 50, overflow: 'hidden' }}
              />
              <Text style={{ fontSize: 12, marginTop: 5, color: Colors.darkGrey }}>Chọn ảnh </Text>
            </View>
          </TouchableOpacity>
          <View>
            <TextInputControl
              autoFocus={true}
              placeholder="Tên đăng nhập"
              returnKeyType="next"
              style={{ width: ScreenWidth - 150 }}
              onChangeText={text => setUsername(text)}
              value={username}
              blurOnSubmit={false}
            />
            <TextInputControl
              keyboardType={'email-address'}
              autoCompleteType={'email'}
              placeholder="Địa chỉ Email"
              returnKeyType="next"
              style={styles.text_input}
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>

        </View>

        <TextInputControl
          keyboardType={'phone-pad'}
          placeholder="Số điện thoại"
          returnKeyType="next"
          style={styles.text_input}
          onChangeText={text => setPhone(text)}
          value={phone}
        />
        <TextInputControl
          placeholder="Mật khẩu"
          returnKeyType="next"
          maxLength={50}
          style={styles.text_input}
          onChangeText={text => setPassword(text)}
          value={password}
          passwordRules={true}
          secureTextEntry={true}
        />
        <TextInputControl
          placeholder="Xác nhận mật khẩu"
          style={styles.text_input}
          // returnKeyType="next"
          onChangeText={text => setPasswordConfirm(text)}
          value={password_confirm}
          passwordRules={true}
          secureTextEntry={true}
        />
        <TextInputControl
          placeholder="Địa chỉ nhận hàng"
          style={styles.text_input}
          // returnKeyType="next"
          onChangeText={text => setAddress(text)}
          value={address}
        />
        <View style={{ marginTop: 30 }}></View>
        <Text style={{ fontSize: 12, color: Colors.darkGrey, textAlign: 'center' }}>
          Đồng thời bạn cũng đã đồng ý với
          <Text style={{ color: Colors.redOrange, fontWeight: 'bold' }}>  điều khoản dịch vụ và chính sách bảo mật </Text>
          của chúng tôi
          </Text>
        {/* <CheckBoxControl
          onClick={() => setCheckTerm(!checkTerm)}
          isChecked={checkTerm}
          rightText={"Đồng ý với điều khoản dịch vụ và chính sách bảo mật của chúng tôi"}
          rightTextStyle={}
        /> */}
        <View style={{ marginTop: 20 }}></View>
      </View>
      <ButtonControl
        onPress={signup}
        // type="default" 
        title="Đăng Ký"
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
