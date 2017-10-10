import { combineReducers } from 'redux';
import { reducer as form  } from 'redux-form';

import login from './login';
import header from './header';
import register from './register';
import text from './test';

export default combineReducers({
    form,
    login,
    header,
    register,
    text
})