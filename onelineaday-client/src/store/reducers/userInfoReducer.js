import { 
    REGISTER_SUCCESS, 
    LOGIN_SUCCESS,
} from '../actions'

const initialState = {
    id: null,
    username: '', 
}

export default function userInfoReducer(state=initialState, action) {
    switch(action.type) {
        case REGISTER_SUCCESS: 
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username
            }

        case LOGIN_SUCCESS: 
            return {
                ...state,
                id: action.payload.id
            }
        
        default: 
        return state
    }
}