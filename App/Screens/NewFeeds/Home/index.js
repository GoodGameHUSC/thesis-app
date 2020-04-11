// import styles from './style';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class NewFeedHomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
    headerMode: 'screen'
    /* No more header config here! */
  };

  render() {
    return (
      <View >
        <Text>This is new feeds</Text>
        <Icon name="ios-person" size={30} color="#4F8EF7" />
      </View>
    )
  }
}