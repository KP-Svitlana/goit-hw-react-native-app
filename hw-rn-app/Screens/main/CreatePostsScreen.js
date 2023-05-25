import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";
import { Container } from "../../Components/Container";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const CreatePostsScreen = ({ navigation }) => {
  const [isActive, setIsActive] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [locationCords, setLocationCords] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const takePhoto = async () => {
    const img = await camera.takePictureAsync();
    const locationCoord = await Location.getCurrentPositionAsync({});
    setLocationCords({
      longitude: locationCoord.coords.longitude,
      latitude: locationCoord.coords.latitude,
    });
    setImg(img.uri);
  };

  const onFormSubmit = () => {
    if (img) {
      navigation.navigate("DefaultPosts", {
        img,
        title,
        location,
        locationCords,
      });
      // setImg("");
      setTitle("");
      setLocation("");
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={styles.newPostForm}>
          <Camera
            style={styles.newPostForm__camera}
            type={type}
            ref={setCamera}
          >
            {img && (
              <View style={styles.newPostForm__takePhotoContainer}>
                <Image
                  source={{ uri: img }}
                  style={{ height: 200, width: 200 }}
                />
              </View>
            )}
            <TouchableOpacity onPress={takePhoto}>
              <Image
                source={require("../../assets/images/camera_btn_icon.png")}
                resizeMode="contain"
                style={styles.newPostForm__cameraIcon}
              />
            </TouchableOpacity>
            <View style={styles.newPostForm__toggleIconWrap}>
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
            value={title}
            onChangeText={(text) => {
              setIsActive(true);
              setTitle(text);
            }}
          />
          <TextInput
            style={styles.newPostForm__input}
            placeholder="Місцевість"
            placeholderTextColor="#BDBDBD"
            textAlign="left"
            value={location}
            onChangeText={(text) => {
              setIsActive(true);
              setLocation(text);
            }}
          />
          <View style={styles.btn_wrap}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                ...styles.newPostForm__btn,
                backgroundColor: isActive ? "#FF6C00" : "#F6F6F6",
              }}
              onPress={onFormSubmit}
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
            <View style={styles.newPostForm__deleteIconWrap}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/trash_icon.png")}
                  resizeMode="contain"
                  style={styles.newPostForm__deleteIcon}
                />
              </TouchableOpacity>
            </View>
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
    paddingVertical: 32,
  },
  newPostForm__takePhotoContainer: {
    position: "absolute",
    top: 5,
    left: 5,
    borderColor: "#ffffff",
    borderWidth: 1,
  },
  newPostForm__camera: {
    flex: 1,
    width: "auto",
    height: 240,
    borderRadius: 8,
    justifyContent: "center",
  },

  newPostForm__cameraIcon: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },

  newPostForm__toggleIcon: {
    width: 60,
    height: 60,
    tintColor: "#ffffff",
  },
  newPostForm__toggleIconWrap: {
    position: "absolute",
    bottom: 10,
    right: 10,
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
    // marginBottom: 22,
    marginRight: "auto",
    marginLeft: "auto",
  },
  newPostForm__deleteIcon: {
    width: 24,
    height: 24,
    tintColor: "#a2a2a2",
  },
});
