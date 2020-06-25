import { useNavigation } from '@react-navigation/native';
import { IconFile } from 'App/Screens/Component/UIElement';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import Helpers from 'App/Theme/Helpers';
import React, { useState } from 'react';
import { FlatList, ScrollView, Text, View, StyleSheet } from 'react-native';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import { useSelector } from 'react-redux';
import Colors from '../../../Theme/Colors';
import OrderAction from './Section/OrderAction';
import OrderElement from './Section/OrderElement';
import OrderBehavior from '../../../Services/Order';
import LoadingScreen from 'App/Screens/Component/Screen/LoadingScreen';
import Toast from 'App/Screens/Component/UIElement/Toast';


export default function OrderScreen() {
  const user = useSelector(state => state.user.user);
  const cart = useSelector(state => state.carts);
  const carts = Object.values(cart);
  const navigation = useNavigation();

  const [selectedAddress, setSelectedAddress] = useState(user.address_book.length > 0 ? user.address_book[0] : null);
  const [selectedShipMethod, setSelectedShipMethod] = useState(null);
  const [selectedPayMethod, setSelectedPayMethod] = useState(null);
  const [loading, setLoading] = useState(false);


  const navigate = {
    goHome: () => navigation.navigate('Home'),
    goAddressChange: () => navigation.navigate('Cart', {
      screen: 'Address',
      params: {
        selectAddress: (address) => { setSelectedAddress(address) },
        address: selectedAddress
      }
    }),
    goShipMethodChange: () => navigation.navigate('Cart', {
      screen: 'ShipMethod',
      params: {
        selectShipMethod: (method) => { setSelectedShipMethod(method) },
        method: selectedShipMethod
      }
    }),

    goPaymentMethodChange: () => navigation.navigate('Cart', {
      screen: 'PaymentMethod',
      params: {
        setSelectedPayMethod: (method) => { setSelectedPayMethod(method) },
        method: selectedPayMethod
      }
    }),

    goOrderSuccess: () => navigation.navigate('Cart', {
      screen: 'Result',
      params: {

      }
    })
  }

  async function order() {
    if (!validate()) return;
    try {
      setLoading(true);
      await OrderBehavior.makeOrder({
        address: selectedAddress,
        ship_method: selectedShipMethod,
        payment_method: selectedPayMethod,
        cart, user
      });
      setLoading(false);
      navigate.goOrderSuccess();
    } catch (error) {
      console.log(error);
      setLoading(false);
      Toast.show(error);
    }
  }

  function validate() {
    let error = null;
    if (!selectedAddress) error = 'Vui lòng chọn địa chỉ giao hàng'
    else if (!selectedShipMethod) error = 'Vui lòng chọn phương thức vận chuyển'
    else if (!selectedPayMethod) error = 'Vui lòng chọn phương thức thanh toán'
    if (!error) return true;
    Toast.show(error);
    return false;
  }

  return (
    loading ? <LoadingScreen />
      : <View>
        <View style={{}}>
          {
            carts.length > 0 ?
              <View style={{ minHeight: '100%' }}>
                <ScrollView>
                  <TouchableArea onPress={navigate.goAddressChange} style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }} >
                      <Icon name="location-on" size={20} style={styles.sectionIcon} />
                      {
                        selectedAddress ? (
                          <View>
                            <Text style={styles.sectionTitle}>
                              Địa chỉ nhận hàng
                          </Text>
                            <Text style={{ color: Colors.textDark, fontSize: 14, color: Colors.darkGrey }}>
                              Phạm Tấn Hùng
                          </Text>
                            <Text style={{ color: Colors.textDark, fontSize: 14, color: Colors.darkGrey }}>
                              (+84) {selectedAddress.phone}
                            </Text>
                            <Text style={{ color: Colors.textDark, fontSize: 14, color: Colors.darkGrey }}>
                              {selectedAddress.address}
                            </Text>
                          </View>
                        ) : (
                            <View>
                              <Text style={styles.sectionTitle}>
                                Chưa chọn địa chỉ giao hàng
                            </Text>
                            </View>
                          )
                      }
                    </View>
                    <IconSimple size={14} name="arrow-right" style={{ color: Colors.darkGrey }} />
                  </TouchableArea>
                  <TouchableArea onPress={navigate.goShipMethodChange} style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }} >
                      <IconMaterialCommunityIcons name="truck-fast" size={20} style={styles.sectionIcon} />
                      {
                        selectedShipMethod ?
                          (
                            <View>
                              <Text style={styles.sectionTitle}>
                                Phương thức vận chuyển
                            </Text>
                              <Text style={{ color: Colors.textDark, fontSize: 14, color: Colors.darkGrey }}>
                                {selectedShipMethod.name}
                              </Text>
                            </View>
                          ) : (
                            <View>
                              <Text style={styles.sectionTitle}>
                                Chưa chọn phương thức vận chuyển
                            </Text>
                            </View>
                          )
                      }
                    </View>
                    <IconSimple size={14} name="arrow-right" style={{ color: Colors.darkGrey }} />
                  </TouchableArea>
                  <TouchableArea onPress={navigate.goPaymentMethodChange} style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }} >
                      <IconMaterialCommunityIcons name="wallet-membership" size={20} style={styles.sectionIcon} />
                      {
                        selectedPayMethod ?
                          (
                            <View>
                              <Text style={styles.sectionTitle}>
                                Phương thức thanh toán
                            </Text>
                              <Text style={{ color: Colors.textDark, fontSize: 14, color: Colors.darkGrey }}>
                                {selectedPayMethod.name}
                              </Text>
                            </View>
                          ) : (
                            <View>
                              <Text style={styles.sectionTitle}>
                                Chưa chọn phương thức thanh toán
                            </Text>
                            </View>
                          )
                      }
                    </View>
                    <IconSimple size={14} name="arrow-right" style={{ color: Colors.darkGrey }} />
                  </TouchableArea>

                  <View onPress={navigate.goShipMethodChange} style={[styles.sectionContainer, { marginBottom: 0 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }} >
                      <IconMaterialCommunityIcons name="format-list-numbered" size={20} style={styles.sectionIcon} />
                      <View>
                        <Text style={styles.sectionTitle}>Danh Mục Sản Phẩm</Text>
                      </View>
                    </View>
                    {/* <IconSimple size={14} name="arrow-right" style={{ color: Colors.darkGrey }} /> */}
                  </View>
                  <FlatList
                    data={carts}
                    renderItem={({ item }) => <OrderElement item={item} shipMethod={selectedShipMethod} />}
                    keyExtractor={item => item.product._id}
                    showsHorizontalScrollIndicator={false}
                  />
                  <View style={{ height: 60 }}></View>
                </ScrollView>
                <OrderAction shipMethod={selectedShipMethod} carts={carts} order={order} loading={loading} />
              </View>
              : <EmptyCart goHome={navigate.goHome} />
          }
        </View>
      </View>
  )
}

function EmptyCart({ goHome }) {
  return (
    <View style={[Helpers.flexColumn, { marginTop: 200 }]}>
      <IconFile path={require('../../../Assets/Icons/archive.png')} size={60} />
      <Text style={{ color: Colors.textDark, marginTop: 10 }}>Bạn không có sản phẩm nào trong giỏ hàng</Text>
      <TouchableArea onPress={goHome} style={{ backgroundColor: Colors.mathPurple, marginTop: 20, padding: 10, borderRadius: 20, overflow: "hidden" }}>
        <Text style={{ color: Colors.white, fontSize: 16 }}>Tiếp tục mua sắm</Text>
      </TouchableArea>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    backgroundColor: 'white',
    marginBottom: 5,
    marginTop: 0.5
  },
  sectionIcon: { color: Colors.grey, marginRight: 5 },
  sectionTitle: { color: Colors.textDark, fontSize: 16, color: Colors.darkGreyblackLight, marginBottom: 5 }
})
