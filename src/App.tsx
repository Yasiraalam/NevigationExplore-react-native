import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';
import React, { JSX } from 'react';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//screens
import Detail from './screen/Details';
import Home from './screen/Home';

export type RootStackParamList = {
  Home: undefined;
  Details: { productId: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: "Trending Products",
          }} 
          component={Home} />
        <Stack.Screen
          name="Details"
          options={{
            title: "Product Details",
          }}
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
