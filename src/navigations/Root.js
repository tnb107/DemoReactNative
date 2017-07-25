import { StackNavigator } from 'react-navigation';
import Login from '../screens/unauthorized/Login';
import Authorized from './Authorized';
const Root = StackNavigator({
    //Unauthorized: { screen: Login },
    Authorized: { screen: Authorized },
}, {
        headerMode: 'screen',
        navigationOptions:{
            header: null
        }
    });

export default Root;

/**
 * navigate (push)
 *   #              #
 *   # Unauthorized #
 *   # Authorized   #
 *   ################
 */

/**
 *  1) RESET
 *   #              #
 *   #              #
 *   #              #
 *   ################
 *
 *  2) NAVIGATE
 *
 *   #              #
 *   #  Authorized  #
 *   #              #
 *   ################
 */
