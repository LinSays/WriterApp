import { Layout } from "constant";

const FontFamily = {
  Mulish: "Mulish",
};

const FontWeight = {
  Header: "500",
  Normal: "400",
};

const FontStyle = {
  Header: "normal",
};

const FontSizeNormalDevice = {
  Header: 34,
  Logo: 32,
  ParagraphTitle: 22,
  TagTitle: 20,
  ModalTitle: 18,
  Primary: 16,
  Secondary: 14,
  Tertiary: 14,
  White: 20,
  Black: 20,
};

const FontSizeSmallDevice = {
  Header: 32,
  Logo: 30,
  ParagraphTitle: 20,
  TagTitle: 18,
  ModalTitle: 16,
  Primary: 14,
  Secondary: 12,
  Tertiary: 12,
  White: 20,
  Black: 20,
};

const FontLineHeight = {
  Header: 41,
  Logo: 24,
  ParagraphTitle: 27,
  TagTitle: 30,
  ModalTitle: 22,
  Primary: 20,
  Secondary: 20,
  Tertiary: 24,
};

const FontSize = Layout.isSmallDevice ? FontSizeSmallDevice : FontSizeNormalDevice;

const Font = { FontWeight, FontSize, FontFamily, FontLineHeight, FontStyle };

export { Font };
