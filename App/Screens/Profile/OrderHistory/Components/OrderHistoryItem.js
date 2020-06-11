import IconFile from 'App/Screens/Component/UIElement/IconFile';
import WishList from 'App/Screens/Profile/Home/Components/WishList';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../../../../Theme/Colors';
import Helpers from '../../../../Theme/Helpers';
import { HeaderSection, shared_styles } from './Shared';
// store-mall-directory
export default function OrderHistoryItem({ order }) {

  console.log(order)
  return <View style={shared_styles.page_container}>
    <View style={[shared_styles.section_container]}>
      <HeaderSection
        leftText={'Đơn Hàng'}
        rightText={'Xem thêm'}
        icon={<IconFontisto name="shopping-bag-1" style={{ fontSize: 24, color: '#0984e3', marginHorizontal: 10 }} />}
      />
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center' }}>
        {/* <View style={style.menu_order_item}>
          <IconFontisto name="prescription" style={style.menu_order_icon} />
          <Text style={style.menu_order_text}>Chưa thanh toán</Text>
        </View>
        <View style={style.menu_order_item}>
          <IconSimple name="drawer" style={style.menu_order_icon} />
          <Text style={style.menu_order_text}>Chờ vận chuyển</Text>
        </View>
        <View style={style.menu_order_item}>
          <IconFontisto name="truck" style={style.menu_order_icon} />
          <Text style={style.menu_order_text}>Đang giao hàng</Text>
        </View>
        <View style={style.menu_order_item} >
          <IconSimple name="flag" style={style.menu_order_icon} />
          <Text style={style.menu_order_text}>Hoàn tất</Text>
        </View> */}
      </View>
      <View>
        <View style={[{ padding: 10, justifyContent: 'space-between', flex: 1, textAlign: 'right', flexDirection: 'row' }]}>
          <Text style={{ textAlign: 'right', color: Colors.blackLight }}>Tổng cộng</Text>
          <Text style={{ textAlign: 'right', color: Colors.blackLight }}>{order.bill.total}</Text>
        </View>
        {/* <WishList /> */}
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
  }

}