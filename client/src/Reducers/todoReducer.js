import {ADD_TODO_SUCCESS, GET_TODO_SUCCESS,DELETE_TODO_SUCCESS} from '../Actions/actionTypes'


let initState = {todos:[]}

const contactReducer = (state = initState, action) => {
    
    switch(action.type){
        case GET_TODO_SUCCESS:
            state = {...state,todos:action.payload}
            return state
        case ADD_TODO_SUCCESS:
            state= {...state,todos:[...state.todos,action.payload]}
            console.log(state,"reducer  ")
            return state;
        case DELETE_TODO_SUCCESS:
            return {todos: state.todos.filter(t=> t._id !== action.payload._id)}
        default:
            return state;

    }

}
export default contactReducer;