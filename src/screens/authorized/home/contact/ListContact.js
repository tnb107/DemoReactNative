import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class ListContact extends Component {
    static navigationOptions = {
        title: 'List Contact'
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>List Contact</Text>
                <Image source={require('../../../../img/icons/contact.png')}
                    style={styles.icon}
                />
            </View>
        );
    }
}
const styles = {
    icon: {
        width: 100,
        height: 100,
    }
}

export default ListContact;