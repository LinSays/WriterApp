import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../../../screens/Profile";
import ProfileEditScreen from "../../../screens/ProfileEdit";
import LanguageSettingScreen from "../../../screens/LanguageSetting";
import PrivacyPolicyScreen from "../../../screens/PrivacyPolicy";
import FeedbackScreen from "../../../screens/Feedback";

const Stack = createStackNavigator();

const ProfileNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      options={ProfileScreen.navigationOptions}
      component={ProfileScreen}
    />
  </Stack.Navigator>
);

export default ProfileNavigator;
