import React, { useState } from "react";
import { View, TextInput, KeyboardType, Text } from "react-native";
import { colors } from "../../config/constants/colors";
import { styles } from "./styles";

interface CustomTextInputProps {
  onTextChange: Function;
  color: keyof typeof colors;
  keyboardType?: KeyboardType;
  secure?: boolean;
  label?: string;
}

export const CustomTextInput = ({
  onTextChange,
  color,
  keyboardType = "default",
  secure = false,
  label,
}: CustomTextInputProps) => {
  const [text, onChangeText] = useState("");

  const localTextChange = (text) => {
    onChangeText(text);
    onTextChange(text);
  };

  return (
    <>
      {label ? <Text style={{ color: colors[color] }}>{label}</Text> : null}

      <View style={[styles.inputContainer, { borderColor: colors[color] }]}>
        <TextInput
          keyboardType={keyboardType}
          selectionColor={colors.black}
          secureTextEntry={secure}
          style={styles.input}
          value={text}
          onChangeText={(text) => localTextChange(text)}
        />
      </View>
    </>
  );
};
