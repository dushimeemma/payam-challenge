import React from "react";
import { Text } from "react-native";

const TextView = ({ children, style }) => {
  return <Text style={style}>{children}</Text>;
};

export default TextView;
