import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { WrittenMessage } from "./WrittenMessage/writtenMessage";

const messages = [
  {
    message: "Hæ",
    userId: 1,
  },
  {
    message: "Hvað segiru?",
    userId: 1,
  },
  {
    message: "Hæ, allt fínt bara en þú?",
    userId: 2,
  },
  {
    message: "var að spá",
    userId: 1,
  },
  {
    message: "Já?",
    userId: 2,
  },
  {
    message: "Eigum við að djamma á föstudaginn?",
    userId: 1,
  },
  {
    message: "Úh já til í það",
    userId: 2,
  },
  {
    message: "Hvenær?",
    userId: 2,
  },
  {
    message: "Hittumst klukkan átta á vitabarnum?",
    userId: 1,
  },
  {
    message: "Cool",
    userId: 2,
  },
];

export const Chat = () => {
  return (
    <View style={styles.chatContainer}>
      <View style={styles.sentMessagesContainer}>
        {messages.map((m, idx) => (
          <WrittenMessage text={m.message} key={idx} />
        ))}
      </View>
      <View style={styles.myMessageContainer}></View>
    </View>
  );
};
