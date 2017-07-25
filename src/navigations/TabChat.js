import {StackNavigator} from 'react-navigation';
import AddChat from '../screens/authorized/home/chat/AddChat';
import EditChat from '../screens/authorized/home/chat/EditChat';
import ListChat from '../screens/authorized/home/chat/ListChat';
import ViewChat from '../screens/authorized/home/chat/ViewChat';
const TabChat = StackNavigator({
    List: {screen: ListChat},
    Add: {screen: AddChat},
    Edit: {screen: EditChat},
    View: {screen: ViewChat},
});

export default TabChat;