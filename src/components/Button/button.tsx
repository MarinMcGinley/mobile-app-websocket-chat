import React from "react";
import { Pressable, View, Text } from "react-native";
import { colors } from "../../config/constants/colors";
import { styles } from "./styles";

interface ButtonProps {
  text: string;
  onButtonPress: Function;
  color: keyof typeof colors;
  strong?: boolean;
}

export const Button = ({
  text,
  onButtonPress,
  color,
  strong = true,
}: ButtonProps) => {
  const strongStyles = {
    borderWidth: 1,
    backgroundColor: colors[color],
  };

  const weakStyles = {
    backgroundColor: colors.white,
    borderColor: colors[color],
  };

  return (
    <View style={[styles.buttonContainer, strong ? strongStyles : weakStyles]}>
      <Pressable style={styles.pressableView} onPress={() => onButtonPress()}>
        <View style={styles.textContainer}>
          <Text
            style={[
              { color: strong ? colors.white : colors[color] },
              styles.text,
            ]}
          >
            {text}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
