import React, {Component} from 'react';
import { View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createAppContainer} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';

// export default function Info() {
//     const navigation = useNavigation();
//     return (
//         <View>
//             <Button
//                 title="Go to Home"
//                 onPress={() => navigation.navigate('Info')}
//                 //onPress={() => navigation.navigate('Info',{id: this.props.user.id})}
//             />
//         </View>
//     );
// };
class InfoButton extends React.Component{
    render(){
    const navigation = useNavigation();
    return (
        <View>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Info')}
                //onPress={() => navigation.navigate('Info',{id: this.props.user.id})}
            />
        </View>
    );}
}
