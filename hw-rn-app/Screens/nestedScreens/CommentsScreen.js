import { StyleSheet, Text, View } from "react-native";

export const CommentsScreen = () => {
  return (
    <View>
      <Text style={styles.container}>Comments Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
