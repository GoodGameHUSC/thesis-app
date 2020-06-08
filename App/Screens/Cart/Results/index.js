import { useNavigation, useRoute, useFocusEffect, CommonActions } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, View, Text, BackHandler } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../../Theme/Colors';
import { TouchableArea } from 'App/Screens/Component/UIElement';
import LottieView from 'lottie-react-native';
import store from 'App/Stores/index';
import { remove_cart } from 'App/Stores/Cart/index';

export default function ResultsScreen() {

  const route = useRoute();
  const navigation = useNavigation();

  const navigate = {
    goHome: () => navigation.navigate('Home'),
    onBackPress: () => {

      const reset = state => {
        const routes = state.routes.slice(0, 1);
        return CommonActions.reset({
          ...state,
          routes,
          index: 0,
        });
      }

      navigation.dispatch(reset);

      const remove_cart_action = remove_cart()
      store.dispatch(remove_cart_action);
      navigation.navigate('Home');

      return true;
    }
  }
  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', navigate.onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', navigate.onBackPress);
    }, [])
  );

  return (
    <View>
      <View style={{}}>
        {
          <View style={{ minHeight: '100%' }}>
            <ScrollView>
              <View style={styles.container}>

                <View style={{ backgroundColor: 'white', width: 180, height: 180, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                  {/* <Image
                    source={require('../../../Assets/Icons/online-shopping.png')}
                    style={{ height: 80, aspectRatio: 1 }}
                  /> */}
                  <LottieView source={require('../../../Assets/Images/animation/21654-delivery-guy-order-pickup.json')} autoPlay loop />
                </View>
                <View style={{ padding: 40 }}>
                  <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 16, color: Colors.darkGrey }}>
                    Đơn Hàng #12343234 của bạn đã được tạo thành công.{' '}
                    <Text style={{ fontWeight: 'normal', fontSize: 14, color: Colors.grey }}>
                      Vui lòng theo dõi lịch sử đặt hàng để nhận hàng từ đơn vị vận chuyển.
                      </Text>
                  </Text>
                </View>

                <TouchableArea onPress={navigate.onBackPress} style={{ backgroundColor: Colors.mathPurple, padding: 10, borderRadius: 20, overflow: "hidden", paddingHorizontal: 15 }}>
                  <Text style={{ color: Colors.white, fontSize: 16 }}>Tiếp tục mua sắm</Text>
                </TouchableArea>
              </View>
            </ScrollView>
          </View>
        }
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flex: 1, marginBottom: 5
  }

})