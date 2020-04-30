import React from 'react';
import { Image } from 'react-native';

export default function Figure({
  uri,
  height,
  width,
  style = {}
}) {
  return (
    <Image
      source={{ uri: uri }}
      style={{ width: width, height: height, aspectRatio: 1 }}
    />
  )
}