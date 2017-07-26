import React, { PropTypes } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
const propTypes = {
    navigation: PropTypes.object 
}
const DrawerButton = ({navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigation.navigate('DrawerOpen')}>
            <Image source={require('../img/icons/menu.png')} style={styles.image} />
        </TouchableOpacity>
    );
}
const styles = {
    image: {
        width: 32,
        height: 32,
    }
}
DrawerButton.propTypes = propTypes;
export {DrawerButton};