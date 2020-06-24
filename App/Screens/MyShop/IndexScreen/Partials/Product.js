import { toLocaleString } from 'App/Utils/_';
import Colors from 'App/Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Stars from '../../../Component/UIElement/Stars';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import ListProduct from 'App/Screens/Component/Product/ListProduct';
export default function Product({ products }) {
  return (
    <View style={{ width: '100%', paddingTop: 5, borderTopWidth: 0.5, borderTopColor: Colors.lynxWhite, paddingBottom: 50 }}>
      <ListProduct
        products={products}
        hasMore={false}
      />
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



