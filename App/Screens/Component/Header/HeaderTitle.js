import Colors from 'App/Theme/Colors';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function HeaderTitle({
  iconName,
  iconStyle,
  iconOnPress,
  title,
  titleStyle,
}) {
  return <View style={style.titleLeftContainer}>
    <Icon name={iconName} style={[style.titleLeftIcon, iconStyle]} onPress={iconOnPress} />
    <Text style={[style.title, titleStyle]} >{title}</Text>
  </View>

}

const style = {
  titleLeftContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    width: 200,
  },
  title: {
    color: Colors.seaRock,
    fontWeight: "600",
    fontSize: 18,
    marginLeft: 5,
    textAlignVertical: "bottom",
  },
  titleLeftIcon: {
    color: Colors.seaRock,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 22
  },

}