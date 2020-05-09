import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import { getAttr, toLocaleString } from 'App/Utils/_';
import Colors from '../../../Theme/Colors';
import { Section } from '../../../Theme/Styles.js';
import Stars from '../../Component/UIElement/Stars';
import { useNavigation } from '@react-navigation/native';
export default class ListProduct extends React.Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.products != nextProps.products;
  }

  render() {
    // https://www.npmjs.com/package/recyclerlistview#guides
    const { products, hasMore, infinite = true } = this.props;
    return (
      <View style={{ backgroundColor: Colors.lynxWhite, padding: 2.5, paddingVertical: 5, paddingBottom: 0 }}>
        <FlatList
          data={products}
          numColumns={2}
          removeClippedSubviews={true}
          maxToRenderPerBatch={1}
          disableVirtualization={false}
          initialNumToRender={2}
          windowSize={7}
          // onEndReachedThreshold={1200}
          renderItem={({ item }) => <ProductItem key={item._id} item={item} />}
          keyExtractor={item => item._id}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ paddingVertical: 20 }}>
          {
            hasMore && infinite ? <Text style={{ textAlign: 'center', color: Colors.redOrange }}>Đang tải...</Text>
              : <Text style={{ textAlign: 'center', color: Colors.grey }}>Bạn đã ở cuối danh sách</Text>
          }
        </View>
      </View>
    )
  }
}

function ProductItem(props) {
  const navigation = useNavigation();
  return <Item {...props} navigation={navigation} />;
}

class Item extends React.Component {

  constructor(props) {
    super(props)
    // this.navigation = useNavigation();
  }
  openProduct = () => {
    this.props.navigation.navigate('ProductDetail', {
      screen: 'Index',
      params: {
        id: this.props.item._id,
        product: this.props.item
      },
    });
  }
  showQuickMenu() {
    alert("Haha")
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.item != nextProps.item;
  }
  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity
        style={[style.icon_container, { backgroundColor: Colors.white }]}
        onPress={this.openProduct} onLongPress={this.showQuickMenu} activeOpacity={0.9}>
        <>
          <FastImage
            style={{ width: '100%', height: undefined, aspectRatio: 1 }}
            source={{
              uri: getAttr(item, 'gallery', 0, 'link'),
              headers: { Authorization: '9876543210' },
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={{ backgroundColor: 'white', width: '100%', padding: 10, paddingVertical: 10 }}>
            <Text style={[style.icon_text], { overflow: 'hidden', marginBottom: 10 }}>{item.name}</Text>
            <Stars numberStar={item.rating} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 5 }}>
              <View>
                <Text style={[style.icon_text, { color: Colors.redOrange, fontSize: 16 }]}>
                  {toLocaleString(item.real_price ? item.real_price : item.price)}
                  <Text style={{ fontSize: 12, textDecorationLine: 'underline' }}>đ</Text>
                </Text>
                {
                  item.discount && <Text style={[style.icon_text, { color: Colors.grey, fontSize: 12 }]}>
                    <Text style={{ textDecorationLine: 'line-through' }}>{toLocaleString(item.price)}</Text>
                    <Text style={{ fontSize: 8, textDecorationLine: 'underline' }}>đ</Text>
                  </Text>
                }
              </View>
              <Icon name={"more-horizontal"} size={16} style={[style.icon_text, { fontSize: 16, color: Colors.grey }]} />
            </View>
          </View>
          {
            item.discount && <View style={{ position: 'absolute', right: 5, top: 5, backgroundColor: Colors.error, padding: 2, paddingHorizontal: 5, borderRadius: 10 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 10, color: Colors.white }}>-{item.discount}%</Text>
            </View>
          }

        </>
      </TouchableOpacity>
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
