import { StyleSheet } from "react-native";
import { colors } from "../../config/constants/colors";

export const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: colors.cherryBlossomPink,
    flex: 1,
  },
  sentMessagesContainer: {
    margin: 10,
    flex: 1,
  },
  myMessageContainer: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.darkSpringGreen,
    height: 50,
  },
});
