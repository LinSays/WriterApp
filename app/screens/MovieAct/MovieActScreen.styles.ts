import { generateKeyPair } from "crypto";
import { StyleSheet } from "react-native";
import { fonts } from "react-native-elements/dist/config";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { vw, vh } from "react-native-css-vh-vw";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.transparent,
    height: vh(100),

    paddingHorizontal: 16,
  },
  header: {},
  headerText: {
    fontFamily: Font.FontFamily.Mulish,
    fontWeight: "800",
    lineHeight: Font.FontLineHeight.Header,
    letterSpacing: 0.66,
    color: Colors.white,
  },
  chapterInfo: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 16,
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  navigationBtn: {
    width: "100%",
    marginTop: 16,
    paddingBottom: 16,
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
    borderBottomWidth: 1,
  },

  buttonContainer: {
    width: "100%",
    backgroundColor: Colors.transparent,
    display: "flex",
    flexDirection: "row",
  },
  btnLeft: {
    display: "flex",
    flexDirection: "row",
  },
  gradientNumber: {
    width: 44,
    height: 44,
    borderRadius: 25,
  },
  sceneDesc: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginLeft: 8,
  },
  sceneTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatars: {
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 4,
  },
});

export default styles;
