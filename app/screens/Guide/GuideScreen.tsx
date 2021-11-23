import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { indexOf } from "ramda";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Icon, Text, Background, Button } from "components";
import { Colors } from "style";

import imagesPath from "../../constant/imagePath";
import navigationOptions from "./GuideScreen.navigationOptions";
import styles from "./GuideScreen.styles";
import imagePath from "../../constant/imagePath";

const GuideScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const { width, height } = Dimensions.get("window");
  const [sliderState, setSliderState] = useState({ currentPage: 0 });

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / (width - 2));
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;
  const foo = () => {
    // do nothing.
  };
  return (
    <ImageBackground source={imagesPath["background"]} style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event: any) => {
          setSliderPage(event);
        }}
      >
        <View style={styles.scrollPage}>
          <View style={styles.logoContainer}>
            <Icon name="Logo" width="80" height="80" fill="none" />
            <Image source={imagePath["LogoText"]} style={styles.logoText} />
          </View>
          <View style={styles.bottomContainer}>
            <Text.TagTitle style={styles.bottomLine1}>
              {"There are a lot of untold stories"}
            </Text.TagTitle>
            <Text.Tertiary style={styles.bottomLine2}>
              {"Start planning your book or screenplay"}
            </Text.Tertiary>
          </View>
        </View>

        <View style={styles.scrollPage}>
          <View style={styles.logoContainer}>
            <Icon name="Logo" width="80" height="80" fill="none" />
            <Image source={imagePath["LogoText"]} style={styles.logoText} />
          </View>
          <View style={styles.bottomContainer}>
            <Text.TagTitle style={styles.bottomLine1}>
              {"There are a lot of untold stories"}
            </Text.TagTitle>
            <Text.Tertiary style={styles.bottomLine2}>
              {"Start planning your book or screenplay"}
            </Text.Tertiary>
          </View>
        </View>

        <View style={styles.scrollPage}>
          <View style={styles.logoContainer}>
            <Icon name="Logo" width="80" height="80" fill="none" />
            <Image source={imagePath["LogoText"]} style={styles.logoText} />
          </View>
          <View style={styles.bottomContainer}>
            <Text.TagTitle style={[styles.bottomLine1, { paddingHorizontal: 0 }]}>
              {"so go on, Tell Your’s"}
            </Text.TagTitle>
            <Text.Tertiary style={styles.bottomLine2}>
              {"Easily keep tabs on whats going on in chapters and scenes"}
            </Text.Tertiary>
            <View style={{ paddingHorizontal: 16, width: "100%" }}>
              <Button.Primary
                fullWidth={true}
                textType={"Primary"}
                onPress={() => navigator.openSignIn()}
                style={{ marginTop: 24 }}
              >
                <Text.TagTitle style={{ textTransform: "none", lineHeight: 24 }}>
                  {"Start Writing"}
                </Text.TagTitle>
              </Button.Primary>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.paginationWrapper}>
        {Array.from(Array(3).keys()).map((key, index) => (
          <View
            style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]}
            key={index}
          />
        ))}
      </View>
    </ImageBackground>
  );
};

GuideScreen.navigationOptions = navigationOptions();

export default GuideScreen;
