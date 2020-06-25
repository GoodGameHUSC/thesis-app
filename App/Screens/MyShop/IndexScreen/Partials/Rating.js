import { toLocaleString } from 'App/Utils/_';
import Colors from 'App/Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Stars from '../../../Component/UIElement/Stars';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import ListProductManage from 'App/Screens/Component/Product/ListProductManage';
export default function Rating({ listRating }) {
  return (
    <View style={{ width: '100%', paddingTop: 5, borderTopWidth: 0.5, borderTopColor: Colors.lynxWhite, paddingBottom: 50 }}>
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
                source={require('../../../../Assets/Images/screens/man.png')}
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



