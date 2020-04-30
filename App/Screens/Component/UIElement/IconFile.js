import React from 'react';
import { Image } from 'react-native';

export default function IconFile({
  path,
  size
}) {
  return (
    <Image source={path}
      style={{ width: size, height: size }}
    />
  )
}