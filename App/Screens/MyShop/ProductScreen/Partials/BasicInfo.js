import { toLocaleString } from 'App/Utils/_';
import { callAPI } from 'App/Shared/API';
import Colors from 'App/Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React, { useState } from 'react';
import { Text, View, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import Stars from '../../../Component/UIElement/Stars';
import Toast from 'App/Screens/Component/UIElement/Toast';

export default function BasicInfo({ product }) {

  const user = useSelector(state => state.user.user);
  const [loading, setLoading] = useState(false);

  const presenter = {
    /**
     * 
     */
    addToWishList: async () => {
      if (loading) return;
      try {
        setLoading(true);
        await callAPI('order/add-wishlist', 'post', {
          product_id: product._id
        })
        setLoading(false);
        Toast.show(`Đã thêm ${product.name} vào danh mục yêu thích`)
      } catch (error) {
        alert(error);
        setLoading(false);
      }
    },
    /**
     * 
     */
    removeFromWishList: async () => {
      if (loading) return;
      try {
        setLoading(true);
        await callAPI('order/remove-wishlist', 'post', {
          product_id: product._id
        })
        setLoading(false);
        Toast.show(`Đã xoá ${product.name} khỏi danh mục yêu thích`)
      } catch (error) {
        alert(error);
        setLoading(false);
      }
    }
  }

  const helper = {
    checkProductInWishList: () => {
      const wishlist = user ? user.wishlist : null;
      if (!wishlist || !(wishlist instanceof Array)) return false;
      let existed = false;
      wishlist.some((element) => { if (element._id == product._id) { existed = true; return true } });
      return existed;
    }
  }

  return (
    <View style={{ backgroundColor: 'white', width: '100%', padding: 15, paddingTop: 25, borderTopWidth: 0.5, borderTopColor: Colors.lynxWhite }}>
      <Text style={[style.icon_text], { overflow: 'hidden', marginBottom: 10, fontSize: 16, fontWeight: 'bold', color: Colors.blackLight }}>
        Tên sản phẩm: {product.name}</Text>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <View>
          <Text style={[style.icon_text, { color: Colors.redOrange, fontSize: 16 }]}>
            Giá bán: {toLocaleString(product.real_price ? product.real_price : product.price)}
            <Text style={{ fontSize: 16, textDecorationLine: 'underline' }}>đ</Text>
          </Text>
          {
            product.discount && <Text style={[style.icon_text, { color: Colors.grey, fontSize: 14 }]}>
              Giá gốc : <Text>{toLocaleString(product.price)}</Text>
              <Text style={{ fontSize: 10, textDecorationLine: 'underline' }}>đ</Text>
            </Text>
          }
          {
            product.discount && <Text style={[style.icon_text, { color: Colors.grey, fontSize: 14 }]}>
              Mức giảm giá: <Text style={{ fontSize: 14, color: Colors.blackLight }}> -{product.discount}% </Text>
            </Text>
          }
        </View>
        {/* <View style={{ flexDirection: 'row' }}>
          {
            helper.checkProductInWishList()
              ? <Icon name="heart" size={20} style={{ color: Colors.grey }} onPress={presenter.removeFromWishList}></Icon>
              : <Icon name="heart" size={20} style={{ color: Colors.grey }} onPress={presenter.addToWishList}></Icon>
          }
        </View> */}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ width: 105, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        </View>
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



