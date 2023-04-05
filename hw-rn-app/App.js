import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import { useEffect } from "react";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";

export default App = () => {
  const [fontsLoader] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      }))();
  }, []);

  if (!fontsLoader) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/photoBG.png")}
        style={styles.backgroundImg}
      >
        <KeyboardAvoidingView
          style={styles.keyboardContainer}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          {/* <RegistrationScreen /> */}
          <LoginScreen />
        </KeyboardAvoidingView>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
