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
  header: {
    width: "100%",
    marginTop: 50,
    marginBottom: 26,
  },
  headerTextGroup: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  editCastBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 8,
    marginLeft: 16,
  },
  castInfo: {
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    width: vw(100) - 32,
  },
});

export default styles;
