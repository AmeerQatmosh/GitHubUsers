import React, {Component} from 'react';
import {StyleSheet,View,Text,FlatList,Image,Button,Pressable,TouchableOpacity} from 'react-native';
import InfoButton from './Info';
import UserCard from './UserCard';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }
  componentDidMount() {
    fetch('https://api.github.com/users?since=0')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      });
  }

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => 
      this.props.navigation.navigate('User Info',{login: item.login, id: item.id, node_id: item.node_id, avatar_url: item.avatar_url, gravatar_id: item.gravatar_id,
        url: item.url, html_url: item.html_url , followers_url: item.followers_url , following_url: item.following_url , gists_url: item.gists_url ,
        starred_url: item.starred_url , subscriptions_url: item.subscriptions_url ,organizations_url: item.organizations_url , repos_url: item.repos_url ,
        events_url: item.events_url , received_events_url: item.received_events_url , type: item.type , siteadmin: item.site_admin , name: item.name ,
        company: item.company , blog: item.blog , location: item.location , email: item.email , hireable: item.hireable , bio: item.bio ,
        twitter_username: item.twitter_username, public_repos: item.public_repos , public_gists: item.public_gists , followers: item.followers ,
        following: item.following , created_at: item.created_at , updated_at: item.updated_at,
      })}>      
        <UserCard user ={item} />
      </TouchableOpacity>
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
