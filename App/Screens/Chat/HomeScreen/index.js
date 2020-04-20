import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SplashScreen from 'App/Screens/SplashScreen/SplashScreen';
import Colors from 'App/Theme/Colors';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import BotChatScreen from '../BotChatScreen';

const Tab = createMaterialTopTabNavigator();
export default class HomeChatScreen extends React.Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: 'powderblue' },
          showIcon: true,
          labelStyle: {
            color: 'red'
          }
        }}
        tabBar={props => <MyTabBar {...props} />}
      >
        {/* <Tab.Screen name="Home" options={{
          tabBarLabel: 'Friend',
          activeTintColor: Colors.grey,
          tabBarIcon: <IconFontAwesome name="user-friends" style={{ fontSize: 14 }} />
        }} component={HomeScreen} /> */}
        <Tab.Screen name="Shop" options={{
          tabBarLabel: 'Shop Agent',
          activeTintColor: Colors.grey,
          tabBarIcon: <IconFontisto name="shopping-store" style={{ fontSize: 12 }} />
        }} component={SplashScreen} />
        <Tab.Screen name="Bot" options={{
          tabBarLabel: 'Bot Helper',
          activeTintColor: Colors.grey,
          tabBarIcon: <IconFontAwesome name="robot" style={{ fontSize: 14 }} />
        }} component={BotChatScreen} />
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