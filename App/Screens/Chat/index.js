import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NormalHeaderOption } from 'App/Screens/Component/Header/NormaHeader';
import Helpers from 'App/Theme/Helpers';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../Theme/Colors';
import BotChatScreen from './BotChatScreen';
import HomeChatScreen from './ChatHome';
import NormalChatScreens from './NormalChatScreen';
const Stack = createStackNavigator();

export default function ChatScreenStack({ navigation }) {

  return (
    <Stack.Navigator
      screenOptions={{
        title: null,
        headerStyle: Helpers.headerStyle,
        gestureDirection: 'vertical',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="Home" component={HomeChatScreen}
        options={
          ({ navigation, route }) => ({
            headerTitleStyle: {
              fontSize: 18
            },
            headerTintColor: Colors.seaRock,
            headerTitle: 'Tin Nhắn',
            headerTitleAlign: 'center',
            headerRight: () => (
              <View style={style.searchContainer} >
                {/* <Icon name="comment-plus-outline" style={style.searchButton} onPress={() => navigation.navigate('Cart', { screen: 'Order' })} /> */}
              </View>
            ),
          })}
      />

      <Stack.Screen name="Bot" component={BotChatScreen}
        options={NormalHeaderOption('Chat Bot')}
      />

      <Stack.Screen name="HelpDesk" component={BotChatScreen}
        options={NormalHeaderOption('Hỗ trợ')}
      />

      <Stack.Screen name="ChatRoom" component={NormalChatScreens}
        options={({ route }) => NormalHeaderOption(route.params?.conversation?.name)}
      />
    </Stack.Navigator>
  )
}

const style = {
  searchButton: {
    color: Colors.grey,
    fontSize: 26,
  },
  searchContainer: {
    padding: 5,
    paddingRight: 10
  },
}