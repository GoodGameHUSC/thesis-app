import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Text, View, Image, FlatList, StyleSheet } from 'react-native'
import Colors from '../../../Theme/Colors';
import FastImage from 'react-native-fast-image';
import { getAttr, toLocaleString } from 'App/Utils/_';
import { TouchableArea } from 'App/Screens/Component/UIElement';
import { useNavigation } from '@react-navigation/native';

export default function ChatHelper() {

  const navigation = useNavigation()

  const _styles = StyleSheet.create({
    container: {
      flexDirection: 'row', justifyContent: 'flex-start', padding: 10,
      backgroundColor: Colors.white,
      marginTop: 5
    },
    avatar: { width: 50, padding: 5, height: undefined, aspectRatio: 1, borderRadius: 50 }
  })

  return (
    <View>
      <View style={[_styles.container]}>
        <View style={{ marginRight: 10 }}>
          <Image source={require('../../../Assets/Icons/24-hours.png')} style={_styles.avatar} />
        </View>
        <TouchableArea style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}
          onPress={() => navigation.navigate("Chats", { screen: "HelpDesk" })}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Nhân viên tư vấn</Text>
            <Text style={{ color: Colors.darkGrey, fontSize: 14 }} numberOfLines={1}>Online 24/24, hỗ trợ mọi thắc mắc</Text>
          </View>
        </TouchableArea>
      </View>
      <View style={[_styles.container]}>
        <View style={{ marginRight: 10 }}>
          <Image source={require('../../../Assets/Icons/bot.png')} style={_styles.avatar} />
        </View>
        <TouchableArea style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}
          onPress={() => navigation.navigate("Chats", { screen: "Bot" })}
        >
          <View>
            <Text style={{ fontWeight: 'bold' }}>Chat Bot</Text>
            <Text style={{ color: Colors.darkGrey, fontSize: 14 }} numberOfLines={1}>Giải đáp nhanh chóng</Text>
          </View>
        </TouchableArea></View>
    </View>
  )
}

