import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "../../components/Button/button";
import { CustomTextInput } from "../../components/TextInput/textInput";
import { styles } from "./styles";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoggingIn = () => {
    console.log("login");
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.inputWithLabelContainer}>
        <CustomTextInput
          label="Email"
          color="darkSpringGreen"
          keyboardType="email-address"
          onTextChange={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputWithLabelContainer}>
        <CustomTextInput
          label="Password"
          color="darkSpringGreen"
          secure={true}
          onTextChange={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.gap} />
      <Button
        text="Log In"
        onButtonPress={onLoggingIn}
        color={"darkSpringGreen"}
        strong={true}
      />
      <Button
        text="Sign Up"
        onButtonPress={onLoggingIn}
        color={"darkSpringGreen"}
        strong={false}
      />
    </View>
  );
};
