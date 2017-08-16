import { SET_DEPRECATED } from '../constants';

export default (state = [], action) =>{
    switch(action.type){
        case SET_DEPRECATED:
            const { deprecated } = action;
            return deprecated;
        default:
            return state;    
    }
}