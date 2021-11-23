import React from "react";
import { StackNavigationOptions } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";

import { Colors, ComponentsStyle } from "style";

const navigationOptions = (): StackNavigationOptions => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: false,
  headerShown: false,
});

export default navigationOptions;
