import { useNavigation, useRoute } from '@react-navigation/native';
import { useAPICreator } from 'App/Shared/API';
import Colors from 'App/Theme/Colors';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import SearchDetailHeader from './SearchDetailHeader';
import SearchResult from './SearchResult';
import { BarIndicator } from 'react-native-indicators';
import { ScreenHeight } from 'App/Theme/Dimension';

export default function SearchScreen() {
  const route = useRoute();

  const [text, setText] = useState(null)
  const [results, setResults] = useState({ data: [], pagination: {} });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (route.params?.text_search) {
      setText(route.params?.text_search);
      setLoading(true)
      getSearchResult(route.params?.text_search)();
    }
  }, [route.params?.text_search]);

  const onSubmit = (event) => {
    setLoading(true)
    getSearchResult(text)();
  }

  function getSearchResult(default_text) {
    return useAPICreator('product/search', (response) => {
      setResults({ data: response.data, pagination: response.pagination });
      setLoading(false)
    }, 'get', { keyword: default_text })
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
    text && results.data.length > 0
      ? <SearchResult products={results.data} pagination={results.pagination} />
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