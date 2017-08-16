import { SIGNED_IN, SET_PROPERTIES, SET_DEPRECATED } from '../constants';

export function logUser(email){
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

export function setProperties(properties){
    const action = {
        type: SET_PROPERTIES,
        properties
    }
    return action;
}

export function setDeprecated(deprecated){
    const action = {
        type: SET_DEPRECATED,
        deprecated
    }
    return action;
}