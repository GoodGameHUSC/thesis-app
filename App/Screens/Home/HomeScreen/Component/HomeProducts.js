import React from 'react';
import { Image, View, Text, TouchableWithoutFeedback, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import IconFile from 'App/Screens/Component/UIElement/IconFile';
import Colors from '../../../../Theme/Colors';
import { Section } from '../../../../Theme/Styles.js'

const list_dump_prod = [
  {
    id: 4,
    icon_file: require('../../../../Assets/Images/defaults/iphone_11.png'),
    text: "Iphone 11",
    size: 65,
    action: () => {
      alert("Hhaa")
    }
  },
  {
    id: 3,
    icon_file: require('../../../../Assets/Images/defaults/watch2.png'),
    text: "Đồng hồ Luminox",
    size: 60,
    action: () => {
      alert("Hhaa")
    }
  },
  {
    id: 1,
    icon_file: require('../../../../Assets/Images/defaults/shirt.jpeg'),
    text: "Áo khoác da",
    // size: 40,
    action: () => {
      alert("Hhaa")
    }
  },
  {
    id: 5,
    icon_file: require('../../../../Assets/Images/defaults/dress.jpg'),
    text: "Đầm dạ hội hot 2020",
    action: () => {
      alert("Hhaa")
    }
  },
  {
    id: 6,
    icon_file: require('../../../../Assets/Images/defaults/mask.jpg'),
    text: "Khẩu trang Pitta Nhật Bản",
    action: () => {
      alert("Hhaa")
    }
  },
  {
    id: 2,
    icon_file: require('../../../../Assets/Images/defaults/headphone.jpg'),
    text: "Tai nghe Beast Pro",
    size: 50,
    action: () => {
      alert("Hhaa")
    }
  },
]

export default function HomeProducts({ products }) {

  return (
    <View style={[Section.container]}>
      <View style={[Section.flexRow]}>
        <Text style={[Section.title]}> Danh sách sản phẩm </Text>
        <TouchableOpacity>
          <Text style={[Section.view_more]}> Xem thêm</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item }) => {
            console.table(item);
            return (
              <TouchableOpacity style={[style.icon_container, { backgroundColor: Colors.lynxWhite }]} key={item._id} onPress={item.action} activeOpacity={0.7}>
                <>
                  <Image source={{ uri: item.gallery[0].link }}
                    style={{ width: '100%', height: undefined, aspectRatio: 1 }}
                  />
                  <View style={{ height: 50, backgroundColor: 'white', width: '100%', padding: 5 }}>
                    <Text style={style.icon_text}>{item.name}</Text>
                  </View>
                </>
              </TouchableOpacity>
            )
          }}
          // horizontal={true}
          keyExtractor={item => item.id}
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
    // overflow: 'hidden',
    paddingHorizontal: 0,
    paddingVertical: 20,
    marginBottom: 5
  },
  icon_container: {
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    overflow: 'hidden',
    flex: 1,
    // height: 120,
    // padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    elevation: 2
  },
  icon_text: {
    // fontSize: 12,
    color: Colors.blackLight
  }
}
