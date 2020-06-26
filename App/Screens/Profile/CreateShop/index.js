import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import React, { useState, useEffect } from 'react';
import { FlatList, Image, Text, View, ScrollView, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import Colors from '../../../Theme/Colors';
import Helpers from '../../../Theme/Helpers';
import { HeaderSection, shared_styles } from '../Home/Components/Shared';
// import TextInputControl from 'App/Screens/Component/UIElement/TextInput';
// import AppModal from 'App/Screens/Component/UIElement/Modal';
import { ScreenWidth, ScreenHeight } from 'App/Theme/Dimension';
import { useAPICreator, callAPI } from 'App/Shared/API';
import { Figure, TextInputControl, AppModal } from 'App/Screens/Component/UIElement';
import { Toast } from 'App/Screens/Component/UIElement';
import { setUser } from 'App/Stores/User/index';
import UserBehavior from 'App/Services/User';



export default function CreateShop({ navigation }) {

  const [image, setImage] = useState(null);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);

  function createShop() {
    if (!image || !info.name || !info.slogan || !info.phone_number || !info.address) {
      Toast.show("Vui lòng nhập đủ thông tin")
      return;
    }
    if (loading) return;
    setLoading(true);
    callAPI('shop/create-shop', 'post', {
      name: info.name,
      slogan: info.slogan,
      phone_number: info.phone_number,
      address: info.address,
      website_url: info.website_url,
    })
      .then((data) => {
        Toast.show("Tạo cửa hàng thành công")
        navigation.goBack();
        UserBehavior.refresh();
      })
      .catch((err) => {
        console.log(err.message)
        Toast.show("Tạo cửa hàng thất bại")
        Toast.show(err.message)
      })
      .finally(() => setLoading(false))
  }

  return (
    <ScrollView style={shared_styles.page_container}>
      <AddPhoto image={image} setImage={setImage} />
      <Information info={info} setInfo={setInfo} />

      <TouchableArea onPress={createShop} style={{ paddingVertical: 50, justifyContent: 'center', flexDirection: 'row' }}>
        <View>
          <Text style={{ textAlign: 'center', padding: 10, borderRadius: 20, color: 'white', backgroundColor: Colors.mathPurple, fontWeight: 'bold' }}>
            {
              loading ? "Đang tạo..." : "Tạo Cửa Hàng"
            }
          </Text>
        </View>
      </TouchableArea>
    </ScrollView>
  )
}

function Information({ info, setInfo }) {

  const setValue = (text, key) => {
    setInfo({ ...info, [key]: text })
  }

  const _style = StyleSheet.create({
    headerStyle: { fontSize: 24, color: '#0984e3', marginHorizontal: 10 },
    textInput: { width: '100%', borderBottomWidth: 0, paddingHorizontal: 5, height: 30, fontSize: 14 }
  })

  return (
    <View style={[shared_styles.section_container]}>
      <HeaderSection
        leftText={'Thông tin cơ bản'}
        rightText={null}
        style={{ marginBottom: 0 }}
        showArrow={false}
        icon={<MaterialCommunityIcons name="playlist-edit" style={_style.headerStyle} />}
      />
      <View style={{ paddingLeft: 5 }}>
        <TextInputControl
          style={_style.textInput}
          placeholder="Tên cửa hàng"
          miniHint="Tên cửa hàng"
          onChangeText={text => setValue(text, 'name')}
          value={info.name}
        />

        <TextInputControl
          style={[_style.textInput, { height: 'auto' }]}
          placeholder="Địa chỉ"
          miniHint="Địa chỉ"
          onChangeText={text => setValue(text, 'address')}
          value={info.description}
        />

        <TextInputControl
          style={_style.textInput}
          placeholder="Số điện thoại"
          miniHint="Số điện thoại"
          keyboardType={'phone-pad'}
          onChangeText={text => setValue(text, 'phone_number')}
          value={info.brand}
        />

        <TextInputControl
          style={_style.textInput}
          placeholder="Slogan"
          miniHint="Slogan"
          onChangeText={text => setValue(text, 'slogan')}
          value={info.quarantine_time}
        />

        <TextInputControl
          style={_style.textInput}
          placeholder="Địa chỉ website (không bắt buộc)"
          miniHint="Địa chỉ website (không bắt buộc)"
          onChangeText={text => setValue(text, 'website_url')}
          value={info.quarantine_time}
        />

      </View>
    </View>

  )
}

function AddPhoto({ image, setImage }) {
  const options = {
    title: 'Ảnh đại diện cửa hàng',
    storageOptions: {
      skipBackup: true,
      path: 'image',
    },
  };

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
        console.log(source)
        setImage(source);
      }
    });
  }

  return (
    <View style={[shared_styles.section_container]}>
      <HeaderSection
        leftText={'Ảnh đại diện'}
        rightText={null}
        showArrow={false}
        style={{ marginBottom: 0 }}
        icon={<MaterialIcons name="add-a-photo" style={{ fontSize: 24, color: '#0984e3', marginHorizontal: 10 }} />}
      />
      <View style={{
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        padding: 10,
      }}>
        <TouchableArea onPress={openFilePicker} >
          {
            image ? <Image source={image} style={{ height: 100, aspectRatio: 1, borderRadius: 5 }} />
              : <View style={[Helpers.flexRow, { marginRight: 10, backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.magazineBlue, borderRadius: 5, padding: 15, height: 100, width: 100 }]}>
                <Text style={{ textAlign: 'center', color: Colors.magazineBlue }}>Chọn ảnh đại diện</Text>
              </View>
          }
        </TouchableArea>
      </View>
    </View>

  )
}


const style = {
  menu_order_item: {
    // width: '25%',
    padding: 10,
    // backgroundColor: 'red',
    alignItems: 'center'
  },
  recordContainer: {
    flex: 0,
    height: 'auto',
    minHeight: ScreenHeight / 2,
    width: ScreenWidth,
    padding: 10,
    bottom: -20,
    position: 'absolute',
    backgroundColor: 'white',
    elevation: 1
  },
  menu_order_icon: {
    marginBottom: 8,
    fontSize: 28,
    color: Colors.darkGrey
  },
  menu_order_text: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.grey,
    // fontWeight: 'bold'
  },
  icon_container: {
    marginRight: 2,
    width: 90,
    height: 100,
    padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon_text: {
    fontSize: 12,
    height: 30,
    textAlign: 'center',
    color: Colors.darkGrey
  }

}