import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListGroup extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>List Group</Text>
            </View>
        );
    }
}

export default ListGroup;