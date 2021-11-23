import React from "react";
import { StackNavigationOptions } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

import { Text } from "components";
import { t } from "utils";
import { Colors, ComponentsStyle } from "style";

const navigationOptions = (): StackNavigationOptions => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: false,
  headerTintColor: Colors.black,
  headerShown: false,
});

export default navigationOptions;
