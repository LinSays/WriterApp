import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BookHomeScreen from "../../../screens/BookHome";
import BookListScreen from "../../../screens/BookList";
import BookDetailScreen from "../../../screens/BookDetail";
import BookPlayScreen from "../../../screens/BookPlay";
import BookActScreen from "../../../screens/BookAct";

const Stack = createStackNavigator();

const BookNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="BookHome"
      options={BookHomeScreen.navigationOptions}
      component={BookHomeScreen}
    />
    <Stack.Screen
      name="BookList"
      options={BookListScreen.navigationOptions}
      component={BookListScreen}
    />
    <Stack.Screen
      name="BookDetail"
      options={BookDetailScreen.navigationOptions}
      component={BookDetailScreen}
    />
    <Stack.Screen
      name="BookPlay"
      options={BookPlayScreen.navigationOptions}
      component={BookPlayScreen}
    />
    <Stack.Screen
      name="BookAct"
      options={BookActScreen.navigationOptions}
      component={BookActScreen}
    />
  </Stack.Navigator>
);

export default BookNavigator;
