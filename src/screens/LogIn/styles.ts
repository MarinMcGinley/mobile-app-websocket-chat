import { StyleSheet } from "react-native";
import { colors } from "../../config/constants/colors";

export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  gap: {
    height: 50,
  },
  inputWithLabelContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
});
