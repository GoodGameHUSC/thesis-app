import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../Theme/Colors';
import NewFeedHomeScreen from './Home/index';
const Stack = createStackNavigator();

export default function NewFeedsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: null,
        headerStyle: style.headerStyle,
      }}
    >
      <Stack.Screen name="NewFeeds.Home" component={NewFeedHomeScreen}
        options={{
          headerLeft: (props) => titleLeftGenerator("Shop Feeds"),
          headerRight: () => (
            <View style={style.searchContainer} >
              <Icon name="search" style={style.searchButton} onPress={() => alert('This is a button!')} />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

const titleLeftGenerator = (title) => <View style={style.titleLeftContainer}>
  <Icon name="rss" style={style.titleLeftIcon} onPress={() => alert('This is a button!')} />
  <Text style={style.title} >{title}</Text>
</View>

const style = {
  titleLeftContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    width: 200
  },
  title: {
    color: Colors.seaRock,
    fontWeight: "600",
    fontSize: 19,
    marginLeft: 5,
    textAlignVertical: "bottom"
  },
  titleLeftIcon: {
    color: Colors.seaRock,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 22
  },
  searchButton: {
    color: Colors.redOrange,
    fontSize: 22,
  },
  searchContainer: {
    padding: 5,
    paddingRight: 10
  },
  headerStyle: {
    backgroundColor: 'white',
    // ios
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    },
    // android
    borderBottomWidth: 0,
    elevation: 1,
  }
}