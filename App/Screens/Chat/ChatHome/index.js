import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SplashScreen from 'App/Screens/SplashScreen/SplashScreen';
import Colors from 'App/Theme/Colors';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import BotChatScreen from '../BotChatScreen';
import Conversation from '../Conversation';
import ChatHelper from '../ChatHelper';

const Tab = createMaterialTopTabNavigator();
export default class HomeChatScreen extends React.Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.magazineBlue,
          labelStyle: { fontSize: 14, fontWeight: 'bold' },
          style: {
            backgroundColor: 'white',
            position: 'relative',
            shadowOpacity: 0,
            elevation: 0,
            borderBottomWidth: 0,
          },

        }}
        swipeEnabled={false}
      >
        <Tab.Screen name="Buy" options={{
          tabBarLabel: 'Trò Chuyện',
        }} component={Conversation} />
        <Tab.Screen name="Sell" options={{
          tabBarLabel: 'Hỗ trợ khách hàng',
        }} component={ChatHelper} />
      </Tab.Navigator>

    )
  }
}


function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        let icon = options.tabBarIcon;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0.75)),
        });

        const isActive = state.index == index;
        const tintColor = options.activeTintColor ? options.activeTintColor : Colors.grey;
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[{ flex: 1, textAlign: 'center', flexDirection: 'row', padding: 10, justifyContent: 'center', backgroundColor: 'white' }]}
          >
            <View style={[{ flexDirection: 'row', minWidth: 70, paddingVertical: 2, paddingHorizontal: 5, justifyContent: 'center', borderWidth: 1, borderColor: 'transparent', borderRadius: 15 },
            isActive ? {
              borderColor: tintColor,
            } :
              null
            ]}>
              <Animated.Text style={{ opacity, textAlign: 'center', color: tintColor }}>
                {label}
              </Animated.Text>
              <View style={{ marginLeft: 4, display: 'flex', justifyContent: 'center' }}>
                <Animated.Text style={{ opacity, textAlign: 'center', color: tintColor }}>
                  {icon}
                </Animated.Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}