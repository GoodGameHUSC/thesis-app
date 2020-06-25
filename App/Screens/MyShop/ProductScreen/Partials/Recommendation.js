import ListProduct from 'App/Screens/Component/Product/ListProduct';
import { useAPICreator } from 'App/Shared/API';
import Colors from 'App/Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
export default function Recommendation({ product }) {
  const [products, setProducts] = useState({ data: [], pagination: {}, loading: false });


  const fetchRelateProducts = useAPICreator('product/relate_product', (response) => {
    setProducts({ data: response.data, pagination: response.pagination, loading: false })
  }, 'get', { limit: 50, page: 1, id: product._id, select: 'name gallery price rating discount' })

  useEffect(() => {
    fetchRelateProducts()
    return () => { }
  }, [])
  return (
    <View style={{ width: '100%', paddingVertical: 20, marginTop: 5, paddingBottom: 30 }}>
      <Text style={[style.icon_text], {
        overflow: 'hidden', marginBottom: 10, fontSize: 16,
        fontWeight: 'bold', color: Colors.magazineBlue,
        paddingHorizontal: 20
      }}>Sản phẩm cùng được tìm kiếm</Text>
      <View>
        <ListProduct
          products={products.data}
          hasMore={products.pagination.hasNextPage}
          infinite={false}
        />
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



