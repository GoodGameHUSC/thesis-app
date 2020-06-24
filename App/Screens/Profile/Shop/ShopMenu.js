import { useNavigation } from '@react-navigation/native';
import IconFile from 'App/Screens/Component/UIElement/IconFile';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import WishList from 'App/Screens/Profile/Home/Components/WishList';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../../../Theme/Colors';
import Helpers from '../../../Theme/Helpers';
import { HeaderSection, shared_styles } from '../Home/Components/Shared';
import Navigator from 'App/Shared/Navigator';


export default function ShopMenu() {

  const navigation = useNavigation();

  const navigate = {
    gotoProductManage: () => {
      Navigator.navigateAuth(navigation, 'Profile', { screen: 'ManageProduct' })
    }
  }

  return (
    <View style={shared_styles.page_container}>
      <View style={[shared_styles.section_container]}>
        <HeaderSection
          leftText={'Sản phẩm bán chạy'}
          rightText={'Xem gian hàng'}
          rightTextOnPress={navigate.gotoProductManage}
          icon={<MaterialIcons name="whatshot" style={{ fontSize: 24, color: '#E91E63', marginHorizontal: 10 }} />}
        />
        <WishList />
      </View>

      <View style={[shared_styles.section_container]}>
        <HeaderSection
          leftText={'Tình Trạng Đơn Hàng'}
          rightText={'Xem thêm'}
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
          <View style={[{ padding: 10, justifyContent: 'flex-end', flex: 1, textAlign: 'right', flexDirection: 'row' }]}>
            <Text style={{ textAlign: 'right', color: Colors.blackLight }}>Đơn hàng gần đây (5)</Text>
          </View>
          {/* <WishList /> */}
        </View>
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
          leftText={'Thống kê'}
          rightText={'Xem lịch sử'}
          icon={<IconCommunity name="chart-line" style={{ fontSize: 24, color: '#00b894', marginHorizontal: 10 }} />}
        />
        <View style={{
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignContent: 'center',
          padding: 10,

        }}>
          {/* <ScrollView
            style={{ paddingBottom: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={[Helpers.flexRow, { marginRight: 10, backgroundColor: Colors.bg, borderRadius: 5, padding: 15 }]}>
              <IconFile path={require('../../../Assets/Icons/deposit.png')} size={40} />
              <View style={[Helpers.flexColumn, { alignItems: 'flex-start', marginLeft: 10 }]}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>1200 Xu</Text>
                <Text style={{
                  fontSize: 12,
                  textAlign: 'center',
                  color: Colors.darkGrey,
                }}>Đổi lấy mã quà tặng</Text>
              </View>
            </View>

            <View style={[Helpers.flexRow, { marginRight: 10, backgroundColor: Colors.bg, borderRadius: 5, padding: 15 }]}>
              <IconFile path={require('../../../Assets/Icons/029-purse.png')} size={40} />
              <View style={[Helpers.flexColumn, { alignItems: 'flex-start', marginLeft: 10 }]}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>120.000 VND </Text>
                <Text style={{
                  fontSize: 12,
                  textAlign: 'center',
                  color: Colors.darkGrey,
                }}>Liên kết TK ngân hàng</Text>
              </View>
            </View>

            <View style={[Helpers.flexRow, { marginRight: 10, backgroundColor: Colors.bg, borderRadius: 5, padding: 15 }]}>
              <IconFile path={require('../../../Assets/Icons/live-news.png')} size={40} />
              <View style={[Helpers.flexColumn, { alignItems: 'flex-start', marginLeft: 10 }]}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Xem Live Stream</Text>
                <Text style={{
                  fontSize: 12,
                  textAlign: 'center',
                  color: Colors.darkGrey,
                }}>Nhận xu </Text>
              </View>
            </View>

          </ScrollView>
         */}
        </View>
      </View>


    </View>
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