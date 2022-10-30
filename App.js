import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from './src/component/UsersList';

function HomeScreen() {
  return (
    <View>
      <UserList />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GitHub Users" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



