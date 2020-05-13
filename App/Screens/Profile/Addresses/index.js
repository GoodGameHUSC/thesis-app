import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../../Theme/Colors';


export default function AddressSetting() {

  const user = useSelector(state => state.user.user)

  console.log(user)
  return (
    <View>

      <FlatList
        data={user.address_book}
        removeClippedSubviews={true}
        maxToRenderPerBatch={1}
        disableVirtualization={false}
        initialNumToRender={2}
        windowSize={7}
        renderItem={({ item }) => <AddressRecord key={item._id} item={item} />}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.record_container}>
        <View>
          <Text style={{ color: Colors.darkGrey, fontSize: 15, fontWeight: 'bold' }}>Thêm địa chỉ mới</Text>

        </View>
        <Icon name="plus" size={20} style={{ color: Colors.redOrange }} />
      </View>
    </View>
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
    marginBottom: 5,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})