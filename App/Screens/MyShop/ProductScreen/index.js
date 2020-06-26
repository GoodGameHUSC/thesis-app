import { useFocusEffect } from '@react-navigation/native';
import LoadingScreen from 'App/Screens/Component/Screen/LoadingScreen';
import { useAPICreator, callAPI } from 'App/Shared/API';
import React, { useState } from 'react';
import { RefreshControl, ScrollView, View, Text } from 'react-native';
import Colors from '../../../Theme/Colors';
import ProductGallery from '../Component/ProductGallery';
import { BasicInfo, Describe, Feature, Rating } from './Partials';
import { TouchableArea } from 'App/Screens/Component/UIElement';
import { Toast } from 'App/Screens/Component/UIElement';

export default function ProductDetailIndex({ route, navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchProduct = useAPICreator('product/detail', (response) => {
    setProduct({ ...response.data.product, list_rating: response.data.rating });
    setLoading(false)
  }, 'get', { id: route.params.id })

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      setLoading(true)
      fetchProduct();
      // callAPI('product/detail', 'get', { id: route.params.id }, (response) => {
      //   setProduct(response.data);
      //   setLoading(false)
      // });
      return () => {
        setProduct({})
        setLoading(true)
      };
    }, [route.params.id])
  );

  const deleteProduct = () => {
    setLoading(true)
    callAPI('shop/remove-product', 'post', {
      "shop_id": product?.shop?._id,
      "product_id": product?._id
    }, () => {
      setLoading(false)
      Toast.show("Xoá sản phẩm thành công")
      navigation.goBack();
    }, () => {
      setLoading(false)
      Toast.show("Chức năng này hiện không khả dụng")
    })
  }

  const onRefresh = React.useCallback(() => {
    // setRefreshing(true);
    // console.log("Resf")
    // console.log(id)
    // // fetchProduct();
    // setRefreshing(false);
  }, [refreshing]);

  return (
    loading ?
      <LoadingScreen /> :
      <View>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={{
            backgroundColor: Colors.lynxWhite,
            paddingBottom: 10,
          }}
        >
          <View style={{ position: 'relative' }}>
            <ProductGallery gallery={product.gallery} />
            <BasicInfo product={product} />
            {/* <Feature product={product} /> */}
            <Rating product={product} />
            {/* <QnA product={product} /> */}
            <Describe product={product} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: Colors.white, padding: 20 }}>
              <TouchableArea>
                <Text style={[style.icon_text, { color: Colors.primary, fontSize: 14, marginRight: 10, padding: 10 }]}>
                  Cập Nhật
                </Text>
              </TouchableArea>
              <TouchableArea onPress={deleteProduct}>
                <Text style={[style.icon_text, { color: Colors.redOrange, fontSize: 14, padding: 10 }]}>
                  Xoá
                </Text>
              </TouchableArea>
            </View>
            <View style={{ height: 50 }}></View>
          </View>
        </ScrollView>
      </View>
  )
}

const ProductDetailContext = React.createContext();
// const { Provider, Consumer } =

const style = {
  backgroundVideo: {
    // position: 'absolute'

    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
}



