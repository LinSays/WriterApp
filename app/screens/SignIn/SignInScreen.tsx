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
import { Ionicons } from "@expo/vector-icons";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Icon, Text, Input, Button } from "components";
import { Colors, Font } from "style";

import imagePath from "../../constant/imagePath";
import navigationOptions from "./SignInScreen.navigationOptions";
import styles from "./SignInScreen.styles";

const SignInScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const [userName, setUserName] = useState<string>("");

  return (
    <ImageBackground source={imagePath["background"]} style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Icon name="Logo" width="80" height="80" fill="none" />
          <Image source={imagePath["LogoText"]} style={styles.logoText} />
        </View>
        <View style={styles.bottomContainer}>
          <Text.TagTitle style={styles.bottomLine1}>{"Sign into your Account"}</Text.TagTitle>
          <Input value={""} placeholder={"E-mail"} />
          <Input value={""} placeholder={"Password"} type="password" />

          <TouchableOpacity
            onPress={() => navigator.openForgotPwd()}
            style={styles.transparentBtnContainer}
          >
            <Text.Tertiary style={styles.transparentBtn}>{"Forgot Password?"}</Text.Tertiary>
          </TouchableOpacity>

          <Button.Primary
            fullWidth={true}
            textType={"Primary"}
            onPress={() => navigator.openMainPage()}
            style={{ marginBottom: 24 }}
          >
            <Text.TagTitle style={{ textTransform: "none", lineHeight: 24 }}>
              {"Log In"}
            </Text.TagTitle>
          </Button.Primary>

          <TouchableOpacity
            onPress={() => navigator.openSignInOther()}
            style={[styles.transparentBtnContainer, { alignSelf: "center" }]}
          >
            <Text.Tertiary style={styles.transparentBtn}>{"Log In Options"}</Text.Tertiary>
          </TouchableOpacity>

          <View style={styles.registerBtnContainer}>
            <Text.Tertiary style={{ marginRight: 16 }}>{"Don’t have an account?"}</Text.Tertiary>
            <TouchableOpacity
              onPress={() => navigator.openSignUp()}
              style={[styles.transparentBtnContainer]}
            >
              <Text.Tertiary style={styles.transparentBtn}>{"Register Now"}</Text.Tertiary>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

SignInScreen.navigationOptions = navigationOptions();

export default SignInScreen;
