import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Colors from '../../../Theme/Colors';
import CheckBox from 'react-native-check-box';

export default function ButtonControl({ onPress, title, type, styleBtn, styleText, disabled }) {

  const [tintBg, setTintBg] = useState(Colors.redOrange);
  const [tintText, setText] = useState(Colors.white);

  useEffect(() => {
    switch (type) {
      case 'active': setTintBg(Colors.active); setText('white'); break;
      case 'transparent': setTintBg('transparent'); setText(Colors.darkGrey); break;
      default: setTintBg(Colors.redOrange); setText('white'); break;
    }
  }, [type])

  return (<TouchableOpacity
    onPress={onPress}
    style={[styles.button, { backgroundColor: tintBg }, styleBtn]}
    disabled={disabled}
    activeOpacity={0.9}
  >
    <Text
      style={[styles.text, { color: tintText }, styleText]}
    >
      {title}
    </Text>
  </TouchableOpacity>
  )
}

export function CheckBoxControl(props) {
  return (
    <CheckBox
      {...props}
      style={[props.style, { flex: 1, paddingVertical: 20 }]}
      leftTextStyle={[styles.checkBoxText, props.leftTextStyle,]}
      rightTextStyle={[styles.checkBoxText, props.rightTextStyle,]}
      checkBoxColor={Colors.active}

    />
  )
}

export function RadioButton({ opTions, onChangeOption, textStyle }) {

  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <View>

      {
        opTions.map((opTion, index) => {
          <CheckBoxControl
            {...opTion}
            isChecked={index == activeIndex}
            onClick={() => {
              setActiveIndex(index)
              onChangeOption(index);
            }}
          />
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    color: Colors.blackLight,
    // height: 36,
    paddingVertical: 10,
    padding: 0,
    fontSize: 16,
    marginVertical: 10,
    // fontWeight: 'bold',
    backgroundColor: Colors.redOrange,
    borderRadius: 4,
    elevation: 4,

  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
    // backgroundColor: 'blue'
  },
  checkBoxText: {
    // color: Colors.blackLight,
    fontSize: 16
  },
})
