import RecordSpeech from 'App/Screens/Home/HomeScreen/Component/RecordSpeech';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React, { useState } from 'react';
import { Text, View, Share } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from 'App/Theme/Colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import RippleButton from 'App/Screens/Component/UIElement/RippleButton';
import CartButton from 'App/Screens/Component/Product/CartButton';

export default function Header({ }) {

  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;
  const share = async () => {
    try {
      const result = await Share.share({
        message: `${product.name} | Shopping Me | Visit https://shoping-me.com/product/${product._id}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (<>
    <View style={style.container}>
      <RippleButton
        style={style.backButton}
        onPress={() => navigation.goBack()}
        icon_name={'arrow-left'}
      />
      <View style={{ overflow: 'hidden', flexDirection: 'row' }}>
        <Text style={{ color: Colors.blackLight, fontSize: 16, width: ScreenWidth - 150, textAlign: 'left' }} numberOfLines={1}>{product.name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <CartButton />
          <Icon name="share-2" onPress={share} style={style.rightButton} />
        </View>
      </View>
    </View>
  </>
  )
}

const style = {
  container: {
    backgroundColor: 'white',
    // backgroundColor: '#dae0e670',
    width: ScreenWidth,
    height: 50,
    borderRadius: 3,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backButton: {
    color: Colors.redOrange,
    fontSize: 24,
    // marginLeft: 10
  },
  rightButton: {
    color: Colors.magazineBlue,
    fontSize: 20,
    marginLeft: 15
  },
  actionButton: {
    color: Colors.grey,
    fontSize: 24,
    marginLeft: 7,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
}