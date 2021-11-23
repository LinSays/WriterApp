import { StyleSheet } from "react-native";
import { vw, vh } from "react-native-css-vh-vw";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  imageBackground: {
    height: vh(100),
  },
  container: {
    paddingHorizontal: 16,
    marginTop: 68,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
    textAlignVertical: "center",
  },
  noDataContainer: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginTop: vh(10),
    marginBottom: 24,
  },
  noData: {
    width: 241,
    height: 160,
    marginHorizontal: "auto",
  },
  createNew: {
    alignSelf: "center",
  },
});

export default styles;
