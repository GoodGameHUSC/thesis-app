import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../../../Theme/Colors';
import { Section } from '../../../../Theme/Styles.js';

const list_dump_prod = [
  {
    id: 4,
    icon_file: "https://chanhuy.com/wp-content/uploads/2018/10/bo-dung-cu-live-stream-3-in-1.jpg",
    text: "Live bán hàng tồn kho, sale đậm Hè, 2020",
    size: 65,
    action: () => {
      alert("Chưa làm :v")
    }
  },
  {
    id: 3,
    icon_file: "https://www.chotot.com/kinhnghiem/wp-content/uploads/2019/11/thue-nguoi-livestream-1.jpg",
    text: "Mua 2 tặng 1 lấy tiền 3, stream bán hàng hot nhất maidzo",
    size: 60,
    action: () => {
      alert("Chưa làm :v")
    }
  },
  {
    id: 1,
    icon_file: "https://lucloi.vn/wp-content/uploads/2020/03/89922448_1484759375012317_2246343796470054912_o.jpg",
    text: "Có làm thì mới có ăn, không làm ",
    // size: 40,
    action: () => {
      alert("thì...ăn đầu ****, ăn c**")
    }
  },
]

export default function TopLiveVideo() {

  return (
    <View style={[Section.container]}>
      <View style={[Section.flexRow]}>
        <Text style={[Section.title]}> LiveStream </Text>
        <TouchableOpacity>
          <Text style={[Section.view_more]}> Xem thêm</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={list_dump_prod}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={[style.icon_container, { backgroundColor: Colors.lynxWhite }]} key={item.id} onPress={item.action} activeOpacity={0.7}>
                <>
                  <Image source={{ uri: item.icon_file }}
                    style={{ width: '100%', height: undefined, aspectRatio: 1, }}
                  />
                  <Text style={style.icon_text} numberOfLines={2}>{item.text}</Text>
                  <Text style={{ position: 'absolute', top: 5, left: 5, backgroundColor: "#fe2942", fontSize: 10, paddingHorizontal: 4, paddingVertical: 2, borderRadius: 2, color: 'white' }}>LIVE</Text>
                  <Text style={{ position: 'absolute', top: 5, left: 35, backgroundColor: "#141518", fontSize: 10, paddingHorizontal: 4, paddingVertical: 2, borderRadius: 2, color: 'white' }}>
                    <Icon name="eye" size={10} style={{ marginRight: 2 }} />
                    {" "} {Math.round(Math.random() * 1000)}k
                  </Text>
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
    overflow: 'scroll',
    // paddingHorizontal: 0,
    // paddingVertical: 20,
    marginBottom: 5,

  },
  icon_container: {
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    overflow: 'hidden',
    flex: 1,
    height: 160,
    // padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  },
  icon_text: {
    fontSize: 13,
    height: 45,
    padding: 5,
    textAlign: 'center',
    color: Colors.blackLight
  }
}
