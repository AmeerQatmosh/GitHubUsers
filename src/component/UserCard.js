import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createAppContainer} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import UserInfo from './UserInfo';

export default class UserCard extends React.Component {
  // componentDidMount() {
  //  console.log('usercard', this.props);
  // }
  render() {
    return (
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{uri: this.props.user.avatar_url}}
        />
        <Text style={styles.text}>{this.props.user.login}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#e0e0e0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'black',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'monospace',
    color: 'black',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'monospace',
    color: 'blue',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
