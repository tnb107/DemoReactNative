import {StackNavigator} from 'react-navigation';
import AddContact from '../screens/authorized/home/contact/AddContact';
import EditContact from '../screens/authorized/home/contact/EditContact';
import ListContact from '../screens/authorized/home/contact/ListContact';
import ViewContact from '../screens/authorized/home/contact/ViewContact';
const TabContact = StackNavigator({
    List: {screen: ListContact},
    Add: {screen: AddContact},
    Edit: {screen: EditContact},
    View: {screen: ViewContact},
});

export default TabContact;