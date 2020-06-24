import { useNavigation } from '@react-navigation/native';
import { getAttr, toLocaleString } from 'App/Utils/_';
import IconFile from 'App/Screens/Component/UIElement/IconFile';
import store from 'App/Stores/index';
import { Helpers } from 'App/Theme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Swipeout from 'react-native-swipeout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import { decrement, increment, remove_product } from '../../../../Stores/Cart/index';
import { Colors } from '../../../../Theme';

export default function OrderElement({ item }) {

  const navigation = useNavigation();

  const { product, amount } = item;

  const remove = () => {
    const remove_product_action = remove_product(product._id)
    store.dispatch(remove_product_action);
  };

  const increment_product = () => {
    const increment_product_action = increment(product._id)
    store.dispatch(increment_product_action);
  };

  const decrement_product = () => {
    const decrement_product_action = decrement(product._id)
    store.dispatch(decrement_product_action);
  };

  const openProduct = () => navigation.navigate('ProductDetail', {
    screen: 'Index',
    params: {
      id: product._id,
      product: product
    },
  });

  return (
    <View style={[style.container, { backgroundColor: Colors.white }]}>
      <TouchableOpacity key={product._id} onPress={() => openProduct(item)} activeOpacity={0.9} style={{ paddingTop: 10 }}>
        <View style={[{ flexDirection: 'row', paddingLeft: 15, paddingVertical: 15, backgroundColor: Colors.lynxWhite }]}>
          <View style={{ marginRight: 10 }}>
            <FastImage
              style={{ width: 70, height: undefined, aspectRatio: 1 }}
              source={{
                uri: getAttr(product, 'gallery', 0, 'link'),
                headers: { Authorization: '9876543210' },
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
          <View style={{}}>
            <View style={{}}>
              <Text style={{ flex: 1, fontSize: 14, color: Colors.textDark, textTransform: 'uppercase', }}>
                {product.name}
              </Text>
              <Text style={{ fontSize: 14, color: Colors.magazineBlue, fontWeight: 'bold' }}>{product.shop?.name || 'Được bán bởi Shopping Me'}</Text>
              <Text style={{ fontSize: 12, color: Colors.grey, flexWrap: 'wrap' }}>Số lượng: {amount}</Text>
              <Text style={{ fontSize: 12, color: Colors.grey, flexWrap: 'wrap' }}>Mẫu mã: Mẫu M, size S</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ padding: 10 }}>
        <View style={[Helpers.flexRow, { paddingVertical: 15, borderTopColor: Colors.bg, borderTopWidth: 0.5 }]}>
          <Text style={{ fontSize: 14, color: Colors.darkGrey }}>Đơn giá
          </Text>
          <Text style={{ fontSize: 14, color: Colors.redOrange, }}>{toLocaleString(product.price)} VND</Text>
        </View>
        <View style={[Helpers.flexRow, { paddingVertical: 15, borderTopColor: Colors.bg, borderTopWidth: 0.5 }]}>
          <Text style={{ fontSize: 14, color: Colors.darkGrey }}>Phí vận chuyển
          </Text>
          <Text style={{ fontSize: 14, color: Colors.redOrange, }}>{toLocaleString(product.price * 0.1)} VND</Text>
        </View>
        <View style={[Helpers.flexRow, { paddingVertical: 15, borderTopColor: Colors.bg, borderTopWidth: 0.5 }]}>
          <Text style={{ fontSize: 14, color: Colors.darkGrey }}>Tổng tiền
          ({amount} sản phẩm)
          </Text>
          <Text style={{ fontSize: 16, color: Colors.redOrange, fontWeight: 'bold' }}>{toLocaleString(product.price * amount)} VND</Text>
        </View>
      </View>

    </View>
  )
}

const style = StyleSheet.create({

  container: {
    // width: ScreenWidth,
    backgroundColor: 'white',
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    // marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lynxWhite
  },
  icon_container: {
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    flex: 1,
    height: 120,
    padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon_text: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.darkGrey
  }
})
