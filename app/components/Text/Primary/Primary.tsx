import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";

import styles from "./Primary.styles";
import mainStyle from "../styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
  red?: boolean;
  bold?: boolean;
  white?: boolean;
  green?: boolean;
  blue?: boolean;
  center?: boolean;
  numberOfLines?: number;
}

export default function Primary(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const { red, white, blue, green, darkGray, lightGray, bold, children, center } = props;

  return (
    <Text {...props} style={customStyle}>
      {children}
    </Text>
  );
}

Primary.displayName = "Primary";
