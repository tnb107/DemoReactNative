import {
    FECTH_MESSAGE_ERROR,
    FECTH_MESSAGE_SUCCESS,
    FECTH_ROOM_ERROR,
    FECTH_ROOM_SUCCESS
} from '../actions/types';

const defaultState = {
    loading: true,
    messages: [],
    roomKey: null
};

export default (state = defaultState, action)=>{
    switch (action.type) {
        case FECTH_ROOM_ERROR:
            return {...defaultState, loading: false};
        case FECTH_ROOM_SUCCESS:
            return {...state, loading: false, roomKey: action.roomKey};
        case FECTH_MESSAGE_SUCCESS:
            return {...state, loading: false, messages: action.messages};
        case FECTH_MESSAGE_ERROR:
            return {...defaultState, loading: false};
        default:
            return state;
    }
}