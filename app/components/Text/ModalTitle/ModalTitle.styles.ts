import { StyleSheet } from "react-native";

import { Font, Colors } from "style";

export default StyleSheet.create({
  default: {
    color: Colors.white,
    fontFamily: Font.FontFamily.Mulish,
    fontSize: Font.FontSize.ModalTitle,
    fontWeight: "700",
    lineHeight: Font.FontLineHeight.ModalTitle,
    letterSpacing: 0.66,
  },
});
