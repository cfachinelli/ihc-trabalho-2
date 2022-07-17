import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {RootStackParamList} from '../../types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    margin: 5,
  },
  inputContainer: {
    flexGrow: 1,
    marginRight: 5,
  },
  input: {
    height: 35,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: 70,
  },
});

export const Atividade1Parte2AScreen = ({
  navigation: {navigate},
}: NativeStackScreenProps<RootStackParamList>) => {
  const [value, onChange] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={value}
          placeholder="Enter a Message"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => navigate('Atividade 1 - Parte 2B', {message: value})}
          title="SEND"
        />
      </View>
    </View>
  );
};
