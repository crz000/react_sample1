import { combineReducers } from 'redux';
import user from './user';
import properties from  './properties';
import deprecated from  './deprecated';

export default combineReducers({
    user,
    properties,
    deprecated
})