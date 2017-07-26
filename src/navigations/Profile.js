import React, { Component } from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/authorized/Profile';

const Profile = StackNavigator({
    Profile: { screen: ProfileScreen }
}, {
        navigationOptions: {
            drawerLabel: 'Profile',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../img/icons/contact.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    });
const styles = {
    icon: {
        width: 30,
        height: 30,
    }
}
export default Profile;