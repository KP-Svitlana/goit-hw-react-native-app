import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "black" }}>Map Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default MapScreen;
