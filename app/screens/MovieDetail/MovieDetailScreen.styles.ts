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
  },
  image: {
    width: "100%",
    height: 405,
    position: "absolute",
    top: 0,
    left: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  header: {
    width: "100%",
    marginTop: 50,
    marginBottom: 260,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  rightActions: { alignSelf: "flex-end", display: "flex", flexDirection: "row" },
  movieTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  screenPlay: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  content: {
    paddingHorizontal: 16,
  },
  contentItem: {
    marginTop: 24,
  },
  writers: {
    display: "flex",
    flexDirection: "row",
  },
  writer: {
    backgroundColor: Colors.tagColor,
    borderRadius: 16,
    paddingHorizontal: 4,
    paddingVertical: 4,
    display: "flex",
    flexDirection: "row",
    marginRight: 8,
  },
  genres: {
    display: "flex",
    flexDirection: "row",
  },
  genre: {
    backgroundColor: Colors.tagColor,
    borderRadius: 16,
    paddingHorizontal: 4,
    paddingVertical: 4,
    display: "flex",
    flexDirection: "row",
    marginRight: 8,
  },
  casts: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: -8,
  },
  cast: {
    width: (vw(100) - 16) / 4,
    paddingHorizontal: ((vw(100) - 16) / 4 - 80) / 2,
  },
  castName: {
    fontSize: Font.FontSize.Tertiary - 2,
    lineHeight: 15,
    textAlign: "center",
    marginTop: 8,
    color: Colors.white1,
  },
});

export default styles;
