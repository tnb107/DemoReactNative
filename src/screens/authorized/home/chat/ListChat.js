import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListChat extends Component {
    static navigationOptions = {
        title: 'List Chat'
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>List Chat</Text>
            </View>
        );
    }
}

export default ListChat;