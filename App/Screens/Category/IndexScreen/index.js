import { useFocusEffect } from '@react-navigation/native';
import { useAPICreator } from 'App/Shared/API';
import React, { useState } from 'react';
import { RefreshControl, ScrollView, View, Text } from 'react-native';
import { BarIndicator } from 'react-native-indicators';
import Colors from '../../../Theme/Colors';
import CarouselControl from 'App/Screens/Component/UIElement/CarouselControl';
import ListProduct from 'App/Screens/Component/Product/ListProduct';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
const Tab = createMaterialTopTabNavigator();
const carousel_dump_data = [
  {
    image_url: "https://cf.shopee.vn/file/fdcd36204f8136174564b8aec1e32c78"
  },
  {
    image_url: "https://cf.shopee.vn/file/4d53186b411e5bfd0af4d1e50b598187"
  },
  {
    image_url: "https://cf.shopee.vn/file/f72cfd1007cd22499efad116dc9bb88c"
  },
]

export default function CategoryDetail({ route, navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [products, setProducts] = useState({});
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDetail = useAPICreator('category/detail', (response) => {
    setProducts(response.data.products);
    setCategory(response.data.category);
    setLoading(false)
  }, 'get', { id: route.params.id })

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true)
      fetchDetail();
      return () => {
        setProducts([])
        setCategory([])
        setLoading(true)
      };
    }, [route.params.id])
  );


  const onRefresh = React.useCallback(() => {
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
        loading ?
          <View style={{ flex: 1, marginTop: 150 }}>
            <BarIndicator color={Colors.grey} count={10} size={15} />
          </View> :
          <>
            <CarouselControl control={true} carouselItems={carousel_dump_data} />
            <View >
              <View style={{ backgroundColor: 'white', width: '100%', padding: 15, marginTop: 5 }}>
                <Text style={[style.icon_text], {
                  overflow: 'hidden', marginBottom: 10, fontSize: 14,
                  color: Colors.darkGrey
                }}> </Text>
              </View>
            </View>
            <View >
              {/* <View style={{ backgroundColor: 'white', width: '100%', padding: 15, marginTop: 5 }}>
                <Text style={[style.icon_text], {
                  overflow: 'hidden', marginBottom: 10, fontSize: 14,
                  color: Colors.darkGrey
                }}>Top bán chạy </Text>
              </View> */}
            </View>
            <View style={{ backgroundColor: 'white', width: '100%', marginTop: 5 }} >
              <Tab.Navigator
                tabBarOptions={{
                  activeTintColor: Colors.darkGrey,
                  labelStyle: { fontSize: 12, fontWeight: 'bold' },
                  style: {
                    backgroundColor: 'white',
                    position: 'relative',
                    shadowOpacity: 0,
                    elevation: 0,
                    borderBottomWidth: 0,
                  },
                  showIcon: true,
                  labelStyle: {
                    // color: 'red'
                  },
                  indicatorStyle: {
                    opacity: 0
                  }
                }}
              // tabBar={props => <MyTabBar {...props} />}
              >
                <Tab.Screen name="Recommendation" options={{
                  tabBarLabel: 'Gợi ý',
                  activeTintColor: Colors.grey,
                  // tabBarIcon: <IconFontisto name="shopping-store" style={{ fontSize: 12 }} />
                }} component={() => <ListProduct
                  products={products}
                  hasMore={false}
                />} />
                <Tab.Screen name="Hot" options={{
                  tabBarLabel: 'Bán chạy',
                  activeTintColor: Colors.grey,
                  // tabBarIcon: <IconFontisto name="shopping-store" style={{ fontSize: 12 }} />
                }} component={() => <ListProduct
                  products={products}
                  hasMore={false}
                />} />
                <Tab.Screen name="New" options={{
                  tabBarLabel: 'Mới nhất',
                  activeTintColor: Colors.grey,
                  // tabBarIcon: <IconFontAwesome name="robot" style={{ fontSize: 14 }} />
                }} component={() => <ListProduct
                  products={products}
                  hasMore={false}
                />} />
                <Tab.Screen name="Popular"
                  options={{
                    tabBarLabel: 'Phổ biến',
                    // tabBarLabel: () => <Text> Phổ biến <IconFontAwesome name="robot" style={{ fontSize: 14 }} /> </Text>,
                    activeTintColor: Colors.grey,
                  }}
                  component={() => <ListProduct
                    products={products}
                    hasMore={false}
                  />} />
              </Tab.Navigator>
            </View>
          </>
      }
    </ScrollView>
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
  icon_text: {
    // fontSize: 12,
    color: Colors.blackLight
  }
}



