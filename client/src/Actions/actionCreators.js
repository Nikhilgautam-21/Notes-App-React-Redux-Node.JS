import {ADD_TODO,GET_TODO, DELETE_TODO, UPDATE_TODO,UPDATE_STATUS_TODO} from './actionTypes'

export const getToDo =() =>{
    return{
        type: GET_TODO
    }
}

export const addToDo = (todo) =>{
    return{
        type: ADD_TODO,
        payload: todo
    } 
}

export const deleteToDo = (id) =>{
    return{
        type: DELETE_TODO,
        payload: id
    }
}

export const updateToDo = (id,todo) =>{
    return{
        type: UPDATE_TODO,
        payload: {id,todo}
    }
}

export const updateStatusToDo = (id,completed) =>{
    return{
        type: UPDATE_STATUS_TODO,
        payload:{id,completed}
    }
}