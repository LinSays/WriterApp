import React from "react";
import { ImageBackground, ScrollView, TouchableOpacity, View, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Button, Icon, Input, Text } from "components";
import { Colors } from "style";

import navigationOptions from "./SignUpScreen.navigationOptions";
import styles from "./SignUpScreen.styles";
import imagePath from "../../constant/imagePath";

const SignUpScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <ImageBackground source={imagePath["background"]} style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Icon name="Logo" width="80" height="80" fill="none" />
          <Image source={imagePath["LogoText"]} style={styles.logoText} />
        </View>
        <View style={styles.bottomContainer}>
          <Text.TagTitle style={styles.bottomLine1}>{"Create your Account"}</Text.TagTitle>
          <Input value={""} placeholder={"Username"} />
          <Input value={""} placeholder={"E-mail"} />
          <Input value={""} placeholder={"Password"} type="password" />
          <Input value={""} placeholder={"Confirm Password"} type="password" />

          <Button.Primary
            fullWidth={true}
            textType={"Primary"}
            onPress={() => navigator.openMainPage()}
            style={{ marginBottom: 24, marginTop: 8 }}
          >
            <Text.TagTitle style={{ textTransform: "none", lineHeight: 24 }}>
              {"Register Now"}
            </Text.TagTitle>
          </Button.Primary>

          <TouchableOpacity
            onPress={() => navigator.openSignInOther()}
            style={[styles.transparentBtnContainer, { alignSelf: "center" }]}
          >
            <Text.Tertiary style={styles.transparentBtn}>{"Sign In Options"}</Text.Tertiary>
          </TouchableOpacity>
          <View style={styles.loginBtnContainer}>
            <Text.Tertiary style={{ marginRight: 16 }}>{"Already have an account?"}</Text.Tertiary>
            <TouchableOpacity
              onPress={() => navigator.openSignIn()}
              style={[styles.transparentBtnContainer]}
            >
              <Text.Tertiary style={styles.transparentBtn}>{"Login"}</Text.Tertiary>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

SignUpScreen.navigationOptions = navigationOptions();

export default SignUpScreen;
