import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import NextScreen from '../../screens/NextScreen';

const Stack = createNativeStackNavigator();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: 'white',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
      />
      <Stack.Screen name="Next" component={NextScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
