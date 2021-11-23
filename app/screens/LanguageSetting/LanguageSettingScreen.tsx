import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
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
import navigationOptions from "./LanguageSettingScreen.navigationOptions";
import styles from "./LanguageSettingScreen.styles";

const LanguageSettingScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const [userName, setUserName] = useState<string>("");
  const [isOnNotification, setIsOnNotification] = useState(true);

  return (
    <ImageBackground source={imagePath["background"]} style={styles.imageBackground}>
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => navigator.goBack()} style={styles.goBack}>
          <MaterialIcons name="arrow-back" color={Colors.blue} size={24} />
        </TouchableOpacity>
        <Text.Header style={{ marginBottom: 26 }}>{"Edit Profile"}</Text.Header>
        <View style={styles.inputs}>
          <Input value="" placeholder={"Search..."} />
        </View>
        <View style={styles.languages}>
          <TouchableOpacity style={styles.navigationBtn} onPress={() => navigator.goBack()}>
            <View style={styles.buttonContainer}>
              <Text.Primary>{"Spanish"}</Text.Primary>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navigationBtn} onPress={() => navigator.goBack()}>
            <View style={styles.buttonContainer}>
              <Text.Primary>{"English"}</Text.Primary>
              <View style={styles.btnLeft}>
                <AntDesign
                  name="check"
                  style={{ textAlignVertical: "center" }}
                  color={Colors.white}
                  size={24}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navigationBtn} onPress={() => navigator.goBack()}>
            <View style={styles.buttonContainer}>
              <Text.Primary>{"Russian"}</Text.Primary>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navigationBtn} onPress={() => navigator.goBack()}>
            <View style={styles.buttonContainer}>
              <Text.Primary>{"French"}</Text.Primary>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navigationBtn} onPress={() => navigator.goBack()}>
            <View style={styles.buttonContainer}>
              <Text.Primary>{"German"}</Text.Primary>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

LanguageSettingScreen.navigationOptions = navigationOptions();

export default LanguageSettingScreen;
