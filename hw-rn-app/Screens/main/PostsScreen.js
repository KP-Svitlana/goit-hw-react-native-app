import { Image, StyleSheet, Text, View } from "react-native";
import { Container } from "../../Components/Container";

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
});
