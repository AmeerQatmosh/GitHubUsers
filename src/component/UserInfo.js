import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, Image,SafeAreaView, ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import UserCard from './UserCard';
export default class UserInfo extends Component {
  componentDidMount() {
    console.log('UserInfo', this.props);
  }
  render() {
    const { navigation,route } = this.props;
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.image}
          source={{uri: this.props.route.params.avatar_url}}
        />        
        <Text style={styles.text}>login: {this.props.route.params.login}</Text>
        <Text style={styles.text}>id: {this.props.route.params.id}</Text>
        <Text style={styles.text}>Node ID: {this.props.route.params.node_id}</Text>
        <Text style={styles.text}>Gravatar ID: {this.props.route.params.gravatar_id}</Text>
        <Text style={styles.text}>URL: {this.props.route.params.url}</Text>
        <Text style={styles.text}>HTML URL: {this.props.route.params.html_url}</Text>
        <Text style={styles.text}>Followers URL: {this.props.route.params.followers_url}</Text>
        <Text style={styles.text}>Following URL: {this.props.route.params.following_url}</Text>
        <Text style={styles.text}>Gists URL: {this.props.route.params.gists_url}</Text>
        <Text style={styles.text}>Starred URL: {this.props.route.params.starred_url}</Text>
        <Text style={styles.text}>Subscriptions URL: {this.props.route.params.subscriptions_url}</Text>
        <Text style={styles.text}>Organizations URL: {this.props.route.params.organizations_url}</Text>
        <Text style={styles.text}>Repos URL: {this.props.route.params.repos_url}</Text>
        <Text style={styles.text}>Events URL: {this.props.route.params.events_url}</Text>
        <Text style={styles.text}>Received Events URL: {this.props.route.params.received_events_url}</Text>
        <Text style={styles.text}>Type: {this.props.route.params.type}</Text>
        <Text style={styles.text}>Site Admin: {this.props.route.params.site_admin}</Text>
        <Text style={styles.text}>Name: {this.props.route.params.name}</Text>
        <Text style={styles.text}>Company: {this.props.route.params.company}</Text>
        <Text style={styles.text}>Blog: {this.props.route.params.blog}</Text>
        <Text style={styles.text}>Location: {this.props.route.params.location}</Text>
        <Text style={styles.text}>Email: {this.props.route.params.email}</Text>
        <Text style={styles.text}>Hireable: {this.props.route.params.hireable}</Text>
        <Text style={styles.text}>Bio: {this.props.route.params.bio}</Text>
        <Text style={styles.text}>Twitter Username: {this.props.route.params.twitter_username}</Text>
        <Text style={styles.text}>Public Repos: {this.props.route.params.public_repos}</Text>
        <Text style={styles.text}>Public Gists: {this.props.route.params.public_gists}</Text>
        <Text style={styles.text}>Followers: {this.props.route.params.followers}</Text>
        <Text style={styles.text}>Following: {this.props.route.params.following}</Text>
        <Text style={styles.text}>Created At: {this.props.route.params.created_at}</Text>
        <Text style={styles.text}>Updated At: {this.props.route.params.updated_at}</Text>
        </ScrollView>
    </SafeAreaView>
      )} 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'monospace',
    color: 'black',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
})



