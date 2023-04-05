import { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export function LoginScreen() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });
  const [state, setState] = useState(initialState);
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const keyboardOff = () => {
    setIsInputFocused(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const hendlerInputFocus = (textInput) => {
    setIsFocused({ [textInput]: true });
  };

  const hendlerInputBlure = (textInput) => {
    setIsFocused({ [textInput]: false });
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardOff}>
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
          onPress={keyboardOff}
        >
          <Text style={styles.loginForm__loginBtnText}>Увійти</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            ...styles.loginForm__registerBtn,
            marginBottom: isInputFocused ? 32 : 145,
          }}
        >
          <Text style={styles.loginForm__registerBtnText}>
            Нема облікового запису? Зареєструйся
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  loginForm: {
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingHorizontal: 16,
  },
  loginForm__title: {
    color: "#212121",
    fontWeight: 500,
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
  loginForm__loginBtnText: { color: "#FFFFFF", fontSize: 16, lineHeight: 19 },
  loginForm__registerBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  loginForm__registerBtnText: { color: "#1B4371" },
  registrationForm__passwordShowBtn: {
    position: "absolute",
    top: 180,
    right: 32,
  },
  registrationForm__passwordShowBtnText: {
    color: "#1B4371",
  },
});
