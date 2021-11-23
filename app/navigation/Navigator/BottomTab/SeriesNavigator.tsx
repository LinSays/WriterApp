import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SeriesHomeScreen from "../../../screens/SeriesHome";
import SeriesListScreen from "../../../screens/SeriesList";
import SeriesDetailScreen from "../../../screens/SeriesDetail";
import SeriesPlayScreen from "../../../screens/SeriesPlay";
import SeriesActScreen from "../../../screens/SeriesAct";
import SeriesSeasonScreen from "../../../screens/SeriesSeason";

const Stack = createStackNavigator();

const SeriesNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="SeriesHome"
      options={SeriesHomeScreen.navigationOptions}
      component={SeriesHomeScreen}
    />
    <Stack.Screen
      name="SeriesList"
      options={SeriesListScreen.navigationOptions}
      component={SeriesListScreen}
    />
    <Stack.Screen
      name="SeriesDetail"
      options={SeriesDetailScreen.navigationOptions}
      component={SeriesDetailScreen}
    />
    <Stack.Screen
      name="SeriesPlay"
      options={SeriesPlayScreen.navigationOptions}
      component={SeriesPlayScreen}
    />
    <Stack.Screen
      name="SeriesSeason"
      options={SeriesSeasonScreen.navigationOptions}
      component={SeriesSeasonScreen}
    />
    <Stack.Screen
      name="SeriesAct"
      options={SeriesActScreen.navigationOptions}
      component={SeriesActScreen}
    />
  </Stack.Navigator>
);

export default SeriesNavigator;
