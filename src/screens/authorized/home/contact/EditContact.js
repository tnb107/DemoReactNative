import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class EditContact extends Component {
    static navigationOptions = (navigation) => ({
        title: 'Edit Contact',
        headerTitleStyle: {
            alignSelf: 'center'
        }
    });
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Edit Contact</Text>
                <Button onPress = {()=> this.props.navigation.navigate('View')} title = 'Go to View'/>
            </View>
        );
    }
}

export default EditContact;