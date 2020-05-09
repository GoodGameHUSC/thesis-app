
import Colors from 'App/Theme/Colors';
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import AsyncStore from '../../../Shared/AsyncStorage';
const image = { uri: "https://reactjs.org/logo-og.png" };
export default function BasicInfo() {

  const navigation = useNavigation();
  const [user, setUser] = useState();
  useEffect(() => {
    // load();
  }, [])

  async function load() {
    const savedUser = await AsyncStore.getData(AsyncStore.VAR.USER)
    setUser(savedUser);
  }
  return <ScrollView
    style={{
      paddingBottom: 5
    }}
  >
    <View style={{
      backgroundColor: 'white',
    }}>
      <ImageBackground source={require('../../../Assets/Images/screens/Bg/Btn/Rectangle.png')} style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      }}>
        <View
          style={{
            paddingVertical: 50,
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View
              style={{ backgroundColor: Colors.lynxWhite, marginLeft: 20, height: 50, width: 50, borderRadius: 50, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}
            >
              <Icon name="user" size={24} color="grey" />
            </View>
            <TouchableOpacity style={{ height: 20, marginRight: 20 }} onPress={() => navigation.navigate('Auth')}
            >
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.white }}>
                  {
                    user ? user.username :
                      'Đăng nhập/Đăng kí'
                  }
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  </ScrollView>
}