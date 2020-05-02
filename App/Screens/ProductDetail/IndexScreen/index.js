import { toLocaleString } from 'App/Utils/_';
import { callAPI, useAPICreator } from 'App/Shared/API';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { BarIndicator } from 'react-native-indicators';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../../Theme/Colors';
import IconFile from '../../Component/UIElement/IconFile';
import Stars from '../../Component/UIElement/Stars';
import ProductGallery from '../Component/ProductGallery';
import { useFocusEffect } from '@react-navigation/native';

export default function ProductDetailIndex({ route, navigation }) {
  console.log("Init")
  console.log(route.params.id)
  const [refreshing, setRefreshing] = useState(false);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchProduct = useAPICreator('product/detail', (response) => {
    console.log("In fetch", route.params.id)
    setProduct(response.data);
    setLoading(false)
  }, 'get', { id: route.params.id })

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log("In fetch", route.params.id)
      setLoading(true)
      fetchProduct();
      // callAPI('product/detail', 'get', { id: route.params.id }, (response) => {
      //   setProduct(response.data);
      //   setLoading(false)
      // });
      return () => {
        console.log("Exit")
        setProduct({})
        setLoading(true)
      };
    }, [route.params.id])
  );


  const onRefresh = React.useCallback(() => {
    // setRefreshing(true);
    // console.log("Resf")
    // console.log(id)
    // // fetchProduct();
    // setRefreshing(false);
  }, [refreshing]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{
        backgroundColor: Colors.lynxWhite,
        paddingTop: 50,
        paddingBottom: 30
      }}
    >
      {
        loading ? <View style={{ flex: 1, marginTop: 150 }}>
          <BarIndicator color={Colors.grey} count={10} size={15} />
        </View> :
          <>
            <View style={{ position: 'relative', overflow: 'visible' }}>
              <ProductGallery gallery={product.gallery} />
              {/* <View style={{ position: 'absolute', top: 10, zIndex: 1, left: 10 }}>
                <IconFile path={require('../../../Assets/Icons/023-sale.png')} size={40} />
              </View> */}
            </View>
            <View style={{ backgroundColor: 'white', width: '100%', padding: 15, paddingTop: 25, borderTopWidth: 0.5, borderTopColor: Colors.lynxWhite }}>
              <Text style={[style.icon_text], { overflow: 'hidden', marginBottom: 10, fontSize: 16, fontWeight: 'bold', color: Colors.blackLight }}>{product.name}</Text>
              <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <View>
                  <Text style={[style.icon_text, { color: Colors.redOrange, fontSize: 20 }]}>
                    {toLocaleString(product.price)}
                    <Text style={{ fontSize: 14, textDecorationLine: 'underline' }}>đ</Text>
                  </Text>
                  <Text style={[style.icon_text, { color: Colors.grey, fontSize: 14 }]}>
                    <Text style={{ textDecorationLine: 'line-through' }}>{toLocaleString(product.price)}</Text>
                    <Text style={{ fontSize: 10, textDecorationLine: 'underline' }}>đ</Text>
                    <Text style={{ fontSize: 14, color: Colors.blackLight }}> -50% </Text>
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="heart" size={20} style={{ color: Colors.grey }} onPress={() => alert("Click on more ")}></Icon>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ width: 105, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Stars numberStar={product.rating[0] / product.rating[1]} />
                  <Text style={{ color: Colors.blackLight }}>{Math.round((product.rating[0] / product.rating[1]) * 10) / 10}</Text>
                </View>
                <Text style={{ color: Colors.grey }}>0 đã bán</Text>
              </View>
            </View>
            <View style={{ backgroundColor: 'white', width: '100%', padding: 15, marginTop: 5 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <Text style={[style.icon_text], {
                  overflow: 'hidden', marginBottom: 10, fontSize: 16,
                  fontWeight: 'bold', color: Colors.blueNight
                }}>Giao hàng</Text>
                <Text style={[style.icon_text], {
                  overflow: 'hidden', marginBottom: 10, fontSize: 12,
                  color: Colors.blueNight
                }}>30,000đ </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: ScreenWidth - 60 }}>
                <IconFile path={require('../../../Assets/Icons/delivery.png')} size={30} />
                <Text style={{ marginLeft: 10, color: Colors.darkGrey }}>Miễn phí vận chuyển cho đơn hàng từ 199.000 ₫ dành cho một số khu vực</Text>
              </View>
            </View>
            <View style={{ backgroundColor: 'white', width: '100%', padding: 15, marginTop: 5 }}>
              <Text style={[style.icon_text], {
                overflow: 'hidden', marginBottom: 10, fontSize: 16,
                fontWeight: 'bold', color: Colors.blueNight
              }}>Đặc Tính</Text>
              <Text>
                Thương hiệu, mẫu mã, kích thước
              </Text>
            </View>
            <View style={{ backgroundColor: 'white', width: '100%', padding: 15, marginTop: 5 }}>
              <Text style={[style.icon_text], {
                overflow: 'hidden', marginBottom: 10, fontSize: 16,
                fontWeight: 'bold', color: Colors.blueNight
              }}>Đánh giá và nhận xét (0) </Text>
              <Text>
                Hiện chưa có đánh giá nào
              </Text>
            </View>
            <View style={{ backgroundColor: 'white', width: '100%', padding: 15, marginTop: 5 }}>
              <Text style={[style.icon_text], {
                overflow: 'hidden', marginBottom: 10, fontSize: 16,
                fontWeight: 'bold', color: Colors.blueNight
              }}>Câu hỏi về sản phẩm (0)</Text>
              <Text>
                Hiện chưa có câu hỏi nào
              </Text>
              <TouchableWithoutFeedback>
                <Text style={{ color: Colors.redOrange, fontWeight: 'bold', textAlign: 'center', padding: 10, marginTop: 20 }}>Đặt câu hỏi</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={{ backgroundColor: 'white', width: '100%', padding: 20, marginTop: 5, paddingBottom: 30 }}>
              <Text style={[style.icon_text], {
                overflow: 'hidden', marginBottom: 10, fontSize: 16,
                fontWeight: 'bold', color: Colors.magazineBlue
              }}>Giới Thiệu</Text>
              <Text>
                {product.description}
              </Text>
            </View>
            <View style={{ height: 50 }}></View>
          </>
      }
    </ScrollView>
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



