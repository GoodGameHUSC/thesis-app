import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Text, View, Image, FlatList, StyleSheet } from 'react-native'
import Colors from '../../../Theme/Colors';
import FastImage from 'react-native-fast-image';
import { getAttr, toLocaleString } from 'App/Utils/_';
import { TouchableArea } from 'App/Screens/Component/UIElement';

export default class Conversation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      conversation: [
        {
          name: "shop1233",
          _id: 'hausfkjsdl'
        },
        {
          name: "shop1233",
          _id: 'hausfkqewrjsdl'
        },
        {
          name: "shop1233",
          _id: 'ha234usfkjsdl'
        }, {
          name: "shop1233",
          _id: 'haqưerusfkjsdl'
        },

      ]
    }
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    const { conversation } = this.state
    return (
      conversation.length == 0 ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../../Assets/Icons/consult.png')} style={{ height: 100, aspectRatio: 1 }} />
          <Text style={{ color: Colors.grey, marginTop: 10, fontSize: 13 }}>Không có hội thoại nào</Text>
        </View> :
        <View style={{ flex: 1 }}>
          <FlatList
            data={conversation}
            renderItem={({ item }) => <ConversationElement item={item} />}
            keyExtractor={item => item._id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
    )
  }
}

function ConversationElement({ item }) {

  const _styles = StyleSheet.create({
    container: {
      flexDirection: 'row', justifyContent: 'flex-start', padding: 10,
      backgroundColor: Colors.white,
      marginTop: 5
    },
    avatar: { width: 60, height: undefined, aspectRatio: 1, borderRadius: 50 }
  })

  return (
    <View style={[_styles.container]}>
      <View style={{ marginRight: 10 }}>
        <FastImage
          style={_styles.avatar}
          source={{
            uri: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-1/c192.800.1229.1229a/s120x120/99127647_1867935460004199_382680486561972224_o.jpg?_nc_cat=111&_nc_sid=7206a8&_nc_oc=AQkVT2s6EbjUc7vrQQ9yQlIFoqVUAuPZhhqIjokQjTEXTy3G_4QNuTzV3JigtnOgToY&_nc_ht=scontent.fhan2-2.fna&oh=bd67163811011feb5033334bd4190102&oe=5EEC29C6',
            headers: { Authorization: '9876543210' },
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <TouchableArea style={{ flex: 1, alignItems: 'stretch', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontWeight: 'bold' }}>Shop Style FM</Text>
          <Text style={{ color: Colors.darkGrey, fontSize: 14 }} numberOfLines={1}>Xin chào, tôi có thể giúp gì cho bạn? Nếu không phiền tôi có thể xin thông tin</Text>
        </View>
        <Text style={{ fontSize: 12, color: Colors.grey }}>13/05/2020 12:04</Text>
      </TouchableArea>
    </View>

  )
}