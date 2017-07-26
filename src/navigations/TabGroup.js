import {StackNavigator} from 'react-navigation';
import React, { Component } from 'react';
import { Image } from 'react-native';
import AddGroup from '../screens/authorized/home/group/AddGroup';
import EditGroup from '../screens/authorized/home/group/EditGroup';
import ListGroup from '../screens/authorized/home/group/ListGroup';
import ViewGroup from '../screens/authorized/home/group/ViewGroup';
const TabGroup = StackNavigator({
    List: {screen: ListGroup},
    Add: {screen: AddGroup},
    Edit: {screen: EditGroup},
    View: {screen: ViewGroup},
},{
    navigationOptions: {
            tabBarLabel: 'Groups',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../img/icons/group.png')}
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
export default TabGroup;