import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import BookListScreen from './BookListScreen';
import BookDetailsScreen from './BookDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6B3E26',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Book Haven' }}
        />

        <Stack.Screen
          name="BookList"
          component={BookListScreen}
          options={{ title: 'My Books' }}
        />

        <Stack.Screen
          name="BookDetails"
          component={BookDetailsScreen}
          options={{ title: 'Book Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}