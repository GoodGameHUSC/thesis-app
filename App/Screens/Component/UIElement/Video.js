import { ScreenWidth } from 'App/Theme/Dimension';
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Feather';
import IconFile from 'App/Screens/Component/UIElement/IconFile';

{/* <Video
              controls={true}
              source={{ uri: item.link }}
              ref={(ref) => {
                // this.player = ref
                // console.log("HI")
              }}
              onBuffer={() => { }}
              onError={() => { }}
              style={style.backgroundVideo}
              resizeMode={"cover"}
              paused={true}
            /> */}
export default function VideoControl({
  video_uri
}) {
  const [paused, setPaused] = useState(true);
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => {
        if (!paused)
          setPaused(true)
      }}
      activeOpacity={1}
    >
      <>
        {
          paused && <TouchableOpacity
            activeOpacity={1}
            onPress={() => { setPaused(!paused) }}
            style={style.icon}>
            <IconFile path={require('../../../Assets/Icons/play_video.png')} size={50} />
          </TouchableOpacity>
        }
        <Video
          source={{ uri: video_uri }}
          style={[style.video, (paused ? { opacity: 0.6 } : {})]}
          resizeMode={"cover"}
          paused={paused}
          repeat={true}
        />
      </>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    position: 'relative'
  },
  icon: {
    top: '40%',
    left: ScreenWidth / 2 - 30,
    position: 'absolute',
    padding: 10,
    color: 'white',
    zIndex: 1,
  },
  video: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    zIndex: 0,

    // shadowOpacity: 0.5
  },
})
