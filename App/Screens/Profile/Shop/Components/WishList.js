import { ScreenWidth } from 'App/Theme/Dimension.js';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { getAttr } from '../../../../Utils/_';
import Colors from '../../../../Theme/Colors';
import { Section } from '../../../../Theme/Styles.js';
import { useNavigation } from '@react-navigation/native';
import { useAPICreator } from 'App/Shared/API';

export default function WishList({ products }) {

  console.log(products)
  const navigation = useNavigation();
  function openProduct(item) {
    navigation.navigate('MyShop', {
      screen: 'DetailManage',
      params: {
        id: item._id,
        product: item
      },
    });
  }

  return (
    <View style={[Section.container, { flex: 1 }]}>
      <View style={{}}>
        {
          products.length > 0 ?
            <FlatList
              data={products.slice(0, 4)}
              numColumns={4}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={[style.icon_container, { backgroundColor: Colors.lynxWhite }]} key={item._id} onPress={() => openProduct(item)} activeOpacity={0.9}>
                    <>
                      <FastImage
                        style={{ width: undefined, height: 70, aspectRatio: 1, borderRadius: 100 }}
                        source={{
                          uri: getAttr(item, 'gallery', 0, 'link'),
                          priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                      <Text style={style.icon_text} numberOfLines={2}>{item.name}</Text>
                    </>
                  </TouchableOpacity>
                )
              }}
              // horizontal={true}
              keyExtractor={item => item._id}
              showsHorizontalScrollIndicator={false}
            />
            : <Text style={{ textAlign: 'center' }}>Chưa có sản phẩm</Text>
        }

      </View>
    </View>
  )
}


const style = {
  container: {
    width: ScreenWidth,
    backgroundColor: 'white',
    overflow: 'scroll',
    paddingHorizontal: 0,
    paddingVertical: 20,
    marginBottom: 5
  },
  icon_container: {
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    flex: 1,
    height: 120,
    padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon_text: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.darkGrey
  }
}
