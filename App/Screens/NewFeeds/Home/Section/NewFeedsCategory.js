import Colors from 'App/Theme/Colors';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './NewFeedsCategoryStyle';

export default class NewFeedsCategory extends React.Component {

  render() {
    return <View style={styles.categoryContainer}>
      <FlatList
        data={DATA}
        renderItem={({ item }) =>
          <TouchableWithoutFeedback onPress={() => alert(`Click on ${JSON.stringify(item)} `)}>
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
              <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.title}</Text>
            </View>
          </TouchableWithoutFeedback>
        }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </View>
  }
}

const DATA = [
  {
    id: '3aafc-c605-48d3-a4f8-fbd91aa97f63',
    title: '#COVID19',
  },
  {
    id: '42344a0f-3da1-471f-bd96-145571e29d72',
    title: '#StayHome',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Hot Deal',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Social Distance',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sales 100%',
  },
  {
    id: '3a3268afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Clothes',
  },
  {
    id: '54a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sports',
  },
  {
    id: '3a32afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Games',
  },
  {
    id: '5842344a0f-3da1-471f-bd96-145571e29d72',
    title: 'Girls',
  },
  {
    id: '54a0-3da1-471f-bd96-145571e29d72',
    title: 'Boys',
  },

];