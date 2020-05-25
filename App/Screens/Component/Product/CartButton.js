import { useNavigation } from '@react-navigation/native';
import Colors from '../../../Theme/Colors';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native'
export default function CartButton() {

  const navigation = useNavigation();
  const goCart = () => navigation.navigate('Cart')
  const carts = useSelector(state => state.carts)
  return (
    Object.keys(carts).length == 0
      ? <Icon name="shopping-cart" onPress={goCart} style={style.rightButton} />
      : <View style={{ position: 'relative' }}>
        <View style={{ position: 'absolute', backgroundColor: Colors.redOrange, top: 0, right: -5, height: 12, width: 12, borderRadius: 10, zIndex: 1 }}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 8, fontWeight: 'bold' }}>{Object.keys(carts).length}</Text>
        </View>
        <Icon name="shopping-cart" onPress={goCart} style={style.rightButton} />
      </View>
  )
}

const style = {
  rightButton: {
    color: Colors.magazineBlue,
    fontSize: 20,
    marginLeft: 15
  },
}