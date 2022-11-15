import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
export default class UserCard extends React.Component {
  state = { showDefault: true, error: false };

  // componentDidMount() {
  //  console.log('usercard', this.props);
  // }
  
  render() {
    var image = this.state.showDefault ? require('./assets/avatar.png') : ( { uri: this.props.user.avatar_url } );
    return (
    <TouchableOpacity onPress={() => this.props.OnPress()} >
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={image}
          onLoadEnd={() => this.setState({showDefault: false})} 
        />

        <Text style={styles.username}>{this.props.user.login}</Text>
      </View>
      </TouchableOpacity>
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
  username: {
    fontSize: 20,
    fontFamily: 'Sans-serif',
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
