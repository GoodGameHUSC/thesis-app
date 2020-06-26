import { useNavigation } from '@react-navigation/native';
import { getAttr, toLocaleString } from 'App/Utils/_';
import IconFile from 'App/Screens/Component/UIElement/IconFile';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import { Helpers } from 'App/Theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors } from '../../../../Theme';
import { callAPI } from 'App/Shared/API';
import { useSelector } from 'react-redux';
import Toast from 'App/Screens/Component/UIElement/Toast';

export default function CartElement({ item, loadData }) {

  const navigation = useNavigation();

  const { product, shop, bill } = item;

  const openProduct = () => navigation.navigate('ProductDetail', {
    screen: 'Index',
    params: {
      id: product._id,
      product: product
    },
  });

  return (
    <View style={[style.container, { backgroundColor: Colors.white }]} key={item._id}>

      <View style={[Helpers.flexRow, { borderBottomWidth: 0.5, borderBottomColor: Colors.bg, paddingVertical: 8, paddingHorizontal: 15 }]}>
        <View style={[Helpers.flexRow, { color: Colors.darkGrey }]}>
          {
            item.shop?.avatar ?
              <FastImage
                style={{ width: 20, height: undefined, aspectRatio: 1, borderRadius: 20 }}
                source={{
                  uri: item.user.avatar,
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.center}
              />
              : <IconFile path={require('../../../../Assets/Images/screens/ic_launcher_round.png')} size={20} />
          }
          <Text style={{ fontSize: 14, color: Colors.magazineBlue, marginLeft: 5, fontWeight: 'bold' }}>{item.shop?.name || 'Được bán bởi Shopping Me'}</Text>
        </View>
      </View>

      <View style={[{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 15, paddingVertical: 5, borderBottomWidth: 0.5, borderBottomColor: Colors.bg, }]}>
        <View style={{ flex: 1 }}>
          <View key={product._id} onPress={() => openProduct(item)} activeOpacity={0.9} style={{ paddingVertical: 10, flexDirection: 'row' }}>
            <View style={{ marginRight: 10 }}>
              <FastImage
                style={{ width: 70, height: undefined, aspectRatio: 1 }}
                source={{
                  uri: getAttr(product, 'gallery', 0, 'link'),
                  headers: { Authorization: '9876543210' },
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </View>
            <View>
              <View style={{}}>
                <Text style={{ flexGrow: 1, fontSize: 14, color: Colors.textDark, textTransform: 'uppercase', flexShrink: 1, marginBottom: 10 }} numberOfLines={1}>
                  {product?.name}
                </Text>
                {/* <Text style={{ fontSize: 13, color: Colors.grey, flexWrap: 'wrap' }}>Mẫu: M, size S</Text> */}
                <Text style={{ fontSize: 13, color: Colors.grey, flexWrap: 'wrap' }}>Số lượng:  1</Text>
                <Text style={{ fontSize: 13, color: Colors.grey, flexWrap: 'wrap' }}>Ngày đặt:  {(new Date(item.createdAt)).toLocaleDateString()} </Text>
              </View>
            </View>
          </View>
          <View style={[Helpers.flexRow]}>
          </View>
        </View>
      </View>

      <View style={[{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: Colors.bg, flexDirection: 'row', justifyContent: 'space-between' }]}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: Colors.darkGrey }}>Số Lượng</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: Colors.redOrange }}>{item.amount} sản phẩm</Text>
      </View>

      <View style={[{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: Colors.bg, flexDirection: 'row', justifyContent: 'space-between' }]}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: Colors.darkGrey }}>Thành Tiền</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: Colors.redOrange }}>{toLocaleString(bill.total)} VND</Text>
      </View>

      <ItemAction loadData={loadData} item={item} />
    </View>
  )
}

function ItemAction({ item, loadData }) {

  const user = useSelector(state => state.user.user);
  const navigation = useNavigation()
  const navigate = {
    goChatWithShop: (conversation) => navigation.navigate('Chats', {
      screen: 'ChatRoom',
      params: {
        conversation
      }
    }),

    goProduct: () => navigation.navigate('ProductDetail', {
      screen: 'Index',
      params: {
        id: item.product._id,
        product: item.product
      }
    }),


    goRating: () => navigation.navigate('Profile', {
      screen: 'SubmitRate',
      params: {
        product: item.product,
        order: item
      }
    })
  }

  const method = {
    goChat: async () => {
      if (user && item.shop) {
        const response = await callAPI('conversation/get-conversation', 'get', {
          user_id: user._id,
          shop_id: item.shop._id
        })
        navigate.goChatWithShop(response.data)
      } else Toast.show("Hiện tại không thể liên hệ cửa hàng")
    },
    received: async () => {
      const response = await callAPI('order/change-status', 'post', {
        id: item._id,
        status: 3
      })
      loadData()
    },
  }

  console.log(item);
  switch (item.status) {
    case 0:
      return (
        <View style={style.actionContainer}>
          <Text style={{ fontSize: 13, color: Colors.darkGrey }}>Đơn hàng chưa được xác nhận thanh toán</Text>
          {/* <TouchableArea >
            <Text style={style.actionBtn}>Thanh Toán</Text>
          </TouchableArea> */}
        </View>
      )
    case 1:
      return (
        <View style={style.actionContainer}>
          <Text style={{ fontSize: 13, maxWidth: 100, color: Colors.darkGrey }}>Đơn hàng đang được chuẩn bị</Text>
          <TouchableArea onPress={method.goChat}>
            <Text style={style.actionBtn}>Liên Hệ</Text>
          </TouchableArea>
        </View>
      )
    case 2:
      return (
        <View style={style.actionContainer}>
          <Text style={{ fontSize: 13, maxWidth: 100, color: Colors.darkGrey }}>Đơn hàng đang giao đến bạn</Text>
          <TouchableArea onPress={method.received}>
            <Text style={style.actionBtn}>Xác nhận đã nhận hàng</Text>
          </TouchableArea>
        </View>
      )
    case 3:
      return (
        <View style={style.actionContainer}>
          <Text style={{ fontSize: 13, maxWidth: 200, color: Colors.darkGrey }}>Đơn hàng đã hoàn thành</Text>
          {
            !item.rating ?
              <TouchableArea onPress={navigate.goRating}>
                <Text style={style.actionBtn}>Đánh Giá</Text>
              </TouchableArea>
              : <TouchableArea onPress={navigate.goProduct}>
                <Text style={style.actionBtn}>Mua lại</Text>
              </TouchableArea>
          }

        </View>
      )
    default: return <View></View>;
  }
}

const style = StyleSheet.create({

  container: {
    // width: ScreenWidth,
    backgroundColor: 'white',
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    marginTop: 5
  },
  icon_container: {
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    flex: 1,
    height: 120,
    padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon_text: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.darkGrey
  },

  actionContainer: {
    flexDirection: 'row', justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: Colors.bg, flexDirection: 'row', justifyContent: 'space-between'
  },
  actionBtn: {
    backgroundColor: Colors.redOrange,
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    padding: 8,
    borderRadius: 5
  }
})
