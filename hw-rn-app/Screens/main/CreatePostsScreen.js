import { StyleSheet, Text, View } from "react-native";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Posts Screen</Text>
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
