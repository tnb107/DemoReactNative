import React from 'react';
import { TabNavigator } from 'react-navigation';
import TabContact from './TabContact';
import TabChat from './TabChat';
import TabGroup from './TabGroup';
import { Image } from 'react-native';
const Home = TabNavigator({
    TabContact: { screen: TabContact },
    TabChat: { screen: TabChat },
    TabGroup: { screen: TabGroup },
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
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../img/icons/home.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }

    });

const styles = {
    icon: {
        width: 24,
        height: 24,
    }
}
export default Home;