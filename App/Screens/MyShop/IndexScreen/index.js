import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFocusEffect } from '@react-navigation/native';
import LoadingScreen from 'App/Screens/Component/Screen/LoadingScreen';
import { callAPI, useAPICreator } from 'App/Shared/API';
import React, { useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import Colors from '../../../Theme/Colors';
import BasicInfo from './Partials/BasicInfo';
import Product from './Partials/Product';
const Tab = createMaterialTopTabNavigator();


export default function ShopDetail({ route, navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [products, setProducts] = useState({});
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const { shop } = route.params;
  console.log(shop);

  const user = useSelector(state => state.user.user);
  const navigate = {
    goChatWithShop: (conversation) => navigation.navigate('Chats', {
      screen: 'ChatRoom',
      params: {
        conversation
      }
    }),

    goToLogin: () => navigation.navigate('Auth', {
      screen: "Index",
      params: {
        message: 'Vui lòng đăng nhập để tiếp tục'
      }
    }
    ),

    gotoShopDetail: () => navigation.navigate('Shop', {
      screen: "Index",
      params: {
        shop
      }
    }
    ),
  }
  const fetchDetail = useAPICreator(`shop/view-shop`, (response) => {
    setInfo(response.data.info);
    setProducts(response.data.products);
    console.log(response)
    setLoading(false)
  }, 'get', { id: shop._id })

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true)
      fetchDetail();
      return () => {
        setProducts([])
        setInfo([])
        setLoading(true)
      };
    }, [route.params.id])
  );

  const presenter = {
    chat: async () => {
      if (user) {
        const response = await callAPI('conversation/get-conversation', 'get', {
          user_id: user._id,
          shop_id: shop._id
        })
        navigate.goChatWithShop(response.data)
      } else navigate.goToLogin();
    }
  }

  const onRefresh = React.useCallback(() => {
  }, [refreshing]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{
        backgroundColor: Colors.lynxWhite,
        paddingTop: 55,
        paddingBottom: 30
      }}
    >
      {
        loading ?
          <LoadingScreen />
          : <View style={{ width: '100%', paddingBottom: 30 }} >
            <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5, paddingVertical: 20 }
            }>
              <View style={{ marginRight: 10 }}>
                <FastImage
                  style={{ width: undefined, height: 100, aspectRatio: 1, borderRadius: 50 }}
                  source={{
                    uri: shop.brand_image,
                    priority: FastImage.priority.high,
                  }}
                  resizeMode={FastImage.resizeMode.center}
                />
              </View>
              <View>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: Colors.magazineBlue, textAlign: 'center' }}>{shop.name}</Text>
                <Text style={{ fontSize: 14, color: Colors.grey, textAlign: 'center', marginTop: 5 }}>{shop.slogan}</Text>
              </View>
            </View>

            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: Colors.magazineBlue,
                labelStyle: { fontSize: 14, fontWeight: 'bold' },
                style: {
                  backgroundColor: 'white',
                  position: 'relative',
                  shadowOpacity: 0,
                  elevation: 0,
                  borderBottomWidth: 0,
                },

              }}
              swipeEnabled={false}
            >
              <Tab.Screen name="Info" options={{
                tabBarLabel: 'Thông tin',
              }} component={() => <BasicInfo shop={info} />} />
              <Tab.Screen
                name="Product"
                options={{
                  tabBarLabel: 'Quản lý SP',
                }}
                component={() => <Product products={products} />}
              />
              <Tab.Screen name="Rating" options={{
                tabBarLabel: 'Đánh giá',
              }} component={() => <Product products={products} />} />
            </Tab.Navigator>
          </View>
      }

    </ScrollView>
  )
}


const style = {
  backgroundVideo: {
    // position: 'absolute'

    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  icon_text: {
    // fontSize: 12,
    color: Colors.blackLight
  }
}



