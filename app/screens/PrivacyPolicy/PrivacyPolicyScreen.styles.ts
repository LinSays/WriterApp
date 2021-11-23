import { StyleSheet } from "react-native";
import { vw, vh } from "react-native-css-vh-vw";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  imageBackground: {
    minHeight: vh(101),
  },
  container: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.transparent,
    height: vh(100),
    paddingHorizontal: 16,
  },
  goBack: {
    flex: 1,
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  headerText: {
    fontFamily: Font.FontFamily.Mulish,
    fontWeight: "800",
    lineHeight: Font.FontLineHeight.Header,
    letterSpacing: 0.66,
    color: Colors.white,
  },
});

export default styles;
