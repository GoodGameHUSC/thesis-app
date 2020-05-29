import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import IconIonicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/Feather';
import ListProduct from 'App/Screens/Component/Product/ListProduct';


export default function SearchResult({ products, pagination }) {
  return (<>
    <View style={style.container}>
      <Text style={{ marginTop: 20, marginBottom: 10, paddingHorizontal: 10 }}>Kết quả tìm kiếm ({pagination.totalDocs} sản phẩm)</Text>
      <ListProduct products={products} hasMore={false} infinite={false} />
    </View>
  </>
  )
}

const style = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    width: ScreenWidth,
  },
})
