import {StackNavigator} from 'react-navigation';
import React, { Component } from 'react';
import { Image } from 'react-native';
import AddChat from '../screens/authorized/home/chat/AddChat';
import EditChat from '../screens/authorized/home/chat/EditChat';
import ListChat from '../screens/authorized/home/chat/ListChat';
import ViewChat from '../screens/authorized/home/chat/ViewChat';
const TabChat = StackNavigator({
    List: {screen: ListChat},
    Add: {screen: AddChat},
    Edit: {screen: EditChat},
    View: {screen: ViewChat},
},{
    navigationOptions: {
            tabBarLabel: 'Chat',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../img/icons/chat.png')}
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
export default TabChat;