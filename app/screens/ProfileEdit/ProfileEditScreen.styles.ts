import { StyleSheet } from "react-native";
import { vw, vh } from "react-native-css-vh-vw";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  imageBackground: {
    minHeight: vh(101),
  },
  container: {
    paddingHorizontal: 16,
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
  avatarEdit: {
    marginBottom: 74,
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    opacity: 0.5,
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 143,
  },
});

export default styles;
