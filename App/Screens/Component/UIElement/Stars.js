import React from 'react';
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
export default function Stars({
  color,
  size,
  numberStar
}) {
  if (numberStar < 0 || numberStar > 5) console.warn("Please provide a start number between 0 and 5");
  const star = Math.ceil((Math.ceil(Math.abs(numberStar) % 5 * 100) / 100) * 2) / 2;
  return (
    <View style={{ flexDirection: 'row' }}>
      {[1, 2, 3, 4, 5].map(index => {
        const name = index < star ? "ios-star" : index == Math.ceil(star) ? "ios-star-half" : "ios-star-outline";
        return <Icon name={name} size={size || 16} key={index} style={{ color: color || "#faca51", marginRight: 2 }} />
      })}
    </View>
  )
}