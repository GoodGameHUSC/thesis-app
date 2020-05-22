import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function TouchableArea(props) {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
    >
      {props.children}
    </TouchableOpacity>
  )
}