import React, { useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";

import Text from "../Text";
import styles from "./Input.styles";

interface Props {
  placeholder?: string;
  value: string;
  type?: string;
  multiline?: boolean;
}
const Input: React.FC<Props> = ({ value, placeholder, type, multiline }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.white1}
        style={[styles.input]}
        defaultValue={value}
        secureTextEntry={type == "password" ? true : false}
        multiline={multiline == true ? true : false}
      />
    </View>
  );
};

export default Input;
