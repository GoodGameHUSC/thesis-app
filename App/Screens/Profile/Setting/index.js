import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Colors from '../../../Theme/Colors';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function SettingScreen() {

  const navigation = useNavigation();
  const user = useSelector(state => state.user.user);

  return <View style={{
    backgroundColor: 'white',
    // paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 5
  }}>
    {/* <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center', }}>
      <Text style={{ fontSize: 16, color: Colors.darkGrey }}>Quản lý tài khoản</Text>
      <Text style={{ fontSize: 12, color: Colors.redOrange }}></Text>
    </View> */}

    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={style.item_container}
        onPress={() => {

          navigation.navigate('Profile', {
            screen: 'Address'
          })
        }}
      >
        <View style={[style.item, { color: Colors.grey }]} >
          <IconCommunity size={22} name="home-city-outline" style={{ marginRight: 10, color: Colors.magazineBlue }} />
          <Text style={{ color: Colors.blackLight, fontSize: 16 }}>Địa chỉ giao hàng</Text>
        </View>
        <IconSimple size={14} name="arrow-right" style={{ color: Colors.redOrange }} />
      </TouchableOpacity>

      <View style={style.item_container}>
        <View style={style.item} >
          <IconCommunity size={18} name="coin" style={{ marginRight: 10 }} />
          <Text>Quản lý điểm thưởng </Text>
        </View>
        <IconSimple size={16} name="arrow-right" />
      </View>
      <View style={style.item_container}>
        <View style={style.item} >
          <IconSimple size={18} name="credit-card" style={{ marginRight: 10 }} />
          <Text>Phương thức thanh toán </Text>
        </View>
        <IconSimple size={16} name="arrow-right" />
      </View>

      <View style={style.item_container}>
        <View style={style.item} >
          <IconCommunity size={18} name="account-badge-horizontal-outline" style={{ marginRight: 10 }} />
          <Text>Cài đặt tài khoản </Text>
        </View>
        <IconSimple size={16} name="arrow-right" />
      </View>

      <View style={style.item_container}>
        <View style={style.item} >
          <IconCommunity size={18} name="headphones-settings" style={{ marginRight: 10 }} />
          <Text>Trung tâm trợ giúp </Text>
        </View>
        <IconSimple size={16} name="arrow-right" />
      </View>

      <View style={style.item_container}>
        <View style={style.item} >
          <IconCommunity size={18} name="cellphone-settings-variant" style={{ marginRight: 10 }} />
          <Text>Cài đặt ứng dụng </Text>
        </View>
        <IconSimple size={16} name="arrow-right" />
      </View>

      <View style={style.item_container}>
        <View style={style.item} >
          <Icon size={18} name="attach-money" style={{ marginRight: 10 }} />
          <Text>Bán hàng cùng Shopping Me</Text>
        </View>
        <IconSimple size={16} name="arrow-right" />
      </View>
      <View style={style.item_container}>
        <View style={style.item} >
          <IconCommunity size={18} name="page-previous-outline" style={{ marginRight: 10 }} />
          <Text>Chế độ bài viết</Text>
        </View>
        <IconSimple size={16} name="arrow-right" />
      </View>

      <View style={style.item_container}>
        <View style={style.item} >
          <IconCommunity size={18} name="security" style={{ marginRight: 10 }} />
          <Text>Điều khoản và bảo mật</Text>
        </View>
        <IconSimple size={16} name="arrow-right" />
      </View>
    </View>
  </View>

}

const style = {
  item_container: {
    width: '100%',
    paddingVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
    borderBottomWidth: 1,
    // borderTopWidth: 1,
    // borderTopColor: '#efefef',
    borderBottomColor: '#efefef'
  },
  item: {
    // width: '25%',
    padding: 10,
    justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center'
  },
  menu_order_icon: { marginBottom: 8, fontSize: 28, color: Colors.blueNight },
  menu_order_text: { fontSize: 12, textAlign: 'center', color: Colors.grey, fontWeight: 'bold' }

}