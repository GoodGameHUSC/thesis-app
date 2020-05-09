import { toLocaleString } from 'App/Utils/_';
import Colors from 'App/Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Stars from '../../../Component/UIElement/Stars';
export default function BasicInfo({ product }) {
  return (
    <View style={{ backgroundColor: 'white', width: '100%', padding: 15, paddingTop: 25, borderTopWidth: 0.5, borderTopColor: Colors.lynxWhite }}>
      <Text style={[style.icon_text], { overflow: 'hidden', marginBottom: 10, fontSize: 16, fontWeight: 'bold', color: Colors.blackLight }}>{product.name}</Text>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <View>
          <Text style={[style.icon_text, { color: Colors.redOrange, fontSize: 20 }]}>
            {toLocaleString(product.real_price ? product.real_price : product.price)}
            <Text style={{ fontSize: 14, textDecorationLine: 'underline' }}>đ</Text>
          </Text>
          {
            product.discount && <Text style={[style.icon_text, { color: Colors.grey, fontSize: 14 }]}>
              <Text style={{ textDecorationLine: 'line-through' }}>{toLocaleString(product.price)}</Text>
              <Text style={{ fontSize: 10, textDecorationLine: 'underline' }}>đ</Text>
              <Text style={{ fontSize: 14, color: Colors.blackLight }}> -{product.discount}% </Text>
            </Text>
          }
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="heart" size={20} style={{ color: Colors.grey }} onPress={() => alert("Click on more ")}></Icon>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ width: 105, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Stars numberStar={product.rating} />
          <Text style={{ color: Colors.blackLight }}>{product.rating}</Text>
        </View>
        <Text style={{ color: Colors.grey }}>0 đã bán</Text>
      </View>
    </View>

  )
}
const style = {
  container: {
    width: ScreenWidth,
    backgroundColor: 'white',
    // overflow: 'hidden',
    paddingHorizontal: 0,
    paddingVertical: 20,
    paddingBottom: 0,
    // marginBottom: 5,

  },
  icon_container: {
    marginHorizontal: 2.5,
    marginBottom: 5,
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    // borderRadius: 3,
  },
  icon_text: {
    // fontSize: 12,
    color: Colors.blackLight
  }
}



