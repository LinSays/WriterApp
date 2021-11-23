import React, { useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Platform,
  UIManager,
  LayoutAnimation,
  FlatList,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "style";
import { navigate } from "navigation";

import styles from "./Accordion.styles";

interface Props {
  title: string;
  data: any;
}
const Accordion: React.FC<Props> = ({ title, data }) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const [dataArray, setDataArray] = React.useState(data);
  const [expanded, setExpanded] = React.useState(false);

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
        <Text style={[styles.title]}>{title}</Text>
        <MaterialIcons
          name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color={Colors.white}
        />
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expanded && (
        <View style={{}}>
          {dataArray.map((data, index) => (
            <View key={index}>
              <TouchableOpacity
                style={[styles.childRow]}
                onPress={() => navigator.openSeriesActScreen()}
              >
                <Text style={[styles.itemInActive]}>{data.actName}</Text>
                <MaterialIcons name={"keyboard-arrow-right"} size={24} color={Colors.white} />
              </TouchableOpacity>
              <View style={styles.childHr} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Accordion;
