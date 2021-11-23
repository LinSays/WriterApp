import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ComponentsStyle } from "style";

import SeriesEditScreen from "../../../screens/SeriesEdit";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  ...ComponentsStyle.transitionBetweenScreenPresets,
};

const EditSeriesNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen name="SeriesEdit" options={screenOptions} component={SeriesEditScreen} />
    </Stack.Navigator>
  );
};

export default EditSeriesNavigator;
