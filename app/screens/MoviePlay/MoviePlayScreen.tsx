import React from "react";
import { ScrollView, View, Image, TouchableOpacity, TextInput, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Snackbar } from "react-native-paper";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { vw, vh } from "react-native-css-vh-vw";
import { GradientCircularProgress } from "react-native-circular-gradient-progress";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Icon, Text, Input, Button } from "components";
import { Colors, Font } from "style";

import imagesPath from "../../constant/imagePath";
import navigationOptions from "./MoviePlayScreen.navigationOptions";
import styles from "./MoviePlayScreen.styles";
import imagePath from "../../constant/imagePath";

const MoviePlayScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const route = useRoute();
  const deviceWidth = Dimensions.get("window").width;
  return (
    <View style={{ backgroundColor: Colors.GradTop }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigator.goBack()}>
            <MaterialIcons name="arrow-back" color={Colors.blue} size={20} />
          </TouchableOpacity>
          <View style={styles.headerTextGroup}>
            <Text.Header>{"Screenplay"}</Text.Header>
            <View style={{}}>
              <GradientCircularProgress
                startColor={"rgba(174, 97, 237, 1)"}
                middleColor={"#D6872D"}
                endColor={"#FEAC6D"}
                size={44}
                progress={37}
                emptyColor={"rgba(29, 174, 255, 0.15)"}
                strokeWidth={2}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  width: 44,
                  height: 44,
                }}
              >
                <Text.Secondary style={{ textAlign: "center", width: 44 }}>
                  {"37"}
                  <Text.Tertiary style={{ fontSize: 10 }}>{"%"}</Text.Tertiary>
                </Text.Secondary>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.chapterInfo}>
          <Text.ModalTitle style={{ fontWeight: "600", marginBottom: 16 }}>
            {"John Wick Chapter 8"}
          </Text.ModalTitle>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{ display: "flex", flexDirection: "column", width: "50%", paddingRight: 10 }}
            >
              <Text.Tertiary style={{ marginBottom: 8 }}>{"Start Date:"}</Text.Tertiary>
              <Text.ModalTitle style={{ fontWeight: "600" }}>{"Jul 10, 2019"}</Text.ModalTitle>
            </View>
            <View
              style={{ display: "flex", flexDirection: "column", width: "50%", paddingRight: 10 }}
            >
              <Text.Tertiary style={{ marginBottom: 8 }}>{"Last Update:"}</Text.Tertiary>
              <Text.ModalTitle style={{ fontWeight: "600" }}>{"Aug 06, 2021"}</Text.ModalTitle>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.navigationBtn}
          onPress={() => navigator.openMovieActScreen()}
        >
          <View style={styles.buttonContainer}>
            <Text.Primary>{"Act 1"}</Text.Primary>
            <View style={styles.btnLeft}>
              <MaterialIcons
                name="arrow-forward-ios"
                style={{ textAlignVertical: "center" }}
                color={Colors.white}
                size={14}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationBtn}
          onPress={() => navigator.openMovieActScreen()}
        >
          <View style={styles.buttonContainer}>
            <Text.Primary>{"Act 2"}</Text.Primary>
            <View style={styles.btnLeft}>
              <MaterialIcons
                name="arrow-forward-ios"
                style={{ textAlignVertical: "center" }}
                color={Colors.white}
                size={14}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationBtn}
          onPress={() => navigator.openMovieActScreen()}
        >
          <View style={styles.buttonContainer}>
            <Text.Primary>{"Act 3"}</Text.Primary>
            <View style={styles.btnLeft}>
              <MaterialIcons
                name="arrow-forward-ios"
                style={{ textAlignVertical: "center" }}
                color={Colors.white}
                size={14}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationBtn}
          onPress={() => navigator.openMovieActScreen()}
        >
          <View style={styles.buttonContainer}>
            <Text.Primary>{"Act 4"}</Text.Primary>
            <View style={styles.btnLeft}>
              <MaterialIcons
                name="arrow-forward-ios"
                style={{ textAlignVertical: "center" }}
                color={Colors.white}
                size={14}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

MoviePlayScreen.navigationOptions = navigationOptions();

export default MoviePlayScreen;
