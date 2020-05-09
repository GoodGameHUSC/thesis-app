import Colors from 'App/Theme/Colors';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { useAPICreator } from '../../../Shared/API';
import CarouselBanner from './Component/CarouselBanner';
import CategoryList from './Component/CategoryList';
import HomeProducts from './Component/HomeProducts';
import HottestProduct from './Component/HottestProduct';
import QuickService from './Component/QuickService';
import TopLiveVideo from './Component/TopLiveVideo';

export default function HomeScreen() {

  const [refreshing, setRefreshing] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({ data: [], pagination: {}, loading: false });
  const [topProducts, setTopProducts] = useState({ data: [], pagination: {}, loading: false });
  const product_field = 'name gallery price rating discount';

  const fetchCategory = useAPICreator('category/get', (response) => { setCategories(response.data); }, 'get', { limit: 12 })

  const fetchTopProduct = useAPICreator('product/top_product', (response) => {
    setTopProducts({ data: response.data, pagination: response.pagination, loading: false })
  }, 'get', { limit: 6, page: 1, select: 'name gallery' })

  const fetchProduct = useAPICreator('product/get', (response) => {
    setProducts({ data: response.data, pagination: response.pagination, loading: false });
  }, 'get', { limit: 20, page: 1, select: product_field })

  const fetchMoreProduct = useAPICreator('product/get', (response) => {
    setProducts({ data: products.data.concat(...response.data), pagination: response.pagination });
  }, 'get', { limit: 20, page: products.pagination.page + 1, select: product_field })


  useEffect(() => {
    load()
    return () => { }
  }, [])

  const load = async () => {
    fetchCategory();
    fetchProduct();
    fetchTopProduct();
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    load();
    setRefreshing(false);
  }, [refreshing]);

  function isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
    return layoutMeasurement.height + contentOffset.y
      >= contentSize.height - 50;
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent) && products.pagination.hasNextPage && !products.loading) {
          setProducts({ ...products, loading: true })
          fetchMoreProduct()
        }
      }}
      style={{ backgroundColor: Colors.lynxWhite }}
    >

      <CarouselBanner />
      <QuickService />
      <HottestProduct topProducts={topProducts.data} />
      <TopLiveVideo />
      <CategoryList categories={categories} />
      <HomeProducts products={products.data} hasMore={products.pagination.hasNextPage} />
    </ScrollView>
  )
}