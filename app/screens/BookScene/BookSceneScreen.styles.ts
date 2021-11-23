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
  info: {
    borderColor: Colors.inputBack,
    borderWidth: 1,
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderRadius: 6,
    marginBottom: 24,
  },
  circleBtn: {
    borderWidth: 1,
    borderColor: Colors.transparent,

    marginRight: 8,
  },
  avatarGroup: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    marginRight: 8,
  },
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#12061E",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  modalBackBtn: {
    position: "absolute",
    top: 29,
    left: 16,
  },
  modalAddBtn: {
    position: "absolute",
    top: 29,
    right: 16,
  },
  catBtnContainer: {
    width: "100%",
    marginBottom: 16,
  },
  castInfo: {
    borderRadius: 8,
    backgroundColor: Colors.btnBack,
    paddingVertical: 14,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    width: vw(100) - 32,
  },
  editCastBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 28,
    marginLeft: 16,
    borderRadius: 16,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
