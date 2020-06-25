import { useNavigation } from '@react-navigation/native';
import IconFile from 'App/Screens/Component/UIElement/IconFile';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import TopProduct from './Components/WishList';
import React, { useState } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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
    }),
    createShop: () => {
      Navigator.navigateAuth(navigation, 'Profile', { screen: 'CreateShop' })
    }
  }

  const fetchShop = useAPICreator('shop/view-shop', (response) => {
    setInfo(response.data.info);
    setProducts(response.data.products);
    setLoading(false)
  }, 'get', { id: user?.shop })

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      // debugger;
      if (user?.shop) {
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

  const ui = <View style={shared_styles.page_container}>
    <View style={[shared_styles.section_container]}>
      <HeaderSection
        leftText={'Quản lý cửa hàng'}
        rightText={'Xem cửa hàng'}
        rightTextOnPress={navigate.gotoShopDetail}
        icon={<MaterialIcons name="whatshot" style={{ fontSize: 24, color: '#E91E63', marginHorizontal: 10 }} />}
      />
      <TopProduct products={products} />
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


  return (
    user?.shop ?
      loading ? <LoadingScreen /> : ui
      : <TouchableArea onPress={navigate.createShop} style={{ paddingVertical: 100, justifyContent: 'center', flexDirection: 'row' }}>
        <View>
          <Image source={require('../../../Assets/Icons/avoid-crowds.png')} style={{ height: 100, aspectRatio: 1, marginBottom: 20 }} />
          <Text style={{ textAlign: 'center', padding: 10, borderRadius: 20, color: 'white', backgroundColor: Colors.mathPurple, fontWeight: 'bold' }}>Tạo Cửa Hàng</Text>
        </View>
      </TouchableArea>
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