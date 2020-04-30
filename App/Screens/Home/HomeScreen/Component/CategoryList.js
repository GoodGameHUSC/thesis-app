import IconFile from 'App/Screens/Component/UIElement/IconFile';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import Colors from '../../../../Theme/Colors';
import { Section } from '../../../../Theme/Styles.js';

import Figure from 'App/Screens/Component/UIElement/Figure';

function CategoryList({ categories }) {
  return (
    <View
      // style={style.container}
      style={[Section.container]}
    >
      <View style={[Section.flexRow]}>
        <Text style={[Section.title]}> Danh mục ngành hàng </Text>
        <TouchableOpacity>
          <Text style={[Section.view_more]}> Xem thêm</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ marginTop: 10 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <FlatList
          numColumns={6}
          data={categories}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity key={item._id} onPress={item.action} activeOpacity={0.7}>
                  <View style={style.icon_container} >
                    <View style={{ overflow: "hidden", borderRadius: 50 }}>
                      <Figure uri={item.image} height={65} width={65} />
                    </View>
                    <Text style={style.icon_text}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          }}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  )
}
export default CategoryList

const style = {
  container: {
    // height: 100,
    width: ScreenWidth,
    backgroundColor: 'white',
    overflow: 'scroll',
    paddingHorizontal: 0,
    paddingVertical: 20,
    marginBottom: 5
  },
  icon_container: {
    marginRight: 5,
    width: 100,
    height: 110,
    padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon_text: {
    fontSize: 12,
    height: 30,
    textAlign: 'center',
    color: Colors.darkGrey
  }
}