import { useNavigation } from '@react-navigation/native';
import { toLocaleString } from 'App/Utils/_';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import Helpers from 'App/Theme/Helpers';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../../Theme/Colors';


export default function PreviewBill({ carts, goOrder }) {

  const [total, setTotal] = useState(0)
  const navigation = useNavigation();

  const goChat = () => navigation.navigate('Chats');

  useEffect(() => {
    let totalCart = 0;
    carts.forEach(cart => {
      totalCart += cart.product.price * cart.amount
    });
    setTotal(totalCart)
  }, carts)
  return (<>
    <View style={style.container}>
      <View style={{ overflow: 'hidden', flexDirection: 'row', justifyContent: 'flex-end', width: ScreenWidth, backgroundColor: 'white', paddingBottom: 5 }}>

        <View style={[Helpers.flexRow, { justifyContent: 'space-between', flex: 1, backgroundColor: Colors.white, marginRight: 0, paddingHorizontal: 10 }]}>
          <Text style={{
            fontSize: 14,
            textAlign: 'center',
            color: Colors.magazineBlue,
            fontWeight: 'bold'
          }}> {carts.length} mặt hàng
          </Text>

          <View style={[Helpers.flexColumn, { alignItems: 'flex-end' }]}>
            <Text style={{ fontSize: 14, color: Colors.magazineBlue, }}>
              Tổng Tiền: <Text style={{ fontSize: 16, color: Colors.redOrange, fontWeight: 'bold' }}>{toLocaleString(total)}đ</Text>
            </Text>
            {/* <Text style={{ fontSize: 12, color: Colors.magazineBlue, }}>
              Đã giảm -14,000đ
            </Text> */}
          </View>
        </View>

        <TouchableArea style={style.buyButton} onPress={goOrder}>
          <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Đặt Hàng</Text>
        </TouchableArea>
      </View>
    </View>
  </>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // backgroundColor: '#dae0e670',
    width: ScreenWidth,
    // height: 60,
    borderRadius: 3,
    // paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    bottom: 0
  },
  buyButton: {
    backgroundColor: Colors.redOrange,
    // width: ScreenWidth / 2,
    height: '100%',
    padding: 25,
    paddingVertical: 15
  },
  backButton: {
    color: Colors.redOrange,
    fontSize: 24,
    // marginLeft: 10
  },
  rightButton: {
    color: Colors.magazineBlue,
    fontSize: 20,
  },
  rightButtonText: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.magazineBlue,
  }
})