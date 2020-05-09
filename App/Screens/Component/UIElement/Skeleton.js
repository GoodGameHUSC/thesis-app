
import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from 'App/Theme/Colors';

function SkeletonUIElement({
  loading,
  shape,
  width,
  height
}) {
  return (
    <View
      style={[styles.common]}
    >
    </View>
  );
};

export function SkeletonContainer({ loading, width, height }) {
  return <SkeletonUIElement loading={loading} width={width} height={height} shape={'rectangle'} />
}

export function SkeletonCircle({ loading, width, height }) {
  return <SkeletonUIElement loading={loading} width={width} height={height} shape={'circle'} />
}

export function SkeletonSquare({ loading, width, height }) {
  return <SkeletonUIElement loading={loading} width={width} height={height} shape={'square'} />
}

export function SkeletonRectangle({ loading, width, height }) {
  return <SkeletonUIElement loading={loading} width={width} height={height} shape={'rectangle'} />
}

const Skeleton = {
  SkeletonCircle,
  SkeletonSquare,
  SkeletonRectangle
}

export default Skeleton
const styles = StyleSheet.create({
  common: {
    borderRadius: 4,
    color: Colors.grey
  }
});
