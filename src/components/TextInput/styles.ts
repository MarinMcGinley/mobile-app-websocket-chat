import { StyleSheet } from "react-native";
import { colors } from "../../config/constants/colors";

export const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    width: 250,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    color: colors.black,
    borderRadius: 5,
    padding: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: colors.white,
  },
});
