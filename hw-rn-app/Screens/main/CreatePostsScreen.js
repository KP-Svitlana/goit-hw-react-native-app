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
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";

export const CreatePostsScreen = () => {
  const [isActive, setIsActive] = useState(false);
  const [type, setType] = useState(CameraType.back);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <Container>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={styles.newPostForm}>
          <Camera style={styles.newPostForm__camera} type={type}>
            <View style={styles.newPostForm__cameraIconWrap}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/camera_btn_icon.png")}
                  resizeMode="contain"
                  style={styles.newPostForm__cameraIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleCameraType}>
                <Image
                  source={require("../../assets/images/toggle_camera_icon.png")}
                  resizeMode="contain"
                  style={styles.newPostForm__toggleIcon}
                />
              </TouchableOpacity>
            </View>
          </Camera>
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
              onPress={() => {}}
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
  newPostForm__camera: {
    width: "auto",
    height: 240,
    marginTop: 42,
    borderRadius: 8,
    justifyContent: "center",
  },
  newPostForm__cameraIconWrap: {
    position: "relative",
    alignItems: "center",
  },

  newPostForm__cameraIcon: {
    width: 60,
    height: 60,
  },

  newPostForm__toggleIcon: {
    position: "absolute",
    // right: 100,
    // bottom: -80,
    width: 60,
    height: 60,
    tintColor: "#ffffff",
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
