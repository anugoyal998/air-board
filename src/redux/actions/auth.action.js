import * as acttionTypes from '../types'

export const setAuthAction = (auth) => {
    return {
        type: acttionTypes.SET_AUTH,
        payload: auth
    }
}