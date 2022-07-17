import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../types';

const styles = StyleSheet.create({
  buttons: {
    marginBottom: 10,
  },
});

export const HomeScreen = ({
  navigation: {navigate},
}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <>
      <View style={styles.buttons}>
        <Button
          onPress={() => navigate('Atividade 1 - Parte 1')}
          title="Atividade 1 - Parte 1"
        />
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => navigate('Atividade 1 - Parte 2A')}
          title="Atividade 1 - Parte 2"
        />
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => navigate('Atividade 1 - Parte 3A')}
          title="Atividade 1 - Parte 3"
        />
      </View>
      <View>
        <Button onPress={() => navigate('Atividade 2')} title="Atividade 2" />
      </View>
    </>
  );
};
