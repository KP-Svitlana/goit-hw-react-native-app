import { StyleSheet, Text, View } from "react-native";

export const MapScreen = () => {
  return (
    <View>
      <Text style={styles.container}>Map Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
