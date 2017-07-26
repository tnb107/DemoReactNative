import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ViewContact extends Component {
    static navigationOptions = (navigation) => ({
        title: 'View Contact',
        headerTitleStyle: {
            alignSelf: 'center'
        }
    });
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>ViewContact</Text>
            </View>
        );
    }
}

export default ViewContact;