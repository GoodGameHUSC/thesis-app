import React from 'react';
import { FlatList, View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import CartElement from './Section/CartElement';
import { IconFile } from 'App/Screens/Component/UIElement';
import Helpers from 'App/Theme/Helpers';
import Colors from '../../../Theme/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import { useNavigation } from '@react-navigation/native';
import PreviewBill from 'App/Screens/Cart/Home/Section/PreviewBill';
import Navigator from 'App/Shared/Navigator';
export default function CartIndexScreen() {
  const cart = useSelector(state => state.carts);
  const carts = Object.values(cart);
  const navigation = useNavigation();

  const goHome = () => navigation.navigate('Home')
  const goOrder = () => Navigator.navigateAuth(navigation, 'Cart', { screen: 'Order' })
  return (
    <View>
      <View style={{ paddingTop: 5 }}>
        {
          carts.length > 0 ?
            <View style={{ minHeight: '100%' }}>
              <ScrollView>
                {/* <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', marginBottom: 5, marginTop: 0.5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'baseline' }} >
                    <Icon name="location-on" size={20} style={{ color: Colors.grey, marginRight: 5 }} />
                    <Text style={{ color: Colors.textDark, fontSize: 16, color: Colors.darkGrey }}>
                      12 Duy Tân, An Cựu, Huế
                  </Text>
                  </View>
                  <IconSimple size={14} name="arrow-right" style={{ color: Colors.darkGrey }} />
                </View> */}
                <FlatList
                  data={carts}
                  renderItem={({ item }) => <CartElement item={item} />}
                  keyExtractor={item => item.product._id}
                  showsHorizontalScrollIndicator={false}
                />
                <View style={{ height: 60 }}></View>
              </ScrollView>
              <PreviewBill carts={carts} goOrder={goOrder} />
            </View>
            :
            <View style={[Helpers.flexColumn, { marginTop: 200 }]}>
              <IconFile path={require('../../../Assets/Icons/notes.png')} size={120} />
              <Text style={{ color: Colors.grey, marginTop: 10 }}>Bạn không có   </Text>
              <Text style={{ color: Colors.grey, marginTop: 10 }}>sản phẩm nào trong giỏ hàng</Text>
              <TouchableArea onPress={goHome} style={{ backgroundColor: Colors.mathPurple, marginTop: 20, padding: 10, borderRadius: 20, overflow: "hidden" }}>
                <Text style={{ color: Colors.white, fontSize: 16 }}>Tiếp tục mua sắm</Text>
              </TouchableArea>
            </View>
        }
      </View>
    </View>
  )
}

