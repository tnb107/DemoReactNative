import React from 'react';
import { TabNavigator } from 'react-navigation';
import TabContact from './TabContact';
import TabChat from './TabChat';
import TabGroup from './TabGroup';
import { Image } from 'react-native';
const Home = TabNavigator({
    TabContact: {
        screen: TabContact,
        navigationOptions: {
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../img/icons/contact.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    },
    TabChat: { screen: TabChat,
        navigationOptions: {
            tabBarLabel: 'Chat',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../img/icons/chat.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        } },
    TabGroup: { screen: TabGroup,
        navigationOptions: {
            tabBarLabel: 'Groups',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('../img/icons/group.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        } },
},
    {
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'grey',
            activeBackgroundColor: 'red',
            showIcon: true,
            style: {
                height: 60,
                backgroundColor: 'white',
            },
        },
        tabBarPosition: 'bottom',

    });

const styles = {
    icon: {
        width: 23,
        height: 23,
    }
}
export default Home;