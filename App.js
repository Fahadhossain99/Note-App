import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/screens/home';
import Login from './src/screens/login';
import Create from './src/screens/create';
import Update from './src/screens/update';
import Signup from './src/screens/signup';

const Stack = createNativeStackNavigator();

function App() {
  const [user,setuser]=React.useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Create" component={Create} />
            <Stack.Screen name="Update" component={Update} />
          </>
        ) : (
          <><Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} /></>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


