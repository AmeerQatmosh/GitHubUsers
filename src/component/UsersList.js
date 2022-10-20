import React,{Component} from 'react';
import { useState,useEffect } from 'react';
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,TextInput,Pressable,useColorScheme,View, ActivityIndicator} from 'react-native';

export default class UsersList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            dataSource: null,
        }
    }
    componentDidMount () {
        return fetch ('https://api.github.com/users?since=0')
        .then ((response) => response.json())
        .then ((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.users,
            })

        });
        .catch ((error) => {
            console.log(error)
        });
    }
    render() {

        if (this.state.isLoading) {
            return(
                <view style={styles.container}>
                    <ActivityIndicator />
                </view>
        
            )
        }else {
            let users = this.state.dataSource.map ((val,key) => {
                return <View key = {key} style = {this.styles.item}>
                    <Text> {val.login}</Text>
                </View>
            });

            return(
                <View style = {styles.container}>
                    {users}
                </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
    }
});

