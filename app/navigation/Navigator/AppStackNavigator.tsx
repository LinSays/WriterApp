import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RootNavigator from "./RootNavigator";
import GuideNavigator from "./GuideNavigator";
import FeedbackScreen from "../../screens/Feedback";
import PrivacyPolicyScreen from "../../screens/PrivacyPolicy";
import LanguageSettingScreen from "../../screens/LanguageSetting";
import ProfileEditScreen from "../../screens/ProfileEdit";
import NewMovieNavigator from "./MainNavigators/NewMovieNavigator";
import EditMovieNavigator from "./MainNavigators/EditMovieNavigator";
import MovieSceneScreen from "../../screens/MovieScene";
import BookSceneScreen from "../../screens/BookScene";
import EditBookNavigator from "./MainNavigators/EditBookNavigator";
import NewBookNavigator from "./MainNavigators/NewBookNavigator";
import SeriesSceneScreen from "../../screens/SeriesScene";
import EditSeriesNavigator from "./MainNavigators/EditSeriesNavigator";
import NewSeriesNavigator from "./MainNavigators/NewSeriesNavigator";

const AppStack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: "red" },
        headerShown: false,
      }}
    >
      <AppStack.Screen
        name="GuideStack"
        options={{ headerShown: false }}
        component={GuideNavigator}
      />
      <AppStack.Screen name="AppStack" options={{ headerShown: false }} component={RootNavigator} />
      <AppStack.Screen
        name="ProfileEdit"
        options={ProfileEditScreen.navigationOptions}
        component={ProfileEditScreen}
      />
      <AppStack.Screen
        name="LanguageSetting"
        options={LanguageSettingScreen.navigationOptions}
        component={LanguageSettingScreen}
      />
      <AppStack.Screen
        name="PrivacyPolicy"
        options={PrivacyPolicyScreen.navigationOptions}
        component={PrivacyPolicyScreen}
      />
      <AppStack.Screen
        name="Feedback"
        options={FeedbackScreen.navigationOptions}
        component={FeedbackScreen}
      />
      <AppStack.Screen
        name="NewMovie"
        options={{ headerShown: false }}
        component={NewMovieNavigator}
      />
      <AppStack.Screen
        name="EditMovie"
        options={{ headerShown: false }}
        component={EditMovieNavigator}
      />
      <AppStack.Screen
        name="MovieScene"
        options={{ headerShown: false }}
        component={MovieSceneScreen}
      />

      <AppStack.Screen
        name="NewSeries"
        options={{ headerShown: false }}
        component={NewSeriesNavigator}
      />
      <AppStack.Screen
        name="EditSeries"
        options={{ headerShown: false }}
        component={EditSeriesNavigator}
      />
      <AppStack.Screen
        name="SeriesScene"
        options={{ headerShown: false }}
        component={SeriesSceneScreen}
      />

      <AppStack.Screen
        name="NewBook"
        options={{ headerShown: false }}
        component={NewBookNavigator}
      />
      <AppStack.Screen
        name="EditBook"
        options={{ headerShown: false }}
        component={EditBookNavigator}
      />
      <AppStack.Screen
        name="BookScene"
        options={{ headerShown: false }}
        component={BookSceneScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
