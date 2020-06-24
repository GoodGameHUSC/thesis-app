import ListProduct from 'App/Screens/Component/Product/ListProduct';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import Colors from '../../../../Theme/Colors';
import { Section } from '../../../../Theme/Styles.js';
import { TouchableArea } from 'App/Screens/Component/UIElement';
import { useNavigation } from '@react-navigation/native';
export default class HomeProducts extends React.Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.products != nextProps.products;
  }

  gotoSearch(text_search) {
    this.props.navigation.navigate('Home', { screen: 'Search', params: { text_search } })
  }

  render() {
    // https://www.npmjs.com/package/recyclerlistview#guides
    const { products, hasMore, interested } = this.props;
    console.log(interested);
    return (
      <View style={[Section.container, { paddingHorizontal: 0, paddingBottom: 0 }]}>
        <View style={[Section.flexRow, { paddingBottom: 5, paddingHorizontal: 10 }]}>
          <Text style={[Section.title]}> Dành riêng cho bạn </Text>
          {/* <TouchableOpacity>
            <Text style={[Section.view_more]}> Xem thêm</Text>
          </TouchableOpacity> */}
        </View>
        <View style={{ paddingHorizontal: 8 }}>
          <FlatList
            data={interested}
            renderItem={({ item }) =>
              <TouchableArea onPress={() => this.gotoSearch(item)}>
                <View style={{
                  backgroundColor: Colors.lynxWhite,
                  padding: 5,
                  overflow: 'hidden',
                  borderRadius: 5,
                  // color: 'black',
                  marginVertical: 3,
                  marginHorizontal: 5,
                  borderBottomWidth: 0,

                }}>
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item}</Text>
                </View>
              </TouchableArea>
            }
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
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
  },
}
