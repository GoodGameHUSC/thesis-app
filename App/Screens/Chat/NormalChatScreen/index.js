import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import socket from '../../../Shared/WebSocket';
import store from 'App/Stores/index';
import { useFocusEffect } from '@react-navigation/native';

class NormalChatScreens extends React.Component {

  state = {
    messages: [
      {
        _id: 1,
        text: 'Xin chào, tôi có thể giúp gì cho bạn',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ],
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { conversation } = this.props.route?.params;
    const { user } = store.getState().user;

    socket.emit('join_conversation', {
      room_id: conversation._id,
      user: { username: user.username, _id: user._id }
    })

    socket.on('disconnect', () => {
      console.log('connection to server lost.');
    });

    socket.on('receive_message', (data) => {
      const { msg_content } = data;
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, msg_content),
      }))
    });
  }

  onSend(messages = []) {
    const { conversation } = this.props.route?.params;
    const { user } = store.getState().user;

    socket.emit('send_message', {
      room_id: conversation._id,
      user_id: user._id,
      msg_content: messages
    });
  }

  componentWillUnmount() {
    debugger;
  }

  _handleUpdate = user => {
    // Do something with user object
  };

  onBack = () => {
    this.setState({ messages: [] })
  }

  render() {

    const { conversation } = this.props.route?.params;
    const { user } = store.getState().user;

    return (
      <>
        <FocusEffectHook
          conversation={conversation}
          onUpdate={this.handleUpdate}
          onBack={this.onBack}
        />
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: user._id,
            avatar: user.avatar
          }}
        />
      </>
    )
  }
}

export default NormalChatScreens;

function FocusEffectHook({ userId, onUpdate, onBack }) {
  useFocusEffect(
    React.useCallback(() => {
      return () => onBack();
    }, [userId, onUpdate])
  );

  return null;
}
