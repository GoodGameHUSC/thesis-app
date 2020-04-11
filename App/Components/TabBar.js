import React from 'react';
import { BottomTabBar } from 'react-navigation-tabs';

export default function TabBar(props) {
  return <BottomTabBar {...props}
    style={Style.tabbar}
  />
};

const Style = {
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: 'white',
    position: 'relative',
    padding: 5,
    // ios
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    },
    // android
    borderTopWidth: 0,
    elevation: 10,
  },
};