import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { getAttr } from '../../../../Utils/_';
import Colors from '../../../../Theme/Colors';
import { Section } from '../../../../Theme/Styles.js';
import { useNavigation } from '@react-navigation/native';
const list_dump_prod = [
  {
    id: 4,
    icon_file: require('../../../../Assets/Images/defaults/iphone_11.png'),
    text: "Iphone 11",
    size: 65,
    action: () => {
      alert("Chưa làm :v")
    }
  },
  {
    id: 3,
    icon_file: require('../../../../Assets/Images/defaults/watch2.png'),
    text: "Đồng hồ Luminox",
    size: 60,
    action: () => {
      alert("Chưa làm :v")
    }
  },
  {
    id: 1,
    icon_file: require('../../../../Assets/Images/defaults/shirt.jpeg'),
    text: "Áo khoác da",
    // size: 40,
    action: () => {
      alert("Chưa làm :v")
    }
  },
  {
    id: 5,
    icon_file: require('../../../../Assets/Images/defaults/dress.jpg'),
    text: "Đầm dạ hội hot 2020",
    action: () => {
      alert("Chưa làm :v")
    }
  },
  {
    id: 6,
    icon_file: require('../../../../Assets/Images/defaults/mask.jpg'),
    text: "Khẩu trang Pitta Nhật Bản",
    action: () => {
      alert("Chưa làm :v")
    }
  },
  {
    id: 2,
    icon_file: require('../../../../Assets/Images/defaults/headphone.jpg'),
    text: "Tai nghe Beast Pro",
    size: 50,
    action: () => {
      alert("Chưa làm :v")
    }
  },
]

export default function HottestProduct({ topProducts }) {
  const navigation = useNavigation();
  function openProduct(item) {
    console.log(item)
    navigation.navigate('ProductDetail', {
      screen: 'Index',
      params: {
        id: item._id,
        product: item
      },
    });
  }

  return (
    <View style={[Section.container]}>
      <View style={[Section.flexRow]}>
        <Text style={[Section.title]}> Tìm kiếm hàng đầu </Text>
        <TouchableOpacity>
          <Text style={[Section.view_more]}> Xem thêm</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={topProducts}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={[style.icon_container, { backgroundColor: Colors.lynxWhite }]} key={item._id} onPress={() => openProduct(item)} activeOpacity={0.9}>
                <>
                  <FastImage
                    style={{ width: undefined, height: 70, aspectRatio: 1, borderRadius: 100 }}
                    source={{
                      uri: getAttr(item, 'gallery', 0, 'link'),
                      priority: FastImage.priority.high,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                  <Text style={style.icon_text} numberOfLines={2}>{item.name}</Text>
                </>
              </TouchableOpacity>
            )
          }}
          // horizontal={true}
          keyExtractor={item => item._id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}


const style = {
  container: {
    width: ScreenWidth,
    backgroundColor: 'white',
    overflow: 'scroll',
    paddingHorizontal: 0,
    paddingVertical: 20,
    marginBottom: 5
  },
  icon_container: {
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    flex: 1,
    height: 120,
    padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon_text: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.darkGrey
  }
}
