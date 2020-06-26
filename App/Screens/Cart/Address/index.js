import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import Colors from '../../../Theme/Colors';
import { CheckBoxControl } from 'App/Screens/Component/UIElement';
import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';


export default function AddressChangeScreen() {

  const route = useRoute();
  const navigation = useNavigation();

  const address = route.params?.address ? route.params?.address : {};
  const listAddress = useSelector(state => state.user?.user?.address_book);
  const user = useSelector(state => state.user?.user);
  const selectAddress = (item) => {
    navigation.goBack();
    route.params?.selectAddress(item);
  }
  return (
    <View>
      <View style={{}}>
        {
          <View style={{ minHeight: '100%' }}>
            <ScrollView>
              <View style={styles.container}>
                <FlatList
                  keyExtractor={item => item.id}
                  data={listAddress}
                  renderItem={({ item }) => (
                    <TouchableArea onPress={() => selectAddress(item)} style={styles.itemContainer} >
                      <View>
                        <Text style={{ color: Colors.textDark, fontSize: 14, color: Colors.darkGrey }}>
                          {user.username}
                        </Text>
                        <Text style={{ color: Colors.textDark, fontSize: 14, color: Colors.darkGrey }}>
                          {item.phone}
                        </Text>
                        <Text style={{ color: Colors.textDark, fontSize: 14, color: Colors.darkGrey }}>
                          {item.address}, Việt Nam
                      </Text>
                      </View>
                      {
                        address.id == item.id &&
                        <CheckBoxControl style={{}} isChecked={address.id == item.id} />
                      }
                    </TouchableArea>
                  )}
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