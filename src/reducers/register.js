import {handleActions} from 'redux-actions';
import * as actions from '../actions/register';

const initialState = {
    status: '',
    loading: false
};

export default handleActions({
    [actions.submitData](state) {
        return Object.assign({}, state, {loading: true});
    },
    [actions.afterRegister](state, action) {
        return Object.assign({}, state,
            {status: action.payload.account ? 'Success' : 'Fail', loading: false}
        );
    }

}, initialState);