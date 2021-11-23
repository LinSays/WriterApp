import { StyleSheet } from "react-native";
import { vw, vh } from "react-native-css-vh-vw";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  imageBackground: {
    height: vh(100),
  },
  container: {
    paddingHorizontal: 16,
    marginTop: 88,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  avatarName: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 16,
  },
  nameMail: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
  },
  navigators: {
    display: "flex",
    flexDirection: "column",
  },
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
  switchToggleContainer: {
    height: 24,
    width: 44,
    borderRadius: 12,
    padding: 5,
  },
  switchToggleCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
});

export default styles;
