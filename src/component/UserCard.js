import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

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
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#e0e0e0',
    padding: 25,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'black',
    width: '70%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'monospace',
    color: 'black',
    textAlign: 'center',
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
    alignSelf: 'center',
  },
});
