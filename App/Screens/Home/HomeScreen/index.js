import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import QuickService from './Component/QuickService';
import CarouselBanner from './Component/CarouselBanner';
import HottestProduct from './Component/HottestProduct';
import HomeProducts from './Component/HomeProducts';
import CategoryList from './Component/CategoryList';
import { useAPICreator } from '../../../Shared/API';

export default function HomeScreen() {

  const [refreshing, setRefreshing] = React.useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchCategory = useAPICreator('category/get', (response) => { setCategories(response.data); }, 'get', { limit: 12 })
  const fetchProduct = useAPICreator('product/get', (response) => { setProducts(response.data); }, 'get', { limit: 20 })

  useEffect(async () => {
    fetchCategory();
    let data = await fetchProduct();
    console.log(data)
    return () => { };
  }, [])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchCategory();
    fetchProduct();
    setRefreshing(false);
  }, [refreshing]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <CarouselBanner />
      <QuickService />
      <HottestProduct />
      <CategoryList categories={categories} />
      <HomeProducts products={products} />
    </ScrollView>
  )
}