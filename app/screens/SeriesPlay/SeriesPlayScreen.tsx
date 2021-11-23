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
import navigationOptions from "./SeriesPlayScreen.navigationOptions";
import styles from "./SeriesPlayScreen.styles";
import imagePath from "../../constant/imagePath";

const SeriesPlayScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const route = useRoute();
  const deviceWidth = Dimensions.get("window").width;

  const seasons = [
    {
      seasonName: "Season 1",
    },
    {
      seasonName: "Season 2",
    },
    {
      seasonName: "Season 3",
    },
    {
      seasonName: "Season 4",
    },
    {
      seasonName: "Season 5",
    },
  ];
  return (
    <View style={{ backgroundColor: Colors.GradTop }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigator.goBack()}>
            <MaterialIcons name="arrow-back" color={Colors.blue} size={20} />
          </TouchableOpacity>
          <View style={styles.headerTextGroup}>
            <Text.Header>{"Screenplay"}</Text.Header>
          </View>
        </View>
        <View style={styles.chapterInfo}>
          <Text.ModalTitle style={{ fontWeight: "600", marginBottom: 16 }}>
            {"John Wick Series"}
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
        <ScrollView>
          {seasons.map((season, index) => (
            <ScrollView key={index} horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={[styles.navigationBtn, styles.castInfo]}
                onPress={() => navigator.openSeriesSeasonScreen()}
              >
                <View style={styles.buttonContainer}>
                  <Text.Primary>{season.seasonName}</Text.Primary>
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
              <View style={{ display: "flex", flexDirection: "row" }}>
                <TouchableOpacity>
                  <View style={[styles.editCastBtn, { backgroundColor: "rgba(255, 69, 58, 1)" }]}>
                    <Feather name="trash-2" size={18} color={Colors.white} />
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

SeriesPlayScreen.navigationOptions = navigationOptions();

export default SeriesPlayScreen;
