import { useRoute, useFocusEffect } from '@react-navigation/native';
import Colors from 'App/Theme/Colors';
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useAPICreator, callAPI } from 'App/Shared/API';
import LoadingScreen from 'App/Screens/Component/Screen/LoadingScreen';
import Stars from 'App/Screens/Component/UIElement/Stars';

export default function RatingScreen({ }) {
  const route = useRoute();
  const [listRating, setListRating] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchRating = useAPICreator('product/view-rating', (response) => {
    setListRating(response.data);
    setLoading(false)
  }, 'get', { product_id: route.params.id })

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true)
      fetchRating();

      return () => {
        setListRating({})
        setLoading(false)
      };
    }, [route.params.id])
  );

  async function load() {
    debugger;
    setLoading(true);
    await fetchRating();
    setLoading(false);
  }

  return (<>
    <View>{
      loading ? <LoadingScreen />
        :
        <FlatList
          data={listRating}
          keyExtractor={item => item._id}
          renderItem={({ item }) => <View
            style={{ flexDirection: 'row', borderTopColor: Colors.lynxWhite, marginTop: 10, backgroundColor: 'white', marginVertical: 5, marginHorizontal: 5, padding: 10, borderRadius: 5 }}
          >
            {
              item.user.avatar ?
                <FastImage
                  style={{ width: 30, height: undefined, aspectRatio: 1, borderRadius: 20 }}
                  source={{
                    uri: item.user.avatar,
                    priority: FastImage.priority.high,
                  }}
                  resizeMode={FastImage.resizeMode.center}
                />
                : <Image
                  source={require('../../../Assets/Images/screens/man.png')}
                  style={{ width: 30, height: undefined, aspectRatio: 1, borderRadius: 20 }}
                />
            }
            <View style={{ marginLeft: 10, flex: 1 }}>
              <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', flex: 1, marginBottom: 5 }}>
                <Text style={{ color: Colors.textDark, fontWeight: 'bold', fontSize: 13 }}>
                  {item.user.username}
                </Text>
                <View>
                  {
                    item.created_at &&
                    <Text style={{ color: Colors.darkGrey, fontSize: 12 }}>{(new Date(item.created_at)).toLocaleDateString("vi-VN")}</Text>
                  }
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10 }}>
                <Stars numberStar={item.star} />
              </View>

              <Text style={{ color: Colors.darkGrey }}>
                {item.content}
              </Text>
              {
                item.image ?
                  <View>
                    <Text style={{ color: Colors.grey, marginTop: 10 }}>
                      Hình ảnh
                  </Text>
                    <FastImage
                      style={{ width: 100, marginTop: 5, aspectRatio: 1, borderRadius: 5 }}
                      source={{
                        uri: item.image,
                        priority: FastImage.priority.high,
                      }}
                      resizeMode={FastImage.resizeMode.center}
                    />
                  </View> : <View></View>
              }
            </View>

          </View>}
        />
    }
    </View>
  </>
  )

  function _renderItem({ item, index }) {
    return (
      <View style={{
        height: undefined,
        aspectRatio: 1,
        justifyContent: 'center'
      }}
        key={item._id}
      >
        <FastImage
          style={{ width: undefined, height: undefined, aspectRatio: 1 }}
          source={{
            uri: item.link,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.center}
        />
      </View>

    )
  }

}

const style = {
  container: {

  },

}