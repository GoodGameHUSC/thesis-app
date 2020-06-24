import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Helpers from 'App/Theme/Helpers';
import React from 'react';
import Colors from '../../Theme/Colors';
import Header from './Component/Header';
import ProductDetailIndex from './IndexScreen';
import GalleryScreen from './GalleryScreen/index';
import RatingScreen from './RatingScreen/index';
import { NormalHeaderOption } from 'App/Screens/Component/Header/NormaHeader';

const Stack = createStackNavigator();
export default function ProductDetailStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: null,
        // headerShown: false,
        headerStyle: Helpers.headerStyle,
        gestureDirection: 'vertical',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="Index" component={ProductDetailIndex}
        options={{
          headerTransparent: true,
          headerStyle: {
            height: 50,
          },
          headerLeft: () => <Header />,
          headerRight: null,
        }}
      />
      <Stack.Screen name="Gallery"
        component={GalleryScreen}
        options={{
          headerTransparent: true,
          titleStyle: {
            color: 'white'
          },
          headerTintColor: 'white',
          headerTitle: 'Thư viện ảnh'
        }}
      />

      <Stack.Screen name="Rating"
        component={RatingScreen}
        options={NormalHeaderOption("Các đánh giá về sản phẩm này")}
      />

    </Stack.Navigator>
  )
}


const style = {
  searchButton: {
    color: Colors.redOrange,
    fontSize: 22,
  },
  searchContainer: {
    padding: 5,
    paddingRight: 10
  },
}