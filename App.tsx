/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LogBox} from 'react-native';
import {Atividade1Parte1Screen} from './src/screens/atividade-1.1';
import {Atividade1Parte2AScreen} from './src/screens/atividade-1.2a';
import {Atividade1Parte2BScreen} from './src/screens/atividade-1.2b';
import {Atividade1Parte3AScreen} from './src/screens/atividade-1.3a';
import {Atividade1Parte3BScreen} from './src/screens/atividade-1.3b';
import {Atividade2Screen} from './src/screens/atividade-2';
import {HomeScreen} from './src/screens/home';

LogBox.ignoreLogs(['new NativeEventEmitter']);

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Atividade 1 - Parte 1"
          component={Atividade1Parte1Screen}
        />
        <Stack.Screen
          name="Atividade 1 - Parte 2A"
          options={{title: 'Atividade 1 - Parte 2'}}
          component={Atividade1Parte2AScreen}
        />
        <Stack.Screen
          name="Atividade 1 - Parte 2B"
          options={{title: 'Atividade 1 - Parte 2'}}
          component={Atividade1Parte2BScreen}
        />
        <Stack.Screen
          name="Atividade 1 - Parte 3A"
          options={{title: 'Atividade 1 - Parte 3'}}
          component={Atividade1Parte3AScreen}
        />
        <Stack.Screen
          name="Atividade 1 - Parte 3B"
          options={{title: 'Atividade 1 - Parte 3'}}
          component={Atividade1Parte3BScreen}
        />
        <Stack.Screen
          name="Atividade 2"
          options={{title: 'Atividade 2'}}
          component={Atividade2Screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
