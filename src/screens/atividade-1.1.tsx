import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    margin: 5,
  },
  result: {
    margin: 5,
    fontSize: 40,
    textAlign: 'center',
  },
});

export const Atividade1Parte1Screen = () => {
  const [inputAValue, onChangeTextInputA] = useState<string>();
  const [inputBValue, onChangeTextInputB] = useState<string>();

  const [result, setResult] = useState<number>();

  const sum = () => setResult(Number(inputAValue) + Number(inputBValue));

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTextInputA}
        value={inputAValue}
        placeholder="Enter a Number"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeTextInputB}
        value={inputBValue}
        placeholder="Enter a Number"
      />
      <View style={styles.button}>
        <Button onPress={sum} title="SUM" />
      </View>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};
