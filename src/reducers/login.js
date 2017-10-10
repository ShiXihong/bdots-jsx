import {handleActions} from 'redux-actions';
import * as actions from '../actions/login';

const initialState = {
    status: '',
    hasVerificate: false,
    loading: false
};

export default handleActions({
    [actions.submitData](state) {
        return Object.assign({}, state, {loading: true});
    },
    [actions.afterLogin](state, action) {
        return Object.assign({}, state,
            {status: action.payload.code === '0001' ? 'Success' : 'Fail', loading: false},
            {message : action.payload.message},
            {hasVerificate: action.payload.attempts > 2 ? true : false},
            {verificationSVG: action.payload.verificationData}
        );
    }

}, initialState);