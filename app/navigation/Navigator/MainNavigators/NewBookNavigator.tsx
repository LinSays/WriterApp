import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ComponentsStyle } from "style";

import BookNewScreen from "../../../screens/BookNew/BookNewScreen";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  ...ComponentsStyle.transitionBetweenScreenPresets,
};

const NewBookNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen name="BookNew" options={screenOptions} component={BookNewScreen} />
    </Stack.Navigator>
  );
};

export default NewBookNavigator;
