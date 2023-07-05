import { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { Container } from "../../Components/Container";

import { useDispatch } from "react-redux";

import { authSingInUser } from "../../redux/auth/authOperations";

const initialState = {
  email: "",
  password: "",
};

export function LoginScreen({ navigation }) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });
  const [state, setState] = useState(initialState);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const dispatch = useDispatch();

  const hendleSubmit = () => {
    setIsInputFocused(false);
    Keyboard.dismiss();
    console.log(state);
    dispatch(authSingInUser(state));
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
          <View style={styles.loginForm}>
            <Text style={styles.loginForm__title}>Увійти</Text>
            <TextInput
              style={{
                ...styles.loginForm__input,
                borderColor: isFocused.email ? "#FF6C00" : "#E8E8E8",
              }}
              placeholder="Адреса електронної пошти"
              textContentType="emailAddress"
              value={state.email}
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
                ...styles.loginForm__input,
                borderColor: isFocused.password ? "#FF6C00" : "#E8E8E8",
              }}
              placeholder="Пароль"
              secureTextEntry={isPasswordShow ? false : true}
              textContentType="password"
              value={state.password}
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
              style={styles.loginForm__loginBtn}
              onPress={hendleSubmit}
            >
              <Text style={styles.loginForm__loginBtnText}>Увійти</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                ...styles.loginForm__registerBtn,
                marginBottom: isInputFocused ? 32 : 145,
              }}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={styles.loginForm__registerBtnText}>
                Нема облікового запису? Зареєструйся
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
  loginForm: {
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingHorizontal: 16,
  },
  loginForm__title: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    fontSize: 30,
    textAlign: "center",
    lineHeight: 35,

    marginVertical: 32,
  },
  loginForm__input: {
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    padding: 16,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regular",
    borderRadius: 8,
  },

  loginForm__loginBtn: {
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  loginForm__loginBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  loginForm__registerBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  loginForm__registerBtnText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  registrationForm__passwordShowBtn: {
    position: "absolute",
    top: 180,
    right: 32,
  },
  registrationForm__passwordShowBtnText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
});
