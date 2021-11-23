import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MovieHomeScreen from "../../../screens/MovieHome";
import MovieListScreen from "../../../screens/MovieList";
import MovieDetailScreen from "../../../screens/MovieDetail";
import MoviePlayScreen from "../../../screens/MoviePlay";
import MovieActScreen from "../../../screens/MovieAct";

const Stack = createStackNavigator();

const MovieNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="MovieHome"
      options={MovieHomeScreen.navigationOptions}
      component={MovieHomeScreen}
    />
    <Stack.Screen
      name="MovieList"
      options={MovieListScreen.navigationOptions}
      component={MovieListScreen}
    />
    <Stack.Screen
      name="MovieDetail"
      options={MovieDetailScreen.navigationOptions}
      component={MovieDetailScreen}
    />
    <Stack.Screen
      name="MoviePlay"
      options={MoviePlayScreen.navigationOptions}
      component={MoviePlayScreen}
    />
    <Stack.Screen
      name="MovieAct"
      options={MovieActScreen.navigationOptions}
      component={MovieActScreen}
    />
  </Stack.Navigator>
);

export default MovieNavigator;
