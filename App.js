import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/Screen/Welcome';
import Scan from './src/Screen/Scan';
import Information from './src/Screen/Information';
import Done from './src/Screen/Done';
import Er from './src/Screen/Er';
import OON from './src/Screen/OON';
import store from './src/redux/store';
import { Provider } from 'react-redux';



const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <Provider store={store}>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
      
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Done" component={Done} />
        <Stack.Screen name="Er" component={Er} />
        <Stack.Screen name="OON" component={OON} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;