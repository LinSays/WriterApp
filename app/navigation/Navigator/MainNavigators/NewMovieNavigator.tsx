import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ComponentsStyle } from "style";

import MovieNewScreen from "../../../screens/MovieNew/MovieNewScreen";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  ...ComponentsStyle.transitionBetweenScreenPresets,
};

const NewMovieNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen name="MovieNew" options={screenOptions} component={MovieNewScreen} />
    </Stack.Navigator>
  );
};

export default NewMovieNavigator;
