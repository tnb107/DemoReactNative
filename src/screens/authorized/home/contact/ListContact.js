import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Button, FlatList } from 'react-native';
import { DrawerButton } from '../../../../components/DrawerButton';
import { fetchListContact } from '../../../../actions/Contact';
class ListContact extends Component {
    static navigationOptions = (navigation) => ({
        title: 'List Contact',
        headerLeft: <DrawerButton navigation={navigation} />,
        headerTitleStyle: {
            alignSelf: 'center'
        }
    });
    // componentWillMount(){
    //     console.log('componentWillMount');
    //     this.props.fetchListContact();
    // }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) => <Text>{item.key}</Text> }
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

export default connect(
    state => (
        { contacts: state.contacts })
    , { fetchListContact })(ListContact);