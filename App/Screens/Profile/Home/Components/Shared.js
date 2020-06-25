
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../../../../Theme/Colors';
import Helpers from '../../../../Theme/Helpers';

export const shared_styles = StyleSheet.create({
  page_container: {
    flex: 1
  },
  section_container: {
    backgroundColor: 'white',
    // paddingVertical: 10,
    paddingHorizontal: 10,
    // marginVertical: 5,
    marginTop: 5,
    paddingBottom: 10
  },
  section_header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    borderBottomColor: Colors.bg
  }
})


export function HeaderSection({ icon, leftText, rightText, rightTextOnPress, style, styleRightText, showArrow = true }) {
  return (
    <View style={[shared_styles.section_header, style]}>
      <View style={Helpers.flexRow}>
        {icon}
        <Text style={{ fontSize: 15, color: Colors.textDark }}>{leftText}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={Helpers.flexRow} onPress={rightTextOnPress || null}>
        <Text style={{ fontSize: 12, color: Colors.redOrange, marginRight: 5, ...styleRightText }}>{rightText}</Text>
        {showArrow && <IconSimple size={12} name="arrow-right" style={{ color: Colors.redOrange }} />}
      </TouchableOpacity>
    </View>
  )
}