import IconFile from 'App/Screens/Component/UIElement/IconFile';
import WishList from 'App/Screens/Profile/Home/Components/WishList';
import React from 'react';
import { ScrollView, Text, View, StyleSheet, FlatList } from 'react-native';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../../../../Theme/Colors';
import Helpers from '../../../../Theme/Helpers';
import { HeaderSection, shared_styles } from './Shared';
import OrderHistoryItem from 'App/Screens/Profile/OrderHistory/Components/OrderHistoryItem';
// store-mall-directory
export default function WaitingInvoice() {

  return <View style={shared_styles.page_container}>
    <FlatList
      data={[]}
      renderItem={(item) => <OrderHistoryItem product={item} />}
      keyExtractor={(item) => item._id}
    />
  </View>

}

const styles = StyleSheet.create({
  menu_order_item: {
    width: '25%',
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

})