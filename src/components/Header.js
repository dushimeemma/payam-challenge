import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

import colors from "../config/colors";

const Header = ({ leftIcon, rightIcon, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mr}>
        <AntDesign name={leftIcon} color={colors.faded} size={15} />
      </View>
      <View style={styles.mr}>
        <Feather name={rightIcon} color={colors.faded} size={15} />
      </View>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 20,
    paddingVertical: 20,
  },
  titleStyle: {
    color: colors.white,
  },
  mr: {
    marginRight: 20,
  },
});

export default Header;
