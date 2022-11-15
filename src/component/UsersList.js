import React, {Component} from 'react';
import {StyleSheet,View,FlatList} from 'react-native';
import UserCard from './UserCard';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }  
  componentDidMount() {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      });
  }
  _renderItem = ({item, index}) => {
    const onClick = ()=>this.props.navigation.navigate('User Info',{user: item})
    return (     
      <UserCard user={item} OnPress={onClick} />
    );
  };
  render() {
    let {container} = styles;
    let {dataSource, isLoading} = this.state;
    return (
      <View styles={container}>
        <FlatList
          data={dataSource}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 50,
  },
});
