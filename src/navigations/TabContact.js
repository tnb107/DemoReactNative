import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Image } from 'react-native';
import AddContact from '../screens/authorized/home/contact/AddContact';
import EditContact from '../screens/authorized/home/contact/EditContact';
import ListContact from '../screens/authorized/home/contact/ListContact';
import ViewContact from '../screens/authorized/home/contact/ViewContact';
const TabContact = StackNavigator({
    List: { screen: ListContact },
    Add: { screen: AddContact },
    Edit: { screen: EditContact },
    View: { screen: ViewContact },
}, {
        navigationOptions: {
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../img/icons/contact.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
});
const styles = {
    icon: {
        width: 23,
        height: 23,
    }
}

export default TabContact;