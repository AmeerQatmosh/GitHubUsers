import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator,createStackNavigator} from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';
import UserList from './src/component/UsersList';
import UserInfo from './src/component/UserInfo';
import UserCard from './src/component/UserCard';

 
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GitHub Users" component={UserList} />
        <Stack.Screen name="User Info" component={UserInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;





