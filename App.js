/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, Alert, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './Screens/FirstPage';
import SecondPage from './Screens/SecondPage';
const Stack=createNativeStackNavigator();


/* 
To install navigation install three library using three commands given below:

1. npm install react-navigation
2. npm install @react-navigation/native-stack
3. npm install @react-navigation/native


*/





const App = () => {






return (
<NavigationContainer>

  <Stack.Navigator initialRouteName='FirstPage'>

    <Stack.Screen 
    name='FirstPage' 
    component={FirstPage}
    options={ {
            headerShown: false
          } }
    />

    <Stack.Screen 
    name='SecondPage' 
    component={SecondPage}
    options={ {
            headerShown: false
          } }
    />


  </Stack.Navigator>
</NavigationContainer>
  );
};


export default App;