import Colors from 'App/Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
export default function QnA({ product }) {
  return (
    <View style={{ backgroundColor: 'white', width: '100%', padding: 15, marginTop: 5 }}>
      <Text style={[style.icon_text], {
        overflow: 'hidden', marginBottom: 10, fontSize: 16,
        fontWeight: 'bold', color: Colors.magazineBlue
      }}>Câu hỏi về sản phẩm (0)</Text>
      <Text>
        Hiện chưa có câu hỏi nào
              </Text>
      <TouchableWithoutFeedback>
        <Text style={{ color: Colors.redOrange, fontWeight: 'bold', textAlign: 'center', padding: 10, marginTop: 20 }}>Đặt câu hỏi</Text>
      </TouchableWithoutFeedback>
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



