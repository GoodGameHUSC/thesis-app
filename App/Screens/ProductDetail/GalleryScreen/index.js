import { useRoute } from '@react-navigation/native';
import Colors from 'App/Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';

export default function GalleryScreen({ }) {
  const route = useRoute();
  const { gallery, current_index } = route.params;

  const size = gallery.length;
  const [index, setIndex] = useState(current_index || 0)

  return (<>
    <View style={{
      backgroundColor: '#333333',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
      // position: 'relative',
    }}>
      <View>
        <Carousel
          loop={true}
          layout={"default"}
          inactiveSlideScale={1}
          data={gallery}
          sliderWidth={ScreenWidth}
          itemWidth={ScreenWidth}
          renderItem={_renderItem}
          onSnapToItem={index => setIndex(index)}
          activeAnimationType={'spring'}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 20, width: ScreenWidth, backgroundColor: 'transparent',
          justifyContent: 'center',
          flexDirection: 'row'
        }}
      >
        <Text style={{
          width: 40,
          textAlign: 'center',
          backgroundColor: Colors.lynxWhite,
          paddingVertical: 2,
          borderRadius: 10
        }}>{(index + 1) + "/" + size}</Text>
      </View>

    </View>
  </>
  )

  function _renderItem({ item, index }) {
    return (
      <View style={{
        height: undefined,
        aspectRatio: 1,
        justifyContent: 'center'
      }}
        key={item._id}
      >
        <FastImage
          style={{ width: undefined, height: undefined, aspectRatio: 1 }}
          source={{
            uri: item.link,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.center}
        />
      </View>

    )
  }

}

const style = {
  container: {

  },

}