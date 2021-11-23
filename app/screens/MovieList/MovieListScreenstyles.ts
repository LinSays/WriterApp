import { StyleSheet } from "react-native";
import { vw, vh } from "react-native-css-vh-vw";

import { Colors, Font, Layout } from "style";

const styles = StyleSheet.create({
  imageBackground: {
    height: vh(100),
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 56,
    height: vh(100),
  },
  headerText: {
    fontFamily: Font.FontFamily.Mulish,
    fontWeight: "800",
    lineHeight: Font.FontLineHeight.Header,
    letterSpacing: 0.66,
    color: Colors.white,
  },
  movieListContainer: {
    marginTop: 26,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: -8,
    flexWrap: "wrap",
  },
  movieItem: {
    paddingHorizontal: 8,
    marginBottom: 16,
    width: "50%",
  },
  thumbImage: {
    width: "100%",
    borderRadius: 16,
    height: 200,
    marginBottom: 8,
  },
  movieRate: {
    position: "absolute",
    top: 8,
    right: 15,
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  },
});

export default styles;
