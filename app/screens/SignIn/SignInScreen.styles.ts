import { StyleSheet } from "react-native";
import { vw, vh } from "react-native-css-vh-vw";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  imageBackground: {
    height: vh(100),
  },
  container: {
    paddingHorizontal: 16,
    height: vh(100),
  },
  logoContainer: {
    position: "absolute",
    top: vh(15),
    alignItems: "center",
    width: "100%",
    marginLeft: 16,
  },
  logoText: {
    marginTop: 24,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    marginLeft: 16,
  },
  bottomLine1: {
    marginBottom: 24,
    textAlign: "center",
  },
  transparentBtn: {
    color: Colors.blue,
  },
  transparentBtnContainer: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  registerBtnContainer: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
  },
});

export default styles;
