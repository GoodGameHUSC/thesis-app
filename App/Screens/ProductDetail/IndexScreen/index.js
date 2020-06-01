import { useFocusEffect } from '@react-navigation/native';
import { useAPICreator } from 'App/Shared/API';
import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { BarIndicator } from 'react-native-indicators';
import Colors from '../../../Theme/Colors';
import ProductGallery from '../Component/ProductGallery';
import { BasicInfo, Describe, Feature, QnA, Rating, Recommendation, ShipMethod, ShopInfo, BuyAction } from './Partials';

export default function ProductDetailIndex({ route, navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchProduct = useAPICreator('product/detail', (response) => {
    setProduct(response.data);
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


  const onRefresh = React.useCallback(() => {
    // setRefreshing(true);
    // console.log("Resf")
    // console.log(id)
    // // fetchProduct();
    // setRefreshing(false);
  }, [refreshing]);

  return (
    loading ?
      <View style={{ flex: 1, marginTop: 150 }}>
        <BarIndicator color={Colors.grey} count={10} size={15} />
      </View> :
      <View>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={{
            backgroundColor: Colors.lynxWhite,
            paddingTop: 50,
            paddingBottom: 30,

          }}
        >
          <View style={{ position: 'relative' }}>
            <ProductGallery gallery={product.gallery} />
            <BasicInfo product={product} />
            {/* <ShipMethod product={product} /> */}
            <Feature product={product} />
            <Rating product={product} />
            {/* <QnA product={product} /> */}
            <ShopInfo product={product} />
            <Describe product={product} />
            <Recommendation product={product} />
            <View style={{ height: 50 }}></View>
          </View>
        </ScrollView>
        <BuyAction product={product} />
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



