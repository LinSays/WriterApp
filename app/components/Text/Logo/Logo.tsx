import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";

import styles from "./Logo.styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  darkGray?: boolean;
  lightGray?: boolean;
  red?: boolean;
  bold?: boolean;
  white?: boolean;
  green?: boolean;
  center?: boolean;
  lightWeightText?: boolean;
  numberOfLines?: number;
}

export default function Logo(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const { white, green, darkGray, lightGray, bold, children, center, lightWeightText, red } = props;

  return (
    <Text {...props} style={customStyle}>
      {children}
    </Text>
  );
}

Logo.displayName = "Logo";
