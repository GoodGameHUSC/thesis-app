import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../../Theme/Colors';


export default function ManageProduct() {

  const user = useSelector(state => state.user.user)

  console.log(user)
  return (
    <ScrollView>
      <View style={styles.record_container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../../Assets/Images/defaults/iphone_11.png')} style={{ width: 130, height: 130 }} />
          <Text style={{ color: Colors.darkGrey, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Iphone 11 Pro Max</Text>
          <Text style={{ color: Colors.redOrange, fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>11.000.000 VND</Text>
        </View>

        <View style={{
          // borderTopWidth: 0.5,
          // borderTopColor: Colors.bg,
          // borderBottomColor: Colors.bg,
          marginTop: 10,
          // borderBottomWidth: 0.5,
          padding: 10,
          borderRadius: 5,
          backgroundColor: Colors.bg
        }}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Tình Trạng Hàng</Text>
          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>

            <View style={{ flexDirection: 'row', width: '50%' }}>
              <Text style={{ color: 'black' }}>
                <Icon name="heart" size={14}></Icon>
                {"  "}Đã bán: 16
            </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '50%' }}>
              <Text style={{ color: 'black' }}>
                <Icon name="layers" size={14}></Icon>
                {"  "}Kho Hàng: 25
            </Text>
            </View>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>

            <View style={{ flexDirection: 'row', width: '50%' }}>
              <Text style={{ color: 'black' }}>
                <Icon name="gift" size={14}></Icon>
                {"  "}Tổng Đơn Hàng: 20
            </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '50%' }}>
              <Text style={{ color: 'black' }}>
                <Icon name="alert-octagon" size={14}></Icon>
                {"  "}Đơn đã huỷ: 4
            </Text>
            </View>

          </View>
        </View>

        <View style={{
          // borderTopWidth: 0.5,
          // borderTopColor: Colors.bg,
          // borderBottomColor: Colors.bg,
          marginTop: 10,
          // borderBottomWidth: 0.5,
          padding: 10,
          borderRadius: 5,
          backgroundColor: Colors.bg
        }}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Đánh Giá: 13 Đánh giá</Text>
          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around', alignItems: 'center', paddingVertical: 10 }}>

            <View style={{ alignItems: 'center' }}>

              <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 30 }}>56%{" "}</Text>
                <Icon name="thumbs-up" size={30}></Icon>
              </View>
              <Text style={{ color: 'black' }}>
                Đánh giá tích cực
            </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={{ width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 30 }}>46%{" "}</Text>
                <Icon name="thumbs-down" size={30}></Icon>
              </View>
              <Text style={{ color: 'black' }}>
                Đánh giá tiêu cực
            </Text>
            </View>

          </View>
        </View>

        <View style={{
          // borderTopWidth: 0.5,
          // borderTopColor: Colors.bg,
          // borderBottomColor: Colors.bg,
          marginTop: 10,
          // borderBottomWidth: 0.5,
          padding: 10,
          borderRadius: 5,
          backgroundColor: Colors.bg
        }}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Thông Tin Sản Phẩm</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row', width: '50%', paddingHorizontal: 5 }}>
              <Text style={{ color: 'black' }}>
                Mức giảm giá: 10%
            </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '50%', paddingHorizontal: 5 }}>
              <Text style={{ color: 'black' }}>
                Xuất xứ: Hàng nhập khẩu
            </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row', width: '50%', paddingHorizontal: 5 }}>
              <Text style={{ color: 'black' }}>
                Ngành Hàng: Điện tử, điện thoại
            </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '50%', paddingHorizontal: 5 }}>
              <Text style={{ color: 'black' }}>
                Địa chỉ nhận hàng: Chi Lăng, Huế
            </Text>
            </View>

          </View>
        </View>

        <View style={{
          // borderTopWidth: 0.5,
          // borderTopColor: Colors.bg,
          // borderBottomColor: Colors.bg,
          marginTop: 10,
          // borderBottomWidth: 0.5,
          padding: 10,
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'flex-end'
          // backgroundColor: Colors.bg
        }}>
          <Text style={{ backgroundColor: Colors.primary, padding: 7, borderRadius: 10, marginRight: 5, fontWeight: 'bold', color: 'white' }}>
            Chỉnh Sửa
            </Text>
          <Text style={{ backgroundColor: Colors.red, padding: 7, borderRadius: 10, marginRight: 5, fontWeight: 'bold', color: 'white' }}>
            Xoá Bỏ
            </Text>
          <Text style={{ backgroundColor: Colors.darkGrey, padding: 7, borderRadius: 10, marginRight: 5, fontWeight: 'bold', color: 'white' }}>
            Xem đánh giá
            </Text>
        </View>

      </View>


    </ScrollView>
  )
}

function AddressRecord({ item }) {
  return (

    <View style={styles.record_container}>
      <View>
        <Text style={{ color: Colors.darkGrey, fontSize: 14 }}>{item.address}</Text>
        <Text style={{ color: Colors.darkGrey, fontSize: 12 }}>{item.phone}</Text>
      </View>
      <Icon name="more-vertical" size={16} style={{ color: Colors.grey }} />
    </View>
  )
}

const styles = StyleSheet.create({
  record_container: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    // marginBottom: 5,
    // elevation: 1,
    height: 1000
  }
})