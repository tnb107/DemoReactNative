import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AddContact extends Component {
    static navigationOptions = (navigation) => ({
        title: 'Add Contact',
        headerTitleStyle: {
            alignSelf: 'center'
        },
        tabBarVisible : false
    });
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Add Contact</Text>
            </View>
        );
    }
}

export default AddContact;