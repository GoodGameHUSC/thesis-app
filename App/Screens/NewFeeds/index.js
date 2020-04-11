import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import NewFeedHomeScreen from './Home/index';
const Stack = createStackNavigator();

export default function NewFeedsStack() {
  return (
    <Stack.Navigator
    >
      <Stack.Screen name="Home" component={NewFeedHomeScreen}
        options={{
          headerTitle: props => <Text>New Feeds</Text>,
          headerRight: () => (
            <View>
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                titleColor="#000"
                color="#fff"
              />
            </View>
          ),
        }}

      />
    </Stack.Navigator>
  )
}