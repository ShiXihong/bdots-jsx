import {handleActions} from 'redux-actions';
import * as actions from '../actions/header';

const initialState = {
    userInfo: null
};

export default handleActions({
    [actions.bindUserInfo](state, action) {
        return Object.assign({}, state, {userInfo: action.payload});
    }
}, initialState);