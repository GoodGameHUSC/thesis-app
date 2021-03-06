import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import { getAttr, toLocaleString } from '../../../../Utils/_';
import Colors from '../../../../Theme/Colors';
import { Section } from '../../../../Theme/Styles.js';
import Stars from '../../../Component/UIElement/Stars';
import { useNavigation } from '@react-navigation/native';
import ListProduct from 'App/Screens/Component/Product/ListProduct';
export default class HomeProducts extends React.Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.products != nextProps.products;
  }

  render() {
    // https://www.npmjs.com/package/recyclerlistview#guides
    const { products, hasMore } = this.props;
    return (
      <View style={[Section.container, { paddingHorizontal: 0, paddingBottom: 0 }]}>
        <View style={[Section.flexRow, { paddingBottom: 5, paddingHorizontal: 10 }]}>
          <Text style={[Section.title]}> Dành riêng cho bạn </Text>
          <TouchableOpacity>
            <Text style={[Section.view_more]}> Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <ListProduct products={products} hasMore={hasMore} />
      </View>
    )
  }
}

const style = {
  container: {
    width: ScreenWidth,
    backgroundColor: 'white',
    // overflow: 'hidden',
    paddingHorizontal: 0,
    paddingVertical: 20,
    paddingBottom: 0,
    // marginBottom: 5,

  },
  icon_container: {
    marginHorizontal: 2.5,
    marginBottom: 5,
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    // borderRadius: 3,
  },
  icon_text: {
    // fontSize: 12,
    color: Colors.blackLight
  }
}
