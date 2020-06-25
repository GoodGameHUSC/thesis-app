import Colors from 'App/Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { Text, View } from 'react-native';
import IconFile from '../../../Component/UIElement/IconFile';
import Icon from 'react-native-vector-icons/Feather';
export default function Feature({ product }) {
  return (
    <View style={{ backgroundColor: 'white', width: '100%', padding: 15, marginTop: 5 }}>
      <Text>

        <Text style={[style.icon_text], {
          overflow: 'hidden', marginBottom: 10, fontSize: 16,
          fontWeight: 'bold', color: Colors.magazineBlue
        }}>Tình trạng hàng </Text>
      </Text>
      <View style={{

      }}>
        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>

          <View style={{ flexDirection: 'row', width: '50%' }}>
            <Text style={{ color: 'black' }}>
              <Icon name="heart" size={14}></Icon>
              {"  "}Đã bán: 16
            </Text>
          </View>
          <View style={{ flexDirection: 'row', width: '50%' }}>
            <Text style={{ color: 'black' }}>
              <Icon name="layers" size={14}></Icon>
              {"  "}Kho Hàng: 25
            </Text>
          </View>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>

          <View style={{ flexDirection: 'row', width: '50%' }}>
            <Text style={{ color: 'black' }}>
              <Icon name="gift" size={14}></Icon>
              {"  "}Tổng Đơn Hàng: 20
            </Text>
          </View>
          <View style={{ flexDirection: 'row', width: '50%' }}>
            <Text style={{ color: 'black' }}>
              <Icon name="alert-octagon" size={14}></Icon>
              {"  "}Đơn đã huỷ: 4
            </Text>
          </View>

        </View>
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



