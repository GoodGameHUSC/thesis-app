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

export default function CartElement({ item }) {

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

  const swipeoutBtns = [
    {
      text: <IconSimple name="trash" size={24} style={{ color: 'white' }} />,
      // backgroundColor: Colors.redOrange,
      onPress: remove,
      underlayColor: 'red',
      type: 'delete'
    }
  ]

  return (
    <Swipeout right={swipeoutBtns} autoClose={true} backgroundColor={'transparent'} style={{ marginBottom: 8 }}>
      <TouchableOpacity style={[style.container, { backgroundColor: Colors.white }]} key={product._id} onPress={() => openProduct(item)} activeOpacity={0.9}>
        <View style={[Helpers.flexRow, { borderBottomWidth: 0.5, borderBottomColor: Colors.bg, paddingVertical: 8, paddingHorizontal: 15 }]}>
          <View style={[Helpers.flexRow, { color: Colors.darkGrey }]}>
            <IconFile path={require('../../../../Assets/Images/screens/ic_launcher_round.png')} size={20} />
            <Text style={{ fontSize: 14, color: Colors.magazineBlue, marginLeft: 5, fontWeight: 'bold' }}>{product.shop || 'Được bán bởi Shopping Me'}</Text>
          </View>
          <IconSimple size={10} name="arrow-right" style={{ color: Colors.textDark }} />
        </View>
        <View style={[{ flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 15, paddingVertical: 15, }]}>
          <View style={{ marginRight: 10 }}>
            <FastImage
              style={{ width: 80, height: undefined, aspectRatio: 1 }}
              source={{
                uri: getAttr(product, 'gallery', 0, 'link'),
                headers: { Authorization: '9876543210' },
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
          <View style={{ minHeight: 80, width: 260 }}>
            <View style={{ flexDirection: 'row', flexGrow: 1 }}>
              <Text style={{ flex: 1, fontSize: 16, color: Colors.textDark, textTransform: 'uppercase', flexShrink: 1 }} numberOfLines={1}>
                {product.name}
              </Text>
            </View>
            <View style={[Helpers.flexRow]}>
              <View>
                <Text style={{ fontSize: 16, color: Colors.redOrange, fontWeight: 'bold' }}>{toLocaleString(product.price)} VND</Text>
                <Text style={{ fontSize: 12, color: Colors.grey, flexWrap: 'wrap' }}>Off the TopLiveVideo</Text>
              </View>
              <View style={[Helpers.flexRow,]}>
                <View style={[Helpers.flexRow, { width: 80, marginTop: 10 }]}>
                  <AntDesign hitSlop={20} size={14} name="minus" onPress={decrement_product} style={{ color: Colors.textDark, padding: 3, backgroundColor: Colors.bgDark, borderRadius: 5 }} />
                  <Text style={{ fontSize: 16 }}>{amount}</Text>
                  <AntDesign hitSlop={20} size={14} name="plus" onPress={increment_product} style={{ color: Colors.textDark, padding: 3, backgroundColor: Colors.bgDark, borderRadius: 5 }} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeout>
  )
}

const style = StyleSheet.create({

  container: {
    // width: ScreenWidth,
    backgroundColor: 'white',
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    // marginBottom: 5 v
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
