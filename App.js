import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from './src/component/UsersList';
import UserInfo from './src/component/UserInfo';

 
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





