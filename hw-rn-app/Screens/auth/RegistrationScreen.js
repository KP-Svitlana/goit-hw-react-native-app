import { useState } from "react";

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Container } from "../../Components/Container";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export function RegistrationScreen({ navigation }) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isFocused, setIsFocused] = useState({
    login: false,
    email: false,
    password: false,
  });
  const [state, setState] = useState(initialState);
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const hendleSubmit = () => {
    setIsInputFocused(false);
    Keyboard.dismiss();
    console.log(state);
    navigation.navigate("Home");
    setState(initialState);
  };

  const hendlerInputFocus = (textInput) => {
    setIsFocused({ [textInput]: true });
  };

  const hendlerInputBlure = (textInput) => {
    setIsFocused({ [textInput]: false });
  };

  return (
    <Container>
      <ImageBackground
        source={require("../../assets/images/photoBG.png")}
        style={styles.backgroundImg}
      >
        <KeyboardAvoidingView
          style={styles.keyboardContainer}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <View style={styles.registrationForm}>
            <Image
              source={require("../../assets/images/photo_ava.png")}
              style={styles.registrationForm__img}
            />
            <Image
              source={require("../../assets/images/add.png")}
              style={styles.registrationForm__svg}
            />
            <Text style={styles.registrationForm__title}>Регістрація</Text>
            <TextInput
              style={{
                ...styles.registrationForm__input,
                borderColor: isFocused.login ? "#FF6C00" : "#E8E8E8",
              }}
              value={state.login}
              placeholder="Логін"
              textContentType="name"
              onFocus={() => {
                setIsInputFocused(true);
                hendlerInputFocus("login");
              }}
              onBlur={() => {
                hendlerInputBlure("login");
              }}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, login: value }))
              }
            />
            <TextInput
              style={{
                ...styles.registrationForm__input,
                borderColor: isFocused.email ? "#FF6C00" : "#E8E8E8",
              }}
              value={state.email}
              placeholder="Адреса електронної пошти"
              textContentType="emailAddress"
              onFocus={() => {
                setIsInputFocused(true);
                hendlerInputFocus("email");
              }}
              onBlur={() => {
                hendlerInputBlure("email");
              }}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
            />
            <TextInput
              style={{
                ...styles.registrationForm__input,
                borderColor: isFocused.password ? "#FF6C00" : "#E8E8E8",
              }}
              value={state.password}
              placeholder="Пароль"
              secureTextEntry={isPasswordShow ? false : true}
              textContentType="password"
              onFocus={() => {
                setIsInputFocused(true);
                hendlerInputFocus("password");
              }}
              onBlur={() => {
                hendlerInputBlure("password");
              }}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
            />
            {isPasswordShow ? (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.registrationForm__passwordShowBtn}
                onPress={() => {
                  setIsPasswordShow(false);
                }}
              >
                <Text style={styles.registrationForm__passwordShowBtnText}>
                  Сховати
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.registrationForm__passwordShowBtn}
                onPress={() => {
                  setIsPasswordShow(true);
                }}
              >
                <Text style={styles.registrationForm__passwordShowBtnText}>
                  Показати
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.registrationForm__registerBtn}
              onPress={hendleSubmit}
            >
              <Text style={styles.registrationForm__registerBtnText}>
                Зареєструватись
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                ...styles.registrationForm__logInBtn,
                marginBottom: isInputFocused ? 32 : 78,
              }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.registrationForm__logInBtnText}>
                Вже є обліковий запис? Увійти
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  registrationForm: {
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingHorizontal: 16,
  },
  registrationForm__img: {
    position: "absolute",
    top: -60,
    right: 127,
    width: 120,
    height: 120,
  },
  registrationForm__svg: {
    position: "absolute",
    top: 20,
    right: 115,
    width: 25,
    height: 25,
  },

  registrationForm__title: {
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    lineHeight: 35,
    marginTop: 92,
    marginBottom: 32,
  },
  registrationForm__input: {
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    padding: 16,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",

    borderRadius: 8,
  },
  registrationForm__registerBtn: {
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  registrationForm__registerBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  registrationForm__logInBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  registrationForm__logInBtnText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  registrationForm__passwordShowBtn: {
    position: "absolute",
    top: 306,
    right: 32,
  },
  registrationForm__passwordShowBtnText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
});
