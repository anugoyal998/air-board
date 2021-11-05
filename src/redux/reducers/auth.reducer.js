import * as acttionTypes from '../types'

const initial = {
    auth: ''
}

export const authReducer = (state = initial , {type,payload}) => {
    switch (type) {
        case acttionTypes.SET_AUTH:
            return {...state,auth: payload}
        default: 
            return state
    }
}