import Colors from '../../../../Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import IconFile from '../../../Component/UIElement/IconFile';
import Stars from 'App/Screens/Component/UIElement/Stars';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 1,
    user: {
      name: 'Huấn Râu Dì',
      avatar: 'https://i2.wp.com/lucloi.vn/wp-content/uploads/2020/03/huanhoahong-1_ugww.jpg?fit=1080%2C608&ssl=1'
    },
    content: 'Sau này, chỉ có làm, chịu khó, cần cù thì bù siêng năng, chỉ có làm thì mới có ăn. Những cái loại không làm mà đòi có ăn thì ăn đ** b***, ăn cứt',
    rating: 4.2,
    createdAt: new Date()
  },
  {
    id: 1,
    user: {
      name: 'Huấn Râu Dì',
      avatar: 'https://i2.wp.com/lucloi.vn/wp-content/uploads/2020/03/huanhoahong-1_ugww.jpg?fit=1080%2C608&ssl=1'
    },
    content: 'Sau này, chỉ có làm, chịu khó, cần cù thì bù siêng năng, chỉ có làm thì mới có ăn. Những cái loại không làm mà đòi có ăn thì ăn đ** b***, ăn cứt',
    rating: 4.2,
    createdAt: new Date()
  }
];

export default function Rating({ product }) {

  const list_rating = product.list_rating;

  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: 'white', width: '100%', padding: 15, marginTop: 5 }}>
      <Text style={[style.icon_text], {
        overflow: 'hidden', marginBottom: 10, fontSize: 16,
        fontWeight: 'bold', color: Colors.magazineBlue
      }}>Đánh giá và nhận xét</Text>
      {
        list_rating.length > 0 ?
          (
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Stars numberStar={product.rating} />
                <Text style={{ color: Colors.darkGrey, fontSize: 15, marginLeft: 10 }}>
                  {product.rating}/5
                  {/* (192 đánh giá) */}
                </Text>
              </View>

              <FlatList
                data={list_rating}
                keyExtractor={item => item._id}
                renderItem={({ item }) => <View style={{ flexDirection: 'row', paddingVertical: 10, borderTopWidth: 1, borderTopColor: Colors.lynxWhite, marginTop: 10 }}>
                  {
                    item.user.avatar ?
                      <FastImage
                        style={{ width: 20, height: undefined, aspectRatio: 1, borderRadius: 20 }}
                        source={{
                          uri: item.user.avatar,
                          priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.center}
                      />
                      : <Image
                        source={require('../../../../Assets/Images/screens/man.png')}
                        style={{ width: 20, height: undefined, aspectRatio: 1, borderRadius: 20 }}
                      />
                  }
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: Colors.textDark, fontWeight: 'bold', fontSize: 13, marginBottom: 10 }}>{item.user.username}</Text>
                    <Text style={{ color: Colors.darkGrey }}>
                      {item.content}
                    </Text>
                    <View style={{ marginTop: 10, }}>
                      {/* <Text style={{ color: Colors.darkGrey, fontSize: 12 }}>{item.createdAt.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Text> */}
                      {
                        item.created_at &&
                        <Text style={{ color: Colors.darkGrey, fontSize: 12 }}>{(new Date(item.created_at)).toLocaleDateString("vi-VN")}</Text>
                      }
                    </View>
                  </View>

                </View>}
              />
              <TouchableArea style={{ borderTopWidth: 1, borderTopColor: Colors.lynxWhite, paddingTop: 10, marginTop: 15 }}
                onPress={() => navigation.navigate('ProductDetail', {
                  screen: "Rating"
                })}
              >

                <Text style={{
                  overflow: 'hidden', fontSize: 14, fontWeight: 'bold',
                  textAlign: 'center', color: Colors.redOrange,

                }}>Xem tất cả đánh giá
                  {/* (192 đánh giá) */}
                </Text>
              </TouchableArea>
            </View>
          ) : <Text>Hiện chưa có đánh giá nào</Text>
      }

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



