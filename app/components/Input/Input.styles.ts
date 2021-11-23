import { StyleSheet } from "react-native";
import { vw, vh } from "react-native-css-vh-vw";

import { Layout } from "constant";
import { Colors } from "style";

export default StyleSheet.create({
  container: {},
  input: {
    paddingHorizontal: Layout.PADDING_HORIZONTAL,
    height: 44,
    borderWidth: 0,
    borderRadius: 8,
    color: Colors.white,
    backgroundColor: Colors.inputBack,
    marginBottom: 16,
    letterSpacing: 0.66,
  },
  containerOptionalTitle: {
    flexDirection: "row",
  },
  icon: {
    alignSelf: "center",
  },
});
