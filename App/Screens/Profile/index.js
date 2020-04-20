import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import Icon from 'react-native-vector-icons/MaterialIcons';

// https://medium.com/@Daniel.Merrill/build-a-custom-tab-bar-with-a-menu-button-in-react-navigation-in-20-minutes-f7d721551ef

// const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const IS_IPHONE_X = false;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const images = {
  background: require('../../Assets/Images/defaults/mobile-shopping.jpg'), // Put your own image here
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

renderNavBar = () => (
  <View style={styles.navContainer}>
    <View style={styles.statusBar} />
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.iconLeft} onPress={() => { }}>
        <Icon name="add" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconRight} onPress={() => { }}>
        <Icon name="search" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  </View>
)
renderContent = () => (
  <View style={{ height: 2000 }}>
    <Text>Content</Text>
  </View>
)

export default function ProfileScreen() {

  return <View style={styles.container}>
    <ReactNativeParallaxHeader
      headerMinHeight={HEADER_HEIGHT}
      headerMaxHeight={200}
      extraScrollHeight={20}
      navbarColor="#3498db"
      title=""
      titleStyle={styles.titleStyle}
      backgroundImage={images.background}
      backgroundImageScale={1.2}
      renderNavBar={renderNavBar}
      renderContent={renderContent}
      containerStyle={styles.container}
      contentContainerStyle={styles.contentContainer}
      innerContainerStyle={styles.container}
      scrollViewProps={{
        // onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
        // onScrollEndDrag: () => console.log('onScrollEndDrag'),
      }}
    />
  </View>
}