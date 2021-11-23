import { StyleSheet } from "react-native";
import { vw, vh } from "react-native-css-vh-vw";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  container: {
    height: vh(100),
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollPage: {
    width: vw(100),
    height: vh(100),
    alignItems: "center",
  },
  paginationWrapper: {
    position: "absolute",
    bottom: "5%",
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 8,
    width: 8,
    borderRadius: 8 / 2,
    backgroundColor: Colors.blue,
    marginLeft: 8,
  },
  logoContainer: {
    position: "absolute",
    top: "15%",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  logoText: {
    marginTop: 24,
  },
  bottomContainer: {
    position: "absolute",
    bottom: "10%",
    alignItems: "center",
  },
  bottomLine1: {
    marginBottom: 24,
    textTransform: "uppercase",
    textAlign: "center",
    paddingHorizontal: 80,
  },
  bottomLine2: {
    textAlign: "center",
    paddingHorizontal: 16,
  },
});

export default styles;
