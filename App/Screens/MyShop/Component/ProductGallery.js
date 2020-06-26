import React, { useState } from 'react';
import { View, Image, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Colors from 'App/Theme/Colors';
import { ScreenWidth } from 'App/Theme/Dimension';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import VideoControl from 'App/Screens/Component/UIElement/Video';

export default function ProductGallery({ gallery }) {
  const navigation = useNavigation()
  const size = gallery.length;
  const [index, setIndex] = useState(0)

  function zoom() {
    // navigation.navigate("Gallery", {
    //   current_index: index,
    //   gallery
    // })
  }

  function _renderItem({ item, index }) {
    return (
      <View style={{
        height: 250,
        justifyContent: 'center'
      }}
        key={item._id}
      >
        {
          item.type == "video" ?
            <VideoControl video_uri={item.link} />
            :
            <TouchableWithoutFeedback
              onPress={zoom}
            >
              <FastImage
                style={{ width: undefined, height: undefined, aspectRatio: 1 }}
                source={{
                  uri: item.link,
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.center}
              />
            </TouchableWithoutFeedback>
        }
      </View>
    )
  }


  return (<>
    <View style={style.container}>

      <Carousel
        loop={true}
        layout={"default"}
        // autoplay={true}

        inactiveSlideScale={1}
        data={gallery}
        sliderWidth={ScreenWidth}
        itemWidth={ScreenWidth}
        renderItem={_renderItem}
        onSnapToItem={index => setIndex(index)}
        activeAnimationType={'spring'}
      />

      <Text style={{
        position: 'absolute', fontSize: 12, bottom: 4, right: 10, backgroundColor: Colors.lynxWhite,
        paddingVertical: 2, paddingHorizontal: 6, borderRadius: 10
      }}>{(index + 1) + "/" + size}</Text>
    </View>
  </>
  )
}

export function LightBoxGallery({ gallery }) {

}

const style = {
  container: {
    backgroundColor: 'white',
    width: ScreenWidth,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative'
  },
  backgroundVideo: {
    width: '100%',
    height: 250,
    // aspectRatio: 1
  },
}
