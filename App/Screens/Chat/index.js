import { createStackNavigator } from '@react-navigation/stack';
import HeaderTitle from 'App/Screens/Component/Header/HeaderTitle';
import Helpers from 'App/Theme/Helpers';
import React from 'react';
import RightButton from '../Component/Header/RightButton';
import HomeChatScreen from './HomeScreen';

const Stack = createStackNavigator();

export default function ChatScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: null,
        headerStyle: Helpers.headerStyle,
      }}
    >
      <Stack.Screen name="NewFeeds.Home" component={HomeChatScreen}
        options={{
          headerLeft: () => <HeaderTitle iconName={''} title={'Conversations'} />,
          headerRight: () => <RightButton iconName={'plus'} onPress={() => alert('This is a button!')} />,
        }}
      />
    </Stack.Navigator>
  )
}
