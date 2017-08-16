import { SET_PROPERTIES } from '../constants';

export default (state = [], action) =>{
    switch(action.type){
        case SET_PROPERTIES:
            const { properties } = action;
            return properties;
        default:
            return state;    
    }
}