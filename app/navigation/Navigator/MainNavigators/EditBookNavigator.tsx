import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ComponentsStyle } from "style";

import MovieEditScreen from "../../../screens/MovieEdit";
import BookEditScreen from "../../../screens/BookEdit";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  ...ComponentsStyle.transitionBetweenScreenPresets,
};

const EditBookNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen name="BookEdit" options={screenOptions} component={BookEditScreen} />
    </Stack.Navigator>
  );
};

export default EditBookNavigator;
