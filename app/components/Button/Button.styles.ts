import { view } from "ramda";
import { StyleSheet } from "react-native";

import { Colors } from "style";

const White = StyleSheet.create({
  default: {
    backgroundColor: Colors.white,
  },
});

const Black = StyleSheet.create({
  default: {
    backgroundColor: Colors.black,
    borderColor: Colors.white1,
    borderWidth: 1,
  },
});
const Primary = StyleSheet.create({
  default: {
    width: "100%",
  },
});

export default { White, Black, Primary };
