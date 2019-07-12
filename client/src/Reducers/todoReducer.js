import {ADD_TODO_SUCCESS, GET_TODO_SUCCESS} from '../Actions/actionTypes'


let initState = {todos:[]}

const contactReducer = (state = initState, action) => {
    
    switch(action.type){
        case GET_TODO_SUCCESS:
            state = {...state,todos:action.payload}
            console.log(state,"todoreducer")
            return state
        case ADD_TODO_SUCCESS:
            state= {...state,todos:[...state.todos,action.payload]}
            return state;
        default:
            return state;

    }

}
export default contactReducer;