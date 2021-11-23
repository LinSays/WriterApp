import React, { useRef } from "react";
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Animated,
} from "react-native";
import Modal from "react-native-modal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Snackbar } from "react-native-paper";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { vw, vh } from "react-native-css-vh-vw";
import { GradientCircularProgress } from "react-native-circular-gradient-progress";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Icon, Text, Input, Button, Accordion } from "components";
import { Colors, Font } from "style";

import imagesPath from "../../constant/imagePath";
import navigationOptions from "./SeriesSeasonScreen.navigationOptions";
import styles from "./SeriesSeasonScreen.styles";
import imagePath from "../../constant/imagePath";

const SeriesSeasonScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const route = useRoute();
  const deviceWidth = Dimensions.get("window").width;

  const episodes = [
    {
      episodeName: "Episode 1",
      acts: [
        { actName: "Act 1" },
        { actName: "Act 2" },
        { actName: "Act 3" },
        { actName: "Act 4" },
        { actName: "Act 5" },
      ],
    },
    {
      episodeName: "Episode 2",
      acts: [
        { actName: "Act 1" },
        { actName: "Act 2" },
        { actName: "Act 3" },
        { actName: "Act 4" },
        { actName: "Act 5" },
      ],
    },
    {
      episodeName: "Episode 3",
      acts: [
        { actName: "Act 1" },
        { actName: "Act 2" },
        { actName: "Act 3" },
        { actName: "Act 4" },
        { actName: "Act 5" },
      ],
    },
    {
      episodeName: "Episode 4",
      acts: [
        { actName: "Act 1" },
        { actName: "Act 2" },
        { actName: "Act 3" },
        { actName: "Act 4" },
        { actName: "Act 5" },
      ],
    },
    {
      episodeName: "Episode 5",
      acts: [
        { actName: "Act 1" },
        { actName: "Act 2" },
        { actName: "Act 3" },
        { actName: "Act 4" },
        { actName: "Act 5" },
      ],
    },
    {
      episodeName: "Episode 6",
      acts: [
        { actName: "Act 1" },
        { actName: "Act 2" },
        { actName: "Act 3" },
        { actName: "Act 4" },
        { actName: "Act 5" },
      ],
    },
  ];
  //header animation
  const scrollPosition = useRef(new Animated.Value(0)).current;
  const minHeaderHeight = 30;
  const maxHeaderHeight = 100;
  const headerHeight = scrollPosition.interpolate({
    inputRange: [0, 1000],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: "clamp",
  });

  const headerPositionX = scrollPosition.interpolate({
    inputRange: [0, 400],
    outputRange: [0, (30 * vw(100)) / 100],
    extrapolateLeft: "identity",
    extrapolateRight: "clamp",
  });

  const headerPositionY = scrollPosition.interpolate({
    inputRange: [0, 400],
    outputRange: [0, -50],
    extrapolateLeft: "identity",
    extrapolateRight: "clamp",
  });
  const fontsize = scrollPosition.interpolate({
    inputRange: [0, 400],
    outputRange: [34, 26],
    extrapolateLeft: "identity",
    extrapolateRight: "clamp",
  });
  return (
    <View style={{ backgroundColor: Colors.GradTop }}>
      <View style={styles.container}>
        <Animated.View
          style={{ width: "100%", marginTop: 50, marginBottom: 10, height: headerHeight }}
        >
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity onPress={() => navigator.goBack()}>
              <MaterialIcons name="arrow-back" color={Colors.blue} size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="plus" color={Colors.blue} size={20} />
            </TouchableOpacity>
          </View>
          <Animated.View
            style={{
              marginTop: 15,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              transform: [{ translateX: headerPositionX }, { translateY: headerPositionY }],
            }}
          >
            <Animated.Text style={[styles.headerText, { fontSize: fontsize }]}>
              {"Season 1"}
            </Animated.Text>
          </Animated.View>
        </Animated.View>
        <Animated.ScrollView
          contentInsetAdjustmentBehavior="automatic"
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollPosition } } }], {
            useNativeDriver: false,
          })}
        >
          {episodes.map((episode, index) => (
            <Accordion key={index} title={episode.episodeName} data={episode.acts} />
          ))}
        </Animated.ScrollView>
      </View>
    </View>
  );
};

SeriesSeasonScreen.navigationOptions = navigationOptions();

export default SeriesSeasonScreen;
