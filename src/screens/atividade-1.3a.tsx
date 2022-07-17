import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  accelerometer,
  SensorData,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';
import {RootStackParamList} from '../../types';

setUpdateIntervalForType(SensorTypes.accelerometer, 400);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  coordinates: {
    flex: 1,
    margin: 5,
    padding: 2,
  },
});

export const Atividade1Parte3AScreen = ({
  navigation: {navigate},
}: NativeStackScreenProps<RootStackParamList>) => {
  const [position, setPosition] = useState<SensorData>({
    x: 0,
    y: 0,
    z: 0,
    timestamp: 0,
  });

  const subscription = accelerometer.subscribe({
    next: newPosition => {
      const distanceX = position.x - newPosition.x;
      const distanceY = position.y - newPosition.y;
      const distanceZ = position.z - newPosition.z;

      const distance = Math.hypot(distanceX, distanceY, distanceZ);

      if (distance > 10) {
        navigate('Atividade 1 - Parte 3B');
      } else setPosition(newPosition);
    },
  });

  setTimeout(() => {
    subscription.unsubscribe();
  }, 1000);

  if (!position) return null;

  return (
    <View style={styles.container}>
      <View style={styles.coordinates}>
        <Text>X:</Text>
        <Text>{position.x.toFixed(8)}</Text>
      </View>
      <View style={styles.coordinates}>
        <Text>Y:</Text>
        <Text>{position.y.toFixed(8)}</Text>
      </View>
      <View style={styles.coordinates}>
        <Text>Z:</Text>
        <Text>{position.z.toFixed(8)}</Text>
      </View>
    </View>
  );
};
