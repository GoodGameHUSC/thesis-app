import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'App/Theme/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';



export default function OrderMenu() {

  return <View style={{
    backgroundColor: 'white',
    paddingVertical: 10, paddingHorizontal: 10,
    marginBottom: 5
  }}>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center', marginBottom: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Đơn hàng</Text>
      <Text style={{ fontSize: 12, color: Colors.redOrange }}>Xem tất cả đơn hàng</Text>
    </View>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center' }}>
      <View style={style.menu_order_item}>
        <IconCommunity name="credit-card-off" style={style.menu_order_icon} />
        <Text style={style.menu_order_text}>Chưa thanh toán</Text>
      </View>
      <View style={style.menu_order_item}>
        <IconCommunity name="archive" style={style.menu_order_icon} />
        <Text style={style.menu_order_text}>Chờ vận chuyển</Text>
      </View>
      <View style={style.menu_order_item}>
        <IconCommunity name="truck-delivery" style={style.menu_order_icon} />
        <Text style={style.menu_order_text}>Đang giao hàng</Text>
      </View>
      <View style={style.menu_order_item} >
        <Icon name="done-all" style={style.menu_order_icon} />
        <Text style={style.menu_order_text}>Hoàn tất</Text>
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