import React from "react";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Colors, Font } from "style";

import styles from "./Button.styles";
import mainStyle from "./styles";

const PADDING_VERTICAL = 14;

type ButtonType = "White" | "Black" | "Primary";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  fullWidth?: boolean;
  textType: ButtonType;
  onPress: () => void;
};

interface ButtonFactory {
  (type: ButtonType): React.FC<Props>;
}

const buttonFactory: ButtonFactory = (type) => (props) => {
  const customStyle = [mainStyle.default, styles[type].default, props.style];
  const { fullWidth, children, textType, onPress } = props;

  if (fullWidth) {
    customStyle.push(mainStyle.fullWidth);
  }

  const additionalStyle = {
    paddingVertical: PADDING_VERTICAL,
    borderRadius: PADDING_VERTICAL * 2 + Font.FontSize[textType],
  };
  if (type === "Primary") {
    return (
      <TouchableOpacity onPress={onPress} {...props} style={{ width: "100%" }}>
        <LinearGradient
          colors={[Colors.GradLeft, Colors.GradRight]}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 0.0 }}
          style={[customStyle, additionalStyle]}
        >
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} {...props} style={[customStyle, additionalStyle]}>
        {children}
      </TouchableOpacity>
    );
  }
};

const White = buttonFactory("White");
const Black = buttonFactory("Black");
const Primary = buttonFactory("Primary");

export default { White, Black, Primary };
