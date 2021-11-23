import React from "react";
import { ImageBackground, ScrollView, TouchableOpacity, View, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Button, Icon, Input, Text } from "components";
import { Colors } from "style";

import navigationOptions from "./ForgotPwdNewScreen.navigationOptions";
import styles from "./ForgotPwdNewScreen.styles";
import imagePath from "../../constant/imagePath";

const ForgotPwdNewScreen: NavStatelessComponent = () => {
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
          <Text.TagTitle style={styles.bottomLine1}>{"Reset your Password"}</Text.TagTitle>
          <Input value={""} placeholder={"New Password"} type="password" />
          <Input value={""} placeholder={"Confirm New Password"} type="password" />

          <Button.Primary
            fullWidth={true}
            textType={"Primary"}
            onPress={() => navigator.openSignIn()}
            style={{ marginBottom: 24, marginTop: 8 }}
          >
            <Text.TagTitle style={{ textTransform: "none", lineHeight: 24 }}>
              {"Reset Password"}
            </Text.TagTitle>
          </Button.Primary>

          <TouchableOpacity
            onPress={() => navigator.openSignInOther()}
            style={[styles.transparentBtnContainer, { alignSelf: "center" }]}
          >
            <Text.Tertiary style={styles.transparentBtn}>{"Log In Options"}</Text.Tertiary>
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

ForgotPwdNewScreen.navigationOptions = navigationOptions();

export default ForgotPwdNewScreen;
