import {ADD_TODO_SUCCESS, GET_TODO_SUCCESS,DELETE_TODO_SUCCESS,UPDATE_TODO_SUCCESS} from '../Actions/actionTypes'


let initState = {todos:[]}

const todoReducer = (state = initState, action) => {
    
    switch(action.type){
        case GET_TODO_SUCCESS:
            state = {...state,todos:action.payload}
            return state
        case ADD_TODO_SUCCESS:
            state= {...state,todos:[...state.todos,action.payload]}
            return state;
        case DELETE_TODO_SUCCESS:
            return {todos: state.todos.filter(t => t._id !== action.payload._id)}
        case UPDATE_TODO_SUCCESS:
            const updatedItems = state.todos.map((item) =>{
                if(item._id === action.payload._id){
                    return {...item, ...action.payload}
                }
                return item
            })
            return {...state, todos:updatedItems}

        default:
            return state;

    }

}
export default todoReducer;