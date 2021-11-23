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
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import { color } from "@storybook/addon-knobs";
import SwitchToggle from "react-native-switch-toggle";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Icon, Text, Input, Button } from "components";
import { Colors, Font } from "style";

import imagePath from "../../constant/imagePath";
import navigationOptions from "./ProfileScreen.navigationOptions";
import styles from "./ProfileScreen.styles";

const ProfileScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const [userName, setUserName] = useState<string>("");
  const [isOnNotification, setIsOnNotification] = useState(true);

  return (
    <ImageBackground source={imagePath["background"]} style={styles.imageBackground}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text.Header>{"Profile"}</Text.Header>
          <TouchableOpacity onPress={() => navigator.openProfileEdit()}>
            <Icon name="Edit" width="24" height="24" fill="none" />
          </TouchableOpacity>
        </View>
        <View style={styles.avatarName}>
          <Image source={imagePath["avatar"]} style={styles.avatar} />
          <View style={styles.nameMail}>
            <Text.TagTitle style={{ fontSize: 22, marginBottom: 8 }}>{"Julia Ellei"}</Text.TagTitle>
            <Text.Tertiary>{"juliaellei@gmail.com"}</Text.Tertiary>
          </View>
        </View>
        <View style={styles.navigators}>
          <TouchableOpacity
            style={styles.navigationBtn}
            onPress={() => navigator.openLanguageSetting()}
          >
            <View style={styles.buttonContainer}>
              <Text.Primary>{"Language"}</Text.Primary>
              <View style={styles.btnLeft}>
                <Text.Primary style={{ marginRight: 16 }}>{"English"}</Text.Primary>
                <MaterialIcons
                  name="arrow-forward-ios"
                  style={{ textAlignVertical: "center" }}
                  color={Colors.white}
                  size={14}
                />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.navigationBtn}>
            <View style={styles.buttonContainer}>
              <Text.Primary>{"Notifications"}</Text.Primary>
              <View style={styles.btnLeft}>
                <SwitchToggle
                  switchOn={isOnNotification}
                  onPress={() => {
                    setIsOnNotification(!isOnNotification);
                  }}
                  circleColorOff={Colors.blue}
                  circleColorOn={Colors.blue}
                  backgroundColorOn={Colors.btnBack}
                  backgroundColorOff={Colors.white1}
                  containerStyle={styles.switchToggleContainer}
                  circleStyle={styles.switchToggleCircle}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={styles.navigationBtn}
            onPress={() => navigator.openPrivacyPolicy()}
          >
            <View style={styles.buttonContainer}>
              <Text.Primary>{"Privacy Policy"}</Text.Primary>
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

          <TouchableOpacity style={styles.navigationBtn}>
            <View style={styles.buttonContainer}>
              <Text.Primary>{"See FAQ"}</Text.Primary>
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

          <TouchableOpacity style={styles.navigationBtn} onPress={() => navigator.openFeedback()}>
            <View style={styles.buttonContainer}>
              <Text.Primary>{"Feedback"}</Text.Primary>
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
      </ScrollView>
    </ImageBackground>
  );
};

ProfileScreen.navigationOptions = navigationOptions();

export default ProfileScreen;
