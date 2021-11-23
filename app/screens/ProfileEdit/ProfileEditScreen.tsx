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
import navigationOptions from "./ProfileEditScreen.navigationOptions";
import styles from "./ProfileEditScreen.styles";

const ProfileEditScreen: NavStatelessComponent = () => {
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
        <View style={styles.avatarEdit}>
          <Image source={imagePath["avatar"]} style={styles.avatar} />
          <TouchableOpacity style={{ marginTop: -50 }}>
            <AntDesign name="camera" size={30} color={Colors.blue} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <Input value={"Julia Ellei"} placeholder={"First Name"} />
          <Input value={"JuliaEllei"} placeholder={"Last Name"} />
          <Input value={"juliaellei@gmail.com"} placeholder={"E-mail"} />
          <Input value={""} placeholder={"Old Password"} type="password" />
          <Input value={""} placeholder={"New Password"} type="password" />
          <Input value={""} placeholder={"Confirm New Password"} type="password" />
        </View>
        <Button.Primary
          fullWidth={true}
          textType={"Primary"}
          onPress={() => navigator.openMainPage()}
          style={{ marginBottom: 24 }}
        >
          <Text.TagTitle style={{ textTransform: "none", lineHeight: 24 }}>
            {"Save Profile"}
          </Text.TagTitle>
        </Button.Primary>
      </ScrollView>
    </ImageBackground>
  );
};

ProfileEditScreen.navigationOptions = navigationOptions();

export default ProfileEditScreen;
