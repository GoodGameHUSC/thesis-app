import { useNavigation } from '@react-navigation/native';
import IconFile from 'App/Screens/Component/UIElement/IconFile';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import WishList from 'App/Screens/Profile/Home/Components/WishList';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../../../Theme/Colors';
import Helpers from '../../../Theme/Helpers';
import { useAPICreator } from 'App/Shared/API';
import { useFocusEffect } from '@react-navigation/native';
import { HeaderSection, shared_styles } from '../Home/Components/Shared';
import Navigator from 'App/Shared/Navigator';
import LoadingScreen from 'App/Screens/Component/Screen/LoadingScreen';
import { useSelector } from 'react-redux';


export default function ShopMenu() {

  const navigation = useNavigation();

  const user = useSelector(state => state.user.user)
  const [refreshing, setRefreshing] = useState(false);
  const [info, setInfo] = useState(null);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = {
    gotoProductManage: () => {
      Navigator.navigateAuth(navigation, 'Profile', { screen: 'ManageProduct' })
    },
    goOrderManage: () => {
      Navigator.navigateAuth(navigation, 'Profile', { screen: 'ShopOrder' })
    },
    gotoShopDetail: () => navigation.navigate('MyShop', {
      screen: "Index",
      params: {
        shop: info
      }
    }
    ),
  }

  const fetchShop = useAPICreator('shop/view-shop', (response) => {
    setInfo(response.data.info);
    setProducts(response.data.products);
    setLoading(false)
  }, 'get', { id: user?.shop })

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      if (user.shop) {
        setLoading(true)
        fetchShop();
      }
      return () => {
        setLoading(true)
        setProducts([])
        setInfo(null)
      };
    }, [user])
  );


  return (
    user ?
      loading ? <LoadingScreen /> :
        <View style={shared_styles.page_container}>
          <View style={[shared_styles.section_container]}>
            <HeaderSection
              leftText={'Quản lý cửa hàng'}
              rightText={'Xem cửa hàng'}
              rightTextOnPress={navigate.gotoShopDetail}
              icon={<MaterialIcons name="whatshot" style={{ fontSize: 24, color: '#E91E63', marginHorizontal: 10 }} />}
            />
            <WishList />
          </View>

          <View style={[shared_styles.section_container]}>
            <TouchableArea onPress={() => navigation.navigate('Profile', { screen: 'UploadProduct' })} >
              <HeaderSection
                leftText={'Đăng bán'}
                rightText={''}
                style={{ borderBottomWidth: 0, paddingBottom: 0 }}
                icon={<IconSimple name="cloud-upload" style={{ fontSize: 24, color: '#0984e3', marginHorizontal: 10 }} />}
              />
              {/* <SimpleLineIcons name="cloud-upload" style={[style.menu_order_icon, { marginRight: 20 }]} />
          <Text style={style.menu_order_text}>Chọn ảnh sản phẩm</Text> */}
            </TouchableArea>
            <View>
            </View>
          </View>

          <View style={[shared_styles.section_container]}>
            <HeaderSection
              leftText={'Tình Trạng Đơn Hàng'}
              rightText={'Xem thêm'}
              rightTextOnPress={navigate.goOrderManage}
              icon={<IconCommunity name="format-list-checks" style={{ fontSize: 24, color: '#40739e', marginHorizontal: 10 }} />}
            />
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center' }}>
              <View style={style.menu_order_item}>
                <IconFontisto name="prescription" style={style.menu_order_icon} />
                <Text style={style.menu_order_text}>Chưa thanh toán</Text>
              </View>
              <View style={style.menu_order_item}>
                <IconSimple name="drawer" style={style.menu_order_icon} />
                <Text style={style.menu_order_text}>Chờ vận chuyển</Text>
              </View>
              <View style={style.menu_order_item}>
                <IconFontisto name="truck" style={style.menu_order_icon} />
                <Text style={style.menu_order_text}>Đang giao hàng</Text>
              </View>
              <View style={style.menu_order_item} >
                <IconSimple name="flag" style={style.menu_order_icon} />
                <Text style={style.menu_order_text}>Hoàn tất</Text>
              </View>
            </View>
            <View>
              {/* <View style={[{ padding: 10, justifyContent: 'flex-end', flex: 1, textAlign: 'right', flexDirection: 'row' }]}>
            <Text style={{ textAlign: 'right', color: Colors.blackLight }}>Đơn hàng gần đây (5)</Text>
          </View> */}
              {/* <WishList /> */}
            </View>
          </View>


        </View>
      : <Text style={{ textAlign: 'center', padding: 20 }}>Vui lòng đăng nhập để sử dụng</Text>
  )
}

const style = {
  menu_order_item: {
    // width: '25%',
    padding: 10,
    // backgroundColor: 'red',
    alignItems: 'center'
  },
  menu_order_icon: {
    marginBottom: 8,
    fontSize: 28,
    color: Colors.darkGrey
  },
  menu_order_text: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.grey,
    // fontWeight: 'bold'
  }

}