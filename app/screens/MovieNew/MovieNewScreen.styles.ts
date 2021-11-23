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
    marginBottom: 26,
  },
  headerText: {
    fontFamily: Font.FontFamily.Mulish,
    fontWeight: "800",
    lineHeight: Font.FontLineHeight.Header,
    letterSpacing: 0.66,
    color: Colors.white,
  },
  headerTextGroup: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
  },
  movieTitle: {
    display: "flex",
    flexDirection: "row",
  },
  thumb: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: Colors.inputBack,
    marginRight: 24,
  },
  screenPlay: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentItem: {
    marginTop: 8,
  },
  genres: {
    display: "flex",
    flexDirection: "row",
  },
  normalBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "rgba(29, 174, 255, 0.15)",
    borderRadius: 20,
    color: Colors.blue,
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
  circleBtn: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.transparent,
    backgroundColor: "rgba(29, 174, 255, 0.15)",
  },
  roundBtn: {
    width: 80,
    height: 100,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.transparent,
    backgroundColor: "rgba(29, 174, 255, 0.15)",
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
  catBtnContainer: {
    width: "100%",
    marginBottom: 16,
  },
  catBtnText: {
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
  genreList: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: -8,
    flexWrap: "wrap",
    marginTop: 20,
  },
  genreBtnContainer: {
    paddingHorizontal: 8,
    width: "50%",
    marginBottom: 16,
  },
  genreBtnContent: {
    backgroundColor: Colors.btnBack,
    borderRadius: 16,
    paddingVertical: 8,
  },
  genreBadge: {
    position: "absolute",
    backgroundColor: Colors.blue,
    borderRadius: 12,
    top: -4,
    right: -5,
    paddingHorizontal: 7,
    paddingVertical: 2,
    zIndex: 9999999999,
  },
  editCastBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 24,
    paddingVertical: 36,
    marginLeft: 16,
    borderRadius: 16,
    height: 96,
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
  searchBar: {
    height: 44,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: Font.FontSize.Secondary,
    fontFamily: Font.FontFamily.Mulish,
    color: Colors.white,
    width: "100%",
  },
  similarMovie: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  genre: {
    borderRadius: 16,
    paddingVertical: 4,
    display: "flex",
    flexDirection: "row",
    marginRight: 16,
  },
  castName: {
    fontSize: Font.FontSize.Tertiary - 2,
    lineHeight: 15,
    textAlign: "center",
    marginTop: 8,
    color: Colors.white1,
  },
  loglineInfo: {
    borderRadius: 8,
    paddingVertical: 8,
    width: "100%",
  },
});

export default styles;
