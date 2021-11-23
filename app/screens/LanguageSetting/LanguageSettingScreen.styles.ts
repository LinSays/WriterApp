import { none } from "ramda";
import { StyleSheet } from "react-native";
import { vw, vh } from "react-native-css-vh-vw";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  imageBackground: {
    minHeight: vh(101),
    borderBottomWidth: 1,
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 30,
    marginTop: 60,
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
  inputs: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 32,
  },
  languages: {},
  navigationBtn: {
    width: "100%",
    marginBottom: 16,
  },
  buttonContainer: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: Colors.btnBack,
    paddingVertical: 14,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlignVertical: "center",
  },
  btnLeft: {
    display: "flex",
    flexDirection: "row",
  },
});

export default styles;
