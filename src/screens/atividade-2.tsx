import React, {useEffect, useState} from 'react';
import {
  DeviceEventEmitter,
  NativeModules,
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import {
  accelerometer,
  barometer,
  SensorData,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';

const {SensorManager} = NativeModules;

setUpdateIntervalForType(SensorTypes.accelerometer, 400);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  section: {
    margin: 5,
    marginBottom: 10,
  },
  coordinates: {
    flex: 1,
  },
});

export const Atividade2Screen = () => {
  const [light, setLight] = useState<number>(0);
  const [pressure, setPressure] = useState<number>();
  const [position, setPosition] = useState<SensorData>();
  const [geoposition, setGeoPosition] = useState<GeoPosition>();

  const subscriptionAccelerometer = accelerometer.subscribe({
    next: setPosition,
  });

  const subscriptionBarometer = barometer.subscribe({
    next: ({pressure}) => setPressure(pressure),
  });

  const requestAndGetLocation = async () => {
    const PERMISSION = 'android.permission.ACCESS_FINE_LOCATION';
    const request = await PermissionsAndroid.request(PERMISSION);

    if (request === 'granted') {
      Geolocation.getCurrentPosition(setGeoPosition, console.error, {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      });
    }
  };

  useEffect(() => {
    requestAndGetLocation();
  }, []);

  setTimeout(() => {
    subscriptionBarometer.unsubscribe();
    subscriptionAccelerometer.unsubscribe();
  }, 1000);

  useEffect(() => {
    SensorManager.startLightSensor(100);
    DeviceEventEmitter.addListener('LightSensor', ({light}) => setLight(light));
  });

  return (
    <View>
      <View style={styles.section}>
        <Text>Luminosidade:</Text>
        <Text>{light}</Text>
      </View>
      <View style={styles.section}>
        <Text>Latitude: {geoposition?.coords?.latitude}</Text>
        <Text>Longitude: {geoposition?.coords?.longitude}</Text>
      </View>
      <View style={styles.section}>
        <Text>Pressão: {pressure} hPa</Text>
      </View>
      <View style={styles.section}>
        <Text>Acelerômetro:</Text>
        <View style={styles.container}>
          <View style={styles.coordinates}>
            <Text>X:</Text>
            <Text>{position?.x.toFixed(8)}</Text>
          </View>
          <View style={styles.coordinates}>
            <Text>Y:</Text>
            <Text>{position?.y.toFixed(8)}</Text>
          </View>
          <View style={styles.coordinates}>
            <Text>Z:</Text>
            <Text>{position?.z.toFixed(8)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
