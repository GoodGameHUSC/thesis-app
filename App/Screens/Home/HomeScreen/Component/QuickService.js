import IconFile from 'App/Screens/Component/UIElement/IconFile';
import Colors from 'App/Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const list_icon = [

  {
    id: 4,
    icon_file: require('../../../../Assets/Icons/gift.png'),
    text: "Quà Tặng",
    size: 40,
    action: () => {
      alert("Chưa làm :v")
    }
  },
  {
    id: 3,
    icon_file: require('../../../../Assets/Icons/live-news.png'),
    text: "Live Stream",
    size: 50,
    action: () => {
      alert("Chưa làm :v")
    }
  },
  {
    id: 1,
    icon_file: require('../../../../Assets/Icons/coupon.png'),
    text: "Giảm giá",
    size: 40,
    action: () => {
      alert("Chưa làm :v")
    }
  },
  {
    id: 5,
    icon_file: require('../../../../Assets/Icons/chat-box.png'),
    text: "Trò chuyện",
    action: () => {
      alert("Chưa làm :v")
    }
  },
  {
    id: 6,
    icon_file: require('../../../../Assets/Icons/deposit.png'),
    text: "Tiết kiệm",
    action: () => {
      alert("Chưa làm :v")
    }
  },
  {
    id: 2,
    icon_file: require('../../../../Assets/Icons/032-coupon.png'),
    text: "Mã quà tặng",
    size: 50,
    action: () => {
      alert("Chưa làm :v")
    }
  },

  {
    id: 7,
    icon_file: require('../../../../Assets/Icons/029-purse.png'),
    text: "Ví của tôi",
    size: 45,
    action: () => {
      alert("Chưa làm :v")
    }
  },
  {
    id: 8,
    icon_file: require('../../../../Assets/Icons/033-call-center.png'),
    text: "Tổng đài HT",
    size: 45,
    action: () => {
      alert("Chưa làm :v")
    }
  },

]

export default function QuickService() {
  return (
    <View style={style.container}>
      <FlatList
        data={list_icon}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity key={item.id} onPress={item.action} activeOpacity={0.7}>
              <View style={style.icon_container}>
                <IconFile path={item.icon_file} size={item.size || 45} />
                <Text style={style.icon_text}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
        horizontal={true}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const style = {
  container: {
    // height: 100,
    width: ScreenWidth,
    backgroundColor: 'white',
    overflow: 'scroll',
    paddingHorizontal: 0,
    paddingVertical: 20,
    // marginBottom: 5
  },
  icon_container: {
    marginRight: 5,
    width: 80,
    height: 80,
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