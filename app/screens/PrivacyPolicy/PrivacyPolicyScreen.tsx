import React, { useState, useRef } from "react";
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import { color } from "@storybook/addon-knobs";
import SwitchToggle from "react-native-switch-toggle";
import { vw, vh } from "react-native-css-vh-vw";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Icon, Text, Input, Button } from "components";
import { Colors, Font } from "style";

import imagePath from "../../constant/imagePath";
import navigationOptions from "./PrivacyPolicyScreen.navigationOptions";
import styles from "./PrivacyPolicyScreen.styles";
const PrivacyPolicyScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const [userName, setUserName] = useState<string>("");
  const [isOnNotification, setIsOnNotification] = useState(true);

  //header animation
  const scrollPosition = useRef(new Animated.Value(0)).current;
  const minHeaderHeight = 0;
  const maxHeaderHeight = 50;
  const headerHeight = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: "clamp",
  });
  const headerPositionX = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [0, (30 * vw(100)) / 100],
    extrapolateLeft: "identity",
    extrapolateRight: "clamp",
  });
  const headerPositionY = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [0, -60],
    extrapolateLeft: "identity",
    extrapolateRight: "clamp",
  });
  const fontsize = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [34, 26],
    extrapolateLeft: "identity",
    extrapolateRight: "clamp",
  });

  return (
    <ImageBackground source={imagePath["background"]} style={styles.imageBackground}>
      <View style={styles.container}>
        <Animated.View
          style={{ width: "100%", marginTop: 50, marginBottom: 10, height: headerHeight }}
        >
          <TouchableOpacity onPress={() => navigator.goBack()}>
            <MaterialIcons name="arrow-back" color={Colors.blue} size={20} />
          </TouchableOpacity>
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
              {"Privacy Policy"}
            </Animated.Text>
          </Animated.View>
        </Animated.View>
        <Animated.ScrollView
          style={{ marginTop: 30, marginBottom: 30 }}
          contentInsetAdjustmentBehavior="automatic"
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollPosition } } }], {
            useNativeDriver: false,
          })}
        >
          <Text.Tertiary style={{ marginBottom: 56 }}>
            {
              "An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African-American maid’s point of view on the white families for which they work, and the hardships they go through on a daily basis. An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African-American maid’s point of view on the white families for which they work, and the hardships they go through on a daily basis. An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African-American maid’s point of view on the white families for which they work, and the hardships they go through on a daily basis. An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African-American maid’s point of view on the white families for which they work, and the hardships they go through on a daily basis. An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African-American maid’s point of view on the white families for which they work, and the hardships they go through on a daily basis. An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African-American maid’s point of view on the white families for which they work, and the hardships they go through on a daily basis. An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African-American maid’s point of view on the white families for which they work, and the hardships they go through on a daily basis. An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African-American maid’s point of view on the white families for which they work, and the hardships they go through on a daily basis. "
            }
          </Text.Tertiary>
        </Animated.ScrollView>
      </View>
    </ImageBackground>
  );
};

PrivacyPolicyScreen.navigationOptions = navigationOptions();

export default PrivacyPolicyScreen;
