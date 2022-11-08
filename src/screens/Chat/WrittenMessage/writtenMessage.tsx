import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const WrittenMessage = ({
  text,
  key,
}: {
  text: string;
  key: number;
}) => {
  return (
    <View style={styles.messageContainer}>
      <Text>{text}</Text>
    </View>
  );
};
