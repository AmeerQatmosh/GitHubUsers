import React, {Component} from 'react';
import {StyleSheet, Text, Image,SafeAreaView, ScrollView} from 'react-native';
export default class UserInfo extends Component {
  state = { showDefault: true, error: false };

  // componentDidMount() {
  //   console.log('UserInfo', this.props.route.params);
  // }

  render() {
    var image = this.state.showDefault ? require('./assets/avatar.png') : ( { uri: this.props.route.params.user.avatar_url } );
    const { navigation,route } = this.props;
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Image
          style={styles.image}
          source={image}
          onLoadEnd={() => this.setState({showDefault: false})} 
        />  
        <Text style={{textAlign: 'center',fontSize: 20,fontFamily: 'monospace',color: 'black'}} > {this.props.route.params.user.login}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>ID:</Text> {this.props.route.params.user.id}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Login: </Text>{this.props.route.params.user.login}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Node ID: </Text>{this.props.route.params.user.node_id}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Gravatar ID:</Text> {this.props.route.params.user.gravatar_id}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Type:</Text> {this.props.route.params.user.type}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Site Admin:</Text> {this.props.route.params.user.site_admin.toString()}</Text>
        <Text style={styles.bold}>Events URL:</Text>
        <Text style={styles.text} >{this.props.route.params.user.events_url}</Text>
        <Text style={styles.bold}>Followers URL:</Text> 
        <Text style={styles.text} >{this.props.route.params.user.followers_url}</Text>
        <Text style={styles.bold}>Following URL: </Text>
        <Text style={styles.text} >{this.props.route.params.user.following_url}</Text>
        <Text style={styles.bold}>Gists URL:</Text>
        <Text style={styles.text} >{this.props.route.params.user.gists_url}</Text>
        <Text style={styles.bold}>HTML URL:</Text>
        <Text style={styles.text} >{this.props.route.params.user.html_url}</Text>
        <Text style={styles.bold}>Organizations URL:</Text>
        <Text style={styles.text} >{this.props.route.params.user.organizations_url}</Text>
        <Text style={styles.bold}>Received Events URL:</Text>
        <Text style={styles.text} >{this.props.route.params.user.received_events_url}</Text>
        <Text style={styles.bold}>Repos URL:</Text>
        <Text style={styles.text} >{this.props.route.params.user.repos_url}</Text>
        <Text style={styles.bold}>Starred URL: </Text>
        <Text style={styles.text} >{this.props.route.params.user.starred_url}</Text>
        <Text style={styles.bold}>Subscriptions URL:</Text>
        <Text style={styles.text} >{this.props.route.params.user.subscriptions_url}</Text>
        <Text style={styles.bold}>URL:</Text>
        <Text style={styles.text} >{this.props.route.params.user.url}</Text>
        </ScrollView>
    </SafeAreaView>
      )} 
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'black',

  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontFamily: 'monospace',
    color: 'black',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 10,
    alignSelf: 'center',
  },
  bold: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 19,
    fontFamily: 'monospace',
    color: 'black',
    padding: 10,
    fontWeight: "bold",
  }
})



