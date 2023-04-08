import { StyleSheet, Text, View } from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 48,
  },
});
