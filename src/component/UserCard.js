import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import UsersList from './UsersList';
export default class UserCard extends UsersList {
    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            dataSource: []
        }
    }
    componentDidMount () {
        fetch ('https://api.github.com/users?since=0')
        .then ((response) => response.json())
        .then ((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson
            })

        });
    }
    _renderItem = ({item, index}) => {
        return(
            <View style={styles.item}>
                <Text style={styles.text}>{item.login}</Text>
                <Text style={styles.text}>{item.id}</Text>
            </View>
        )
    }
    render() {
        let {container} = styles
        let {dataSource, isLoading} = this.state
        return (
            <View styles = {container}>
                <FlatList
                data={dataSource}
                renderItem= {this._renderItem}
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
    item: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    text: {
        fontSize: 20,
        fontFamily: 'monospace',
        color: 'black',
    }
});

