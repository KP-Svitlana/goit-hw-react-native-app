import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
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

export const PostsScreen = () => {
  return (
    <Container>
      <View style={styles.customerInfo}>
        <View style={styles.customerInfo__wrap}>
          <Image
            source={require("../../assets/images/User_ava.png")}
            style={styles.customerInfo__img}
          />
          <View style={styles.customerInfo__textWrap}>
            <Text style={styles.customerInfo__title}>example name</Text>
            <Text style={styles.customerInfo__email}>email@example.com</Text>
          </View>
        </View>
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
        <View>
          <Text style={{ display: "none" }}>Posts Gallery</Text>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  customerInfo: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    marginTop: 32,
  },
  customerInfo__wrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  customerInfo__img: {
    marginRight: 8,
  },
  customerInfo__textWrap: { alignItems: "center" },
  customerInfo__title: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
  },
  customerInfo__email: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
  },
  gallery: {
    // marginTop: 32,
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
    tintColor: "#565656",
  },
  gallery__locationIcon: {
    width: 16,
    height: 18,
    tintColor: "#565656",
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
