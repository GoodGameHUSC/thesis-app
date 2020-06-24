import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import Colors from '../../../Theme/Colors';
import { CheckBoxControl } from 'App/Screens/Component/UIElement';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';


export default function PaymentMethod() {
  const route = useRoute();
  const navigation = useNavigation();

  const listShipMethod = [
    {
      'name': 'Chuyển khoản ngân hàng',
      'id': 1,
    },
    {
      'name': 'Thanh toán khi nhận hàng',
      'id': 2,
    },
    // {
    //   'name': 'Thanh toán bằng thẻ tín dụng',
    //   'id': 3,
    // }
  ]
  const method = route.params?.method ? route.params?.method : {};
  const confirm = (item) => {
    navigation.goBack();
    route.params?.setSelectedPayMethod(item);
  }
  return (
    <View>
      <View style={{}}>
        {
          <View style={{ minHeight: '100%' }}>
            <ScrollView>
              <View style={styles.container}>
                <FlatList
                  keyExtractor={item => item._id}
                  data={listShipMethod}
                  renderItem={({ item }) => <Method item={item} confirm={confirm} method={method} />}
                >
                </FlatList>
                {/* <Icon name="location-on" size={20} style={{ color: Colors.grey, marginLeft: 10 }} /> */}
              </View>
            </ScrollView>
          </View>
        }
      </View>
    </View>
  )
}

function Method({ item, confirm, method }) {
  return (
    <TouchableArea style={styles.itemContainer} onPress={() => confirm(item)}>
      <View>
        <Text style={{ color: Colors.textDark, fontSize: 14, color: Colors.darkGrey }}>
          {item.name}
        </Text>
      </View>
      {
        method.id == item.id &&
        <CheckBoxControl style={{}} isChecked={method.id == item.id} />
      }
    </TouchableArea>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5
  },
  itemContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flex: 1, marginBottom: 5
  }

})