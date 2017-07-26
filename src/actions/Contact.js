import firebase from 'firebase';
import {
    FECTH_CONTACT_SUCCESS,
    FECTH_CONTACT_ERROR
} from './types';

export const fetchListContact = () => {
    return (dispatch) => {
        firebase.database().ref('users')
            .on('value', snap => {
                const contacts = [];
                snap.forEach(contact => {
                    contacts.push(contact.val());
                });
                dispatch({
                    type: FECTH_CONTACT_SUCCESS,
                    contacts
                });
            }, error => {
                dispatch({
                    type: FETCH_CONTACT_ERROR,
                });
            });
    }

}