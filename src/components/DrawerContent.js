import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {DrawerItems} from 'react-navigation';
class DrawerContent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Image style={styles.avata} source={{ uri: this.props.user.photoURL }} />
                    <Text style={styles.name} >{this.props.user.displayName}</Text>
                </View>
                <ScrollView>
                    <DrawerItems {...this.props} />
                </ScrollView>
            </View>
        );
    }
}
const styles = {
    container: {
        flex: 1,
    },
    profile: {
        height: 300,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avata: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginBottom: 10
    },
    name: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '500'
    }
}
export default connect(state => ({
    user: state.authentication.user
}))(DrawerContent);