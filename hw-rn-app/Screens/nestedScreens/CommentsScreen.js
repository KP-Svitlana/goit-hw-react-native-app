import { StyleSheet, Text, View } from "react-native";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "black" }}>Comments Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default CommentsScreen;
