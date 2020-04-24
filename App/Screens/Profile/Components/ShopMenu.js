import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'App/Theme/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';



export default function ShopMenu() {

  return <View style={{
    backgroundColor: 'white',
    paddingVertical: 10, paddingHorizontal: 10,
    marginBottom: 5
  }}>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center', marginBottom: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Cửa hàng của tôi</Text>
      <Text style={{ fontSize: 12, color: Colors.redOrange }}>Xem tất cả đơn hàng</Text>
    </View>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center' }}>
      <View style={style.menu_order_item} >
        <IconCommunity name="arrow-up-bold-box-outline" style={style.menu_order_icon} />
        <Text style={style.menu_order_text}>Đăng bán</Text>
      </View>
      <View style={style.menu_order_item}>
        <IconCommunity name="cart-plus" style={style.menu_order_icon} />
        <Text style={style.menu_order_text}>Đơn hàng mới</Text>
      </View>
      <View style={style.menu_order_item}>
        <IconCommunity name="clipboard-check-outline" style={style.menu_order_icon} />
        <Text style={style.menu_order_text}>Tình trạng đơn hàng</Text>
      </View>
      <View style={style.menu_order_item}>
        <IconCommunity name="wallet-outline" style={style.menu_order_icon} />
        <Text style={style.menu_order_text}>Doanh thu</Text>
      </View>

    </View>
  </View>

}

const style = {
  menu_order_item: {
    width: '25%',
    padding: 10,
    // backgroundColor: 'red',
    alignItems: 'center'
  },
  menu_order_icon: { marginBottom: 8, fontSize: 28, color: Colors.blueNight },
  menu_order_text: { fontSize: 12, textAlign: 'center', color: Colors.grey, fontWeight: 'bold' }

}