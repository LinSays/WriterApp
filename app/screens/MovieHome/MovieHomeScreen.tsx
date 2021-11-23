import React, { useState } from "react";
import { ImageBackground, ScrollView, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import { color } from "@storybook/addon-knobs";
import SwitchToggle from "react-native-switch-toggle";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Icon, Text, Input, Button } from "components";
import { Colors, Font } from "style";

import imagePath from "../../constant/imagePath";
import navigationOptions from "./MovieHomeScreen.navigationOptions";
import styles from "./MovieHomeScreen.styles";

const MovieHomeScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <ImageBackground source={imagePath["background"]} style={styles.imageBackground}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text.Header>{"Movies"}</Text.Header>
          <TouchableOpacity onPress={() => navigator.openNewMovie()}>
            <AntDesign
              name="plus"
              size={20}
              color={Colors.blue}
              style={{ textAlignVertical: "center", lineHeight: Font.FontLineHeight.Header }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.noDataContainer} onPress={() => navigator.openMovieList()}>
          <Image source={imagePath["noData"]} style={styles.noData} />
        </TouchableOpacity>
        <Text.Tertiary style={{ fontSize: 18, textAlign: "center", marginBottom: 24 }}>
          {"There is nothing yet"}
        </Text.Tertiary>
        <View style={styles.createNew}>
          <Button.Primary onPress={() => navigator.openNewMovie()} textType={"Primary"}>
            <Text.TagTitle style={{ lineHeight: 24 }}>{"Create a Logline"}</Text.TagTitle>
          </Button.Primary>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

MovieHomeScreen.navigationOptions = navigationOptions();

export default MovieHomeScreen;
