import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Container } from "../../Components/Container";

import { useState } from "react";

export const CreatePostsScreen = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={styles.newPostForm}>
          <Image
            style={styles.newPostForm__img}
            source={require("../../assets/images/photo_gallery.png")}
          />
          <Text style={styles.newPostForm__text}>Завантажте фото</Text>
          <TextInput
            style={styles.newPostForm__input}
            placeholder="Назва"
            placeholderTextColor="#BDBDBD"
            textAlign="left"
            // onChange={() => setIsActive(true)}
          />
          <TextInput
            style={styles.newPostForm__input}
            placeholder="Місцевість"
            placeholderTextColor="#BDBDBD"
            textAlign="left"
            // onChange={() => setIsActive(true)}
          />
          <View style={styles.btn_wrap}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                ...styles.newPostForm__btn,
                backgroundColor: isActive ? "#FF6C00" : "#F6F6F6",
              }}
            >
              <Text
                style={{
                  ...styles.newPostForm__btnText,
                  color: isActive ? "#FFFFFF" : "#BDBDBD",
                }}
              >
                Опублікувати
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.newPostForm__deleteIconWrap}>
                <Image
                  source={require("../../assets/images/trash_icon.png")}
                  resizeMode="contain"
                  style={styles.newPostForm__deleteIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: { flex: 1 },
  newPostForm: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
  },
  newPostForm__img: {
    width: "auto",
    height: 240,
    marginTop: 42,
  },
  newPostForm__text: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    color: "#BDBDBD",
    marginTop: 8,
  },
  newPostForm__input: {
    height: 50,
    marginTop: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingVertical: 16,
    fontFamily: "Roboto-Regular",
  },
  btn_wrap: {
    flex: 1,
    justifyContent: "space-between",
  },
  newPostForm__btn: {
    height: 50,
    borderRadius: 100,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  newPostForm__btnText: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  newPostForm__deleteIconWrap: {
    justifyContent: "center",
    alignItems: "center",

    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    marginBottom: 22,
    marginRight: "auto",
    marginLeft: "auto",
  },
  newPostForm__deleteIcon: {
    width: 24,
    height: 24,
    tintColor: "#a2a2a2",
  },
});
