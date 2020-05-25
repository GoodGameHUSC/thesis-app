import { useNavigation } from '@react-navigation/native';
import { useAPICreator } from 'App/Shared/API';
import Colors from 'App/Theme/Colors';
import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import SearchDetailHeader from './SearchDetailHeader';
import SearchResult from './SearchResult';
import { BarIndicator } from 'react-native-indicators';
import { ScreenHeight } from 'App/Theme/Dimension';

export default function SearchScreen() {

  const [text, setText] = useState(null)
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const getSearchResult = useAPICreator('product/search', (response) => {
    setResults(response.data);
    setLoading(false)
  }, 'get', { keyword: text })


  const onSubmit = (event) => {
    setLoading(true)
    getSearchResult()
  }

  return (
    <ScrollView
      // refreshControl={
      //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      // }
      // onScroll={({ nativeEvent }) => {
      //   if (isCloseToBottom(nativeEvent) && products.pagination.hasNextPage && !products.loading) {
      //     setProducts({ ...products, loading: true })
      //     fetchMoreProduct()
      //   }
      // }}
      style={{ backgroundColor: Colors.lynxWhite }}
    >
      <SearchDetailHeader text={text} setText={setText} loading={loading} onSubmit={onSubmit} />
      <View style={{}}>
        {
          loading
            ? <Loading />
            : <Content text={text} results={results} />
        }
      </View>
    </ScrollView>
  )
}

function Content({ text, results }) {
  return (
    text && results.length > 0
      ? <SearchResult products={results} />
      : <Recommendation />
  )
}

function Recommendation({ }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Top từ khoá được tìm kiếm: áo, quần, giày bitis,..</Text>

    </View>
  )
}

function Loading() {
  return <View style={{ flex: 1, height: ScreenHeight, }}>
    <BarIndicator color={Colors.grey} count={10} size={15} />
  </View>
}