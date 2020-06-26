import { useNavigation, useRoute } from '@react-navigation/native';
import { useAPICreator } from 'App/Shared/API';
import Colors from 'App/Theme/Colors';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import SearchDetailHeader from './SearchDetailHeader';
import SearchResult from './SearchResult';
import { BarIndicator } from 'react-native-indicators';
import { ScreenHeight } from 'App/Theme/Dimension';
import { useSelector } from 'react-redux';
import { TouchableArea } from 'App/Screens/Component/UIElement';

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

  function onPickRecommendation(text) {
    setText(text);
    setLoading(true)
    getSearchResult(text)();
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
            : <Content text={text} onPickRecommendation={onPickRecommendation} results={results} />
        }
      </View>
    </ScrollView>
  )
}

function Content({ text, results, onPickRecommendation }) {
  return (
    text && results.data.length > 0
      ? <SearchResult products={results.data} pagination={results.pagination} />
      : <Recommendation onPickRecommendation={onPickRecommendation} />
  )
}

function Recommendation({ onPickRecommendation }) {
  const interested = useSelector(state => state?.user?.user?.interested);
  return (
    <>
      <View style={{ paddingHorizontal: 8, backgroundColor: 'white' }}>
        <FlatList
          data={interested}
          renderItem={({ item }) =>
            <TouchableArea onPress={() => onPickRecommendation(item.keyword)}>
              <View style={{
                backgroundColor: Colors.lynxWhite,
                padding: 5,
                overflow: 'hidden',
                borderRadius: 5,
                // color: 'black',
                marginVertical: 3,
                marginHorizontal: 5,
                borderBottomWidth: 0,

              }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.keyword}</Text>
              </View>
            </TouchableArea>
          }
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
      </View>

    </>
  )
}

function Loading() {
  return <View style={{ flex: 1, height: ScreenHeight, }}>
    <BarIndicator color={Colors.grey} count={10} size={15} />
  </View>
}