import { LOGIN, LOGOUT } from '../types'

const initialState = { _id: '5ca5dea5e9a29517f102537a', name:'Hisham Mubarak', department:'5ca5de9de9a29517f1025379', roleId:'2' }

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return { ...state, ...action.payload }
        case LOGOUT:
            return { ...initialState }
        default:
            return state
    }
}