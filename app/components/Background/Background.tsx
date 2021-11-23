import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Defs, Rect, LinearGradient, Stop } from "react-native-svg";

interface Props {
  startColor?: string;
  endColor?: string;
}

const Background = ({ children, startColor, endColor }) => {
  return (
    <View style={{ flex: 1 }}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0" stopColor={startColor} />
            <Stop offset="1" stopColor={endColor} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      {children}
    </View>
  );
};

export default Background;
