import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useFonts } from "expo-font";
import * as Font from "expo-font";
import { useEffect } from "react";

export const Container = ({ children }) => {
  const [fontsLoader] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
      }))();
  }, []);

  if (!fontsLoader) {
    return undefined;
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
