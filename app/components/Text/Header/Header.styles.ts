import { StyleSheet } from "react-native";

import { Font, Colors } from "style";

export default StyleSheet.create({
  default: {
    color: Colors.white,
    fontFamily: Font.FontFamily.Mulish,
    fontSize: Font.FontSize.Header,
    fontWeight: "800",
    lineHeight: Font.FontLineHeight.Header,
    letterSpacing: 0.66,
  },
});
