import { useDispatch } from "react-redux";
import { authSingOutUser } from "../../redux/auth/authOperations";

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  FlatList,
} from "react-native";

import { Container } from "../../Components/Container";
const gallery = [
  {
    id: 1,
    img: require("../../assets/images/photo_1.png"),
    title: "Photo_1",
    comments: 6,
    location: "Location_1",
  },
  {
    id: 2,
    img: require("../../assets/images/photo_2.png"),
    title: "Photo_2",
    comments: 11,
    location: "Location_1",
  },
  {
    id: 3,
    img: require("../../assets/images/photo_1.png"),
    title: "Photo_3",
    comments: 10,
    location: "Location_1",
  },
  {
    id: 4,
    img: require("../../assets/images/photo_2.png"),
    title: "Photo_4",
    comments: 9,
    location: "Location_1",
  },
  {
    id: 5,
    img: require("../../assets/images/photo_1.png"),
    title: "Photo_5",
    comments: 8,
    location: "Location_1",
  },
  {
    id: 6,
    img: require("../../assets/images/photo_2.png"),
    title: "Photo_6",
    comments: 7,
    location: "Location_1",
  },
];

export function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authSingOutUser());
  };

  return (
    <Container>
      <ImageBackground
        source={require("../../assets/images/photoBG.png")}
        style={styles.backgroundImg}
      >
        <View style={styles.profileForm}>
          <TouchableOpacity onPress={logOut} style={{ alignItems: "flex-end" }}>
            <Image
              source={require("../../assets/images/logOut_icon.png")}
              resizeMode="contain"
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.profileForm__imgWrap}>
            <Image
              source={require("../../assets/images/user_ava_big.png")}
              style={styles.profileForm__img}
            />
            <Image
              source={require("../../assets/images/close_icon_2.png")}
              style={styles.profileForm__svg}
            />
          </View>

          <Text style={styles.profileForm__title}> Example Name</Text>

          <SafeAreaView style={styles.gallery}>
            <FlatList
              data={gallery}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={{ marginTop: 32 }}>
                  <Image source={item.img} style={styles.gallery__img} />
                  <Text style={styles.gallery__title}>{item.title}</Text>
                  <View style={styles.gallery__container}>
                    <View style={styles.gallery__commentsWrap}>
                      <TouchableOpacity>
                        <Image
                          source={require("../../assets/images/message-circle.png")}
                          resizeMode="cover"
                          style={styles.gallery__commentsIcon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.gallery__comments}>
                        {item.comments}
                      </Text>
                    </View>
                    <View style={styles.gallery__locationWrap}>
                      <TouchableOpacity>
                        <Image
                          source={require("../../assets/images/location_icon.png")}
                          resizeMode="cover"
                          style={styles.gallery__locationIcon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.gallery__location}>
                        {item.location}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
  icon: {
    width: 24,
    height: 24,
    marginTop: 22,
    tintColor: "#BDBDBD",
  },
  profileForm: {
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingHorizontal: 16,
    marginTop: 150,
  },
  profileForm__imgWrap: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
  },
  profileForm__img: {
    width: 120,
    height: 120,
  },
  profileForm__svg: {
    position: "absolute",
    bottom: 14,
    right: -14,
    width: 25,
    height: 25,
    tintColor: "#BDBDBD",
    backgroundColor: "#ffffff",
    borderRadius: 15,
  },

  profileForm__title: {
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    lineHeight: 35,
    marginTop: 32,
  },

  gallery__img: {
    width: "auto",
    borderRadius: 8,
  },
  gallery__title: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
  },
  gallery__container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  gallery__commentsWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  gallery__commentsIcon: {
    width: 20,
    height: 20,
    tintColor: "#BDBDBD",
  },
  gallery__locationIcon: {
    width: 16,
    height: 18,
    tintColor: "#BDBDBD",
  },
  gallery__comments: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  gallery__locationWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  gallery__location: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 6,
  },
});
