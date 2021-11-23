import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";

import styles from "./Secondary.styles";
import mainStyle from "../styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
  red?: boolean;
  orange?: boolean;
  bold?: boolean;
  white?: boolean;
  green?: boolean;
  blue?: boolean;
  center?: boolean;
  lightWeightText?: boolean;
  numberOfLines?: number;
}

export default function Secondary(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const {
    blue,
    orange,
    white,
    green,
    darkGray,
    lightGray,
    red,
    bold,
    children,
    center,
    lightWeightText,
  } = props;

  return (
    <Text {...props} style={customStyle}>
      {children}
    </Text>
  );
}

Secondary.displayName = "Secondary";
