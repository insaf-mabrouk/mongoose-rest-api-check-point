import {GET_CONTACTS} from "../action/actionTypes"

const initialState={
   contacts:[]
}

export function reducer (state=initialState, action)
{
    switch (action.type) 
    {
        case GET_CONTACTS: 
        return {...state, contacts:action.payload}
        default:return state
    }
}
