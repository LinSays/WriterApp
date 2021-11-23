import { StyleSheet } from "react-native";
import { vw, vh } from "react-native-css-vh-vw";

import { Layout } from "constant";
import { Colors, Font } from "style";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 54,
    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    fontSize: Font.FontSize.Primary,
    color: Colors.white,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.66,
  },
  itemActive: {
    fontSize: 12,
    color: "green",
  },
  itemInActive: {
    fontSize: Font.FontSize.Primary,
    color: Colors.white,
  },
  btnActive: {
    borderColor: "green",
  },
  btnInActive: {
    borderColor: "blue",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: Colors.btnBack,
    borderRadius: 8,
  },
  childRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.btnBack,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    width: "90%",
    alignSelf: "flex-end",
  },
  parentHr: {
    height: 16,
    color: "white",
    width: "100%",
  },
  childHr: {
    height: 16,
    width: "100%",
  },
  colorActive: {
    borderColor: "green",
  },
  colorInActive: {
    borderColor: "gray",
  },
});
