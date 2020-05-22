import { useNavigation } from '@react-navigation/native';
import { IconFile } from 'App/Screens/Component/UIElement';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import Helpers from 'App/Theme/Helpers';
import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import { useSelector } from 'react-redux';
import Colors from '../../../Theme/Colors';
import OrderAction from './Section/OrderAction';
import CartElement from './Section/OrderElement';


export default function OrderScreen() {
  const cart = useSelector(state => state.carts);
  const carts = Object.values(cart);
  const navigation = useNavigation();

  const goHome = () => navigation.navigate('Home')
  return (
    <View>
      <View style={{}}>
        {
          carts.length > 0 ?
            <View style={{ minHeight: '100%' }}>
              <ScrollView>
                <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', backgroundColor: 'white', marginBottom: 5, marginTop: 0.5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'baseline' }} >
                    <Icon name="location-on" size={20} style={{ color: Colors.grey, marginRight: 5 }} />
                    <View>
                      <Text style={{ color: Colors.textDark, fontSize: 16, color: Colors.darkGreyblackLight, marginBottom: 5 }}>
                        Địa chỉ nhận hàng
                      </Text>
                      <Text style={{ color: Colors.textDark, fontSize: 14, color: Colors.darkGrey }}>
                        Phạm Tấn Hùng
                      </Text>
                      <Text style={{ color: Colors.textDark, fontSize: 14, color: Colors.darkGrey }}>
                        (+84) 774201271
                      </Text>
                      <Text style={{ color: Colors.textDark, fontSize: 14, color: Colors.darkGrey }}>
                        12 Duy Tân, An Cựu, Huế, Việt Nam
                      </Text>
                    </View>
                  </View>

                  <View>

                  </View>
                  <IconSimple size={14} name="arrow-right" style={{ color: Colors.darkGrey }} />
                </View>
                <FlatList
                  data={carts}
                  renderItem={({ item }) => <CartElement item={item} />}
                  keyExtractor={item => item.product._id}
                  showsHorizontalScrollIndicator={false}
                />
                <View style={{ height: 60 }}></View>
              </ScrollView>
              <OrderAction carts={carts} />
            </View>
            :
            <View style={[Helpers.flexColumn, { marginTop: 200 }]}>
              <IconFile path={require('../../../Assets/Icons/archive.png')} size={60} />
              <Text style={{ color: Colors.textDark, marginTop: 10 }}>Bạn không có sản phẩm nào trong giỏ hàng</Text>
              <TouchableArea onPress={goHome} style={{ backgroundColor: Colors.mathPurple, marginTop: 20, padding: 10, borderRadius: 20, overflow: "hidden" }}>
                <Text style={{ color: Colors.white, fontSize: 16 }}>Tiếp tục mua sắm</Text>
              </TouchableArea>
            </View>
        }
      </View>
    </View>
  )
}

