import Colors from '../../../../Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import IconFile from '../../../Component/UIElement/IconFile';
import Icon from 'react-native-vector-icons/Feather';
export default function ShopInfo({ product }) {
  return (
    <View style={{ backgroundColor: 'white', width: '100%', padding: 20, marginTop: 5, paddingBottom: 30 }}>
      {/* <Text style={[style.icon_text], {
        overflow: 'hidden', marginBottom: 10, fontSize: 16,
        fontWeight: 'bold', color: Colors.blueNight
      }}>Được bán bởi </Text> */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginRight: 10 }}>
            <Image
              style={{ height: 60, aspectRatio: 1 }}
              source={require('../../../../Assets/Images/screens/ic_launcher_round.png')}
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: Colors.magazineBlue }}>Shopping Me Mall</Text>
            <Text style={{ fontSize: 12, color: Colors.grey }}>Sản phẩm chính hãng</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderColor: Colors.mathPurple, borderWidth: 1, paddingHorizontal: 4, borderRadius: 10 }}>
          <Text style={{ fontSize: 12, color: Colors.mathPurple }}>Theo dõi</Text>
        </TouchableOpacity>
      </View>
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
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 25 }}>
        <TouchableOpacity style={{ backgroundColor: Colors.mathPurple, paddingHorizontal: 11, paddingVertical: 5, borderRadius: 10 }}>
          <Text style={{ fontSize: 14, color: Colors.white }}>Liên hệ ngay <Icon name="message-circle" /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderColor: Colors.redOrange, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 }}>
          <Text style={{ fontSize: 14, color: Colors.redOrange }}> Xem gian hàng <Icon name="arrow-right" /></Text>
        </TouchableOpacity>
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



