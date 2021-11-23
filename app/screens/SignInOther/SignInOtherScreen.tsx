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
import navigationOptions from "./SignInOtherScreen.navigationOptions";
import styles from "./SignInOtherScreen.styles";

const SignInOtherScreen: NavStatelessComponent = () => {
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
          <Text.TagTitle style={styles.bottomLine1}>{"Another Log In Methods"}</Text.TagTitle>

          <Button.White
            fullWidth={true}
            textType={"White"}
            onPress={() => navigator.openMainPage()}
            style={styles.signInBtns}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Icon name="Google" width="25" height="24" fill="none" />
              <Text.TagTitle
                style={{
                  textTransform: "none",
                  lineHeight: 24,
                  color: Colors.black,
                  marginLeft: 10,
                }}
              >
                {"Log In with Google"}
              </Text.TagTitle>
            </View>
          </Button.White>

          <Button.Black
            fullWidth={true}
            textType={"Black"}
            onPress={() => navigator.openMainPage()}
            style={styles.signInBtns}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Icon name="Apple" width="25" height="24" fill="none" />
              <Text.TagTitle style={{ textTransform: "none", lineHeight: 24, marginLeft: 10 }}>
                {"Log In with Apple"}
              </Text.TagTitle>
            </View>
          </Button.Black>

          <TouchableOpacity
            onPress={() => navigator.openSignIn()}
            style={[styles.transparentBtnContainer, { alignSelf: "center" }]}
          >
            <Text.Tertiary style={styles.transparentBtn}>
              {"Log In by E-mail and Password"}
            </Text.Tertiary>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

SignInOtherScreen.navigationOptions = navigationOptions();

export default SignInOtherScreen;
