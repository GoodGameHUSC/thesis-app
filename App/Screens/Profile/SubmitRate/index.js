import { useRoute, useNavigation, CommonActions } from '@react-navigation/native';
import { getAttr } from 'App/Utils/_';
import Stars from 'App/Screens/Component/UIElement/Stars';
import { ScreenWidth, ScreenHeight } from 'App/Theme/Dimension';
import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import Colors from '../../../Theme/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import Toast from 'App/Screens/Component/UIElement/Toast';
import { callAPI } from 'App/Shared/API';

export default function SubmitRateScreen({ }) {
  const route = useRoute();
  const navigation = useNavigation();
  const { product } = route.params;
  const [content, setContent] = useState('Đánh giá của Shop và sản phẩm phản ánh mức độ hài lòng cũng như trải nghiệm của người mua với sản phẩm của bạn. Với những người mua hàng tiềm năng thì đánh giá của Shop và sản phẩm giúp cung cấp những thông tin quan ');
  const [star, setStar] = useState(4)
  const method = {
    submitReview: () => {
      if (!content) { Toast.show("Vui lòng nhập nội dung đánh giá"); return; }
      if (content.split('').length <= 50 || content.split('').length > 2000) { Toast.show("Nội dung đánh giá nên có độ dài từ 50 đến 2000 ký tự"); return; }

      callAPI('product/create-rating',
        'post',
        { "product_id": product._id, content, star }
      )
        .then(() => {
          Toast.show("Đánh giá thành công");
          navigation.goBack()
        })
        .catch(() => {
          Toast.show("Đánh giá thất bại, vui lòng thử lại sau")
          navigation.dispatch(state => {
            debugger;
            // Remove the home route from the stack
            const routes = state.routes.filter(r => r.name !== 'Home');

            return CommonActions.reset({
              ...state,
              routes,
              index: 0,
            });
          });
          navigation.goBack()
        })

    }
  }

  return (<ScrollView>
    <View style={{ backgroundColor: Colors.white, padding: 10, minHeight: ScreenHeight }}>
      <View key={product._id} style={{ paddingVertical: 10, flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: Colors.bg, }}>
        <View style={{ width: ScreenWidth - 100, paddingRight: 10 }}>
          <Text style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: 14, color: Colors.redOrange }}>Sản Phẩm </Text>
          <Text style={{ fontSize: 13, marginTop: 10, color: Colors.textDark, textTransform: 'uppercase', }} numberOfLines={1}>
            {product?.name}
          </Text>
          <Text style={{ fontSize: 12, color: Colors.grey, flexWrap: 'wrap' }} numberOfLines={3}>Size M</Text>
        </View>

        <View >
          <FastImage
            style={{ width: 80, height: undefined, aspectRatio: 1 }}
            source={{
              uri: getAttr(product, 'gallery', 0, 'link'),
              headers: { Authorization: '9876543210' },
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>

      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: 14, color: Colors.magazineBlue, marginBottom: 40 }}>Đánh Giá Của Bạn</Text>
        <Stars numberStar={4.5} size={40} />
        <TextInput
          multiline={true}
          numberOfLines={10}
          value={content}
          placeholder="Nội dung đánh giá của bạn (50 - 2000 ký tự)"
          onChangeText={(text) => setContent(text)}
          style={{
            backgroundColor: Colors.bg, width: '100%', marginTop: 40, marginBottom: 10, borderRadius: 5, textAlign: 'center', padding: 10
          }}
        />
        <TouchableArea style={{ alignItems: 'center', marginTop: 10, width: '100%', borderRadius: 5, borderWidth: 1, borderColor: Colors.grey, overflow: 'hidden', padding: 20 }}>
          <Icon name="camera" size={40} style={{ color: Colors.grey }} />
        </TouchableArea>

      </View>
      <TouchableArea onPress={method.submitReview} >
        <Text style={style.actionBtn}>HOÀN TẤT ĐÁNH GIÁ</Text>
      </TouchableArea>
    </View>
  </ScrollView>
  )
}

const style = {
  container: {

  },
  actionBtn: {
    // backgroundColor: Colors.bg,
    backgroundColor: Colors.mathPurple,
    // color: 'black',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
    marginTop: 60,
    marginBottom: 40,
    textAlign: 'center'
  }

}