import {
    FECTH_CONTACT_ERROR,
    FECTH_CONTACT_SUCCESS
} from '../actions/types';

const defaultState = {
    loading: true,
    contacts: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case FECTH_CONTACT_SUCCESS:
            return { ...state, loading: false, contacts: action.contacts };
        case FECTH_CONTACT_ERROR:
            return { ...defaultState, loading: false };
        default:
            return state;
    }

};