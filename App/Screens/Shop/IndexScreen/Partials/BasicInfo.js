import { toLocaleString } from 'App/Utils/_';
import Colors from 'App/Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Stars from '../../../Component/UIElement/Stars';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
export default function BasicInfo({ shop }) {
  return (
    <View style={{ backgroundColor: 'white', width: '100%', padding: 15, paddingTop: 10, borderTopWidth: 0.5, borderTopColor: Colors.lynxWhite }}>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 20 }}>
        <View style={{ alignItems: 'center', width: 80 }}>
          <Text style={{ fontSize: 18, color: Colors.grey, }}>69%</Text>
          <Text style={{ fontSize: 12, color: Colors.grey, textAlign: 'center' }}>Đánh giá hài lòng</Text>
        </View>
        <View style={{ width: 2, height: 30, backgroundColor: Colors.lynxWhite }}></View>
        <View style={{ alignItems: 'center', width: 80 }}>
          <Text style={{ fontSize: 18, color: Colors.grey }}>100%</Text>
          <Text style={{ fontSize: 12, color: Colors.grey, textAlign: 'center' }}>Giao hàng đúng hạn</Text>
        </View>
        <View style={{ width: 2, height: 30, backgroundColor: Colors.lynxWhite }}></View>
        <View style={{ alignItems: 'center', width: 80 }}>
          <Text style={{ fontSize: 18, color: Colors.grey }}>96%</Text>
          <Text style={{ fontSize: 12, color: Colors.grey, textAlign: 'center' }}>Phản hồi yêu cầu KH</Text>
        </View>
      </View>

      <View style={{ padding: 15, paddingHorizontal: 20, marginTop: 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="map" size={14} style={{ marginRight: 10, color: Colors.darkGrey }}></Icon>
          <Text style={[style.icon_text]}>{shop.address}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="link" size={14} style={{ marginRight: 10, color: Colors.darkGrey }}></Icon>
          <Text style={[style.icon_text]}>{shop.website_url}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="phone-call" size={14} style={{ marginRight: 10, color: Colors.darkGrey }}></Icon>
          <Text style={[style.icon_text]}>{shop.phone_number}</Text>
        </View>
      </View>

      {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 25 }}>
        <TouchableArea onPress={null} style={{ backgroundColor: Colors.mathPurple, paddingHorizontal: 11, paddingVertical: 5, borderRadius: 10 }}>
          <Text style={{ fontSize: 14, color: Colors.white }}>Liên hệ ngay <Icon name="message-circle" /></Text>
        </TouchableArea>
      </View> */}
    </View>

  )
}
const style = StyleSheet.create({
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
    color: Colors.grey,
    overflow: 'hidden',
    marginBottom: 5,
    fontSize: 14,

    // fontWeight: 'bold',
  }
})



