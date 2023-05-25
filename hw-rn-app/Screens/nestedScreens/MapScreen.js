import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Container } from "../../Components/Container";

const MapScreen = ({ route }) => {
  const location = route.params.item.locationCords;

  return (
    <Container>
      <MapView
        style={styles.map}
        initialRegion={{
          longitude: location.longitude,
          latitude: location.latitude,
          longitudeDelta: 0.001,
          latitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{
            longitude: location.longitude,
            latitude: location.latitude,
          }}
        />
      </MapView>
    </Container>
  );
};

const styles = StyleSheet.create({
  map: { flex: 1 },
});

export default MapScreen;
