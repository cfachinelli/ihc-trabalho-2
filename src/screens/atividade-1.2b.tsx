import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../types';

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export const Atividade1Parte2BScreen = ({
  route: {
    params: {message},
  },
}: NativeStackScreenProps<RootStackParamList, 'Atividade 1 - Parte 2B'>) => {
  return (
    <View>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};
