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
import navigationOptions from "./SeriesHomeScreen.navigationOptions";
import styles from "./SeriesHomeScreen.styles";

const SeriesHomeScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <ImageBackground source={imagePath["background"]} style={styles.imageBackground}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text.Header>{"Series"}</Text.Header>
          <TouchableOpacity onPress={() => navigator.openNewSeries()}>
            <AntDesign
              name="plus"
              size={20}
              color={Colors.blue}
              style={{ textAlignVertical: "center", lineHeight: Font.FontLineHeight.Header }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.noDataContainer} onPress={() => navigator.openSeriesList()}>
          <Image source={imagePath["noData"]} style={styles.noData} />
        </TouchableOpacity>
        <Text.Tertiary style={{ fontSize: 18, textAlign: "center", marginBottom: 24 }}>
          {"There is nothing yet"}
        </Text.Tertiary>
        <View style={styles.createNew}>
          <Button.Primary onPress={() => navigator.openNewSeries()} textType={"Primary"}>
            <Text.TagTitle style={{ lineHeight: 24 }}>{"Write a TV Show"}</Text.TagTitle>
          </Button.Primary>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

SeriesHomeScreen.navigationOptions = navigationOptions();

export default SeriesHomeScreen;
