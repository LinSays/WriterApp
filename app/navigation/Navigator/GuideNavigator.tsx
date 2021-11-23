import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ComponentsStyle } from "style";

import GuideScreen from "../../screens/Guide";
import SignInScreen from "../../screens/SignIn";
import SignUpScreen from "../../screens/SignUp";
import ForgotPwdScreen from "../../screens/ForgotPwd";
import ForgotPwdNewScreen from "../../screens/ForgotPwdNew";
import SignInOtherScreen from "../../screens/SignInOther";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  ...ComponentsStyle.transitionBetweenScreenPresets,
};

const GuideNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen name="Guide" component={GuideScreen} options={screenOptions} />
      <Stack.Screen
        name="SignInScreen"
        options={SignInScreen.navigationOptions}
        component={SignInScreen}
      />
      <Stack.Screen
        name="SignInOther"
        options={SignInOtherScreen.navigationOptions}
        component={SignInOtherScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={SignUpScreen.navigationOptions}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="ForgotPwd"
        options={ForgotPwdScreen.navigationOptions}
        component={ForgotPwdScreen}
      />
      <Stack.Screen
        name="ForgotPwdNew"
        options={ForgotPwdNewScreen.navigationOptions}
        component={ForgotPwdNewScreen}
      />
    </Stack.Navigator>
  );
};

export default GuideNavigator;
