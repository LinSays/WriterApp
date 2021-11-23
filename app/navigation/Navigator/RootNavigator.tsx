import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ComponentsStyle } from "style";

import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  ...ComponentsStyle.transitionBetweenScreenPresets,
};

const RootNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={screenOptions} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
